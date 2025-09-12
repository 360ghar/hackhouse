import React, { useState } from 'react';
import Section from './Section';

const benefits = [
  'Fully-furnished rooms',
  'Home-cooked meals',
  '1 Gbps Wi-Fi',
  '24/7 Co-working space access',
  'Laundry & Housekeeping',
];

const AnimatedCheckmark: React.FC<{ active: boolean }> = ({ active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00F2FF] mr-4 flex-shrink-0 transition-transform duration-300" style={{ transform: active ? 'scale(1.1)' : 'scale(1)' }}>
        <path 
            d="M20 6L9 17L4 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={active ? "0" : "1"}
            style={{transition: 'stroke-dashoffset 0.4s ease-out 0.2s'}}
        />
    </svg>
);

const ValueCard: React.FC<{ text: string; index?: number; }> = ({ text, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="interactive relative glass-pane rounded-lg p-6 my-2 transition-all duration-300 ease-out transform-gpu overflow-hidden border-l-2 border-transparent hover:border-l-2 hover:border-[#00F2FF]"
      style={{
        transform: isHovered ? 'perspective(1000px) rotateY(-3deg) scale(1.05)' : 'none',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 242, 255, 0.15)' : 'none',
        transitionDelay: `${index * 80}ms`
      }}
    >
      <div className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00F2FF]/20 to-transparent transition-transform duration-500 ease-out pointer-events-none -skew-x-12 ${isHovered ? 'translate-x-[250%]' : '-translate-x-full'}`}></div>

      <div className="flex items-center relative z-10">
        <AnimatedCheckmark active={isHovered} />
        <span className="text-lg text-white">{text}</span>
      </div>
    </div>
  );
};

const ValueSection: React.FC = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="md:sticky top-32 pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F2FF]/50 to-[#8A2BE2]/50 animate-pulse"></div>
            <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
                THE 30K EQUATION
            </h2>
            <div className="h-1 w-24 my-6 bg-gradient-to-r from-[#00F2FF] to-[#8A2BE2]"></div>
            <p className="text-lg leading-relaxed text-[#EAEAEA]">
                For ₹30k/month, you don't just get a room. You get an entire ecosystem. We've collapsed the cost of living, working, and building into a single, optimized data stream.
            </p>
        </div>
        <div className="stagger">
          {benefits.map((benefit, index) => (
            <ValueCard key={index} text={benefit} index={index} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(6px) } 100% { opacity: 1; transform: translateY(0) } }
        [data-in-view="true"] .stagger > * { opacity: 0; transform: translateY(6px); animation: fadeInUp 600ms var(--ease-out) forwards; }
        [data-in-view="true"] .stagger > *:nth-child(1) { animation-delay: 60ms }
        [data-in-view="true"] .stagger > *:nth-child(2) { animation-delay: 140ms }
        [data-in-view="true"] .stagger > *:nth-child(3) { animation-delay: 220ms }
        [data-in-view="true"] .stagger > *:nth-child(4) { animation-delay: 300ms }
        [data-in-view="true"] .stagger > *:nth-child(5) { animation-delay: 380ms }
      `}</style>
    </Section>
  );
};

export default ValueSection;
