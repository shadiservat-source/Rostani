
import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-lightGreen/20 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Logo className="w-10 h-10 text-darkGreen" />
        <span className="text-2xl font-serif font-bold text-darkGreen tracking-widest uppercase">Rostani</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-medium text-darkGreen">
        <a href="#philosophy" className="hover:text-lightGreen transition-colors">Philosophy</a>
        <a href="#services" className="hover:text-lightGreen transition-colors">Services</a>
        <a href="#who-is-this-for" className="hover:text-lightGreen transition-colors">For You</a>
        <a href="#about" className="hover:text-lightGreen transition-colors">About</a>
        <a href="#faq" className="hover:text-lightGreen transition-colors">FAQ</a>
        <a 
          href="#services" 
          className="bg-redAccent text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
        >
          Book Session
        </a>
      </div>
      
      {/* Mobile simplified CTA */}
      <div className="md:hidden">
        <a 
          href="#services" 
          className="bg-redAccent text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};
