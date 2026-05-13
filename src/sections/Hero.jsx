import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#F4F7FA]">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 grayscale" alt="Corporate" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#FFD700]"></div>
            <span className="text-[#001F3F] text-xs font-black uppercase tracking-[0.4em]">Profil Perusahaan</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-[#001F3F] leading-[1.05] mb-8">
            Setia, Waspada <br />
            <span className="italic text-[#8B7355]">& Terampil</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Solusi strategis di bidang pelayanan keamanan, kebersihan, dan pengelolaan parkir profesional untuk memenuhi kebutuhan mitra strategis kami[cite: 17, 22].
          </p>
          <div className="flex gap-8">
            <button className="border-b-2 border-[#001F3F] py-2 text-[10px] font-black uppercase tracking-widest hover:text-[#FFD700] hover:border-[#FFD700] transition-all">
              Jelajahi Layanan
            </button>
            <button className="border-b-2 border-[#001F3F] py-2 text-[10px] font-black uppercase tracking-widest hover:text-[#FFD700] hover:border-[#FFD700] transition-all">
              Visi & Misi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;