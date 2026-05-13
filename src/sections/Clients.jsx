import React from 'react';

const Clients = () => {
  // Data klien utama berdasarkan Company Profile
  const mainClients = [
    { name: "Agung Sedayu Group", type: "Property Developer" },
    { name: "Mall of Indonesia", type: "Retail & Mall" },
    { name: "Hublife Mall", type: "Retail & Mall" },
    { name: "Taman Anggrek Residences", type: "Residential" },
    { name: "Flix Cinema MOI", type: "Entertainment" },
    { name: "Cravings", type: "Tenant" }
  ];

  const highlights = [
    { 
      title: "VIP Protection", 
      desc: "Layanan pengawalan khusus untuk tokoh publik termasuk Bapak Sandiaga Uno.",
      tag: "Body Guard"
    },
    { 
      title: "Event AKI 2024", 
      desc: "Persiapan dan pengamanan menyeluruh untuk event AKI 2024 di Serpong.",
      tag: "Event Security" 
    },
    { 
      title: "Public Sector", 
      desc: "Pengamanan dan kebersihan di Makosat Brimob Kwitang & Event Santri.",
      tag: "Strategic"
    }
  ];

  return (
    <section id="clients" className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-xs mb-4">Portofolio Kami</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-6">Mitra Strategis & Klien</h3>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto">
            Dipercaya oleh berbagai sektor industri mulai dari properti, retail, hingga sektor publik dan tokoh nasional.
          </p>
        </div>

        {/* Logo Grid Style - Responsive & Aesthetic */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {mainClients.map((client, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-[#001F3F]/5 rounded-xl mb-4 flex items-center justify-center group-hover:bg-[#FFD700] transition-colors">
                <span className="text-[#001F3F] font-black text-sm">{client.name.charAt(0)}</span>
              </div>
              <h4 className="text-[#001F3F] font-black text-xs uppercase tracking-tighter leading-tight mb-1">
                {client.name}
              </h4>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{client.type}</p>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group p-10 bg-[#001F3F] rounded-[40px] overflow-hidden text-white"
            >
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#FFD700] text-[#001F3F] text-[9px] font-black uppercase tracking-widest rounded-full mb-6">
                  {item.tag}
                </span>
                <h4 className="text-2xl font-black mb-4 text-[#FFD700]">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="w-12 h-[2px] bg-white group-hover:w-20 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;