import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onApplyClick: () => void;
}

const Header = ({ onApplyClick }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Escape key to close mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Scrollspy: track active section (only on landing page)
  useEffect(() => {
    if (!isLanding) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["value", "amenities", "pricing"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when section is roughly in the middle of the viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isLanding]);

  const navLinks = [
    { href: "#value", label: "Why HackHouse" },
    { href: "#amenities", label: "What's Included" },
    { href: "#pricing", label: "Pricing" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLanding) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.slice(1);
    if (isLanding) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // Wait for landing page to render, then scroll to the section
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    closeMobileMenu();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group"
          aria-label="HackHouse Gurgaon - back to top"
        >
          <span className="text-2xl font-heading font-bold text-foreground group-hover:text-gradient transition-all">
            HackHouse
          </span>
          <span className="text-xs text-muted-foreground font-medium">Gurgaon</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={isLanding ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="bg-primary hover:bg-primary/90 glow-primary font-heading"
            onClick={onApplyClick}
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay - click to close */}
          <div
            className="md:hidden fixed inset-0 top-0 -z-10 bg-black/40 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div
            ref={mobileMenuRef}
            className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-up"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={isLanding ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-sm transition-colors",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button
                className="bg-primary hover:bg-primary/90 glow-primary font-heading w-full mt-2"
                onClick={() => {
                  closeMobileMenu();
                  onApplyClick();
                }}
              >
                Apply Now
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
