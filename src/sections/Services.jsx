import React from 'react';
import LayananKeaman from '../assets/layanan-keamanan.png'; 
import LayananKebersihan from '../assets/layanan-kebersihan.png'; 
import PengelolaanParkir from '../assets/pengelolaan-parkir.png'; 

const Services = () => {
  const servicesData = [
    {
      title: 'Layanan Keamanan',
      imgSrc: LayananKeaman,
      icon: 'fa-shield-halved',
      color: 'bg-swat-red',
      listIconColor: 'text-swat-red',
      features: [
        'Guard Services (Permanen/Sementara)',
        'VIP Body Guard',
        'Konsultasi & Peralatan Keamanan',
        'Kawal Angkut Uang (Kerjasama Brimob)',
        'K9 Services & Pelatihan (Gada)'
      ]
    },
    {
      title: 'Layanan Kebersihan',
      imgSrc: LayananKebersihan,
      icon: 'fa-broom',
      color: 'bg-swat-blue',
      listIconColor: 'text-swat-blue',
      features: [
        'Layanan Kebersihan Permanen',
        'One Day Service (Panggilan)',
        'Layanan Event & Konser',
        'Peralatan Lengkap & Memadai',
        'Standar Operasional K3'
      ]
    },
    {
      title: 'Pengelolaan Parkir',
      imgSrc: PengelolaanParkir,
      icon: 'fa-square-parking',
      color: 'bg-swat-red',
      listIconColor: 'text-swat-red',
      features: [
        'Manajemen Lahan Parkir',
        'Sistem Sewa & Profit Sharing',
        'Konsultan Desain Parkir',
        'Optimalisasi Kapasitas',
        'Penerapan Teknologi & Rambu'
      ]
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-swat-red font-bold tracking-wider uppercase text-sm mb-2">Spesialisasi Kami</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-swat-blue">Layanan Profesional Terpadu</h3>
          <div className="w-24 h-1 bg-swat-red mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100 flex flex-col h-full">
              
              {/* PERBAIKAN DI SINI: h-64 agar lebih tinggi, object-cover object-center agar proporsional */}
              <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={service.imgSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-swat-blue/20 group-hover:bg-transparent transition duration-300"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className={`w-14 h-14 ${service.color} text-white rounded-xl flex items-center justify-center text-2xl -mt-14 relative z-10 shadow-lg mb-6`}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h4 className="text-2xl font-bold text-swat-blue mb-4">{service.title}</h4>
                <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className={`fa-solid fa-check ${service.listIconColor} mt-1 mr-2 flex-shrink-0`}></i> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;