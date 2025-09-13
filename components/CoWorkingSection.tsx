import React from 'react';
import Section from './Section';

type Props = {
  onGetDeskClick?: () => void;
  onBookTourClick?: () => void;
};

const PlanCard: React.FC<{ title: string; price: string; points: string[]; index: number }> = ({ title, price, points, index }) => (
  <div className="glass-pane rounded-xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-[var(--acc-purple)]/20 transition-transform duration-300" style={{ transitionDelay: `${index * 80}ms` }}>
    <div className="flex items-baseline justify-between">
      <h3 data-font-mono className="text-2xl font-bold text-white cyber-gradient-text">{title}</h3>
      <span className="text-[#EAEAEA]/80" data-font-mono>{price}</span>
    </div>
    <ul className="mt-4 space-y-2 text-[#EAEAEA]">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <svg className="w-5 h-5 text-[var(--acc-cyan)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Amenity: React.FC<{ label: string; icon: React.ReactNode }> = ({ label, icon }) => (
  <div className="glass-pane rounded-lg p-4 flex items-center gap-3">
    <div className="text-[var(--acc-cyan)]">{icon}</div>
    <span className="text-[#EAEAEA]">{label}</span>
  </div>
);

const CoWorkingSection: React.FC<Props> = ({ onGetDeskClick, onBookTourClick }) => {
  const plans = [
    { title: 'Day Pass', price: 'Flexible', points: ['Drop in, build', 'Pay per day', 'Community vibe'] },
    { title: 'Night Owl', price: 'From ₹3,000/mo', points: ['Evening/night access', 'Quiet hours focus', 'Great for side projects'] },
  ];

  const amenities = [
    { label: '1 Gbps Wi‑Fi', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20h.01M2 8.82A15.94 15.94 0 0 1 12 4c3.73 0 7.16 1.28 9.9 3.43M5 12.2A11.96 11.96 0 0 1 12 9c2.56 0 4.93.82 6.86 2.2M8.5 15.5A7.98 7.98 0 0 1 12 14c1.6 0 3.08.47 4.33 1.27"/></svg> },
    { label: 'Coffee + Snacks', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10h14a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4v-4z" strokeWidth="2"/><path d="M17 10V6" strokeWidth="2"/></svg> },
    { label: 'Events & Demos', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 5h18M3 12h18M3 19h18" strokeWidth="2"/></svg> },
    { label: 'Mentor Access', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="3" strokeWidth="2"/><path d="M2 20c0-3.314 2.686-6 6-6" strokeWidth="2"/><path d="M16 11l2 2 4-4" strokeWidth="2" strokeLinecap="round"/></svg> },
    { label: 'Community Slack', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 14a2 2 0 1 1 0-4h2v4H5zM9 19a2 2 0 1 1-4 0v-2h4v2zM14 5a2 2 0 1 1-4 0V3h4v2zM19 9a2 2 0 1 1 0-4h2v4h-2z" strokeWidth="2"/></svg> },
  ];

  return (
    <Section className="text-center">
      <div id="co-working" className="max-w-4xl mx-auto">
        <h2 data-font-mono className="text-4xl md:text-5xl font-bold text-white tracking-wider">
          CO‑WORKING FROM <span className="cyber-gradient-text">₹3,000/MO</span>
        </h2>
        <p className="mt-4 text-[#EAEAEA]/80">
          Grab a desk. Join the builders. Same community, flexible access.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onGetDeskClick} className="relative px-6 py-3 rounded-lg font-semibold text-black overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)]" />
            <span className="relative">Get a Desk</span>
          </button>
          <button onClick={onBookTourClick} className="px-6 py-3 rounded-lg border border-white/15 text-[#EAEAEA]/80 hover:text-white hover:border-white/40 transition">
            Book a Tour
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {plans.map((p, i) => (
            <PlanCard key={p.title} title={p.title} price={p.price} points={p.points} index={i} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <h3 data-font-mono className="text-2xl font-bold text-white mb-4">Amenities</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <Amenity key={a.label} label={a.label} icon={a.icon} />
            ))}
          </div>
          <p className="text-xs text-[#EAEAEA]/60 mt-4">Subject to availability.</p>
        </div>
      </div>
    </Section>
  );
};

export default CoWorkingSection;
