import { Home, Utensils, Wifi, Users, Rocket, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Amenities = () => {
  const amenities = [
    {
      icon: Home,
      title: "Fully-Furnished Stay",
      description: "Double sharing rooms with modern furniture and workspace",
      value: "₹15,000/month",
    },
    {
      icon: Utensils,
      title: "3 Healthy Meals Daily",
      description: "Nutritious breakfast, lunch, and dinner prepared fresh",
      value: "₹10,000-15,000/month",
    },
    {
      icon: Wifi,
      title: "1 Gbps Internet + 24×7 Backup",
      description: "Lightning-fast connectivity with uninterrupted power",
      value: "₹4,000/month",
    },
    {
      icon: Users,
      title: "Curated Tribe of 8 Builders",
      description: "Handpicked founders, developers, and creators",
      value: "Priceless",
    },
    {
      icon: Rocket,
      title: "Weekend Launch Sprints",
      description: "Idea jams, mentorship sessions, and high-collaboration living",
      value: "Priceless",
    },
  ];

  const extras = [
    "Access to premium AI tools worth ₹20,000+/month",
    "Weekly community events and workshops",
    "Shared access to meeting room",
    "Mentorship from experienced founders",
    "Demo day preparation support",
    "Investor networking opportunities",
  ];

  return (
    <section id="amenities" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What's <span className="text-gradient">Included</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to focus on what matters most—building your startup.
          </p>
        </AnimatedSection>

        {/* Price Comparison Card */}
        <AnimatedSection animation="scale-in" className="mb-16">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-muted-foreground mb-2">Total Value</p>
                <p className="font-heading text-4xl md:text-5xl font-bold">
                  <span className="line-through text-muted-foreground/50">₹50,000-60,000</span>
                </p>
                <p className="text-sm text-muted-foreground">per month if purchased separately</p>
              </div>
              <div className="text-4xl text-muted-foreground">→</div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-2">HackHouse Price</p>
                <p className="font-heading text-5xl md:text-6xl font-bold text-gradient">
                  ₹35,000
                </p>
                <p className="text-sm text-accent font-medium">per month, all-inclusive</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <AnimatedSection key={amenity.title} delay={index * 80}>
              <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{amenity.description}</p>
                    <p className="text-accent text-sm font-medium">Usually {amenity.value}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Extra Benefits */}
        <AnimatedSection>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-bold mb-6 text-center">Plus These Extras</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {extras.map((extra) => (
                <div key={extra} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">{extra}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Amenities;
