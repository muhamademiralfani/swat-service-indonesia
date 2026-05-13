import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#00152b] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Profile */}
          <div className="col-span-1">
            <h4 className="text-secondary font-bold mb-6 italic">PT. SSI</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Penyedia solusi terpadu di bidang keamanan, kebersihan, dan pengelolaan parkir profesional dengan standar internasional.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Alamat Kantor</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jl. Kendal No. 05, Dukuh Atas,<br />
              Menteng, Jakarta Pusat, 10310
            </p>
            <p className="text-secondary text-sm mt-4">(021) 21693704</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Navigasi</h5>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Layanan Keamanan</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan Kebersihan</a></li>
              <li><a href="#legality" className="hover:text-white transition-colors">Lisensi & Legalitas</a></li>
            </ul>
          </div>

          {/* Social Media / Email */}
          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Email Resmi</h5>
            <p className="text-gray-400 text-sm mb-4">swatserviceindonesia@gmail.com</p>
            <div className="flex gap-4">
              {/* Placeholder for Social Icons */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">in</div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors">ig</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 PT. Swat Service Indonesia. Setia, Waspada, Terampil.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;