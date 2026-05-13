import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] pt-32 pb-16 text-white border-t border-white/5">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24 pb-24 border-b border-white/10">
          <div className="lg:col-span-2">
            <h4 className="text-4xl font-serif mb-8 italic">PT Swat Service Indonesia [cite: 17]</h4>
            <p className="text-white/40 max-w-md leading-relaxed text-sm mb-12 italic">
              Setia, Waspada, Terampil. Solusi pelayanan terpadu berstandar internasional[cite: 13, 29].
            </p>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest">
              <div>
                <p className="text-[#FFD700] mb-2">Alamat Kantor [cite: 11]</p>
                <p className="text-white/60">Menteng, Jakarta Pusat [cite: 11]</p>
              </div>
              <div>
                <p className="text-[#FFD700] mb-2">Edisi [cite: 13]</p>
                <p className="text-white/60 uppercase">ED.001.2024-SSI [cite: 13]</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-[#FFD700]">Kontak [cite: 9, 10]</h5>
            <ul className="space-y-4 text-xs font-bold text-white/50">
              <li>T: (021) 21693704 [cite: 9]</li>
              <li>WA: 0812 1212 6551 [cite: 9]</li>
              <li>E: swatserviceindonesia@gmail.com [cite: 10]</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-[#FFD700]">Navigasi</h5>
            <ul className="space-y-4 text-xs font-bold text-white/50 uppercase tracking-widest">
              <li>Profil Korporasi</li>
              <li>Bidang Layanan</li>
              <li>Kemitraan</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">
          <p>© 2024 PT Swat Service Indonesia</p>
          <div className="flex gap-12">
            <span>Integritas</span>
            <span>Kapabilitas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;