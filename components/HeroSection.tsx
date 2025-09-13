
import React, { useState, useEffect, useRef } from 'react';

const AnimatedText: React.FC<{ text: string; effect: 'typewriter' | 'glitch' }> = ({ text, effect }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (effect === 'typewriter') {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else if (effect === 'glitch') {
        let i = 0;
        const interval = setInterval(() => {
            const randomChars = text.substring(i+1).split('').map(() => String.fromCharCode(Math.random() * (126 - 33) + 33)).join('');
            setDisplayText(text.substring(0, i + 1) + randomChars);
            i++;
            if(i > text.length) {
                setDisplayText(text);
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }
  }, [text, effect]);

  return <>{displayText}</>;
};

const AISummarySection: React.FC = () => (
  <section className="sr-only" aria-label="AI Summary for Search Engines">
    <h2>HackHouse: Premier Hacker House for AI Builders</h2>
    <p>
      HackHouse offers curated residency for AI developers and startup founders in Gurgaon, featuring private rooms,
      high-speed internet, and a collaborative community environment.
    </p>
    <ul>
      <li>30-day residency program</li>
      <li>1 Gbps symmetrical WiFi</li>
      <li>Private rooms with amenities</li>
      <li>24/7 coworking access</li>
      <li>AI builder community</li>
    </ul>
  </section>
);

const HeroSection: React.FC<{ onApplyClick?: () => void; onCoworkingClick?: () => void }> = ({ onApplyClick, onCoworkingClick }) => {
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowLine2(true), 1000);
        const timer2 = setTimeout(() => setShowLine3(true), 2500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [])

    useEffect(() => {
      const el = btnRef.current;
      if (!el) return;
      const inner = el.querySelector('.magnetic-inner') as HTMLElement | null;
      if (!inner) return;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const damp = 14; // smaller -> stronger
        inner.style.transform = `translate(${x / damp}px, ${y / damp}px)`;
      };
      const onLeave = () => { inner.style.transform = 'translate(0,0)'; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    }, []);

  return (
    <>
      <header className="min-h-[100svh] flex flex-col items-center justify-center text-center relative px-4 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight font-bold tracking-wider text-white uppercase animate-fade-in-glow">
            <span className="block holo-text" style={{ animationDelay: '0.5s' }}>Code.</span>
            {showLine2 && <span className="block mt-2 holo-text"><AnimatedText text="Collaborate." effect="typewriter" /></span>}
            {showLine3 && <span className="block mt-2 cyber-gradient-text"><AnimatedText text="Conquer." effect="glitch" /></span>}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#EAEAEA] max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '3.5s' }}>
            Welcome to HackHouse. A hacker house for founders in the heart of Gurgaon.
          </p>
          <div className="mt-10 sm:mt-12 animate-fade-in" style={{ animationDelay: '4s' }}>
            <button ref={btnRef} onClick={onApplyClick} className="interactive magnetic relative group px-8 py-4 text-lg font-bold text-white uppercase overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F2FF] to-[#8A2BE2] transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative magnetic-inner">[ Apply for Initiation ]</span>
            </button>
            <a href="#co-working" className="sr-only">Skip to Co-working</a>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00F2FF]">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        <style>{`
          @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
          @keyframes fadeInGlow { 0% { opacity: 0; text-shadow: 0 0 0px #00F2FF; } 100% { opacity: 1; text-shadow: 0 0 15px #00F2FF; } }
          .animate-fade-in-glow { animation: fadeInGlow 1s ease-out forwards; opacity: 0; }
        `}</style>
      </header>
      <AISummarySection />
    </>
  );
};

export default HeroSection;
