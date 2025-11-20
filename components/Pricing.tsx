import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple Pricing.</h2>
          <p className="text-muted-foreground text-lg">No hidden fees. Just pure value.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Co-working */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold mb-2">Co-Working</h3>
            <p className="text-muted-foreground mb-6">Access to the hub, events, and network.</p>
            <div className="text-4xl font-bold mb-6">₹3,000<span className="text-lg font-normal text-muted-foreground">/mo</span></div>

            <ul className="space-y-3 mb-8 flex-1">
              {['1 Gbps WiFi', 'Community Access', 'Events & Workshops', 'Coffee & Tea'].map(i => (
                 <li key={i} className="flex items-center gap-2 text-sm">
                   <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                   {i}
                 </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
              Get a Desk
            </button>
          </div>

          {/* Residency */}
          <div className="rounded-3xl border border-primary bg-card p-8 flex flex-col relative shadow-2xl shadow-primary/10 transform hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Full Residency</h3>
            <p className="text-muted-foreground mb-6">Live, eat, and build with 8 other founders.</p>
            <div className="text-4xl font-bold mb-6">₹30,000<span className="text-lg font-normal text-muted-foreground">/mo</span></div>

            <ul className="space-y-3 mb-8 flex-1">
              {['Private Room', 'All Meals Included', 'Laundry & Housekeeping', '24/7 Coworking Access', 'Founder Community'].map(i => (
                 <li key={i} className="flex items-center gap-2 text-sm">
                   <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                   {i}
                 </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
