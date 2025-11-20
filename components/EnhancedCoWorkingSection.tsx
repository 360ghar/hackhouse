import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import HolographicCard from './HolographicCard';
import StatusIndicator from './StatusIndicator';

type Props = {
  onGetDeskClick?: () => void;
  onBookTourClick?: () => void;
};

const PlanCard: React.FC<{ title: string; price: string; points: string[]; index: number; color: string }> = ({ 
  title, 
  price, 
  points, 
  index,
  color 
}) => (
  <HolographicCard delay={index * 0.2} glowColor={color} className="h-full">
    <div className="p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-baseline justify-between mb-6">
        <h3 data-font-mono className="text-2xl font-bold text-text" style={{
          background: `linear-gradient(135deg, ${color}, #ffffff)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          {title}
        </h3>
        <span className="text-gray-400 font-mono text-sm">{price}</span>
      </div>
      
      <ul className="space-y-3 text-text flex-grow">
        {points.map((p, i) => (
          <motion.li 
            key={p}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            className="flex items-start gap-3"
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke={color} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>{p}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-white/10">
        <StatusIndicator status="active" label="AVAILABLE" size="sm" />
      </div>
    </div>
  </HolographicCard>
);

const Amenity: React.FC<{ label: string; icon: React.ReactNode; color: string; delay: number }> = ({ 
  label, 
  icon, 
  color,
  delay 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-pane rounded-lg p-4 flex items-center gap-3  hover:border-text/30 transition-colors group"
  >
    <motion.div 
      style={{ color }}
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
    </motion.div>
    <span className="text-text group-hover:text-text transition-colors">{label}</span>
  </motion.div>
);

const EnhancedCoWorkingSection: React.FC<Props> = ({ onGetDeskClick, onBookTourClick }) => {
  const plans = [
    { 
      title: 'Day Pass', 
      price: 'Flexible', 
      points: ['Drop-in access', 'Pay per session', 'Full amenities', 'Community events'],
      color: '#00F2FF'
    },
    { 
      title: 'Night Protocol', 
      price: 'From ₹3K/mo', 
      points: ['Evening/night access', 'Deep focus hours', 'Side project mode', 'Extended network'],
      color: '#8A2BE2'
    },
  ];

  const amenities = [
    { label: '1 Gbps Neural Link', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20h.01M2 8.82A15.94 15.94 0 0 1 12 4c3.73 0 7.16 1.28 9.9 3.43M5 12.2A11.96 11.96 0 0 1 12 9c2.56 0 4.93.82 6.86 2.2M8.5 15.5A7.98 7.98 0 0 1 12 14c1.6 0 3.08.47 4.33 1.27"/></svg>, color: '#00F2FF' },
    { label: 'Bio-fuel Station', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10h14a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4v-4z" strokeWidth="2"/><path d="M17 10V6" strokeWidth="2"/></svg>, color: '#39FF14' },
    { label: 'Launch Events', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 5h18M3 12h18M3 19h18" strokeWidth="2"/></svg>, color: '#FF006E' },
    { label: 'Mentor Network', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="3" strokeWidth="2"/><path d="M2 20c0-3.314 2.686-6 6-6" strokeWidth="2"/><path d="M16 11l2 2 4-4" strokeWidth="2" strokeLinecap="round"/></svg>, color: '#FFAA00' },
    { label: 'Sync Channels', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 14a2 2 0 1 1 0-4h2v4H5zM9 19a2 2 0 1 1-4 0v-2h4v2zM14 5a2 2 0 1 1-4 0V3h4v2zM19 9a2 2 0 1 1 0-4h2v4h-2z" strokeWidth="2"/></svg>, color: '#8A2BE2' },
    { label: 'Power Grid 24/7', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, color: '#00F2FF' },
  ];

  return (
    <Section className="text-center">
      <div id="co-working" className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">
            {'<NEURAL_HUB_ACCESS>'}
          </div>

          <h2 data-font-mono className="text-4xl md:text-6xl font-bold text-text tracking-wider mb-6">
            CO-WORKING FROM
            <br />
            <span className="cyber-gradient-text">₹3,000/MONTH</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Access the neural hub. Join the network. Same high-velocity community, flexible protocol.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button 
              onClick={onGetDeskClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-lg font-bold text-black overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F2FF] to-[#8A2BE2]" />
              <span className="relative flex items-center gap-2">
                <span>Initialize Desk Access</span>
                <span className="text-xl">→</span>
              </span>
            </motion.button>
            
            <motion.button 
              onClick={onBookTourClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 border-purple-500/50 text-text hover:border-purple-400 hover:bg-purple-500/10 transition font-bold"
            >
              Request Site Visit
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {plans.map((p, i) => (
            <PlanCard 
              key={p.title} 
              title={p.title} 
              price={p.price} 
              points={p.points} 
              index={i}
              color={p.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 data-font-mono className="text-3xl font-bold text-text mb-8">
            <span className="cyber-gradient-text">SYSTEM RESOURCES</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {amenities.map((a, i) => (
              <Amenity 
                key={a.label} 
                label={a.label} 
                icon={a.icon} 
                color={a.color}
                delay={i * 0.1}
              />
            ))}
          </div>
          
          <p className="text-xs text-gray-500 font-mono mt-6">
            * Protocol availability subject to network capacity
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default EnhancedCoWorkingSection;
