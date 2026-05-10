import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/HackHouseGGN", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/hackhouse-gurgaon", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/hackhouse.ggn", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@hackhouse.in", label: "Email" },
  ];

  const footerLinks = [
    { label: "About", href: "#value" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-2">HackHouse</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Build Faster. Together. | Gurgaon
            </p>
            {/* Contact Info for Local SEO */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+919999900876" className="flex items-center gap-2 hover:text-foreground transition-colors justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+91-9999900876</span>
              </a>
              <a href="mailto:hello@hackhouse.in" className="flex items-center gap-2 hover:text-foreground transition-colors justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>hello@hackhouse.in</span>
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HackHouse Gurgaon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
