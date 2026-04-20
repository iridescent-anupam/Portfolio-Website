import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="relative py-12 px-6 lg:px-8" style={{ background: '#060a14' }}>
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(59,130,246,0.4), transparent)' }}></div>
      {/* Ambient footer glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.06) 0%, transparent 70%)' }}></div>



      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(37,99,235,0.4)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}>
                <span className="font-display text-xl font-bold" style={{ color: 'white' }}>A</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl" style={{ color: '#f1f5f9' }}>{personalInfo.name}</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>{personalInfo.title}</p>
              </div>
            </div>
            <p className="leading-relaxed max-w-md" style={{ color: '#94a3b8' }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 tracking-wider text-sm uppercase" style={{ color: '#94a3b8' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors font-body" style={{ color: '#94a3b8' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 tracking-wider text-sm uppercase" style={{ color: '#94a3b8' }}>Get in Touch</h4>
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 transition-colors font-body"
                style={{ color: '#94a3b8' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email Me</span>
              </a>
              <div className="flex gap-3 pt-2">
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer skeu-btn hover:shadow-[0_0_14px_rgba(96,165,250,0.35)]"
                  aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" style={{ color: '#60a5fa' }} />
                </a>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer skeu-btn hover:shadow-[0_0_14px_rgba(167,139,250,0.35)]"
                  aria-label="GitHub">
                  <Github className="w-5 h-5 text-violet-400" />
                </a>
              </div>
            </div>
            <p className="text-sm mt-4" style={{ color: '#94a3b8' }}>{personalInfo.location}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: '#94a3b8' }}>
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4" style={{ color: '#f43f5e', fill: '#f43f5e' }} /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}