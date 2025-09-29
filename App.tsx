
import React, { useState } from 'react';
import EnhancedBackgroundCanvas from './components/EnhancedBackgroundCanvas';
import AdvancedCursor from './components/AdvancedCursor';
import { Helmet } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import EnhancedValueSection from './components/EnhancedValueSection';
import EnhancedTechStackSection from './components/EnhancedTechStackSection';
import EnhancedCommunitySection from './components/EnhancedCommunitySection';
import BenefitsSection from './components/BenefitsSection';
import LocationSection from './components/LocationSection';
import EnhancedFinalCtaSection from './components/EnhancedFinalCtaSection';
import ApplicationFormModal from './components/ApplicationFormModal';
import EnhancedCoWorkingSection from './components/EnhancedCoWorkingSection';
import CompareTable from './components/CompareTable';
import OfferSwitch from './components/OfferSwitch';

const App: React.FC = () => {
  const [applyOpen, setApplyOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'coliving' | 'coworking' | 'tour'>('coliving');
  const [offer, setOffer] = useState<'coliving' | 'coworking'>('coliving');

  return (
    <div id="scrollRoot" className="bg-[#0A0A0A] text-[#EAEAEA] scroll-container h-screen overflow-y-auto overflow-x-hidden">
      <Helmet>
        <title>HackHouse Protocol v4.7 - Neural Network for AI Builders | Gurgaon</title>
        <meta name="description" content="HackHouse Protocol: Elite neural network for AI builders. Curated residency in Gurgaon with 1Gbps neural link, quantum living pods, and high-velocity founder community. Only 8 slots available." />
      </Helmet>
      
      {/* Enhanced background layers */}
      <EnhancedBackgroundCanvas />
      
      {/* Advanced cursor effects */}
      <AdvancedCursor />
      
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
          <EnhancedValueSection />
          <EnhancedTechStackSection />
          <EnhancedCommunitySection />
          <BenefitsSection />
          <EnhancedCoWorkingSection
            onGetDeskClick={() => { setModalMode('coworking'); setApplyOpen(true); }}
            onBookTourClick={() => { setModalMode('tour'); setApplyOpen(true); }}
          />
          <CompareTable />
          <LocationSection />
          <EnhancedFinalCtaSection onApplyClick={() => { setModalMode('coliving'); setApplyOpen(true); }} />
        </main>
        
        <footer className="text-center py-12 text-gray-500 text-sm border-t border-white/5">
          <div className="font-mono text-xs text-cyan-400 mb-2">PROTOCOL_STATUS: ACTIVE</div>
          <p>&copy; 2025 HackHouse Protocol. All rights reserved.</p>
          <div className="mt-2 text-xs text-gray-600">
            Version 4.7.0 | Node: GURGAON-01 | Uptime: 99.9%
          </div>
        </footer>
      </div>
      
      <ApplicationFormModal open={applyOpen} onClose={() => setApplyOpen(false)} mode={modalMode} />
    </div>
  );
};

export default App;
