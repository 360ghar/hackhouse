
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

const App: React.FC = () => {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div id="scrollRoot" className="bg-[#0A0A0A] text-[#EAEAEA] scroll-container h-screen overflow-y-auto overflow-x-hidden">
      <Helmet>
        <title>HackHouse - Premium Hacker House for AI Builders in Gurgaon | Apply Now</title>
        <meta name="description" content="HackHouse is India's premier hacker house for AI builders, offering curated residency in Gurgaon with 1Gbps WiFi, private rooms, and a thriving founder community." />
      </Helmet>
      <BackgroundCanvas />
      <div className="relative z-10">
        <HeroSection onApplyClick={() => setApplyOpen(true)} />
        <main className="px-6 md:px-12 lg:px-24">
          <ValueSection />
          <TechStackSection />
          <CommunitySection />
          <BenefitsSection />
          <LocationSection />
          <FinalCtaSection onApplyClick={() => setApplyOpen(true)} />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; 2025 HackHouse. All rights reserved.</p>
        </footer>
      </div>
      <ApplicationFormModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
};

export default App;
