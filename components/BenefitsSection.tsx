
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import HolographicCard from './HolographicCard';

const benefits = [
  {
    title: 'Sustained Momentum',
    text: 'Energized by a passionate neural network of builders who ship, iterate, and never quit.',
    icon: '⚡',
    color: '#00F2FF',
  },
  {
    title: 'Deep Focus Mode',
    text: 'Noise-canceling environment architected for maximum cognitive throughput and flow states.',
    icon: '🎯',
    color: '#8A2BE2',
  },
  {
    title: 'Accelerated Deployment',
    text: 'Zero-to-production pipeline with bleeding-edge tooling, rapid peer-review, and instant feedback.',
    icon: '🚀',
    color: '#FF006E',
  },
  {
    title: 'Neural Navigation',
    text: 'Strategic mentorship and guidance precisely calibrated to your development trajectory.',
    icon: '🧠',
    color: '#39FF14',
  },
];

const BenefitCard: React.FC<{ title: string; text: string; icon: string; color: string; index: number }> = ({ 
  title, 
  text, 
  icon,
  color,
  index 
}) => {
  return (
    <HolographicCard delay={index * 0.15} glowColor={color} className="h-full">
      <div className="p-6 sm:p-8 h-full flex flex-col">
        {/* Icon with animated glow */}
        <motion.div 
          className="text-5xl mb-6 relative"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 blur-xl opacity-50"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative z-10">{icon}</span>
        </motion.div>

        {/* Title with gradient */}
        <h3 
          data-font-mono 
          className="text-xl md:text-2xl font-bold mb-4"
          style={{
            background: `linear-gradient(135deg, ${color}, #ffffff)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#EAEAEA] leading-relaxed flex-grow">{text}</p>

        {/* Status bar */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-500">STATUS</span>
            <span style={{ color }}>OPERATIONAL</span>
          </div>
          <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
          </div>
        </div>
      </div>
    </HolographicCard>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <Section className="text-center">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">
          {'<SYSTEM_ENHANCEMENTS>'}
        </div>
        
        <h2 data-font-mono className="text-4xl md:text-6xl font-bold text-white tracking-wider max-w-4xl mx-auto mb-6">
          UPGRADE YOUR
          <br />
          <span className="cyber-gradient-text">OPERATING SYSTEM</span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Unlock cognitive enhancements and productivity multipliers through our optimized environment
        </p>

        <div className="font-mono text-xs text-cyan-400 tracking-widest mt-4">
          {'</SYSTEM_ENHANCEMENTS>'}
        </div>
      </motion.div>

      {/* Benefits grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {benefits.map((benefit, i) => (
          <BenefitCard 
            key={i} 
            title={benefit.title} 
            text={benefit.text} 
            icon={benefit.icon}
            color={benefit.color}
            index={i} 
          />
        ))}
      </div>

      {/* Additional visual element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 p-8 glass-pane rounded-xl border border-cyan-400/30 max-w-3xl mx-auto"
      >
        <div className="font-mono text-sm text-cyan-400 mb-2">SYSTEM MESSAGE:</div>
        <p className="text-lg text-white">
          Every component of HackHouse Protocol is <span className="cyber-gradient-text font-bold">engineered for optimization</span>. 
          Join the network and amplify your capabilities.
        </p>
      </motion.div>
    </Section>
  );
};

export default BenefitsSection;
