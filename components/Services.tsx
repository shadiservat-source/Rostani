
import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  format: string;
  image: string;
  feature?: string;
}> = ({ title, subtitle, description, format, image, feature }) => (
  <div className="group bg-cream/40 border border-lightGreen/10 p-8 rounded-3xl hover:bg-cream hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <div className="w-32 h-32 bg-lightGreen rounded-full -mr-16 -mt-16" />
    </div>
    
    <div className="mb-8 overflow-hidden rounded-xl h-48">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>

    <h3 className="text-3xl font-serif font-bold mb-2">{title}</h3>
    <h4 className="text-darkGreen font-medium uppercase text-xs tracking-widest mb-6 border-b border-lightGreen/20 pb-2">
      {subtitle}
    </h4>
    
    <p className="text-brown leading-relaxed flex-grow mb-6">
      {description}
    </p>

    {feature && (
      <div className="mb-6 p-4 bg-lightGreen/10 rounded-lg text-sm italic text-darkGreen">
        <span className="font-bold">Unique Feature:</span> {feature}
      </div>
    )}

    <div className="mt-auto pt-6 border-t border-lightGreen/10 flex justify-between items-center text-sm font-medium">
      <span className="text-darkGreen">Format: {format}</span>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4">Our Services</h2>
        <p className="text-xl text-brown">Three pillars of healing, combined to create a unified field of transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard 
          title="Mind & Psyche"
          subtitle="Integrative Psychology"
          description="Understanding personality patterns and designing the future using a blend of Personality Psychology and Coaching. We move from being a 'Victim' to a 'Conscious Observer'."
          format="Online Video (50 Mins)"
          image="https://picsum.photos/id/12/400/300"
        />
        <ServiceCard 
          title="Energy Body"
          subtitle="Remote Pranic Healing"
          description="Clearing chronic fatigue and stress. Before illness manifests physically, it appears as 'energy congestion' in your Biofield. We cleanse this field to activate self-recovery."
          feature="Non-Verbal & No-Camera. Simply lie down and receive."
          format="Remote Session (20-30 Mins)"
          image="https://picsum.photos/id/13/400/300"
        />
        <ServiceCard 
          title="Body & Lifestyle"
          subtitle="Lifestyle Correction"
          description="Aligning your daily rhythm (Sleep, Nutrition, Activity) with your body's natural wisdom to support your energy levels and prevent burnout."
          format="Personalized Routine"
          image="https://picsum.photos/id/14/400/300"
        />
      </div>

      <div className="mt-20 text-center">
        <a 
          href="#contact" 
          className="inline-block bg-redAccent text-white text-lg font-bold px-12 py-5 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
};
