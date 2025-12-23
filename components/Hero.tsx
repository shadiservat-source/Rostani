
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/10/1600/900" 
          alt="Forest canopy looking up at the sky" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/0 via-cream/50 to-cream" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-darkGreen">
            Rostani: <span className="italic">Return to Wholeness</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif text-brown max-w-2xl mx-auto leading-relaxed">
            From Fragmentation to Integration. A holographic approach to healing the Mind, balancing Energy, and correcting Lifestyle.
          </p>
        </div>

        <p className="text-darkGreen font-medium tracking-widest uppercase text-sm md:text-base border-y border-darkGreen/20 py-4">
          Where the science of Psychology meets Ancient Wisdom.
        </p>

        <div className="pt-8">
          <a 
            href="#services" 
            className="inline-block bg-redAccent text-white text-lg font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-redAccent/20 hover:scale-105 transform transition-all duration-300 active:scale-95"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lightGreen/10 rounded-full blur-3xl -ml-32 -mb-32" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-darkGreen/5 rounded-full blur-3xl -mr-48 -mt-48" />
    </div>
  );
};
