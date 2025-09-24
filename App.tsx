
import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import { Helmet } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import TechStackSection from './components/TechStackSection';
import CommunitySection from './components/CommunitySection';
import BenefitsSection from './components/BenefitsSection';
import LocationSection from './components/LocationSection';
import FinalCtaSection from './components/FinalCtaSection';
import ApplicationFormModal from './components/ApplicationFormModal';
import CoWorkingSection from './components/CoWorkingSection';
import CompareTable from './components/CompareTable';
import OfferSwitch from './components/OfferSwitch';

const App: React.FC = () => {
  const [applyOpen, setApplyOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'coliving' | 'coworking' | 'tour'>('coliving');
  const [offer, setOffer] = useState<'coliving' | 'coworking'>('coliving');

  return (
    <div id="scrollRoot" className="bg-[#0A0A0A] text-[#EAEAEA] scroll-container h-screen overflow-y-auto overflow-x-hidden">
      <Helmet>
        <title>HackHouse - Premium Hacker House for AI Builders in Gurgaon | Apply Now</title>
        <meta name="description" content="HackHouse is India's premier hacker house for AI builders, offering curated residency in Gurgaon with 1Gbps WiFi, private rooms, and a thriving founder community." />
      </Helmet>

      {/* Background systems */}
      <BackgroundCanvas />
      <div className="grid-overlay layer-bg" aria-hidden="true"></div>
      <div className="ambient-aurora layer-bg" aria-hidden="true">
        <span className="aurora a1"></span>
        <span className="aurora a2"></span>
        <span className="aurora a3"></span>
      </div>

      <div className="relative z-10">
        <HeroSection
          onApplyClick={() => { setModalMode('coliving'); setApplyOpen(true); }}
          onCoworkingClick={() => { setModalMode('coworking'); setApplyOpen(true); }}
        />
        <main className="px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-center pt-6">
            <OfferSwitch
              value={offer}
              onChange={(next) => {
                setOffer(next);
                const id = next === 'coworking' ? 'co-working' : 'residency';
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />
          </div>
          <div id="residency" />
          <ValueSection />
          <TechStackSection />
          <CommunitySection />
          <BenefitsSection />
          <CoWorkingSection
            onGetDeskClick={() => { setModalMode('coworking'); setApplyOpen(true); }}
            onBookTourClick={() => { setModalMode('tour'); setApplyOpen(true); }}
          />
          <CompareTable />
          <LocationSection />
          <FinalCtaSection onApplyClick={() => { setModalMode('coliving'); setApplyOpen(true); }} />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; 2025 HackHouse. All rights reserved.</p>
        </footer>
      </div>
      <ApplicationFormModal open={applyOpen} onClose={() => setApplyOpen(false)} mode={modalMode} />
    </div>
  );
};

export default App;
