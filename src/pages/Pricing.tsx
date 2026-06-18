import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/landing/AnimatedSection";

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "HackHouse Co-Living Membership",
      description:
        "Fully-furnished double-sharing room, 3 meals daily, 1 Gbps internet, premium AI tools, weekly events, mentorship, and a curated community of 8 builders in Gurgaon.",
      url: "https://hackhouse.in/pricing",
      brand: { "@id": "https://hackhouse.in/#organization" },
      offers: [
        {
          "@type": "Offer",
          name: "Co-Living Membership",
          price: "35000",
          priceCurrency: "INR",
          availability: "https://schema.org/LimitedAvailability",
          description: "Monthly all-inclusive co-living membership.",
        },
        {
          "@type": "Offer",
          name: "Daily Co-Working Pass",
          price: "500",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          description: "Full day workspace access with WiFi and community lunch.",
        },
        {
          "@type": "Offer",
          name: "Monthly Co-Working Pass",
          price: "5000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          description: "Unlimited monthly workspace access with events and workshops.",
        },
      ],
    },
  ];

  const breakdown = [
    { item: "Fully-furnished double-sharing room", standalone: "₹15,000/month", included: true },
    { item: "3 healthy meals daily", standalone: "₹10,000-15,000/month", included: true },
    { item: "1 Gbps internet + 24x7 backup", standalone: "₹4,000/month", included: true },
    { item: "Premium AI tools (Claude Max, Cursor, ChatGPT, etc.)", standalone: "₹20,000+/month", included: true },
    { item: "Curated community of 8 builders", standalone: "Priceless", included: true },
    { item: "Weekend launch sprints & mentorship", standalone: "Priceless", included: true },
  ];

  const passes = [
    {
      name: "Daily Pass",
      price: "₹500",
      period: "/day",
      features: ["Full day workspace access", "High-speed WiFi", "Community lunch", "Networking opportunity"],
    },
    {
      name: "Monthly Pass",
      price: "₹5,000",
      period: "/month",
      features: ["Unlimited workspace access", "High-speed WiFi", "Community events", "Access to workshops", "Networking with residents"],
      popular: true,
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title="Pricing: HackHouse Gurgaon Co-Living & Co-Working | ₹35,000/month"
        description="HackHouse Gurgaon pricing: ₹35,000/month all-inclusive co-living (room, meals, internet, AI tools), ₹500/day co-working pass, and ₹5,000/month co-working pass. Full value breakdown."
        canonical="/pricing"
        keywords="HackHouse pricing, co-living Gurgaon price, hacker house cost India, coworking Gurgaon price"
        jsonLd={jsonLd}
      />
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <div className="container mx-auto px-4 max-w-4xl pt-40 pb-24">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
            HackHouse <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
            Get resources worth ₹60,000+ per month for just ₹35,000. All-inclusive, no hidden
            charges.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12 glass rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div>
                <p className="text-muted-foreground mb-2">Total standalone value</p>
                <p className="font-heading text-4xl md:text-5xl font-bold">
                  <span className="line-through text-muted-foreground/50">₹60,000+</span>
                </p>
                <p className="text-sm text-muted-foreground">if purchased separately</p>
              </div>
              <div className="text-4xl text-muted-foreground">→</div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-2">HackHouse price</p>
                <p className="font-heading text-5xl md:text-6xl font-bold text-gradient">₹35,000</p>
                <p className="text-sm text-accent font-medium">per month, all-inclusive</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">What is included in ₹35,000/month?</h2>
            <div className="glass rounded-2xl p-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-heading">Item</th>
                    <th className="text-left py-3 font-heading">Standalone cost</th>
                    <th className="text-left py-3 font-heading text-primary">At HackHouse</th>
                  </tr>
                </thead>
                <tbody>
                  {breakdown.map((row) => (
                    <tr key={row.item} className="border-b border-border/50">
                      <td className="py-3 font-medium">{row.item}</td>
                      <td className="py-3 text-muted-foreground">{row.standalone}</td>
                      <td className="py-3 text-primary">
                        <Check className="w-4 h-4" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Not ready to move in? Co-working passes</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {passes.map((plan) => (
                <div
                  key={plan.name}
                  className={`glass rounded-2xl p-8 relative ${plan.popular ? "border-primary/50" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary-foreground">BEST VALUE</span>
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-xl mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="font-heading text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-muted-foreground text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full font-heading ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  >
                    Apply for {plan.name}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Refund policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              If HackHouse is not working out, we offer a pro-rated refund for any unused days within
              your first week. After the first week, refunds follow your agreement terms. Just talk to
              us and we will sort it out fairly.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="glass rounded-2xl p-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-3">Ready to join?</h2>
            <p className="text-muted-foreground mb-6">Takes less than 5 minutes to apply.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-primary font-heading"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
              </Button>
              <a href="tel:+919999900876">
                <Button size="lg" variant="outline" className="font-heading w-full">
                  <Phone className="mr-2 w-4 h-4" />
                  9999900876
                </Button>
              </a>
            </div>
          </section>
        </AnimatedSection>

        <div className="mt-8">
          <Link to="/co-living-gurgaon" className="text-primary hover:underline">
            Learn more about co-living in Gurgaon →
          </Link>
        </div>
      </div>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Pricing;
