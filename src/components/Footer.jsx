import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/solacedotcom",
      icon: "/assets/images/linkedin.svg",
      label: "LinkedIn",
    },
    {
      href: "https://solace.com",
      icon: "/assets/images/globe.svg",
      label: "Solace Website",
    },
  ];

  return (
    <footer className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden min-h-[20vh]">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl transform translate-y-1/4" />

      {/* Enhanced top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center space-y-12">
          {/* Enhanced Logo */}
          <a href="https://solace.com" className="group">
            <img
              src="/assets/images/solace.svg"
              alt="Solace"
              className="h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* Enhanced Social Links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 hover:bg-slate-800/70 rounded-xl transition-all duration-300 backdrop-blur-sm"
                aria-label={link.label}
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-6 h-6 brightness-0 invert opacity-75 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* Enhanced Links & Copyright */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://solace.com/privacy-policy/"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium"
              >
                Privacy Policy
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://solace.com/terms-of-use/"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium"
              >
                Terms of Use
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Solace Corporation. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
