import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const categories = [
    {
      title: "Startup Life",
      description: "Stories from our residents, building in public, and lessons from the trenches.",
      count: "Coming soon",
    },
    {
      title: "Co-Living Tips",
      description: "How to make the most of community living, productivity hacks, and work-life balance.",
      count: "Coming soon",
    },
    {
      title: "AI & Tools",
      description: "Deep dives into the AI tools we provide, tutorials, and productivity workflows.",
      count: "Coming soon",
    },
    {
      title: "Gurgaon Guide",
      description: "The best cafes, coworking spots, meetups, and startup events in Gurgaon.",
      count: "Coming soon",
    },
  ];

  return (
    <main className="min-h-screen bg-background font-body pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">HackHouse Blog</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Insights for <span className="text-gradient">Builders</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stories, guides, and resources for startup founders, developers, and makers living and building in Gurgaon.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <span className="text-xs text-accent font-medium">{category.count}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground mb-6">
            Want to contribute or suggest a topic?
          </p>
          <a href="/">
            <Button variant="outline" className="font-heading group">
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Blog;
