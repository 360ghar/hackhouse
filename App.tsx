import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import BentoFeatures from './components/BentoFeatures';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <BentoFeatures />
      <Pricing />
    </Layout>
  );
};

export default App;
