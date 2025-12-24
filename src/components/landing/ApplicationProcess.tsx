import { FileText, MessageSquare, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface ApplicationProcessProps {
  onApplyClick: () => void;
}

const ApplicationProcess = ({ onApplyClick }: ApplicationProcessProps) => {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Apply Online",
      description: "Fill out a quick form about yourself and what you're building",
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Quick Chat",
      description: "15-min call to understand your goals and if we're a good fit",
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Get Selected",
      description: "We'll notify you within 48 hours of your application",
    },
    {
      icon: Home,
      step: "04",
      title: "Move In",
      description: "Pack your bags and join the tribe. It's that simple.",
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            How to <span className="text-gradient">Join</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A straightforward process designed for busy builders.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 150}>
              <div className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-2 relative z-10 h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs text-accent font-bold tracking-wider">{step.step}</span>
                  <h3 className="font-heading font-bold text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 glow-primary font-heading text-lg px-10 py-6"
            onClick={onApplyClick}
          >
            Start Your Application
          </Button>
          <p className="text-muted-foreground text-sm mt-4">Takes less than 5 minutes</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ApplicationProcess;
