
import React from 'react';
import Section from './Section';

const LocationSection: React.FC = () => {
  return (
    <Section className="text-center">
      <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
        THE EPICENTER: SECTOR 50, GURGAON.
      </h2>
      <div className="relative w-full max-w-4xl mx-auto my-16 aspect-video flex items-center justify-center">
        {/* Simplified SVG Map for illustration */}
        <svg width="100%" height="100%" viewBox="0 0 500 281" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="road-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00F2FF" />
                    <stop offset="100%" stopColor="#8A2BE2" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {/* Roads */}
            <path d="M5 270 L150 150 L250 160 L350 100 L495 120" stroke="url(#road-gradient)" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M10 5 L100 100 L120 250 L200 275" stroke="url(#road-gradient)" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M490 5 L300 150 L280 270" stroke="url(#road-gradient)" strokeWidth="1" strokeOpacity="0.3" />
            
            {/* Main Location Beacon */}
            <g transform="translate(250, 160)">
                <circle cx="0" cy="0" r="10" fill="#00F2FF" filter="url(#glow)"/>
                <circle cx="0" cy="0" r="20" stroke="#00F2FF" strokeWidth="1" fill="none">
                    <animate attributeName="r" from="10" to="40" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="15" y="5" fill="#FFFFFF" fontSize="10" fontFamily="IBM Plex Mono">HackHouse</text>
            </g>

            {/* Other POIs */}
            <g className="poi group" transform="translate(350, 100)">
                <circle cx="0" cy="0" r="5" fill="#8A2BE2"/>
                <text className="poi-label" x="8" y="4" fill="#EAEAEA" fontSize="8">Tech Park</text>
            </g>
            <g className="poi group" transform="translate(100, 100)">
                <circle cx="0" cy="0" r="5" fill="#8A2BE2"/>
                <text className="poi-label" x="8" y="4" fill="#EAEAEA" fontSize="8">Metro Station</text>
            </g>
             <g className="poi group" transform="translate(150, 220)">
                <circle cx="0" cy="0" r="5" fill="#8A2BE2"/>
                <text className="poi-label" x="-50" y="4" fill="#EAEAEA" fontSize="8">Cyber Hub</text>
            </g>
        </svg>
        <style>{`
            .poi-label {
                opacity: 0;
                transition: opacity 0.3s;
                font-family: 'IBM Plex Mono', monospace;
            }
            .poi.group:hover .poi-label {
                opacity: 1;
            }
            .poi.group circle {
                transition: r 0.3s;
            }
             .poi.group:hover circle {
                r: 7;
            }
        `}</style>
      </div>
      <p className="text-lg text-[#EAEAEA] max-w-2xl mx-auto">
        Located in a serene, green neighborhood, yet minutes away from the hustle of Gurgaon's top tech parks and social hubs. The perfect launchpad.
      </p>
    </Section>
  );
};

export default LocationSection;
