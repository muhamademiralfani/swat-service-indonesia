import React from 'react';

const Legality = () => {
  return (
    <section id="legality" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Gambar/Ikon Sertifikat */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-lg group-hover:bg-secondary/30 transition duration-500"></div>
              <div className="relative bg-accent border-2 border-primary/10 p-8 rounded-xl shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    Verified License
                  </div>
                  <span className="text-primary/20 font-serif italic text-4xl">SSI</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">SERTIFIKASI GADA UTAMA</h4>
                <p className="text-gray-500 text-sm mb-6">
                  Kualifikasi pelatihan satuan pengamanan tingkat manajerial tertinggi.
                </p>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Penyelenggara:</span>
                    <span className="font-bold text-primary">Mabes Polri</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Kualifikasi:</span>
                    <span className="font-bold text-primary uppercase">Gada Utama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teks Penjelasan */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-primary font-bold tracking-widest mb-4 uppercase">Keamanan Terjamin</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Legalitas & Lisensi <br /> <span className="text-secondary">Profesional</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              PT. Swat Service Indonesia (PT. SSI) beroperasi dengan izin resmi dari Pemerintah Republik Indonesia melalui sistem Perizinan Berusaha Berbasis Risiko[cite: 45]. Kami memastikan setiap personel memiliki kompetensi yang diakui secara nasional.
            </p>
            
            <ul className="grid gap-4">
              {[
                "Berlisensi Resmi (NIB/Perizinan Berusaha)",
                "Tenaga Ahli Bersertifikat Gada Utama",
                "Bekerja sama dengan Brimob Polri",
                "Kepatuhan Standar K3"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-semibold text-primary">
                  <div className="w-6 h-6 bg-secondary flex items-center justify-center rounded-full text-[10px]">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legality;