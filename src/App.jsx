import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Legality from './sections/Legality';
import Gallery from './sections/Gallery'; // <-- Import komponen baru
import Clients from './sections/Clients';

export default function App() {
  return (
    <div className="antialiased font-sans text-[#333333] bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Legality />
        <Gallery /> {/* <-- Panggil di sini */}
        <Clients />
      </main>
      <Footer />
    </div>
  );
}