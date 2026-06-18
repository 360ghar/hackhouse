import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import Amenities from "@/components/landing/Amenities";
import Tools from "@/components/landing/Tools";
import ApplicationProcess from "@/components/landing/ApplicationProcess";
import CoworkingOption from "@/components/landing/CoworkingOption";
import ComparisonTable from "@/components/landing/ComparisonTable";
import AboutSection from "@/components/landing/AboutSection";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title="HackHouse Gurgaon - Co-Living Space for Founders & Builders"
        description="HackHouse Gurgaon: a curated co-living space for founders, developers, and builders. Get ₹60,000+ worth of resources for just ₹35,000/month. Fully-furnished stay, 3 meals, AI tools, and 1 Gbps internet."
        canonical="/"
        keywords="hacker house, co-living space, Gurgaon, co-living Gurgaon, hacker house India, startup co-living, founders, developers, PG for developers Gurgaon, builder house, startup house Gurgaon, co-living Delhi NCR"
      />
      <Header onApplyClick={handleApplyClick} />
      <Hero onApplyClick={handleApplyClick} />
      <ValueProposition />
      <Amenities />
      <Tools />
      <ComparisonTable />
      <ApplicationProcess onApplyClick={handleApplyClick} />
      <CoworkingOption onApplyClick={handleApplyClick} />
      <AboutSection />
      <FAQ />
      <FinalCTA onApplyClick={handleApplyClick} />
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Index;
