import React from 'react';

// 1. IMPORT GAMBAR DARI FOLDER ASSETS DI SINI
import Galeri1 from '../assets/galeri-1.jpeg';
import Galeri4 from '../assets/galeri-4.jpeg';
import Galeri2 from '../assets/galeri-2.jpeg';
import Galeri3 from '../assets/galeri-3.jpeg';
import Galeri5 from '../assets/galeri-5.jpeg';
import Galeri6 from '../assets/galeri-6.jpeg';

const Gallery = () => {
  // 2. BUAT ARRAY DATA GAMBAR
  const galleryItems = [
    {
      id: 1,
      src: Galeri3,
      alt: 'Personil Keamanan Security',
      spanClass: 'col-span-2 row-span-2', // Kotak Besar Kiri
    },
    {
      id: 2,
      src: Galeri2,
      alt: 'Layanan Kebersihan Gedung',
      spanClass: 'col-span-1 row-span-1', // Kotak Kecil (Atas Tengah)
    },
    {
      id: 3,
      src: Galeri4,
      alt: 'Anjing Pelacak K9',
      spanClass: 'col-span-1 row-span-1', // Kotak Kecil (Atas Kanan)
    },
    {
      id: 4,
      src: Galeri1,
      alt: 'Pengelolaan Parkir Indoor',
      spanClass: 'col-span-2 row-span-1', // Kotak Lebar (Tengah Kanan)
    },
    {
      id: 5,
      src: Galeri5,
      alt: 'Gedung Mitra Klien 1',
      spanClass: 'col-span-1 row-span-1', // Kotak Kecil (Bawah Kiri)
    },
    {
      id: 6,
      src: Galeri6,
      alt: 'Fasilitas Korporat 2',
      spanClass: 'col-span-1 row-span-1', // Kotak Kecil (Bawah Tengah)
    }
  ];

  return (
    <section id="galeri" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-swat-red font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Galeri
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight tracking-tight">
              Dokumentasi operasional & <br className="hidden sm:block" />
              kegiatan <span className="text-swat-blue">tim lapangan kami.</span>
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Beberapa momen dari proyek pengamanan, kebersihan, dan pengelolaan parkir bersama mitra terpercaya.
            </p>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        {/* PERBAIKAN: Menyesuaikan tinggi row agar lebih lega (180px di mobile, 250px di desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[250px]">
          
          {/* 3. MELAKUKAN MAPPING DATA */}
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              // PERBAIKAN: Menambahkan w-full h-full pada kontainer
              className={`${item.spanClass} rounded-2xl md:rounded-3xl overflow-hidden group relative shadow-sm w-full h-full`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                // PERBAIKAN KUNCI: Menambahkan absolute inset-0 agar gambar terkunci di kotak grid
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Efek Gelap Halus saat di-hover */}
              {/* Menambahkan pointer-events-none agar tidak menghalangi interaksi gambar */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;