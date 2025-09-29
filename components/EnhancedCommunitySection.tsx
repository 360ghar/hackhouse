import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import HolographicCard from './HolographicCard';

const builders = [
  { name: 'AI ARCHITECT', color: '#00F2FF', icon: '🤖' },
  { name: 'SAAS PIONEER', color: '#8A2BE2', icon: '⚡' },
  { name: 'HARDWARE NINJA', color: '#FF006E', icon: '🔧' },
  { name: 'DEFI ORACLE', color: '#39FF14', icon: '💎' },
  { name: 'GROWTH CATALYST', color: '#FFAA00', icon: '📈' },
  { name: 'UX ALCHEMIST', color: '#00F2FF', icon: '🎨' },
  { name: 'ML WIZARD', color: '#8A2BE2', icon: '🧙' },
  { name: 'FULLSTACK GOD', color: '#FF006E', icon: '⚙️' },
];

const networkBenefits = [
  { text: 'Curated network of 8 elite builders', icon: '👥', color: '#00F2FF' },
  { text: 'Weekend hackathons & launch sprints', icon: '🚀', color: '#8A2BE2' },
  { text: 'Direct access to industry veterans', icon: '🎯', color: '#FF006E' },
  { text: 'High-bandwidth, zero-friction living', icon: '⚡', color: '#39FF14' },
];

const EnhancedCommunitySection: React.FC = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Visual: Neural Network Orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-80 sm:h-96 lg:h-[500px] flex items-center justify-center"
        >
          <div className="community-orb-container">
            {builders.map((builder, index) => {
              const angle = (index * 45 * Math.PI) / 180;
              return (
                <motion.div
                  key={index}
                  className="orb-wrapper"
                  style={{
                    transform: `rotate(${index * 45}deg) translateY(var(--orb-radius))`
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  <div 
                    className="orb group"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${builder.color}, ${builder.color}99 90%)`,
                      boxShadow: `0 0 15px ${builder.color}, 0 0 30px ${builder.color}66`
                    }}
                  >
                    <motion.div
                      className="orb-icon"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {builder.icon}
                    </motion.div>
                    <span className="orb-label glass-pane">{builder.name}</span>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Center core */}
            <motion.div 
              className="center-core"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 40px #00F2FF, 0 0 80px #8A2BE2',
                  '0 0 60px #00F2FF, 0 0 120px #8A2BE2',
                  '0 0 40px #00F2FF, 0 0 80px #8A2BE2',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="font-mono text-lg font-bold">HUB</div>
            </motion.div>
          </div>

          <style>{`
            .community-orb-container {
              position: relative;
              width: 100px;
              height: 100px;
              --orb-radius: -180px;
              animation: slow-rotate 60s linear infinite;
              transform-style: preserve-3d;
            }
            @media (max-width: 640px) {
              .community-orb-container { --orb-radius: -140px; }
            }
            @keyframes slow-rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .orb-wrapper {
              position: absolute;
              top: 50%;
              left: 50%;
              margin: -30px;
              width: 60px;
              height: 60px;
            }
            .orb {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              transition: all 0.3s ease-out;
              position: relative;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .orb-icon {
              font-size: 24px;
              filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
            }
            .orb-label {
              position: absolute;
              top: -60px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(28, 28, 30, 0.95);
              color: #EAEAEA;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 11px;
              white-space: nowrap;
              opacity: 0;
              transition: opacity 0.3s;
              pointer-events: none;
              font-family: 'IBM Plex Mono', monospace;
              border: 1px solid rgba(255,255,255,0.2);
            }
            .orb:hover .orb-label {
              opacity: 1;
            }
            .center-core {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 80px;
              height: 80px;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              background: radial-gradient(circle, #00F2FF, #8A2BE2 70%, #FF006E);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              box-shadow: 0 0 40px #00F2FF, 0 0 80px #8A2BE2;
            }
            @media (prefers-reduced-motion: reduce) {
              .community-orb-container { animation: none; }
              .center-core { animation: none !important; }
            }
          `}</style>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">
            {'<NEURAL_NETWORK>'}
          </div>

          <h2 data-font-mono className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-6">
            FORGE CONNECTIONS
            <br />
            <span className="cyber-gradient-text">NOT CONTACTS</span>
          </h2>

          <div className="h-1 w-32 mb-8 bg-gradient-to-r from-[#00F2FF] via-[#8A2BE2] to-[#FF006E]"></div>

          <p className="text-lg text-gray-300 mb-8">
            You're not just joining a space—you're plugging into a <span className="text-cyan-400 font-bold">neural network</span> of 
            aligned builders who ship, iterate, and win together.
          </p>

          <div className="space-y-4">
            {networkBenefits.map((benefit, i) => (
              <HolographicCard key={i} delay={i * 0.1} glowColor={benefit.color}>
                <div className="p-4 flex items-center gap-4">
                  <motion.div 
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <p className="text-lg text-white flex-1">{benefit.text}</p>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: benefit.color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </div>
              </HolographicCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 glass-pane rounded-xl border border-purple-400/30"
          >
            <div className="font-mono text-sm text-purple-400 mb-2">NETWORK PROTOCOL:</div>
            <p className="text-white">
              Every resident is <span className="cyber-gradient-text font-bold">handpicked</span> for alignment, 
              ambition, and execution velocity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EnhancedCommunitySection;
