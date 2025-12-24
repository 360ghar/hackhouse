import { Bot, Palette, Code, Video } from "lucide-react";
import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Tools = () => {
  const toolCategories = [
    {
      category: "AI Assistants",
      icon: Bot,
      tools: [
        { name: "Claude Max", desc: "Advanced AI reasoning" },
        { name: "ChatGPT Business", desc: "OpenAI's flagship" },
        { name: "Google AI Ultra", desc: "Gemini access" },
        { name: "Perplexity AI Pro", desc: "Research AI" },
      ],
    },
    {
      category: "Development",
      icon: Code,
      tools: [
        { name: "Cursor Pro", desc: "AI-powered IDE" },
        { name: "GitHub Copilot", desc: "Code completion" },
      ],
    },
    {
      category: "Design & Creative",
      icon: Palette,
      tools: [
        { name: "Midjourney", desc: "Image generation" },
        { name: "Adobe Creative Cloud", desc: "Full suite" },
        { name: "Canva Pro", desc: "Quick designs" },
      ],
    },
    {
      category: "Video & Audio",
      icon: Video,
      tools: [
        { name: "ElevenLabs", desc: "Voice synthesis" },
        { name: "HeyGen", desc: "AI video creation" },
      ],
    },
  ];

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Worth ₹20,000+/month</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-gradient">Tools Access</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shared access to the best AI and creative tools. Focus on building, not subscriptions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {toolCategories.map((category, index) => (
            <AnimatedSection 
              key={category.category} 
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
              delay={index * 100}
            >
              <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{category.category}</h3>
                </div>
                <div className="grid gap-3">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-sm text-muted-foreground">{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8">
          <p className="text-center text-muted-foreground text-sm">
            * Access limited based on fair usage policy. All tools shared among residents.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Tools;
