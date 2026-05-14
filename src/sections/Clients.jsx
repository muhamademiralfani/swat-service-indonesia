import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'AGUNG SEDAYU\nGROUP', style: 'font-extrabold text-xl text-gray-800' },
    { name: 'QLO', style: 'font-bold text-2xl text-swat-red border-2 border-swat-red inline-block px-4 py-1' },
    { name: 'MALL OF INDONESIA', style: 'font-black text-xl text-blue-800 italic' },
    { name: 'Taman Anggrek\nResidences', style: 'font-bold text-lg text-gray-700 uppercase tracking-widest' },
    { name: 'HUBLIFE', style: 'font-bold text-xl text-yellow-600' },
    { name: 'FLIX CINEMA', style: 'font-bold text-xl text-gray-800' },
    { name: 'CRAVINGS', style: 'font-bold text-lg text-green-700' },
    { name: 'PT. SRI CHRISNA\nCOMMUNICATION', style: 'font-bold text-sm text-gray-800' },
    { name: 'PT. DINASTY\nHARJO MUKTI', style: 'font-bold text-sm text-gray-800' }
  ];

  return (
    <section id="klien" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-swat-red font-bold tracking-wider uppercase text-sm mb-2">Kepercayaan Klien</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-swat-blue mb-12">Mitra Terpercaya Kami</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-80">
          {clients.map((client, idx) => (
            <div key={idx} className="p-4 grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
              <div className={client.style} style={{ whiteSpace: 'pre-line' }}>{client.name}</div>
            </div>
          ))}
          <div className="p-4 grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
            <div className="font-bold text-lg text-swat-blue"><i className="fa-solid fa-shield-dog mr-2"></i>BRIMOB POLRI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;