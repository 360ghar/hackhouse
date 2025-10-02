import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import TerminalText from './TerminalText';

const EnhancedFinalCtaSection: React.FC<{ onApplyClick?: () => void }> = ({ onApplyClick }) => {
  const terminalLines = [
    '> system.status.check()',
    'STATUS: 8 NEURAL SLOTS AVAILABLE',
    'PROTOCOL: CURATED_SELECTION_ACTIVE',
    'READY FOR CONNECTION...',
  ];

  return (
    <Section className="text-center py-24 sm:py-32 md:py-48 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest mb-6">
            {'<FINAL_TRANSMISSION>'}
          </div>

          <h2 data-font-mono className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider max-w-4xl mx-auto leading-tight mb-8">
            ARE YOU READY TO
            <br />
            <motion.span 
              className="cyber-gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              BUILD THE FUTURE?
            </motion.span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            This network is <span className="text-cyan-400 font-bold">curated</span>. We seek the{' '}
            <span className="text-purple-400 font-bold">builders</span>, the{' '}
            <span className="text-pink-400 font-bold">dreamers</span>, the{' '}
            <span className="text-green-400 font-bold">disruptors</span>.
            <br />
            <span className="text-2xl md:text-3xl font-bold text-white mt-4 block">
              Only 8 slots. Your connection awaits.
            </span>
          </p>

          {/* Terminal simulation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <TerminalText lines={terminalLines} delay={500} speed={40} />
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            className="group inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              onClick={onApplyClick} 
              className="cta-btn relative px-12 py-6 sm:px-16 sm:py-8 text-xl sm:text-2xl font-bold text-white uppercase overflow-hidden transition-all duration-500 border-2"
              style={{
                borderImage: 'linear-gradient(135deg, #00F2FF, #8A2BE2, #FF006E) 1',
              }}
            >
              {/* Animated background */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#00F2FF] via-[#8A2BE2] to-[#FF006E]"
                style={{ backgroundSize: '200% 200%' }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Glow effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-[#00F2FF] via-[#8A2BE2] to-[#FF006E]" />
              
              {/* Text */}
              <span className="relative flex items-center gap-4">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-cyan-400 group-hover:text-white transition-colors"
                >
                  {'>>>'}
                </motion.span>
                <span className="relative z-10 mix-blend-difference">
                  BEGIN CONNECTION
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-purple-400 group-hover:text-white transition-colors"
                >
                  {'<<<'}
                </motion.span>
              </span>
              
              {/* Corner animations */}
              <motion.span 
                className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span 
                className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.span 
                className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.span 
                className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500 font-mono"
          >
            PROTOCOL_VERSION: 4.7 | ENCRYPTION: ACTIVE | SLOTS_REMAINING: 8
          </motion.p>

          <div className="font-mono text-xs text-cyan-400 tracking-widest mt-12">
            {'</FINAL_TRANSMISSION>'}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EnhancedFinalCtaSection;
