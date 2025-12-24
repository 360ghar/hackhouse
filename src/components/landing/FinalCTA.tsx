import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface FinalCTAProps {
  onApplyClick: () => void;
}

const FinalCTA = ({ onApplyClick }: FinalCTAProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="scale-in">
          <div className="glass rounded-3xl p-8 md:p-16 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Only 8 Spots Per Cohort</span>
            </div>

            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-gradient">Build Faster?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join a tribe of ambitious builders in the heart of Gurgaon. 
              Your next co-founder, investor, or mentor might be in the next room.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-primary font-heading text-lg px-10 py-7 group"
                onClick={onApplyClick}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-heading text-lg px-10 py-7"
              >
                Schedule a Visit
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mt-8">
              Application takes 5 minutes • Response within 48 hours
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
