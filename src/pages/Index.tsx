import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import Amenities from "@/components/landing/Amenities";
import Tools from "@/components/landing/Tools";
import ApplicationProcess from "@/components/landing/ApplicationProcess";
import CoworkingOption from "@/components/landing/CoworkingOption";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
// import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background font-body">
      <Header onApplyClick={handleApplyClick} />
      <Hero onApplyClick={handleApplyClick} />
      <ValueProposition />
      <Amenities />
      <Tools />
      <ApplicationProcess onApplyClick={handleApplyClick} />
      <CoworkingOption />
      <FAQ />
      <FinalCTA onApplyClick={handleApplyClick} />
      {/* <Footer /> */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Index;
