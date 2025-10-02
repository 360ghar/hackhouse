import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedMetricProps {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
  delay?: number;
  animate?: boolean;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  label,
  suffix = '',
  prefix = '',
  color = '#00F2FF',
  delay = 0,
  animate = true,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !animate || typeof value !== 'number') return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setDisplayValue(Math.min(Math.round(increment * currentStep), value));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, value, animate, delay]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="relative group"
    >
      {/* Glow background */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: `${color}20` }}
      />

      {/* Content */}
      <div className="relative glass-pane rounded-xl p-6 border border-white/10 text-center">
        {/* Value */}
        <div
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{
            color: color,
            textShadow: `0 0 20px ${color}66`,
          }}
        >
          {prefix}
          {animate && typeof value === 'number' ? displayValue : value}
          {suffix}
        </div>

        {/* Label */}
        <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-mono">
          {label}
        </div>

        {/* Animated border */}
        <div
          className="absolute bottom-0 left-0 h-1 transition-all duration-1000 ease-out"
          style={{
            width: inView ? '100%' : '0%',
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />

        {/* Corner accents */}
        <div
          className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-50"
          style={{ borderColor: color }}
        />
        <div
          className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-50"
          style={{ borderColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedMetric;
