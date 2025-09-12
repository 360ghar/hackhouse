
import React from 'react';
import Section from './Section';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center py-32 md:py-48">
      <h2 data-font-mono className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider max-w-4xl mx-auto leading-tight">
        ARE YOU READY TO BUILD THE FUTURE?
      </h2>
      <p className="mt-8 text-lg md:text-xl text-[#EAEAEA] max-w-2xl mx-auto">
        Our community is curated. We seek the builders, the dreamers, the disruptors. Only 8 spots. Your initiation awaits.
      </p>
      <div className="mt-12 group">
        <button className="relative px-12 py-6 text-xl font-bold text-white uppercase overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-[#00F2FF]">
             <span className="absolute inset-0 bg-gradient-to-r from-[#00F2FF]/80 to-[#8A2BE2]/80 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
             <span className="absolute inset-0 border-2 border-[#8A2BE2] animate-pulse group-hover:opacity-0"></span>
             <span className="relative">[ BEGIN APPLICATION ]</span>
        </button>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
