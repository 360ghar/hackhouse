import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a hacker house?",
      answer:
        "A hacker house is a shared living space where builders—developers, founders, designers, and creators—live together for an intense period to build projects, collaborate deeply, and accelerate their startups. Think of it as an ashram for startup energy.",
    },
    {
      question: "Who is HackHouse for?",
      answer:
        "HackHouse is for early-stage founders, developers, designers, and tech professionals who are actively building something—whether it's a startup, side project, or open-source tool. We look for people who are ambitious, collaborative, and want to be part of a high-energy community.",
    },
    {
      question: "How long can I stay?",
      answer:
        "The minimum stay is 1 month, and most residents stay for 2-6 months. We're flexible with extensions based on your progress and fit with the community. Some of our best success stories came from longer stays.",
    },
    {
      question: "What's included in the ₹35,000/month?",
      answer:
        "Everything you need: fully-furnished double-sharing room, 3 meals daily, 1 Gbps internet with 24×7 backup, shared access to premium AI tools (Claude Max, Cursor, ChatGPT, etc.), weekly events, mentorship sessions, and a curated community of 8 builders.",
    },
    {
      question: "How do I get selected?",
      answer:
        "Apply through our form, and we'll schedule a 15-minute chat to understand your goals and what you're building. We select based on ambition, what you're working on, and potential fit with the current cohort. We notify within 48 hours.",
    },
    {
      question: "Can I try before committing?",
      answer:
        "Yes! We offer daily passes (₹500) and monthly co-working passes (₹5,000) so you can experience the space and community before deciding to move in.",
    },
    {
      question: "Where is HackHouse located in Gurgaon?",
      answer:
        "We're located in the heart of Gurgaon, close to major tech hubs and well-connected by metro. The exact address is shared after your application is approved.",
    },
    {
      question: "Is there a selection process?",
      answer:
        "Yes, we're selective to ensure a high-quality community. We look for builders who are actively working on projects, have clear goals, and will contribute positively to the house culture. It's not just about credentials—it's about energy and intent.",
    },
    {
      question: "How is HackHouse different from a regular PG?",
      answer:
        "A PG just gives you a bed. HackHouse gives you a curated community of builders, premium AI tools worth ₹20,000+/month, weekly mentorship, and demo day prep. It's a startup residency built for people shipping things, not just renting a room.",
    },
    {
      question: "Is HackHouse accessible from Delhi?",
      answer:
        "Yes! We're in Gurgaon with excellent metro connectivity to Delhi NCR. Most residents commute easily between HackHouse and Delhi for meetings, events, or networking.",
    },
    {
      question: "Do you offer refunds if it's not a good fit?",
      answer:
        "Yes. If HackHouse isn't working out, we offer a pro-rated refund for any unused days within your first week. After the first week, refunds follow your agreement terms. Just talk to us and we'll sort it out fairly.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
