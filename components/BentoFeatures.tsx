import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: '1 Gbps Neural Link',
    desc: 'Symmetrical, dedicated fiber line for unhindered model training and uploads.',
    icon: '⚡',
    col: 'span-1',
  },
  {
    title: 'Quantum Living Pods',
    desc: 'Private, sound-isolated rooms designed for deep work and restorative sleep.',
    icon: '🏠',
    col: 'span-2',
  },
  {
    title: 'Bio-Fuel Station',
    desc: 'Home-cooked, nutritious meals 3x a day. Coffee and snacks on tap.',
    icon: '🍜',
    col: 'span-1',
  },
  {
    title: '24/7 Co-Working Nexus',
    desc: 'Ergonomic chairs, standing desks, and whiteboards everywhere.',
    icon: '🏢',
    col: 'span-2',
  },
];

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to build.</h2>
          <p className="text-muted-foreground text-lg">
            We handle the logistics so you can focus on the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md ${f.col === 'span-2' ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
