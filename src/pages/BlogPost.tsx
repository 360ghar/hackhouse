import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/landing/AnimatedSection";
import { getPostBySlug } from "@/content/blogPosts";
import { useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author,
      description: post.authorBio,
    },
    publisher: {
      "@id": "https://hackhouse.in/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hackhouse.in/blog/${post.slug}`,
    },
    image: "https://hackhouse.in/og-image.png",
  };

  const faqJsonLd = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title={`${post.title} | HackHouse Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        keywords={post.category}
        jsonLd={faqJsonLd ? [jsonLd, faqJsonLd] : jsonLd}
      />
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <article className="container mx-auto px-4 max-w-3xl pt-32 pb-24">
        <AnimatedSection>
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="glass px-3 py-1 rounded-full text-accent">{post.category}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.datePublished).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{post.description}</p>
        </AnimatedSection>

        <div className="prose prose-invert max-w-none">
          {post.sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <section className="mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-8">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mb-4">
                    {section.list.map((item, j) => (
                      <li key={j} className="text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-accent shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </AnimatedSection>
          ))}
        </div>

        {post.faq && post.faq.length > 0 && (
          <AnimatedSection>
            <section className="mt-12 glass rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">FAQ</h2>
              {post.faq.map((f, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h3 className="font-heading font-semibold text-lg mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </section>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <section className="mt-12 glass rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-2">
              {post.keyTakeaways.map((t, i) => (
                <li key={i} className="text-muted-foreground flex gap-2">
                  <span className="text-accent shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-12 glass rounded-2xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold mb-3">Build at HackHouse</h2>
            <p className="text-muted-foreground mb-6">
              Join a curated community of founders and developers in Gurgaon. Get premium AI tools,
              1 Gbps internet, 3 daily meals, and a tribe of 8 builders for ₹35,000/month.
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

        <p className="text-sm text-muted-foreground mt-12 border-t border-border pt-6">
          <strong>About the author:</strong> {post.authorBio}
        </p>
      </article>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default BlogPost;
