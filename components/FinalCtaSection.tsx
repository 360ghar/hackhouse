
import React from 'react';
import Section from './Section';

const FinalCtaSection: React.FC<{ onApplyClick?: () => void }> = ({ onApplyClick }) => {
  return (
    <Section className="text-center py-24 sm:py-32 md:py-48">
      <h2 data-font-mono className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider max-w-4xl mx-auto leading-tight">
        ARE YOU READY TO BUILD THE FUTURE?
      </h2>
      <p className="mt-8 text-lg md:text-xl text-[#EAEAEA] max-w-2xl mx-auto">
        Our community is curated. We seek the builders, the dreamers, the disruptors. Only 8 spots. Your initiation awaits.
      </p>
      <div className="mt-10 sm:mt-12 group">
        <button onClick={onApplyClick} className="cta-btn relative px-8 py-4 text-lg sm:px-12 sm:py-6 sm:text-xl font-bold text-white uppercase overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-[#00F2FF]">
             <span className="hover-overlay absolute inset-0 bg-gradient-to-r from-[#00F2FF]/80 to-[#8A2BE2]/80 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
             <span className="pulse-border absolute inset-0 border-2 border-[#8A2BE2] animate-pulse group-hover:opacity-0"></span>
             <span className="relative">[ BEGIN APPLICATION ]</span>
        </button>
        <style>{`
          @media (hover: none) {
            .cta-btn { border-color: #00F2FF; }
            .cta-btn .hover-overlay { transform: scale(1) !important; }
            .cta-btn .pulse-border { opacity: 0; }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
