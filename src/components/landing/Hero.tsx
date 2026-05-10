import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onApplyClick: () => void;
}

const Hero = ({ onApplyClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Only <span className="text-accent font-semibold">8 spots</span> available per cohort
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up stagger-1">
            Build Faster.{" "}
            <span className="text-gradient">Together.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up stagger-2 max-w-2xl mx-auto">
            Gurgaon's premier co-living space for startup founders, developers, and builders.
          </p>

          {/* Value Hook */}
          <div className="glass rounded-2xl p-6 mb-10 inline-block animate-fade-up stagger-3">
            <p className="text-lg md:text-xl">
              Get resources worth{" "}
              <span className="text-accent font-bold">₹60,000+/month</span>{" "}
              for just{" "}
              <span className="text-primary font-bold text-2xl md:text-3xl">₹30,000</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-primary font-heading text-lg px-8 py-6 group"
              onClick={onApplyClick}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary font-heading text-lg px-8 py-6"
              onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See What's Included
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up stagger-5">
            <div className="text-center">
              <p className="text-3xl font-heading font-bold text-foreground">8</p>
              <p className="text-sm">Curated Builders</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-heading font-bold text-foreground">1 Gbps</p>
              <p className="text-sm">Internet Speed</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-heading font-bold text-foreground">24×7</p>
              <p className="text-sm">Power Backup</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-heading font-bold text-foreground">15+</p>
              <p className="text-sm">Premium Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
