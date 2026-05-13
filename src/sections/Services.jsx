import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const servicesData = [
    {
      title: "Layanan Keamanan",
      description: "Menyediakan solusi keamanan terpadu mulai dari konsultasi, penyediaan personel, hingga unit K9 profesional[cite: 81, 91].",
      features: ["Security Training (Gada Pratama/Madya/Utama) [cite: 86]", "Body Guard [cite: 103]", "Security Devices [cite: 83]"]
    },
    {
      title: "Layanan Kebersihan",
      description: "Mewujudkan lingkungan yang bersih, sehat, dan nyaman dengan tenaga terlatih dan peralatan lengkap[cite: 116, 117].",
      features: ["Layanan Permanen [cite: 118]", "One Day Service [cite: 120]", "Event Cleaning [cite: 123]"]
    },
    {
      title: "Pengelolaan Parkir",
      description: "Sistem pengelolaan parkir yang fleksibel dengan pola profit sharing atau sistem sewa yang strategis[cite: 131].",
      features: ["Manajemen Parkir [cite: 133]", "Konsultasi Perencanaan [cite: 133]", "Penerapan Sign Rambu [cite: 197]"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Core Services</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Solusi Pelayanan Terpadu</h3>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;