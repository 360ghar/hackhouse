import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ApplicationModal from "@/components/landing/ApplicationModal";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/landing/AnimatedSection";
import { blogPosts } from "@/content/blogPosts";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "HackHouse Blog",
    description: "Stories, guides, and resources for startup founders, developers, and makers living and building in Gurgaon.",
    url: "https://hackhouse.in/blog",
    publisher: { "@id": "https://hackhouse.in/#organization" },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      url: `https://hackhouse.in/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <main id="main-content" className="min-h-screen bg-background font-body">
      <SEO
        title="HackHouse Blog - Guides for Founders & Developers in Gurgaon"
        description="Guides on hacker houses, co-living in Gurgaon, AI tools for founders, and choosing a co-living space as a developer in India."
        canonical="/blog"
        jsonLd={jsonLd}
      />
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <div className="container mx-auto px-4 max-w-4xl pt-40 pb-24">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">HackHouse Blog</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Insights for <span className="text-gradient">Builders</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Guides on hacker houses, co-living in Gurgaon, AI tools for founders, and choosing a
            co-living space as a developer in India.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 80}>
              <Link
                to={`/blog/${post.slug}`}
                className="block glass rounded-2xl p-6 hover:border-primary/30 transition-all group h-full"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="text-accent font-medium">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.datePublished).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                <span className="text-sm text-primary font-medium flex items-center gap-1">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p className="text-muted-foreground mb-6">Want to contribute or suggest a topic?</p>
          <Link to="/">
            <Button variant="outline" className="font-heading group">
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Blog;
