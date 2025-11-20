import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

const getColorVar = (c: string) => {
  const map: Record<string, { val: string; rgb: string }> = {
    '#00F2FF': { val: 'var(--acc-cyan)', rgb: 'var(--acc-cyan-rgb)' },
    '#8A2BE2': { val: 'var(--acc-purple)', rgb: 'var(--acc-purple-rgb)' },
    '#FF006E': { val: 'var(--acc-pink)', rgb: 'var(--acc-pink-rgb)' },
  };
  return map[c] || { val: c, rgb: '' };
};

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  className = '', 
  glowColor = '#00F2FF',
  delay = 0
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { val: colorVal, rgb: colorRgb } = getColorVar(glowColor);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 50) / 20}deg) rotateY(${(mousePosition.x - 50) / 20}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Holographic overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: colorRgb
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(${colorRgb}, 0.2), transparent 60%)`
            : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colorVal}33, transparent 60%)`,
        }}
      />
      
      {/* RGB Split effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--acc-pink) 0%, transparent 50%)`,
          transform: 'translate(-1px, -1px)',
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
        }}
      />
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--acc-cyan) 0%, transparent 50%)`,
          transform: 'translate(1px, 1px)',
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
        }}
      />
      
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: theme === 'dark'
            ? 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 242, 255, 0.1) 2px, rgba(0, 242, 255, 0.1) 4px)'
            : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.05) 2px, rgba(0, 0, 0, 0.05) 4px)',
        }}
      />
      
      {/* Border glow */}
      <div 
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(${Math.atan2(mousePosition.y - 50, mousePosition.x - 50) * 180 / Math.PI}deg, ${colorVal}, var(--acc-purple), ${colorVal})`,
          filter: 'blur(4px)',
        }}
      />
      
      {/* Main content */}
      <div className="relative glass-pane rounded-xl overflow-hidden">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default HolographicCard;
