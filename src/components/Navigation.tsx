import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl border-b"
        : "backdrop-blur-sm bg-transparent"
        }`}
      style={isScrolled ? { background: 'rgba(9,13,26,0.85)', borderColor: 'rgba(255,255,255,0.07)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform"
                style={{
                  background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(37,99,235,0.4)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}>
              <span className="font-display font-bold text-xl" style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,50,0.5)' }}>A</span>
            </div>
            <span className={`font-display text-xl font-bold hidden sm:block tracking-wider transition-colors ${isScrolled ? "text-slate-100 group-hover:text-blue-400" : "text-white drop-shadow-md group-hover:text-blue-200"}`}>
              ANUPAM SANIDHYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-accent tracking-wider rounded-lg transition-all ${isActive
                    ? (isScrolled ? "text-cyan-300" : "text-cyan-200")
                    : (isScrolled ? "text-slate-300 hover:text-blue-400" : "text-white/90 hover:text-white")
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #22d3ee, #60a5fa)', boxShadow: '0 0 6px #22d3ee' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 rounded-full transition-all tracking-wider text-white font-bold font-accent shadow-md hover:shadow-blue-500/30"
            >
              LET'S TALK
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-blue-600 hover:bg-cyan-500/10 transition-colors"
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10 backdrop-blur-xl"
              style={{ background: 'rgba(9,13,26,0.97)' }}
            >
              <div className="flex flex-col gap-2 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all font-accent tracking-wider ${activeSection === item.href.substring(1)
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-blue-500/5"
                      }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mx-4 mt-2 px-6 py-3 gradient-blade-runner rounded-full transition-all text-center tracking-wider text-[#0A0E1A] font-bold font-accent"
                >
                  LET'S TALK
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}