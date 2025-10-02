import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FluidTextProps {
  text: string;
  className?: string;
  effect?: 'decode' | 'glitch' | 'typewriter' | 'morph';
  delay?: number;
}

const FluidText: React.FC<FluidTextProps> = ({ text, className = '', effect = 'decode', delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (effect) {
        case 'decode':
          decodeEffect();
          break;
        case 'glitch':
          glitchEffect();
          break;
        case 'typewriter':
          typewriterEffect();
          break;
        case 'morph':
          morphEffect();
          break;
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, effect, delay]);

  const decodeEffect = () => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, 30);
  };

  const glitchEffect = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      const randomChars = text
        .substring(iteration + 1)
        .split('')
        .map(() => String.fromCharCode(Math.random() * (126 - 33) + 33))
        .join('');
      setDisplayText(text.substring(0, iteration + 1) + randomChars);
      iteration++;
      if (iteration > text.length) {
        setDisplayText(text);
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 50);
  };

  const typewriterEffect = () => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 80);
  };

  const morphEffect = () => {
    const targetChars = text.split('');
    const currentChars = Array(text.length).fill('');
    let frame = 0;
    const maxFrames = 60;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / maxFrames;

      currentChars.forEach((_, index) => {
        if (Math.random() < progress) {
          currentChars[index] = targetChars[index];
        } else {
          currentChars[index] = String.fromCharCode(Math.random() * (90 - 65) + 65);
        }
      });

      setDisplayText(currentChars.join(''));

      if (frame >= maxFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, 30);
  };

  return (
    <motion.span
      className={`${className} ${!isComplete ? 'animate-pulse' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayText}
    </motion.span>
  );
};

export default FluidText;
