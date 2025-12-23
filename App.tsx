
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { AboutMe } from './components/AboutMe';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-lightGreen selection:text-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="philosophy" className="py-20">
          <Philosophy />
        </section>

        <section id="services" className="py-20 bg-white/30">
          <Services />
        </section>

        <section id="who-is-this-for" className="py-20">
          <WhoIsThisFor />
        </section>

        <section id="about" className="py-20 bg-lightGreen/5">
          <AboutMe />
        </section>

        <section id="faq" className="py-20">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
