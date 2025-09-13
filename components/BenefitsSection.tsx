
import React from 'react';
import Section from './Section';

const benefits = [
  {
    title: 'Stay Motivated',
    text: 'Energized by a passionate community that builds, ships, and never quits.',
  },
  {
    title: 'Focused Mindset',
    text: 'A growth-oriented environment designed to eliminate noise and maximize deep work.',
  },
  {
    title: 'Faster Progress',
    text: 'Accelerate your ideas from concept to MVP with bleeding-edge tools & peer-review.',
  },
  {
    title: 'Expert Guidance',
    text: 'Navigate the startup maze with the right mentorship at the right time.',
  },
];

const BenefitCard: React.FC<{ title: string; text: string, index: number }> = ({ title, text, index }) => {
    return (
        <div className="glass-pane rounded-xl p-6 sm:p-8 transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A2BE2]/20" style={{ transitionDelay: `${index * 100}ms` }}>
            <h3 data-font-mono className="text-2xl font-bold text-white cyber-gradient-text mb-4">{title}</h3>
            <p className="text-[#EAEAEA] leading-relaxed">{text}</p>
        </div>
    )
}

const BenefitsSection: React.FC = () => {
  return (
    <Section className="text-center">
      <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider max-w-3xl mx-auto">
        UPGRADE YOUR OPERATING SYSTEM.
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} title={benefit.title} text={benefit.text} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
