import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-cyber backdrop-blur-md shadow-lg"
          : "backdrop-blur-sm"
      }`}
      style={{
        background: isScrolled ? undefined : 'rgba(10, 14, 26, 0.5)',
        borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.2)' : undefined
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-cyber rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform glow-cyan">
              <span className="font-display font-bold text-xl" style={{color: '#0A0E1A'}}>A</span>
            </div>
            <span className="font-display text-xl font-bold hidden sm:block tracking-wider" style={{color: '#FFFFFF'}}>
              ANUPAM SANIDHYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-accent tracking-wider rounded-lg transition-all"
                style={{color: '#E5E7EB', fontWeight: 500}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00F5FF';
                  e.currentTarget.style.backgroundColor = 'rgba(26, 31, 58, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#E5E7EB';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 gradient-blade-runner rounded-full transition-all transform hover:scale-105 glow-cyan tracking-wider"
              style={{color: '#FFFFFF', fontWeight: 700}}
            >
              <span className="font-accent font-bold">LET'S TALK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all"
            style={{color: '#00F5FF'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(26, 31, 58, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4" style={{borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 rounded-lg transition-all font-accent tracking-wider"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00F0FF';
                    e.currentTarget.style.backgroundColor = 'rgba(26, 31, 58, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#D1D5DB';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 gradient-blade-runner rounded-full transition-all text-center tracking-wider"
                style={{color: '#0A0E1A'}}
              >
                <span className="font-accent font-bold">LET'S TALK</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}