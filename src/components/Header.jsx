import React, { useEffect, useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a className="navbar-brand" href="/">
              <img className="h-8 w-auto" src="/assets/images/solace.svg" alt="Solace" />
            </a>
            <div className="nav-links hidden md:flex items-center gap-8">
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              <a href="#prizes" className="text-white/90 hover:text-white transition-colors">Prizes</a>
              <a href="#apply" className="btn-primary">Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-section container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Shape the Future of Event-Driven Architecture
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Join Solace at uOttaHack 6 and build the next generation of real-time applications. 
              Transform your ideas into reality with our cutting-edge event broker technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="with-icon">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="outline">Learn More</button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="avatars -space-x-4">
                {/* Add team member avatars here */}
              </div>
              <p className="text-white/75">Join our growing team of innovators</p>
            </div>
          </div>
          
          <div className="hero-visual relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <img 
              src="/assets/images/solly.png" 
              alt="Solly the mascot" 
              className="relative z-10 transform transition-transform hover:-translate-y-2 duration-300"
            />
            <div className="stats-card glass-effect absolute bottom-0 right-0 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold gradient-text">$5,000+</h3>
              <p className="text-white/75">in Prizes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
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
