
import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3">
          <div className="relative group">
            <div className="absolute inset-0 bg-darkGreen/10 rounded-full transform scale-110 -z-10 blur-2xl group-hover:bg-lightGreen/20 transition-all duration-500" />
            <img 
              src="https://picsum.photos/id/64/600/800" 
              alt="Shadi Servat" 
              className="w-full aspect-[3/4] object-cover rounded-[4rem] shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-3xl shadow-xl border border-lightGreen/10">
              <p className="text-darkGreen font-serif font-bold text-2xl">Shadi Servat</p>
              <p className="text-brown text-sm">Integrative Therapist</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-serif font-bold">Shadi Servat | <span className="text-lightGreen">Integrative Therapist</span></h2>
            <p className="text-xl font-medium text-darkGreen">M.A. in Personality Psychology & Certified ICF Coach</p>
          </div>
          
          <div className="space-y-6 text-lg text-brown leading-relaxed max-w-2xl">
            <p>
              I started as a classical psychologist, but I realized that "talking" alone isn't always enough. Humans are more than just their thoughts. Years of clinical experience showed me that for sustainable change, we must address all dimensions: <strong className="text-darkGreen">Mind, Body, and Energy.</strong>
            </p>
            <p>
              Today, I am here to offer you the full toolkit: The logic of <strong className="text-darkGreen underline decoration-lightGreen">Psychology</strong> for your mind, and The power of <strong className="text-darkGreen underline decoration-lightGreen">Energy Work</strong> for your spirit.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <div className="bg-white/50 px-6 py-3 rounded-2xl border border-lightGreen/10">
              <span className="block text-xs uppercase text-lightGreen font-bold tracking-widest">Experience</span>
              <span className="text-darkGreen font-serif font-bold text-lg">10+ Years Clinical</span>
            </div>
            <div className="bg-white/50 px-6 py-3 rounded-2xl border border-lightGreen/10">
              <span className="block text-xs uppercase text-lightGreen font-bold tracking-widest">Education</span>
              <span className="text-darkGreen font-serif font-bold text-lg">M.A. Personality Psych</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
