import React, { useState, useEffect } from 'react';
// 1. Import Logo dari assets
import LogoSSI from '../assets/logo-ssi.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo Section */}
            <a href="#" className="flex items-center gap-2 group">
              {/* 2. Kotak Biru sebagai Container Logo */}
              <div className="w-15 h-15  flex items-center justify-center transform group-hover:scale-105 transition duration-300 overflow-hidden p-1.5">
                {/* 3. Tag Img Logo */}
                <img 
                  src={LogoSSI} 
                  alt="Logo PT SWAT Service Indonesia" 
                  className="w-full h-full object-contain brightness-100" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-swat-red font-extrabold text-2xl leading-none tracking-tight">SWAT</span>
                <span className="text-swat-blue font-bold text-[10px] tracking-widest leading-none mt-1">SERVICE INDONESIA</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tentang" className="text-swat-blue font-medium hover:text-swat-red transition duration-300">Tentang Kami</a>
            <a href="#layanan" className="text-swat-blue font-medium hover:text-swat-red transition duration-300">Layanan</a>
            <a href="#klien" className="text-swat-blue font-medium hover:text-swat-red transition duration-300">Klien</a>
            <a href="#kontak" className="bg-swat-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">Hubungi Kami</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-swat-blue hover:text-swat-red focus:outline-none">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-swat-blue font-medium hover:bg-gray-50 rounded-md">Tentang Kami</a>
          <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-swat-blue font-medium hover:bg-gray-50 rounded-md">Layanan</a>
          <a href="#klien" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-swat-blue font-medium hover:bg-gray-50 rounded-md">Klien</a>
          <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block mt-4 text-center bg-swat-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700">Hubungi Kami</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;