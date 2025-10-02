import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  lines: string[];
  delay?: number;
  speed?: number;
  showCursor?: boolean;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  lines, 
  delay = 0,
  speed = 50,
  showCursor = true 
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      if (charIndex < lines[currentLineIndex].length) {
        setCurrentText(lines[currentLineIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setDisplayedLines([...displayedLines, lines[currentLineIndex]]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentText('');
        setCharIndex(0);
      }
    }, charIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentLineIndex, lines, displayedLines, delay, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-sm md:text-base glass-pane rounded-lg p-4 md:p-6 border border-green-500/30"
      style={{
        backgroundColor: 'rgba(0, 20, 0, 0.6)',
        boxShadow: '0 0 20px rgba(57, 255, 20, 0.1)',
      }}
    >
      {displayedLines.map((line, index) => (
        <div key={index} className="text-green-400 mb-1">
          <span className="text-green-500 mr-2">{'>'}</span>
          {line}
        </div>
      ))}
      {currentText && (
        <div className="text-green-400">
          <span className="text-green-500 mr-2">{'>'}</span>
          {currentText}
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TerminalText;
