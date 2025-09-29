import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import HolographicCard from './HolographicCard';
import AnimatedMetric from './AnimatedMetric';
import { usePointerInfo } from './usePointerInfo';

const resources = [
  { icon: '🏠', label: 'Quantum Living', detail: 'Fully-furnished neural pods' },
  { icon: '🍜', label: 'Bio-fuel', detail: 'Home-cooked nutritional matrices' },
  { icon: '⚡', label: 'Neural Link', detail: '1 Gbps symmetrical datastream' },
  { icon: '🌐', label: 'Active Grid', detail: '24/7 co-working nexus access' },
  { icon: '🧼', label: 'Maintenance Protocol', detail: 'Automated laundry & housekeeping' },
  { icon: '🔋', label: 'Power Core', detail: 'Uninterruptible energy supply' },
];

const ResourceCard: React.FC<{ icon: string; label: string; detail: string; index: number }> = ({ 
  icon, 
  label, 
  detail, 
  index 
}) => {
  return (
    <HolographicCard delay={index * 0.1} className="h-full">
      <div className="p-6 h-full flex flex-col items-center justify-center text-center">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold text-white cyber-gradient-text mb-2">{label}</h3>
        <p className="text-sm text-gray-400">{detail}</p>
      </div>
    </HolographicCard>
  );
};

const EnhancedValueSection: React.FC = () => {
  const { hoverCapable } = usePointerInfo();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section>
      <div ref={sectionRef} className="space-y-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-xs text-cyan-400 tracking-widest">
            {'<RESOURCE_ALLOCATION_MATRIX>'}
          </div>
          
          <h2 data-font-mono className="text-4xl md:text-6xl leading-tight font-bold text-white tracking-wider mb-6">
            THE ₹30K PROTOCOL
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-2 h-2 bg-cyan-400 rotate-45"></div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-[#EAEAEA]">
            For ₹30k/month, access an entire <span className="cyber-gradient-text font-bold">optimization layer</span>. 
            We've compressed living, working, and building into a single, streamlined <span className="text-cyan-400">data pipeline</span>.
          </p>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-cyan-400 tracking-widest">
            {'</RESOURCE_ALLOCATION_MATRIX>'}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedMetric 
            value={30000}
            label="Monthly Protocol Cost"
            prefix="₹"
            color="#00F2FF"
            delay={200}
          />
          <AnimatedMetric 
            value={100}
            label="Value Multiplier"
            suffix="x"
            color="#8A2BE2"
            delay={400}
          />
          <AnimatedMetric 
            value="∞"
            label="Growth Potential"
            color="#FF006E"
            delay={600}
            animate={false}
          />
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard 
              key={index}
              icon={resource.icon}
              label={resource.label}
              detail={resource.detail}
              index={index}
            />
          ))}
        </div>

        {/* Terminal-style feature list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="glass-pane rounded-xl p-6 md:p-8 border border-green-500/30"
          style={{
            backgroundColor: 'rgba(0, 20, 0, 0.4)',
          }}
        >
          <div className="font-mono text-green-400 space-y-2">
            <div className="text-green-500 mb-4">
              {'> system.features.list() --verbose'}
            </div>
            {[
              'Private quantum pod with neural-optimized ergonomics',
              'Tri-daily bio-fuel delivery (breakfast, lunch, dinner)',
              'Gigabit symmetrical datastream for seamless operations',
              'Round-the-clock neural hub with climate optimization',
              'Automated maintenance protocols (laundry, cleaning)',
              'Redundant power systems with instant failover',
              'Community transport nodes for local navigation',
              'Collaborative network of aligned builders',
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-green-500 mt-1">✓</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EnhancedValueSection;
