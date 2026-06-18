import AnimatedSection from "./AnimatedSection";

const ComparisonTable = () => {
  const rows = [
    { feature: "Furnished room + workspace", pg: "Basic", coworking: "No", hackhouse: "Yes" },
    { feature: "3 daily meals", pg: "Sometimes", coworking: "No", hackhouse: "Yes" },
    { feature: "1 Gbps internet + backup", pg: "Rarely", coworking: "Yes", hackhouse: "Yes" },
    { feature: "Premium AI tools (₹20k+ value)", pg: "No", coworking: "No", hackhouse: "Yes" },
    { feature: "Curated community of builders", pg: "No", coworking: "Partial", hackhouse: "Yes" },
    { feature: "Weekly mentorship", pg: "No", coworking: "No", hackhouse: "Yes" },
    { feature: "All-inclusive price", pg: "₹12-18k", coworking: "₹5-15k", hackhouse: "₹35,000" },
  ];

  return (
    <section id="comparison" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            HackHouse vs <span className="text-gradient">the Rest</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not a PG, not a co-working desk. A startup residency for builders.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 font-heading">Feature</th>
                  <th className="text-left py-4 font-heading">Regular PG</th>
                  <th className="text-left py-4 font-heading">Co-working</th>
                  <th className="text-left py-4 font-heading text-primary">HackHouse</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4 text-muted-foreground">{row.pg}</td>
                    <td className="py-4 text-muted-foreground">{row.coworking}</td>
                    <td className="py-4 text-primary font-medium">{row.hackhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ComparisonTable;
