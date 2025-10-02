import React from 'react';
import { motion } from 'framer-motion';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  size?: 'small' | 'medium' | 'large';
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] ${className}`}>
      {children}
    </div>
  );
};

export default BentoGrid;
