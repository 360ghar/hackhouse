import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/landing/AnimatedSection";

const HackerHouseIndia = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What Is a Hacker House? The Complete Guide for India",
      description:
        "A hacker house is a shared living space where founders, developers, and creators live together to build startups and ship projects. Here is everything about hacker houses in India.",
      datePublished: "2026-05-15",
      dateModified: "2026-06-18",
      author: { "@type": "Organization", name: "HackHouse Team" },
      publisher: { "@id": "https://hackhouse.in/#organization" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://hackhouse.in/hacker-house-india" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a hacker house?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A hacker house is a shared living space where builders, developers, founders, designers, and creators live together for an intense period to build projects, collaborate deeply, and accelerate their startups. It is built around a single purpose: helping residents ship faster.",
          },
        },
        {
          "@type": "Question",
          name: "Are there hacker houses in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hacker houses have emerged in India as startup ecosystems in Delhi NCR, Bangalore, and Pune matured. HackHouse Gurgaon is a hacker house in the Delhi NCR region that offers fully-furnished stay, 3 meals, 1 Gbps internet, premium AI tools, and a curated community of 8 builders for ₹35,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a hacker house cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hacker houses in India typically charge between ₹25,000 and ₹40,000 per month, all-inclusive of stay, meals, internet, and amenities. HackHouse Gurgaon charges ₹35,000 per month and includes shared access to premium AI tools worth ₹20,000+ per month.",
          },
        },
      ],
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title="What Is a Hacker House? Hacker Houses in India | HackHouse"
        description="A hacker house is shared living for founders and developers to build startups faster. Hacker houses in India cost ₹25,000 to ₹40,000/month. Learn what they are and how HackHouse Gurgaon works."
        canonical="/hacker-house-india"
        keywords="hacker house, hacker house India, what is a hacker house, hacker house Delhi NCR, hacker house Gurgaon"
        jsonLd={jsonLd}
      />
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <div className="container mx-auto px-4 max-w-4xl pt-40 pb-24">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Home className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Hacker House Guide</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            What Is a <span className="text-gradient">Hacker House?</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            A hacker house is a shared living space where founders, developers, and creators live
            together to build startups and ship projects faster. Here is everything about hacker
            houses in India.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">What is a hacker house?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A hacker house is a shared living space where builders, developers, founders,
              designers, and creators live together for an intense period to build projects,
              collaborate deeply, and accelerate their startups. Think of it as an ashram for startup
              energy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike a regular PG or co-living space, a hacker house is built around a single purpose:
              helping residents ship faster. Everyone in the house is actively working on something,
              and the environment is engineered for deep work, serendipity, and collaboration.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Where did hacker houses come from?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The concept traces back to early startup hubs in Silicon Valley, where founders would
              rent houses together to cut costs and build around the clock. Y Combinator's early
              cohorts popularized the idea of founders living and working in close proximity. The
              pattern repeated in cities like San Francisco, Berlin, and Bangalore.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In India, hacker houses have emerged as startup ecosystems in Delhi NCR, Bangalore, and
              Pune matured. They sit between a PG (which offers only a room) and an accelerator (which
              offers capital and programming) by offering community, infrastructure, and focus without
              equity.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Who is a hacker house for?</h2>
            <ul className="space-y-2">
              {[
                "Early-stage founders who want a high-energy environment to build their MVP.",
                "Developers working on side projects, open-source tools, or a startup.",
                "Designers and creators who want to be surrounded by builders.",
                "Tech professionals between jobs who want to ship something of their own.",
                "Remote workers who want community instead of isolation.",
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
            <h2 className="font-heading text-3xl font-bold mb-4">How is a hacker house different from a PG?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A PG gives you a bed. A co-working space gives you a desk. A hacker house gives you
              both, plus a curated community of builders, shared access to premium tools, mentorship,
              and an environment optimized for shipping.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The key difference is intent. In a PG, your neighbors may be students or professionals
              with unrelated goals. In a hacker house, everyone is building something, which creates a
              contagious energy and opens the door to co-founder relationships, collaborations, and
              feedback loops you cannot get from a desk rental.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Hacker houses in India</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hacker houses in India typically charge between ₹25,000 and ₹40,000 per month,
              all-inclusive of stay, meals, internet, and amenities. HackHouse Gurgaon charges Rs
              35,000 per month and includes shared access to premium AI tools worth ₹20,000+ per
              month, 1 Gbps internet, 3 daily meals, and a curated community of 8 builders.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For comparison, a standalone PG in Gurgaon costs ₹12,000 to ₹20,000, a co-working
              desk costs ₹5,000 to ₹15,000, and premium AI tool subscriptions cost ₹15,000+ per
              month. Bundled together, a hacker house often costs less than buying these separately.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12 glass rounded-2xl p-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-3">Join HackHouse Gurgaon</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              India's curated hacker house for founders and developers. ₹35,000/month, all-inclusive.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 glow-primary font-heading"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-4">
            <Link to="/co-living-gurgaon" className="text-primary hover:underline flex items-center gap-1">
              Co-living in Gurgaon <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/blog/what-is-a-hacker-house" className="text-primary hover:underline flex items-center gap-1">
              Full hacker house guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default HackerHouseIndia;
