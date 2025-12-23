
import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 border-2 border-lightGreen/20 rounded-2xl transform rotate-3 translate-x-4 translate-y-4 -z-10" />
          <img 
            src="https://picsum.photos/id/11/800/800" 
            alt="Abstract Fractal Pattern" 
            className="w-full rounded-2xl shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-serif font-bold leading-tight">
            The Holographic Approach
          </h2>
          <div className="space-y-6 text-lg text-brown leading-relaxed">
            <p>
              In a holographic view, <strong className="text-darkGreen font-semibold">"the whole is contained in the part."</strong> This means your past traumas, beliefs, and patterns are present right here and now—in your breath, your daily choices, and your energy field.
            </p>
            <p>
              At Rostani, we don't believe in digging into the past for years. We focus on decoding your <strong className="text-darkGreen">"Living Patterns"</strong> in the present moment. By shifting the frequency and pattern in the "Here & Now," the past heals, and the future transforms.
            </p>
          </div>
          
          <div className="pt-4">
            <div className="h-px w-24 bg-lightGreen" />
            <p className="mt-4 italic text-darkGreen font-serif text-xl">
              Integration is not about fixing; it's about remembering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
