import { Coffee, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CoworkingOption = () => {
  const plans = [
    {
      icon: Coffee,
      title: "Daily Pass",
      price: "₹500",
      period: "/day",
      features: [
        "Full day workspace access",
        "High-speed WiFi",
        "Community lunch",
        "Networking opportunity",
      ],
      popular: false,
    },
    {
      icon: Calendar,
      title: "Monthly Pass",
      price: "₹5,000",
      period: "/month",
      features: [
        "Unlimited workspace access",
        "High-speed WiFi",
        "Community events",
        "Access to workshops",
        "Networking with residents",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Not Ready to <span className="text-gradient">Move In?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the HackHouse energy with our co-working options.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection 
              key={plan.title} 
              animation={index === 0 ? "slide-right" : "slide-left"}
              delay={index * 100}
            >
              <div
                className={`glass rounded-2xl p-8 relative h-full ${
                  plan.popular ? "border-primary/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary-foreground">BEST VALUE</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{plan.title}</h3>
                </div>

                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-heading ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Get {plan.title}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoworkingOption;
