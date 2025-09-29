import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import AnimatedMetric from './AnimatedMetric';

const techLogos = [
  { name: 'Claude AI', color: '#8A2BE2' },
  { name: 'ChatGPT', color: '#00F2FF' },
  { name: 'Midjourney', color: '#FF006E' },
  { name: 'Adobe CC', color: '#39FF14' },
  { name: 'Figma', color: '#FFAA00' },
  { name: 'Notion', color: '#00F2FF' },
  { name: 'GitHub', color: '#8A2BE2' },
  { name: 'AWS Cloud', color: '#FF006E' },
];

const EnhancedTechStackSection: React.FC = () => {
  return (
    <Section className="text-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00F2FF 1px, transparent 1px), linear-gradient(90deg, #00F2FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="font-mono text-xs text-purple-400 tracking-widest mb-4">
          {'<RESOURCE_STACK>'}
        </div>

        <h2 data-font-mono className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-6">
          FOUNDER'S ARSENAL
          <br />
          <span className="cyber-gradient-text">UNLOCKED</span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Access premium tools worth ₹60,000+/month at zero additional cost
        </p>
      </motion.div>

      {/* 3D Sphere Animation */}
      <div className="relative w-full h-72 sm:h-80 md:h-[500px] my-12 sm:my-16 flex items-center justify-center">
        <div className="sphere-container">
          {techLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              className="logo-orbit"
              style={{ animationDelay: `${-i * 1.5}s` }}
              whileHover={{ scale: 1.2 }}
            >
              <div 
                className="interactive logo-card glass-pane border"
                style={{ borderColor: `${logo.color}40` }}
              >
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `${logo.color}20` }}
                />
                <span className="relative z-10">{logo.name}</span>
              </div>
            </motion.div>
          ))}
          <motion.div 
            className="sphere-core"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 30px #00F2FF, 0 0 60px #8A2BE2',
                '0 0 50px #00F2FF, 0 0 100px #8A2BE2',
                '0 0 30px #00F2FF, 0 0 60px #8A2BE2',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Value Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        <AnimatedMetric
          value={60000}
          label="Tools Value / Month"
          prefix="₹"
          color="#00F2FF"
          delay={200}
        />
        <AnimatedMetric
          value={30000}
          label="Your Investment"
          prefix="₹"
          color="#8A2BE2"
          delay={400}
        />
        <AnimatedMetric
          value={200}
          label="ROI Percentage"
          suffix="%"
          color="#39FF14"
          delay={600}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-12 p-6 glass-pane rounded-xl border border-cyan-400/30 max-w-3xl mx-auto"
      >
        <div className="font-mono text-sm text-cyan-400 mb-2">PROTOCOL NOTE:</div>
        <p className="text-white">
          All premium subscriptions are <span className="cyber-gradient-text font-bold">pre-configured</span> and ready for immediate deployment.
        </p>
      </motion.div>

      <style>{`
        .sphere-container {
          width: 300px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-sphere 30s linear infinite;
          will-change: transform;
        }
        @media (max-width: 640px) {
          .sphere-container { width: 220px; height: 220px; }
        }
        @media (min-width: 768px) {
          .sphere-container { width: 450px; height: 450px; }
        }
        @keyframes rotate-sphere {
          from { transform: rotateY(0deg) rotateX(15deg); }
          to { transform: rotateY(360deg) rotateX(15deg); }
        }
        .sphere-core {
          position: absolute;
          top: 50%; left: 50%;
          width: 60px; height: 60px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, #00F2FF, #8A2BE2 80%, #FF006E);
          border-radius: 50%;
          box-shadow: 0 0 30px #00F2FF, 0 0 60px #8A2BE2;
          will-change: transform, box-shadow;
        }
        .logo-orbit {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          transform-style: preserve-3d;
          animation: rotate-orbit 15s linear infinite;
          will-change: transform;
        }
        @keyframes rotate-orbit {
          from { transform: rotateY(0deg) rotateX(60deg) rotateZ(0deg); }
          to { transform: rotateY(360deg) rotateX(60deg) rotateZ(0deg); }
        }
        .logo-card {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) translateZ(180px) rotateY(0deg);
          padding: 10px 20px;
          border-radius: 10px;
          font-family: 'IBM Plex Mono', monospace;
          color: white;
          font-size: 14px;
          transition: all 0.3s var(--ease-out);
          transform-origin: center;
          will-change: transform;
          backdrop-filter: blur(12px);
        }
        @media (max-width: 640px) {
          .logo-card { transform: translate(-50%, -50%) translateZ(130px); font-size: 11px; padding: 6px 12px; }
        }
        @media (min-width: 768px) {
          .logo-card { transform: translate(-50%, -50%) translateZ(240px); font-size: 16px; }
        }
        .logo-orbit:hover .logo-card {
          transform: translate(-50%, -50%) translateZ(200px) scale(1.15);
          box-shadow: 0 0 25px currentColor;
        }
        @media (min-width: 768px) {
          .logo-orbit:hover .logo-card { transform: translate(-50%, -50%) translateZ(260px) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sphere-container { animation: none; }
          .logo-orbit { animation: none; }
        }
      `}</style>
    </Section>
  );
};

export default EnhancedTechStackSection;
