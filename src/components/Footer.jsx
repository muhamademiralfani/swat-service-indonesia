import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-white border-t-4 border-swat-red pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-swat-blue rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-shield-halved text-white text-xl"></i>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-swat-red font-extrabold text-xl leading-none">SWAT</span>
                <span className="text-swat-blue font-bold text-[10px] tracking-widest leading-none mt-1">SERVICE INDONESIA</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Moralitas | Profesional | Trust | Integritas | Kapabilitas. 
              Perusahaan pelayanan terpadu terbaik dengan standar internasional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 text-swat-blue rounded-full flex items-center justify-center hover:bg-swat-red hover:text-white transition duration-300"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-100 text-swat-blue rounded-full flex items-center justify-center hover:bg-swat-red hover:text-white transition duration-300"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-100 text-swat-blue rounded-full flex items-center justify-center hover:bg-swat-red hover:text-white transition duration-300"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-swat-blue font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#tentang" className="text-gray-600 hover:text-swat-red transition duration-300">Tentang Perusahaan</a></li>
              <li><a href="#layanan" className="text-gray-600 hover:text-swat-red transition duration-300">Layanan Keamanan</a></li>
              <li><a href="#layanan" className="text-gray-600 hover:text-swat-red transition duration-300">Layanan Kebersihan</a></li>
              <li><a href="#layanan" className="text-gray-600 hover:text-swat-red transition duration-300">Pengelolaan Parkir</a></li>
              <li><a href="#klien" className="text-gray-600 hover:text-swat-red transition duration-300">Portofolio & Klien</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h4 className="text-swat-blue font-bold text-lg mb-6">Informasi Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot text-swat-red mt-1 mr-4 text-xl"></i>
                <div>
                  <span className="block font-semibold text-swat-blue">Kantor Pusat</span>
                  <span className="text-gray-600 text-sm leading-relaxed">Jl. Kendal No. 05, Dukuh Atas,<br />Menteng Jakarta Pusat, 10310</span>
                </div>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-swat-red mr-4 text-xl"></i>
                <div>
                  <span className="block font-semibold text-swat-blue">Telepon / WhatsApp</span>
                  <span className="text-gray-600 text-sm">(021) 21693704 / 081212126551</span>
                </div>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-swat-red mr-4 text-xl"></i>
                <div>
                  <span className="block font-semibold text-swat-blue">Email</span>
                  <span className="text-gray-600 text-sm">swatserviceindonesia@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2026 PT. Swat Service Indonesia. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Setia Waspada Terampil.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;