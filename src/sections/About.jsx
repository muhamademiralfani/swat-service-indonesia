import React from 'react';

const About = () => {
  const values = [
    { name: "Moralitas", desc: "Memiliki tenaga kerja yang bermoral." },
    { name: "Profesional", desc: "Memberikan standart pelayanan yang profesional." },
    { name: "Trust", desc: "Memberikan pelayanan terbaik bagi klien atau user." },
    { name: "Integritas", desc: "Bertanggung jawab, bangga, dan dapat dipercaya." },
    { name: "Kapabilitas", desc: "Tenaga kerja yang berkompeten dibidangnya." }
  ];

  return (
    <section id="about" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Visi & Misi */}
          <div>
            <h2 className="text-secondary font-bold tracking-widest mb-4 uppercase">Tentang Kami</h2>
            <h3 className="text-4xl font-bold mb-8">Visi & Misi</h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-bold text-secondary mb-2">Visi</h4>
                <p className="text-gray-300 leading-relaxed">
                  Menjadi perusahaan pelayanan terbaik serta memiliki standart internasional dan terpercaya[cite: 29].
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-bold text-secondary mb-2">Misi</h4>
                <p className="text-gray-300 leading-relaxed">
                  Menciptakan suatu standart pelayanan melalui peningkatan kualitas dan memberikan rasa aman dan nyaman kepada seluruh pengguna jasa kami[cite: 30].
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: 5 Nilai Utama */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center text-secondary">5 Nilai Utama (SSI)</h3>
            <div className="grid gap-6">
              {values.map((val, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{val.name}</h4>
                    <p className="text-gray-400 text-sm">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;