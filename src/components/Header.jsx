import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a className="navbar-brand" href="/">
              <img
                className="h-8 w-auto"
                src="/assets/images/solace.svg"
                alt="Solace"
              />
            </a>
            <div className="nav-links hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#prizes"
                className="text-white/90 hover:text-white transition-colors"
              >
                Prizes
              </a>
              <a href="#apply" className="btn-primary">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Shape the Future
              </span>
              <br />
              <span className="text-white">of Event-Driven Architecture</span>
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Join Solace at uOttaHack 6 and build the next generation of
              real-time applications. Transform your ideas into reality with our
              cutting-edge event broker technology.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <img
              src="/assets/images/solly.png"
              alt="Solly the mascot"
              className="relative z-10 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/90 transition-all cursor-pointer animate-bounce"
        >
          <span className="text-sm font-medium tracking-wider">
            Discover More
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
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
