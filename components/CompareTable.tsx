import React from 'react';
import Section from './Section';

const Row: React.FC<{ label: string; coliving: string; coworking: string; index: number }> = ({ label, coliving, coworking, index }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 items-start glass-pane rounded-xl p-4 sm:p-5 ${index % 2 ? '' : ''}`}>
    <div className="text-sm text-[#EAEAEA]/80" data-font-mono>{label}</div>
    <div className="sm:col-span-1"><p className="text-[#EAEAEA]">{coliving}</p></div>
    <div className="sm:col-span-1"><p className="text-[#EAEAEA]">{coworking}</p></div>
  </div>
);

const CompareTable: React.FC = () => {
  const rows = [
    {
      label: 'Best for',
      coliving: 'Founders building full‑time who want community + living',
      coworking: 'Builders needing a high‑energy desk and mentor access',
    },
    {
      label: 'Stay / Access',
      coliving: 'Live‑in, 30‑day residency + 24/7 workspace',
      coworking: 'Day Pass • Night Owl',
    },
    {
      label: 'From Price',
      coliving: '₹30,000+/mo (room + meals + utilities)',
      coworking: '₹3,000+/mo',
    },
    {
      label: 'Perks',
      coliving: 'Private room, meals, 1 Gbps Wi‑Fi, community rituals',
      coworking: 'Fast Wi‑Fi, events, mentor office hours',
    },
  ];

  return (
    <Section className="pt-0" >
      <div id="compare" className="text-center mb-8">
        <h2 data-font-mono className="text-3xl md:text-4xl font-bold text-white">COMPARE: RESIDENCY VS CO‑WORKING</h2>
        <p className="text-[#EAEAEA]/80 mt-2">Two paths into the same builder community.</p>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div></div>
          <div className="text-center text-[#EAEAEA]/80" data-font-mono>Residency</div>
          <div className="text-center text-[#EAEAEA]/80" data-font-mono>Co‑working</div>
        </div>
        {rows.map((r, i) => (
          <Row key={r.label} label={r.label} coliving={r.coliving} coworking={r.coworking} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default CompareTable;
