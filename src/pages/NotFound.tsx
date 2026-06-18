import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main id="main-content" className="min-h-screen bg-background font-body flex flex-col">
      <SEO
        title="Page Not Found | HackHouse Gurgaon"
        description="The page you're looking for doesn't exist. Return to the HackHouse homepage to explore our startup residency for founders and developers in Gurgaon."
        noindex
      />
      <Header onApplyClick={handleApplyClick} />
      <div className="flex-1 flex items-center justify-center px-4 pt-24">
        <div className="glass rounded-2xl p-10 md:p-16 text-center max-w-lg w-full">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Page not found</span>
          </div>
          <h1 className="font-heading text-7xl md:text-8xl font-bold mb-4 text-gradient">
            404
          </h1>
          <p className="text-xl text-foreground mb-3 font-heading">
            Oops! This page wandered off.
          </p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or may have moved. You might have followed
            a broken link or mistyped the address.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 glow-primary font-heading group">
              <Home className="mr-2 w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default NotFound;
