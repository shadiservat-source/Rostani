
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-darkGreen text-cream py-20 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-20">
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-4">
              <Logo className="w-12 h-12 text-lightGreen" />
              <h2 className="text-4xl font-serif font-bold">Ready to rewrite your story?</h2>
            </div>
            <p className="text-cream/60 text-lg">
              Return to wholeness today. Let's explore the holographic patterns of your life and unlock sustainable healing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-redAccent hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95">
              Book Coaching Session
            </button>
            <button className="bg-lightGreen hover:bg-lightGreen/80 text-darkGreen px-8 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95">
              Book Energy Session
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lightGreen font-serif text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-3 font-light">
              <p className="flex items-center gap-3">
                <span className="text-lightGreen">Email:</span> shadiservat@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-lightGreen">WA/TG:</span> +98 919 305 5087
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lightGreen font-serif text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 font-light text-cream/70">
              <li><a href="#hero" className="hover:text-cream transition-colors">Top</a></li>
              <li><a href="#philosophy" className="hover:text-cream transition-colors">Our Philosophy</a></li>
              <li><a href="#services" className="hover:text-cream transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-cream transition-colors">About Shadi</a></li>
            </ul>
          </div>

          <div className="text-right flex flex-col items-end">
            <Logo className="w-16 h-16 text-lightGreen/30 mb-4" />
            <p className="text-sm text-cream/40">© 2025 Rostani. All rights reserved.</p>
            <p className="text-xs text-cream/20 mt-2 uppercase tracking-widest font-sans">Organic Wisdom • Science • Spirit</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
