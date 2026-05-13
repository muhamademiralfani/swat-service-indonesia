import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brandNavy flex items-center justify-center font-serif font-black text-white text-lg">SSI</div>
          <div className="flex flex-col border-l border-gray-300 pl-4">
            <span className={`font-black tracking-tighter text-md uppercase transition-colors duration-500 ${isScrolled ? 'text-brandNavy' : 'text-white'}`}>
              PT SWAT SERVICE
            </span>
            <span className="text-brandRed text-[9px] font-bold tracking-[0.3em] uppercase">
              Indonesia
            </span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {['Tentang', 'Layanan', 'Legalitas', 'Klien'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-brandRed relative group ${
                isScrolled ? 'text-brandNavy' : 'text-white'
              }`}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brandRed transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Action Button */}
          <button className="bg-brandNavy text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-brandRed transition-all duration-500 shadow-lg shadow-brandNavy/10">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Menu Icon (Opsional) */}
        <div className={`lg:hidden text-2xl ${isScrolled ? 'text-brandNavy' : 'text-white'}`}>
          <span className="cursor-pointer">☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;