import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "challenge", label: "Challenge" },
    { to: "quickstart", label: "Quick Start" },
    { to: "winners", label: "Past Winners" },
    { to: "team", label: "Team" },
  ];

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg py-2"
            : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="relative group flex items-center gap-3">
              <img
                className="h-8 w-auto transform group-hover:scale-105 transition-all duration-300"
                src="/assets/images/solace.svg"
                alt="Solace"
              />
              <span
                className={`text-white font-medium text-sm opacity-0 -translate-x-4 transition-all duration-300 ${
                  isScrolled ? "opacity-100 translate-x-0" : ""
                }`}
              >
                uOttaHack 7
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-emerald-400"
                  className="text-white/80 hover:text-white text-sm font-medium relative group transition-all duration-300 cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <div className="h-6 w-px bg-slate-700" />
              <a
                href="https://solace.com/careers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium text-sm 
                hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all duration-300
                relative overflow-hidden group"
              >
                <span className="relative z-10">Join Solace</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? index === 1
                          ? "opacity-0"
                          : index === 0
                          ? "rotate-45 translate-y-0"
                          : "-rotate-45 translate-y-0"
                        : index === 0
                        ? "-translate-y-2"
                        : index === 2
                        ? "translate-y-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block py-3 px-4 rounded-lg text-white/80 hover:text-white font-medium transition-all duration-300 
                    cursor-pointer hover:bg-slate-800/50`}
                  activeClass="bg-slate-800 text-emerald-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="https://solace.com/careers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium 
                  hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Solace
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Content section - make it take up more space */}
          <div className="lg:col-span-1 xl:pr-12 space-y-8 animate-fade-in relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                Win $1000 in Amazon Gift Cards
              </span>
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Build Real-Time</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Event-Driven Apps
              </span>
            </h1>

            <p className="text-white/90 text-xl leading-relaxed">
              Join the Solace Challenge at uOttaHack 7. Create real-time
              event-driven applications, learn modern architecture patterns, and
              compete for $1000 in prizes!
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                to="challenge"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)} // Add this if you want to close mobile menu on click
              >
                Join the Challenge
              </Link>
              <Link
                to="quickstart"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)} // Add this if you want to close mobile menu on click
              >
                Jump-start your Hack
              </Link>
            </div>
          </div>
          {/* Solly container - adjusted positioning */}
          <div className="relative lg:col-span-1 lg:translate-x-24 xl:translate-x-32 2xl:translate-x-40 z-10">
            {/* Pure Solly with adjusted positioning */}
            <div className="animate-smooth-float transform lg:translate-x-8">
              <img
                src="/assets/images/solly2.png"
                alt="Solly the mascot"
                className="relative drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              />

              {/* Minimal glow - expanded */}
              <div className="absolute inset-0 -z-10 scale-150">
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/5 to-transparent blur-xl opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <Link
          to="challenge"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center gap-3 text-white/50 hover:text-white/90 transition-all cursor-pointer group"
        >
          <span className="text-sm font-medium tracking-wider uppercase group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
            Discover More
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-current p-1 relative">
            <div className="w-1.5 h-1.5 bg-current rounded-full mx-auto animate-scroll-dot" />
          </div>
          <div className="flex flex-col gap-1 group-hover:gap-2 transition-all duration-300">
            <div className="w-1 h-1 bg-current rounded-full mx-auto group-hover:scale-150 transition-all" />
            <div className="w-1 h-1 bg-current rounded-full mx-auto group-hover:scale-125 transition-all delay-75" />
            <div className="w-1 h-1 bg-current rounded-full mx-auto group-hover:scale-110 transition-all delay-100" />
          </div>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden wave-container">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="wave-divider"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
