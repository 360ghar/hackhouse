
import React from 'react';
import Section from './Section';

const builders = [
  'THE AI MAVERICK', 'THE SAAS ARCHITECT', 'THE HARDWARE GURU',
  'THE DEFI WIZARD', 'THE GROWTH HACKER', 'THE UX VISIONARY',
  'THE ML ENGINEER', 'THE FULLSTACK PRO'
];

const communityBenefits = [
    'Handpicked tribe of 8 builders',
    'Weekend launch sprints & idea jams',
    'Direct mentorship from industry veterans',
    'High-collab, zero-distraction living'
];

const CommunitySection: React.FC = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full h-80 sm:h-96 lg:h-[400px] flex items-center justify-center">
            <div className="community-orb-container">
                {builders.map((builder, index) => (
                    <div key={index} className="orb-wrapper" style={{ transform: `rotate(${index * 45}deg) translateY(var(--orb-radius))` }}>
                        <div className="orb group">
                            <span className="orb-label">{builder}</span>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .community-orb-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    --orb-radius: -150px;
                    animation: slow-rotate 40s linear infinite;
                    transform-style: preserve-3d;
                }
                @media (max-width: 640px) {
                    .community-orb-container { --orb-radius: -120px; }
                }
                @keyframes slow-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .orb-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin: -25px;
                    width: 50px;
                    height: 50px;
                }
                .orb {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, #00F2FF, #8A2BE2 90%);
                    box-shadow: 0 0 10px #00F2FF, 0 0 20px #8A2BE2, inset 0 0 5px white;
                    transition: all 0.3s ease-out;
                    position: relative;
                }
                .orb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 20px #00F2FF, 0 0 40px #00F2FF;
                }
                .orb-label {
                    position: absolute;
                    bottom: 120%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #1C1C1E;
                    color: #EAEAEA;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.3s;
                    pointer-events: none;
                }
                .orb:hover .orb-label {
                    opacity: 1;
                }
                /* Mobile: show labels and slight scale by default */
                @media (hover: none) {
                  .orb-label { opacity: 1; }
                  .orb { transform: scale(1.06); }
                }
            `}</style>
        </div>
        <div>
          <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            FORGE ALLIANCES. NOT JUST NETWORKS.
          </h2>
          <div className="h-1 w-24 my-6 bg-gradient-to-r from-[#00F2FF] to-[#8A2BE2]"></div>
          <div className="space-y-4 mt-8">
            {communityBenefits.map((benefit, i) => (
                <div key={i} className="glass-pane p-4 rounded-lg flex items-center">
                    <svg className="w-6 h-6 mr-4 text-[#8A2BE2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <p className="text-lg">{benefit}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CommunitySection;
