import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 border-b border-white/10 pb-16 mb-10">
          
          {/* Kolom 1: Alamat */}
          <div>
            <h4 className="text-secondary font-bold mb-6 uppercase tracking-widest">Kantor Pusat</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Jl. Kendal No. 05, Dukuh Atas, <br />
              Menteng, Jakarta Pusat, 10310 [cite: 11]
            </p>
            <p className="text-gray-400 text-sm">
              DKI Jakarta, Indonesia [cite: 11]
            </p>
          </div>

          {/* Kolom 2: Kontak Langsung */}
          <div>
            <h4 className="text-secondary font-bold mb-6 uppercase tracking-widest">Hubungi Kami</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-secondary">📞</span>
                <span>(021) 21693704 / 0812 1212 6551 [cite: 9]</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">📧</span>
                <span>swatserviceindonesia@gmail.com [cite: 10]</span>
              </div>
            </div>
          </div>

          {/* Kolom 3: Shortcut Navigasi */}
          <div>
            <h4 className="text-secondary font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Layanan</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Visi Misi</a></li>
              <li><a href="#legality" className="hover:text-secondary transition-colors">Legalitas</a></li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta & Edisi Dokumen */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 PT. SWAT Service Indonesia. All Rights Reserved. [cite: 13, 23]</p>
          <p className="mt-2 md:mt-0 font-mono tracking-tighter uppercase">ED.001.2024-SSI [cite: 13, 23]</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;