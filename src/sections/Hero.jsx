import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Overlay dekoratif (opsional, memberikan kesan modern) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-secondary font-bold tracking-widest mb-4">
          PT. SWAT SERVICE INDONESIA
        </h1>
        <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          SETIA, WASPADA, <br />
          <span className="text-secondary">TERAMPIL</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Penyedia jasa keamanan, kebersihan, dan pengelolaan parkir profesional 
          dengan pengalaman lebih dari 10 tahun.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-secondary text-primary px-10 py-4 rounded-md font-bold hover:scale-105 transition-transform">
            Layanan Kami
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-all">
            Tentang Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;