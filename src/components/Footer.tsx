import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
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
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email Me</span>
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">{personalInfo.location}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-yellow-400 fill-yellow-400" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}