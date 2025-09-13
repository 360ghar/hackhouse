
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const LocationSection: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    const tilt = tiltRef.current;
    if (!el || !tilt) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const rx = y * -6; // rotateX
      const ry = x * 8;  // rotateY
      tilt.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { tilt.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <Section className="text-center">
      <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
        THE EPICENTER: SECTOR 50, GURGAON.
      </h2>
      <div ref={wrapRef} className="interactive relative w-full max-w-4xl mx-auto my-12 sm:my-16 aspect-video flex items-center justify-center">
        {/* Futuristic HUD layers */}
        <div className="pointer-events-none absolute inset-0 hud-grid" aria-hidden="true"></div>
        <div className="pointer-events-none absolute inset-0 radar-sweep" aria-hidden="true"></div>

        {/* Orbit ring overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <svg width="92%" viewBox="0 0 100 100" className="orbit-scan">
            <defs>
              <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#ring-grad)" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
            <g className="orbit-rot">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#00F2FF" strokeWidth="0.4" strokeDasharray="1 4" opacity="0.4"/>
            </g>
          </svg>
        </div>

        {/* Main animated map */}
        <div ref={tiltRef} className="epicenter-tilt relative w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 500 281" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HackHouse location map with animated routes and beacon">
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
                <filter id="neon">
                    <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#00F2FF" flood-opacity="0.6"/>
                    <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#8A2BE2" flood-opacity="0.4"/>
                </filter>
                <radialGradient id="beacon" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00F2FF" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#00F2FF" stopOpacity="0"/>
                </radialGradient>
            </defs>
            {/* Animated neon routes */}
            <g stroke="url(#road-gradient)" strokeWidth="1.2" opacity="0.6" filter="url(#neon)">
              <path d="M5 270 L150 150 L250 160 L350 100 L495 120" strokeLinecap="round" strokeDasharray="6 12">
                <animate attributeName="stroke-dashoffset" from="0" to="-72" dur="6s" repeatCount="indefinite" />
              </path>
              <path d="M10 5 L100 100 L120 250 L200 275" strokeLinecap="round" strokeDasharray="6 12">
                <animate attributeName="stroke-dashoffset" from="0" to="-72" dur="7s" repeatCount="indefinite" />
              </path>
              <path d="M490 5 L300 150 L280 270" strokeLinecap="round" strokeDasharray="6 12">
                <animate attributeName="stroke-dashoffset" from="0" to="-72" dur="8s" repeatCount="indefinite" />
              </path>
            </g>
            
            {/* Main Location Beacon */}
            <g transform="translate(250, 160)" style={{ pointerEvents: 'none' }}>
                <circle cx="0" cy="0" r="28" fill="url(#beacon)" opacity="0.25"/>
                <circle cx="0" cy="0" r="6" fill="#00F2FF" filter="url(#glow)"/>
                <circle cx="0" cy="0" r="12" stroke="#00F2FF" strokeWidth="1" fill="none">
                    <animate attributeName="r" from="12" to="44" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.9" to="0" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <g>
                    <circle cx="0" cy="0" r="20" stroke="#8A2BE2" strokeWidth="1" fill="none" strokeDasharray="2 4" opacity="0.8">
                      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="18s" repeatCount="indefinite" />
                    </circle>
                </g>
                <text x="14" y="6" fill="#FFFFFF" fontSize="10" fontFamily="IBM Plex Mono">HackHouse</text>
            </g>

            {/* Other POIs as hex nodes */}
            <g className="poi group" transform="translate(350, 100)">
                <polygon points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3" fill="#8A2BE2" filter="url(#neon)"/>
                <text className="poi-label" x="8" y="4" fill="#EAEAEA" fontSize="8">Tech Park</text>
                <line x1="-5" y1="0" x2="-95" y2="40" stroke="#8A2BE2" strokeOpacity="0.3" strokeDasharray="2 4" />
            </g>
            <g className="poi group" transform="translate(100, 100)">
                <polygon points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3" fill="#8A2BE2" filter="url(#neon)"/>
                <text className="poi-label" x="8" y="4" fill="#EAEAEA" fontSize="8">Metro Station</text>
                <line x1="5" y1="0" x2="110" y2="55" stroke="#8A2BE2" strokeOpacity="0.3" strokeDasharray="2 4" />
            </g>
            <g className="poi group" transform="translate(150, 220)">
                <polygon points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3" fill="#8A2BE2" filter="url(#neon)"/>
                <text className="poi-label" x="-50" y="4" fill="#EAEAEA" fontSize="8">Cyber Hub</text>
                <line x1="0" y1="-6" x2="80" y2="-44" stroke="#8A2BE2" strokeOpacity="0.3" strokeDasharray="2 4" />
            </g>
        </svg>
        </div>
        <style>{`
            .epicenter-tilt { transition: transform var(--dur-slow) var(--ease-out); will-change: transform; }
            .hud-grid {
                background-image: 
                  linear-gradient(rgba(138,43,226,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,242,255,0.08) 1px, transparent 1px);
                background-size: 28px 28px, 28px 28px;
                background-position: center center;
                mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 70%);
            }
            .radar-sweep {
                background: conic-gradient(from 0deg, rgba(0,242,255,0.0), rgba(0,242,255,0.22) 20%, rgba(0,242,255,0.0) 25%) no-repeat;
                animation: spin 10s linear infinite;
                mask-image: radial-gradient(circle at center, black 40%, transparent 75%);
                opacity: 0.35;
            }
            .orbit-scan { filter: drop-shadow(0 0 6px rgba(0,242,255,0.35)) drop-shadow(0 0 10px rgba(138,43,226,0.25)); }
            .orbit-rot { animation: spin 24s linear infinite; transform-origin: 50px 50px; }
            @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
            .poi-label {
                opacity: 0;
                transition: opacity 0.3s;
                font-family: 'IBM Plex Mono', monospace;
            }
            .poi.group:hover .poi-label {
                opacity: 1;
            }
            .poi.group polygon { transition: transform var(--dur-base) var(--ease-out); }
            .poi.group:hover polygon { transform: scale(1.25); }
            
            /* Motion safety */
            @media (prefers-reduced-motion: reduce) {
              .radar-sweep { animation: none; }
              .orbit-rot { animation: none; }
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
