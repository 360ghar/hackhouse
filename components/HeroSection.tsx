
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FluidText from './FluidText';
import StatusIndicator from './StatusIndicator';

const AnimatedText: React.FC<{ text: string; effect: 'typewriter' | 'glitch' }> = ({ text, effect }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (effect === 'typewriter') {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else if (effect === 'glitch') {
        let i = 0;
        const interval = setInterval(() => {
            const randomChars = text.substring(i+1).split('').map(() => String.fromCharCode(Math.random() * (126 - 33) + 33)).join('');
            setDisplayText(text.substring(0, i + 1) + randomChars);
            i++;
            if(i > text.length) {
                setDisplayText(text);
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }
  }, [text, effect]);

  return <>{displayText}</>;
};

const AISummarySection: React.FC = () => (
  <section className="sr-only" aria-label="AI Summary for Search Engines">
    <h2>HackHouse: Premier Hacker House for AI Builders</h2>
    <p>
      HackHouse offers curated residency for AI developers and startup founders in Gurgaon, featuring private rooms,
      high-speed internet, and a collaborative community environment.
    </p>
    <ul>
      <li>30-day residency program</li>
      <li>1 Gbps symmetrical WiFi</li>
      <li>Private rooms with amenities</li>
      <li>24/7 coworking access</li>
      <li>AI builder community</li>
    </ul>
  </section>
);

const HeroSection: React.FC<{ onApplyClick?: () => void; onCoworkingClick?: () => void }> = ({ onApplyClick, onCoworkingClick }) => {
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowLine2(true), 1000);
        const timer2 = setTimeout(() => setShowLine3(true), 2500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [])

    useEffect(() => {
      const el = btnRef.current;
      if (!el) return;
      const inner = el.querySelector('.magnetic-inner') as HTMLElement | null;
      if (!inner) return;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const damp = 14; // smaller -> stronger
        inner.style.transform = `translate(${x / damp}px, ${y / damp}px)`;
      };
      const onLeave = () => { inner.style.transform = 'translate(0,0)'; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    }, []);

  return (
    <>
      <header className="min-h-[100svh] flex flex-col items-center justify-center text-center relative px-4 py-20 sm:py-24 overflow-hidden">
        {/* Status bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 left-6 z-20"
        >
          <StatusIndicator status="active" label="PROTOCOL v4.7" size="sm" />
        </motion.div>

        {/* System info */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute top-6 right-6 z-20 text-right"
        >
          <div className="font-mono text-xs text-cyan-400">
            <div>UPLINK: STABLE</div>
            <div className="text-purple-400">NODE: GURGAON-01</div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Main heading with enhanced effects */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight font-bold tracking-wider text-white uppercase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="block holo-text relative"
              style={{ 
                textShadow: '0 0 30px var(--acc-cyan), 0 0 60px var(--acc-cyan), 0 0 90px var(--acc-cyan)',
              }}
              animate={{
                textShadow: [
                  '0 0 30px var(--acc-cyan), 0 0 60px var(--acc-cyan), 0 0 90px var(--acc-cyan)',
                  '0 0 40px var(--acc-cyan), 0 0 80px var(--acc-cyan), 0 0 120px var(--acc-cyan)',
                  '0 0 30px var(--acc-cyan), 0 0 60px var(--acc-cyan), 0 0 90px var(--acc-cyan)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Code.
            </motion.span>
            {showLine2 && (
              <motion.span 
                className="block mt-2 holo-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedText text="Collaborate." effect="typewriter" />
              </motion.span>
            )}
            {showLine3 && (
              <motion.span 
                className="block mt-2 cyber-gradient-text relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedText text="Conquer." effect="glitch" />
              </motion.span>
            )}
          </motion.h1>

          {/* Tagline with decode effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="mt-8 text-lg md:text-xl text-text max-w-3xl mx-auto"
          >
            <FluidText 
              text="Welcome to HackHouse Protocol — Neural Network for Builders in Gurgaon Sector 50" 
              effect="decode"
              delay={3500}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button 
              ref={btnRef} 
              onClick={onApplyClick} 
              className="interactive magnetic relative group px-10 py-5 text-lg font-bold text-text group-hover:text-white uppercase overflow-hidden transition-all duration-300 border border-cyan-400/50 hover:border-cyan-400"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative magnetic-inner flex items-center gap-2">
                <span className="text-cyan-400 group-hover:text-white transition-colors">{'>>>'}</span>
                Initialize Connection
                <span className="text-purple-400 group-hover:text-white transition-colors">{'<<<'}</span>
              </span>
              
              {/* Animated corners */}
              <motion.span 
                className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span 
                className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </button>

            {/* Secondary CTA */}
            <button 
              onClick={onCoworkingClick}
              className="relative group px-10 py-5 text-lg font-bold text-text uppercase transition-all duration-300 border border-purple-500/50 hover:border-purple-400"
            >
              <span className="relative flex items-center gap-2">
                Neural Hub Access
              </span>
            </button>
          </motion.div>

          {/* Data metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center"
          >
            <div className="glass-pane rounded-lg p-4 border border-cyan-400/30">
              <div className="text-2xl font-bold text-cyan-400 font-mono">1Gbps</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Neural Link</div>
            </div>
            <div className="glass-pane rounded-lg p-4 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-400 font-mono">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Active Grid</div>
            </div>
            <div className="glass-pane rounded-lg p-4 border border-pink-400/30">
              <div className="text-2xl font-bold text-pink-400 font-mono">∞</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Possibilities</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00F2FF]">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <style>{`
          @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
          @keyframes fadeInGlow { 0% { opacity: 0; text-shadow: 0 0 0px var(--acc-cyan); } 100% { opacity: 1; text-shadow: 0 0 15px var(--acc-cyan); } }
          .animate-fade-in-glow { animation: fadeInGlow 1s ease-out forwards; opacity: 0; }
        `}</style>
      </header>
      <AISummarySection />
    </>
  );
};

export default HeroSection;
