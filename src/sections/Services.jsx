import React from 'react';

const Services = () => {
  const services = [
    { no: "01", title: "Keamanan", desc: "Penyediaan tenaga pengamanan bersertifikat Gada Utama dan layanan K9[cite: 100, 91]." },
    { no: "02", title: "Kebersihan", desc: "Mewujudkan lingkungan bersih dan sehat melalui tenaga kerja profesional[cite: 116, 117]." },
    { no: "03", title: "Parkir", desc: "Manajemen pengelolaan parkir dengan sistem profit sharing yang transparan[cite: 130, 131]." }
  ];

  return (
    <section id="layanan" className="py-40 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-[#001F3F] text-[10px] font-black uppercase tracking-[0.4em] mb-6">Bidang Usaha</h2>
            <h3 className="text-4xl font-serif text-[#001F3F] mb-6">Layanan Terpadu</h3>
            <div className="w-12 h-1 bg-[#FFD700]"></div>
          </div>
          {services.map((s, i) => (
            <div key={i} className="group border-t border-gray-100 pt-12">
              <span className="text-[#FFD700] font-black text-xs block mb-6 tracking-widest">{s.no} / {s.title}</span>
              <h4 className="text-xl font-serif mb-4 text-[#001F3F]">{s.title} Services</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
              <div className="w-8 h-[1px] bg-gray-300 group-hover:w-full group-hover:bg-[#001F3F] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;