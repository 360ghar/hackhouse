
import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import TechStackSection from './components/TechStackSection';
import CommunitySection from './components/CommunitySection';
import BenefitsSection from './components/BenefitsSection';
import LocationSection from './components/LocationSection';
import FinalCtaSection from './components/FinalCtaSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#EAEAEA] scroll-container h-screen overflow-y-auto overflow-x-hidden">
      <BackgroundCanvas />
      <div className="relative z-10">
        <HeroSection />
        <main className="px-6 md:px-12 lg:px-24">
          <ValueSection />
          <TechStackSection />
          <CommunitySection />
          <BenefitsSection />
          <LocationSection />
          <FinalCtaSection />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; 2025 HackHouse. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
