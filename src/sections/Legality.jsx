import React from 'react';

const Legality = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-swat-blue rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-swat-red opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-swat-red font-bold tracking-wider uppercase text-sm mb-2">Standar Kualitas</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Tenaga Kerja Tersertifikasi & Berkompeten</h3>
              <p className="text-gray-300 mb-8">
                Setiap personil PT. SSI telah melewati seleksi ketat (Bebas Kriminalitas/SKCK, Tes Fisik, dll) dan dibekali sertifikasi resmi sesuai bidang tugasnya untuk memastikan pelayanan optimal.
              </p>
              <a href="#kontak" className="inline-block bg-swat-red text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-swat-red transition duration-300 shadow-lg">
                Rekrut Tenaga Kami
              </a>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <i className="fa-solid fa-certificate text-3xl text-swat-red mb-4"></i>
                <h4 className="font-bold text-xl mb-2">Sertifikasi Keamanan</h4>
                <p className="text-sm text-gray-300">Wajib memiliki kualifikasi Gada Pratama (Anggota), Gada Madya (Danru), atau Gada Utama (Chief).</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <i className="fa-solid fa-helmet-safety text-3xl text-swat-red mb-4"></i>
                <h4 className="font-bold text-xl mb-2">Sertifikasi K3</h4>
                <p className="text-sm text-gray-300">Khusus tenaga kebersihan (Climbing/Gondola) diwajibkan memiliki lisensi K3 resmi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legality;