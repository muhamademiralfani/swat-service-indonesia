import React from 'react';

const Legality = () => {
  return (
    <section id="legality" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
        
        {/* Kolom Visual: Sertifikat Gada Utama */}
        <div className="lg:w-1/2 relative">
          {/* Efek Cahaya Latar */}
          <div className="absolute -inset-10 bg-[#FFD700]/10 rounded-full blur-[100px] animate-pulse"></div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#001F3F] rounded-[50px] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="relative bg-[#F8FAFC] border-2 border-[#001F3F] p-10 md:p-14 rounded-[50px] shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-[#001F3F] text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.2em]">
                  Verified License
                </div>
                <div className="text-[#001F3F]/10 font-black text-4xl italic leading-none">SSI</div>
              </div>
              
              <h4 className="text-3xl font-black text-[#001F3F] mb-4 italic leading-tight">GADA UTAMA</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Sertifikasi kualifikasi pelatihan satuan pengamanan tingkat manajerial tertinggi dari Mabes Polri.
              </p>
              
              <div className="space-y-4 border-t border-gray-200 pt-8">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Penyelenggara</span>
                  <span className="text-[#001F3F]">Mabes Polri</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Kualifikasi</span>
                  <span className="text-[#001F3F]">Chief Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Teks: Legalitas & Kemitraan */}
        <div className="lg:w-1/2">
          <h2 className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#FFD700]"></span>
            Kepatuhan & Legalitas
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-8 leading-tight">
            Beroperasi Dengan <br /> Izin Resmi Negara
          </h3>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            PT. Swat Service Indonesia (SSI) adalah penyedia jasa profesional yang berlisensi dan beroperasi di bawah sistem Perizinan Berusaha Berbasis Risiko Pemerintah Republik Indonesia.
          </p>
          
          {/* Poin-Poin Legalitas Dasar */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "Perizinan Berbasis Risiko",
              "Izin Operasional Polri",
              "Sertifikat Gada Utama",
              "Kerja Sama Brimob"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-[#001F3F] flex items-center justify-center text-[#FFD700] text-sm group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <span className="text-sm font-bold text-[#001F3F] uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-12 border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-black text-[#001F3F]">100%</p>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Compliance</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-4xl font-black text-[#001F3F]">POLRI</p>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Strategic Partner</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Legality;