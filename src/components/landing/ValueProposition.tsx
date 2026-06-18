import { Focus, Users, Shuffle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ValueProposition = () => {
  const values = [
    {
      icon: Focus,
      title: "Extreme Focus",
      description: "No daily distractions. Ship faster than you ever have. The environment is optimized for deep work and rapid iteration.",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Users,
      title: "Smart Peers",
      description: "Everyone around you is coding, building products, and starting companies. That energy is contagious and elevates your game.",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Shuffle,
      title: "Serendipity by Design",
      description: "Many startups begin with: 'We met in a hacker house and decided to build together.' Your co-founder might be in the next room.",
      gradient: "from-primary/20 to-accent/5",
    },
  ];

  return (
    <section id="value" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">HackHouse?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than a residency — an accelerator for your ambitions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 100}>
              <div className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
