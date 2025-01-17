var fs = require("fs");
var path = require("path");
var AWS = require("aws-sdk");

// Setup AWS credentials
var credentials = new AWS.SharedIniFileCredentials({ profile: "uottahack" });
AWS.config.credentials = credentials;
AWS.config.update({ region: "us-east-1" });
var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Verify build directory exists
const buildPath = path.join(process.cwd(), "build");
if (!fs.existsSync(buildPath)) {
  console.error("Error: Build directory not found! Run 'npm run build' first.");
  process.exit(1);
}

console.log("Starting deployment to uottahack.solace.cloud...");

// Get all files from build directory
const files = getAllFiles(buildPath);
console.log(`Found ${files.length} files to upload`);

// Upload files
uploadFiles(files, buildPath)
  .then(() => console.log("\nDeployment completed successfully!"))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });

async function uploadFiles(files, basePath) {
  const uploadPromises = files.map(async (file) => {
    const key = file.replace(basePath, "").replace(/^\//, "");

    try {
      // Check if file exists in S3
      try {
        await s3
          .headObject({
            Bucket: "uottahack",
            Key: key,
          })
          .promise();
        console.log(`File exists: ${key}, replacing...`);
      } catch (headErr) {
        if (headErr.code !== "NotFound") {
          throw headErr;
        }
      }

      // Prepare upload parameters
      const params = {
        Bucket: "uottahack",
        Key: key,
        Body: fs.readFileSync(file),
        ContentType: getContentType(file),
      };

      // Set appropriate cache control
      if (key === "index.html") {
        params.CacheControl = "no-cache, no-store, must-revalidate";
      } else if (/\.(js|css|html|png|jpg|jpeg|gif|svg|webp)$/.test(key)) {
        params.CacheControl = "public, max-age=31536000";
      }

      // Upload file
      await s3.putObject(params).promise();
      console.log(`✓ Uploaded: ${key}`);
    } catch (err) {
      if (err.code === "AccessDenied") {
        console.error(
          `✗ Access Denied while uploading ${key}. Check your AWS permissions.`
        );
      } else {
        console.error(`✗ Failed to upload ${key}:`, err.message);
      }
      throw err;
    }
  });

  return Promise.all(uploadPromises);
}

// Update content types to include more web assets
function getContentType(filename) {
  let extension = filename
    .toLowerCase()
    .substring(filename.lastIndexOf(".") + 1);
  const mimeTypes = {
    // Images
    svg: "image/svg+xml",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    ico: "image/x-icon",
    webp: "image/webp",

    // Web assets
    html: "text/html",
    js: "application/javascript",
    jsx: "application/javascript",
    css: "text/css",
    map: "application/json",
    json: "application/json",

    // Fonts
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    eot: "application/vnd.ms-fontobject",
    otf: "font/otf",

    // Other
    pdf: "application/pdf",
    txt: "text/plain",
    xml: "application/xml",
  };

  return mimeTypes[extension] || "application/octet-stream";
}

// More robust error handling for getAllFiles
function getAllFiles(dir, filelist = []) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        filelist = getAllFiles(filePath, filelist);
      } else {
        filelist.push(filePath);
      }
    });

    return filelist;
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    process.exit(1);
  }
}
