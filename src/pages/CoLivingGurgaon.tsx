import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/landing/AnimatedSection";

const CoLivingGurgaon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Startup Residency",
      name: "HackHouse Startup Residency Gurgaon",
      description:
        "Startup residency for founders, developers, and builders in Sector 50, Gurgaon. Fully-furnished stay, 3 meals daily, 1 Gbps internet, premium AI tools, and a community of 8 builders for ₹35,000/month.",
      url: "https://hackhouse.in/co-living-gurgaon",
      provider: { "@id": "https://hackhouse.in/#organization" },
      areaServed: { "@type": "City", name: "Gurgaon" },
      offers: {
        "@type": "Offer",
        price: "35000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does co-living in Gurgaon cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Co-living in Gurgaon costs between ₹12,000 and ₹35,000 per month depending on room type, location, and amenities. HackHouse Gurgaon charges ₹35,000 per month all-inclusive, covering a double-sharing room, 3 daily meals, 1 Gbps internet, premium AI tools, and a curated community.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the best location for co-living in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best locations for co-living in Gurgaon are Sector 50, Sector 56, Golf Course Road, and Cyber City-adjacent areas. These neighborhoods offer strong metro connectivity, proximity to startup offices, and a density of cafes and co-working spaces. HackHouse is located in Sector 50, Gurgaon.",
          },
        },
        {
          "@type": "Question",
          name: "Is co-living better than a PG in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For builders and founders, co-living is better than a PG. A PG gives you a bed, while co-living bundles furnished rooms, meals, internet, community, and often tools and mentorship. HackHouse additionally curates residents who are actively building, which creates collaboration a regular PG cannot offer.",
          },
        },
      ],
    },
  ];

  const comparison = [
    { feature: "Furnished room", pg: "Basic", coworking: "No", hackhouse: "Modern + workspace" },
    { feature: "Daily meals", pg: "Sometimes", coworking: "No", hackhouse: "3 meals included" },
    { feature: "1 Gbps internet", pg: "Rarely", coworking: "Yes", hackhouse: "Yes + backup" },
    { feature: "Premium AI tools", pg: "No", coworking: "No", hackhouse: "₹20,000+ value" },
    { feature: "Curated community", pg: "No", coworking: "Partial", hackhouse: "8 builders" },
    { feature: "Mentorship", pg: "No", coworking: "No", hackhouse: "Weekly" },
    { feature: "All-inclusive price", pg: "₹12-18k", coworking: "₹5-15k", hackhouse: "₹35,000" },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title="Co-Living in Gurgaon: Costs, Locations & Best Spaces | HackHouse"
        description="Co-living in Gurgaon costs ₹12,000 to ₹35,000/month. HackHouse in Sector 50 offers fully-furnished stay, 3 meals, 1 Gbps internet, and premium AI tools for ₹35,000/month all-inclusive."
        canonical="/co-living-gurgaon"
        keywords="co-living Gurgaon, co-living space Gurgaon, co-living Gurgaon price, best co-living Gurgaon, PG vs co-living Gurgaon"
        jsonLd={jsonLd}
      />
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <div className="container mx-auto px-4 max-w-4xl pt-40 pb-24">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Gurgaon Guide</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Co-Living in <span className="text-gradient">Gurgaon</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Co-living in Gurgaon costs ₹12,000 to ₹35,000 per month depending on amenities.
            HackHouse in Sector 50 is a startup residency for founders — fully-furnished stay, 3 meals, 1 Gbps internet, and premium
            AI tools for ₹35,000/month all-inclusive.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">How much does co-living in Gurgaon cost?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Co-living in Gurgaon costs between ₹12,000 and ₹35,000 per month depending on room
              type, location, and amenities. A basic double-sharing PG costs ₹12,000 to ₹18,000,
              a single room costs ₹18,000 to ₹28,000, and premium co-living with meals, internet,
              and community costs ₹25,000 to ₹35,000.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              HackHouse Gurgaon charges ₹35,000 per month all-inclusive, which covers a
              double-sharing room, 3 daily meals, 1 Gbps internet with 24x7 power backup, shared
              premium AI tools, and a curated community of 8 builders.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">What is included in a typical co-living rent?</h2>
            <ul className="space-y-2 mb-4">
              {[
                "Furnished room with bed, wardrobe, and workspace (₹12,000 to ₹18,000 standalone).",
                "3 meals daily, usually breakfast, lunch, and dinner (₹8,000 to ₹15,000 standalone).",
                "High-speed internet, typically 100 Mbps to 1 Gbps (₹1,000 to ₹4,000 standalone).",
                "Power backup, housekeeping, and maintenance (₹2,000 to ₹4,000 standalone).",
                "Community events, mentorship, and networking (variable).",
              ].map((item) => (
                <li key={item} className="text-muted-foreground flex gap-2">
                  <span className="text-accent shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Best locations for co-living in Gurgaon</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The best locations for co-living in Gurgaon are Sector 50, Sector 56, Golf Course Road,
              and Cyber City-adjacent areas. These neighborhoods offer strong metro connectivity,
              proximity to startup offices, and a density of cafes and co-working spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sector 50 is centrally located with easy access to the Rapid Metro and HUDA City Centre
              metro station, connecting to both Delhi and Gurgaon's tech hubs. HackHouse is located in
              Sector 50, Gurgaon.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12 glass rounded-2xl p-8 overflow-x-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">HackHouse vs PG vs Co-working</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-heading">Feature</th>
                  <th className="text-left py-3 font-heading">Regular PG</th>
                  <th className="text-left py-3 font-heading">Co-working</th>
                  <th className="text-left py-3 font-heading text-primary">HackHouse</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 font-medium">{row.feature}</td>
                    <td className="py-3 text-muted-foreground">{row.pg}</td>
                    <td className="py-3 text-muted-foreground">{row.coworking}</td>
                    <td className="py-3 text-primary font-medium">{row.hackhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Is Gurgaon well-connected to Delhi?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Yes. Gurgaon is connected to Delhi via the Delhi Metro Yellow Line and the Rapid Metro.
              HUDA City Centre metro station connects directly to Rajiv Chowk in central Delhi in
              roughly 45 minutes. The Dwarka Expressway and NH-48 also link Gurgaon to Delhi by road.
              Most HackHouse residents commute easily between Gurgaon and Delhi for meetings, events,
              and networking.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12 glass rounded-2xl p-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-3">Experience HackHouse Gurgaon</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Startup residency for founders in Sector 50, Gurgaon. ₹35,000/month,
              all-inclusive.
            </p>
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

        <AnimatedSection>
          <div className="flex flex-wrap gap-4">
            <Link to="/hacker-house-india" className="text-primary hover:underline flex items-center gap-1">
              What is a hacker house? <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="text-primary hover:underline flex items-center gap-1">
              Full pricing breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default CoLivingGurgaon;
