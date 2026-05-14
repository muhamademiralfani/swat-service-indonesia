import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* 1. Badge Atas: Ganti Bintang dengan Shield & Tambahkan Efek Pulse */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-swat-red/20 bg-red-50 text-swat-red font-semibold text-sm mb-6 shadow-sm">
              <i className="fa-solid fa-shield-halved mr-2 animate-pulse"></i> Setia Waspada Terampil
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-swat-blue leading-tight mb-6">
              Solusi Strategis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-swat-red to-red-500">Pelayanan Terpadu</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              PT. Swat Service Indonesia hadir memberikan solusi pelayanan dibidang keamanan, kebersihan, dan pengelolaan parkir yang berlisensi, profesional, dan berkualitas tinggi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* 2. Tombol Utama: Tambahkan class 'group' dan animasi panah bergeser */}
              <a href="#layanan" className="group bg-swat-blue text-white px-8 py-4 rounded-full font-bold hover:bg-[#030d36] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Lihat Layanan 
                <i className="fa-solid fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5"></i>
              </a>
              
              {/* 3. Tombol Sekunder: Ganti ikon Phone menjadi Headset (Customer Service) & animasi membesar */}
              <a href="#kontak" className="group bg-white text-swat-blue border-2 border-swat-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-sm">
                <i className="fa-solid fa-headset mr-2 transform transition-transform duration-300 group-hover:scale-110"></i> Konsultasi Gratis
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Security Personnel" className="w-full h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-swat-blue/50 to-transparent"></div>
            </div>
            
            {/* 4. Floating Badge: Gunakan ikon Award, Gradien, dan efek Glowing Shadow */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-swat-red to-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-[0_4px_15px_rgba(227,1,11,0.4)]">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Berlisensi &</p>
                <p className="text-swat-blue font-bold">Profesional</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;