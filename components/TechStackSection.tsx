
import React, { useEffect, useState, useRef } from 'react';
import Section from './Section';

const techLogos = [
  'Claude', 'ChatGPT', 'Midjourney', 'Adobe CC', 'Figma', 'Notion', 'GitHub', 'AWS'
];

const CountUp: React.FC<{ end: number }> = ({ end }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const frameRate = 60;
        const totalFrames = Math.round(duration / (1000 / frameRate));
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
            setCount(currentCount);

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, 1000 / frameRate);

        return () => clearInterval(counter);
    }, [end, inView]);

    return <span ref={ref}>₹{count.toLocaleString('en-IN')}+</span>;
};


const TechStackSection: React.FC = () => {
  return (
    <Section className="text-center">
      <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
        YOUR FOUNDER'S ARSENAL. UNLOCKED.
      </h2>
      <div className="relative w-full h-[400px] md:h-[500px] my-16 flex items-center justify-center">
        <div className="sphere-container">
          {techLogos.map((logo, i) => (
            <div
              key={logo}
              className="logo-orbit"
              style={{ animationDelay: `${-i * 1.5}s` }}
            >
              <div className="logo-card glass-pane">{logo}</div>
            </div>
          ))}
          <div className="sphere-core"></div>
        </div>
      </div>
      <p data-font-mono className="text-2xl md:text-3xl text-white">
        RESOURCES WORTH <span className="cyber-gradient-text"><CountUp end={60000} /></span>/MONTH
      </p>
      <p data-font-mono className="text-2xl md:text-3xl text-white mt-2">
        AT JUST ₹30,000.
      </p>
       <style>{`
        .sphere-container {
          width: 300px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-sphere 20s linear infinite;
        }
        @media (min-width: 768px) {
            .sphere-container { width: 400px; height: 400px; }
        }
        @keyframes rotate-sphere {
          from { transform: rotateY(0deg) rotateX(10deg); }
          to { transform: rotateY(360deg) rotateX(10deg); }
        }
        .sphere-core {
            position: absolute;
            top: 50%; left: 50%;
            width: 50px; height: 50px;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, #00F2FF, #8A2BE2 80%);
            border-radius: 50%;
            box-shadow: 0 0 30px #00F2FF, 0 0 60px #8A2BE2;
        }
        .logo-orbit {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          transform-style: preserve-3d;
          animation: rotate-orbit 12s linear infinite;
        }
        @keyframes rotate-orbit {
          from { transform: rotateY(0deg) rotateX(60deg) rotateZ(0deg); }
          to { transform: rotateY(360deg) rotateX(60deg) rotateZ(0deg); }
        }
        .logo-card {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) translateZ(150px) rotateY(0deg);
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'IBM Plex Mono', monospace;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        @media (min-width: 768px) {
            .logo-card { transform: translate(-50%, -50%) translateZ(200px); font-size: 16px; }
        }
        .logo-orbit:hover .logo-card {
            transform: translate(-50%, -50%) translateZ(160px) scale(1.1);
            box-shadow: 0 0 15px #00F2FF;
            color: #00F2FF;
        }
        @media (min-width: 768px) {
            .logo-orbit:hover .logo-card { transform: translate(-50%, -50%) translateZ(210px) scale(1.1); }
        }

       `}</style>
    </Section>
  );
};

export default TechStackSection;
