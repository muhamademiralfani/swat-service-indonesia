import React from 'react';

const Clients = () => {
  // Data diambil langsung dari dokumen profil perusahaan
  const clients = [
    { name: "Agung Sedayu Group", category: "Property Developer" },
    { name: "Mall of Indonesia", category: "Retail & Mall" },
    { name: "Hublife Mall", category: "Retail & Mall" },
    { name: "Taman Anggrek Residences", category: "Residential" },
    { name: "Flix Cinema MOI", category: "Entertainment" },
    { name: "Cravings", category: "Tenant" }
  ];

  const highlights = [
    { title: "Event AKI 2024", desc: "Pengawalan artis & pengamanan event di Serpong." },
    { title: "VIP Protection", desc: "Layanan pengawalan khusus untuk Bapak Sandiaga Uno." },
    { title: "Public Service", desc: "Pengamanan Makosat Brimob Kwitang & Event Santri." }
  ];

  return (
    <section id="clients" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Portfolio</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Klien & Pengalaman Event</h3>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Grid Klien Utama */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-md transition-shadow">
              <span className="font-bold text-primary text-sm">{client.name}</span>
              <span className="text-[10px] text-gray-400 uppercase mt-1">{client.category}</span>
            </div>
          ))}
        </div>

        {/* Highlight Pengalaman */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
              <h4 className="text-secondary font-bold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;