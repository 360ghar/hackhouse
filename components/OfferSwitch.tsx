import React from 'react';

type Offer = 'coliving' | 'coworking';

const OfferSwitch: React.FC<{
  value: Offer;
  onChange: (next: Offer) => void;
  className?: string;
}> = ({ value, onChange, className = '' }) => {
  return (
    <div className={`inline-flex rounded-full glass-pane p-1 border border-white/10 ${className}`} role="tablist" aria-label="Choose offering">
      {([
        { key: 'coliving', label: 'Residency' },
        { key: 'coworking', label: 'Co‑working' },
      ] as const).map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.key)}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition relative ${
              active
                ? 'text-black'
                : 'text-[#EAEAEA]/80 hover:text-white'
            }`}
          >
            {active && (
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)]" />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default OfferSwitch;

