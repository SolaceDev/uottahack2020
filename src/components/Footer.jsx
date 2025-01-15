import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/solacedotcom",
      icon: "/assets/images/linkedin.svg",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/solacedotcom",
      icon: "/assets/images/github.svg",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 relative min-h-[20vh]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-10">
          {/* Logo */}
          <img
            src="/assets/images/solace.svg"
            alt="Solace"
            className="h-10 w-auto brightness-0 invert hover:scale-105 transition-all duration-300"
          />

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 hover:bg-slate-800/50 rounded-full transition-all duration-300"
                aria-label={link.label}
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-6 h-6 brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          {/* Links & Copyright */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-8 text-sm font-medium">
              <a
                href="https://solace.com/privacy-policy/"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://solace.com/terms-of-use/"
                className="text-slate-400 hover:text-white transition-colors duration-300"
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

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
