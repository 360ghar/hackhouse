import { MapPin, Phone, Mail, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">HackHouse</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A startup residency for founders, developers, and builders in Gurgaon, India.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              HackHouse is a startup residency in Sector 50, Gurgaon, designed
              for early-stage founders, developers, and builders who want to ship faster. Each cohort
              is limited to 8 curated residents to keep the community tight and the energy high. We
              bundle stay, meals, 1 Gbps internet, premium AI tools, and weekly mentorship into a
              single Rs 35,000/month fee so you can focus on building instead of managing logistics.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Curated cohorts</h3>
                  <p className="text-muted-foreground text-sm">
                    8 builders per cohort, selected for ambition and active building.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Sector 50, Gurgaon</h3>
                  <p className="text-muted-foreground text-sm">
                    Central Gurgaon, metro-connected to Delhi NCR.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Contact</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+919999900876" className="hover:text-foreground">+91-9999900876</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:hello@hackhouse.in" className="hover:text-foreground">hello@hackhouse.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
