
import React, { useState } from 'react';

const faqs = [
  {
    q: "How does Remote Energy Healing actually work?",
    a: "Based on Quantum Entanglement, energy follows 'intention' and 'focus,' not physical location. Just like a mobile signal, we connect to your energy field remotely."
  },
  {
    q: "Do I need to be sick to book?",
    a: "No. Your energy body needs regular 'maintenance' and 'cleansing' to prevent burnout, just like servicing a car."
  },
  {
    q: "Why 21 sessions for energy work?",
    a: "Patterns are stubborn. The body needs a full cycle of repetition to stabilize a new pattern of health."
  },
  {
    q: "Do you prescribe diets?",
    a: "No, I am not a nutritionist. We focus on 'Lifestyle Correction'—adjusting habits like sleep and eating windows to fuel your brain."
  }
];

const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-lightGreen/20 last:border-none">
    <button 
      onClick={onClick}
      className="w-full py-8 flex justify-between items-center text-left hover:text-darkGreen transition-colors"
    >
      <span className="text-2xl font-serif font-bold">{q}</span>
      <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
      <p className="text-brown text-lg leading-relaxed max-w-3xl">
        {a}
      </p>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 bg-lightGreen/20 rounded-full flex items-center justify-center text-lightGreen">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16V16.01M12 13C12 13 12 11.5 13 10.5C14 9.5 14 8 13 7C12 6 10 6.5 9.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-5xl font-serif font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            {...faq} 
            isOpen={openIndex === idx} 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
          />
        ))}
      </div>
    </div>
  );
};
