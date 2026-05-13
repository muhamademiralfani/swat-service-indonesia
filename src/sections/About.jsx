import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-40 bg-[#001F3F] text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl">
          <h2 className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-10">Nilai Perusahaan</h2>
          <h3 className="text-4xl md:text-6xl font-serif mb-16 leading-tight italic">
            "Menciptakan standar pelayanan melalui kualitas dan rasa aman[cite: 30]."
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {["Moralitas", "Profesional", "Trust", "Integritas", "Kapabilitas"].map((val, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                <span className="text-[#FFD700] text-[10px] font-black block mb-2 uppercase tracking-widest">0{i+1}</span>
                <span className="text-sm font-bold uppercase tracking-tighter">{val} [cite: 31]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;