import React from 'react';
import { motion } from 'framer-motion';

interface StatusIndicatorProps {
  status: 'active' | 'syncing' | 'connected' | 'processing';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  label,
  size = 'md' 
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'active':
        return { color: '#39FF14', text: 'ACTIVE' };
      case 'syncing':
        return { color: '#FFAA00', text: 'SYNCING' };
      case 'connected':
        return { color: '#00F2FF', text: 'CONNECTED' };
      case 'processing':
        return { color: '#8A2BE2', text: 'PROCESSING' };
    }
  };

  const config = getStatusConfig();
  
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="inline-flex items-center gap-2">
      {/* Pulsing dot */}
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} rounded-full`}
          style={{ backgroundColor: config.color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Outer ring */}
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} rounded-full border-2`}
          style={{ borderColor: config.color }}
          animate={{
            scale: [1, 2, 2],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </div>

      {/* Label */}
      <span 
        className={`font-mono ${textSizeClasses[size]} tracking-wider`}
        style={{ color: config.color }}
      >
        {label || config.text}
      </span>
    </div>
  );
};

export default StatusIndicator;
