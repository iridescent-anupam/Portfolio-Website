import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 lg:px-8">
      {/* Glass divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">{personalInfo.name}</h3>
                <p className="text-gray-500 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email Me</span>
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-subtle hover:bg-cyan-500/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-subtle hover:bg-cyan-500/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">{personalInfo.location}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}