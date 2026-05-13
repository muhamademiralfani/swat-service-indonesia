import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

import Legality from './sections/Legality';
import Services from './sections/Services';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Legality />
        <Clients />
        <Services />
        <Contact />
        {/* Section lain akan menyusul di sini */}
      </main>
      <Footer />
    </div>
  );
}

export default App;