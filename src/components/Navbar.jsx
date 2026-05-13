import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-primary">
            SSI
          </div>
          <span className="text-white font-bold tracking-tighter text-lg md:block hidden">
            PT. SWAT SERVICE INDONESIA
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-secondary transition-colors">Home</a>
          <a href="#about" className="hover:text-secondary transition-colors">Tentang Kami</a>
          <a href="#services" className="hover:text-secondary transition-colors">Layanan</a>
          <a href="#clients" className="hover:text-secondary transition-colors">Klien</a>
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="bg-secondary text-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;