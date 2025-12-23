
import React from 'react';

const criteria = [
  { title: "Immigration Challenges", desc: "Dealing with cultural shock and displacement." },
  { title: "High-Functioning Anxiety", desc: "Success on the outside, chaos on the inside." },
  { title: "Loss of Direction", desc: "Seeking true personal calling." },
  { title: "Performance Enhancement", desc: "Expanding energetic capacity." }
];

export const WhoIsThisFor: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-darkGreen text-cream rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
          <h2 className="text-5xl font-serif font-bold text-cream">Designed for the Seekers</h2>
          <div className="grid gap-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="w-2 h-2 rounded-full bg-lightGreen mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">{item.title}</h4>
                  <p className="text-cream/70 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <img 
            src="https://picsum.photos/id/101/800/1000" 
            alt="Diverse women in nature" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-darkGreen/10" />
        </div>
      </div>
    </div>
  );
};
