import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://twitter.com/solacedotcom",
      icon: "/assets/images/twitter.svg",
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/company/solacedotcom",
      icon: "/assets/images/linkedin.svg",
      label: "LinkedIn"
    },
    {
      href: "https://github.com/solacedotcom",
      icon: "/assets/images/github.svg",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-slate-900 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <img 
            src="/assets/images/solace.svg" 
            alt="Solace" 
            className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label={link.label}
              >
                <img src={link.icon} alt={link.label} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Links & Copyright */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-sm">
              <a 
                href="https://solace.com/privacy-policy/" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="https://solace.com/terms-of-use/" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Solace Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </footer>
  );
};

export default Footer;
