import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
        <Helmet>
            <title>HackHouse - The AI Builder Residency</title>
        </Helmet>

        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter font-mono">HACKHOUSE_</div>
            <div className="flex items-center gap-6">
              <button className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</button>
              <button className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
              <ThemeToggle />
              <button className="bg-foreground text-background px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        <footer className="py-12 border-t border-border/50 mt-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
            <p>&copy; 2025 HackHouse Protocol. Gurgaon, India.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
