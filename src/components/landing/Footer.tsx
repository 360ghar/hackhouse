import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@hackhouse.in", label: "Email" },
  ];

  const footerLinks = [
    { label: "About", href: "#value" },
    { label: "What's Included", href: "#amenities" },
    { label: "Pricing", href: "/pricing" },
    { label: "Co-Living Gurgaon", href: "/co-living-gurgaon" },
    { label: "Hacker House India", href: "/hacker-house-india" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (isLanding) return; // let default anchor behavior work on landing page
    e.preventDefault();
    const sectionId = href.slice(1);
    navigate("/");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
            {footerLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={isLanding ? link.href : `/${link.href}`}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
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
