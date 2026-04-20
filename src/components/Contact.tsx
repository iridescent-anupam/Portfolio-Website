import { Mail, Linkedin, Github, Send, MapPin, Coffee } from "lucide-react";
import { personalInfo } from "../data/content";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
  };

  const inputStyle = {
    background: 'linear-gradient(145deg, #07090f, #0e1220)',
    border: '1px solid rgba(255,255,255,0.05)',
    boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.03)',
    borderRadius: '12px',
    color: '#e2e8f0',
    padding: '14px 18px',
    width: '100%',
    outline: 'none',
    fontFamily: 'var(--font-family-body)',
    fontSize: '0.95rem',
    transition: 'box-shadow 0.2s',
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Atmospheric glows */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent)' }}></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="px-6 py-3 skeu-pill font-accent font-bold tracking-widest text-sm" style={{ color: '#7dd3fc', fontSize: '0.8rem' }}>
              LET'S CONNECT
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 16px rgba(59,130,246,0.4)',
              }}>
              <Coffee className="w-6 h-6" style={{ color: 'white' }} />
            </div>
          </div>

          <h2 className="mb-6 text-3xl md:text-5xl font-bold font-display" style={{ color: '#f1f5f9' }}>
            Let's create something{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #f97316)' }}>
                amazing
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-50"
                style={{ background: 'linear-gradient(90deg, #f59e0b, #f97316)' }}></div>
            </span>
            {" "}together
          </h2>

          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#64748b' }}>
            Got an exciting project or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="group">
              <div className="rounded-3xl p-6 hover:-translate-y-1 transition-all duration-200"
                style={{
                  background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                  boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transform -rotate-6 group-hover:rotate-0 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(245,158,11,0.35)',
                    }}>
                    <Mail className="w-7 h-7" style={{ color: '#0a0e1b' }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-lg mb-1" style={{ color: '#f1f5f9' }}>Email Me</div>
                    <a href={`mailto:${personalInfo.email}`}
                      className="transition-colors break-all" style={{ color: '#60a5fa' }}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group">
              <div className="rounded-3xl p-6 hover:-translate-y-1 transition-all duration-200"
                style={{
                  background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                  boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transform -rotate-6 group-hover:rotate-0 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(59,130,246,0.35)',
                    }}>
                    <MapPin className="w-7 h-7" style={{ color: 'white' }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-lg mb-1" style={{ color: '#f1f5f9' }}>Based in</div>
                    <div style={{ color: '#94a3b8' }}>{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group">
              <div className="rounded-3xl p-6"
                style={{
                  background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                  boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                <div className="font-display font-bold text-lg mb-4" style={{ color: '#f1f5f9' }}>Connect on Social</div>
                <div className="flex gap-4">
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all cursor-pointer font-accent font-bold"
                    style={{
                      background: 'linear-gradient(180deg, #2a3a5c 0%, #1a2540 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.3)',
                      color: '#60a5fa',
                      border: '1px solid rgba(59,130,246,0.2)',
                      fontSize: '0.85rem',
                    }}>
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all cursor-pointer font-accent font-bold skeu-btn"
                    style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coffee chat — debossed info panel */}
            <div className="rounded-3xl p-6 skeu-inset">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-6 h-6" style={{ color: '#3b82f6' }} />
                <div className="font-display font-bold text-lg" style={{ color: '#f1f5f9' }}>Coffee Chat?</div>
              </div>
              <p className="text-sm" style={{ color: '#64748b' }}>
                I'm always up for a coffee chat about product management, tech, or literally anything interesting!
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="group">
            <div className="h-full rounded-3xl p-[2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(99,102,241,0.3), rgba(168,85,247,0.3))',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}>
              <div className="h-full rounded-[22px] p-8"
                style={{
                  background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                  boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4)',
                }}>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(59,130,246,0.4)',
                    }}>
                    <Send className="w-6 h-6" style={{ color: 'white' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#f1f5f9' }}>Send a Message</h3>
                  <p style={{ color: '#64748b' }}>Fill out the form and I'll get back to you ASAP!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2 font-accent tracking-wider" style={{ color: '#7dd3fc' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2 font-accent tracking-wider" style={{ color: '#7dd3fc' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2 font-accent tracking-wider" style={{ color: '#7dd3fc' }}>
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'none' }}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer group/btn px-8 py-4 font-accent font-bold transition-all flex items-center justify-center gap-2 skeu-btn-primary rounded-2xl"
                    style={{ fontSize: '0.9rem', letterSpacing: '0.08em' }}
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 skeu-inset rounded-full">
            <p className="font-body" style={{ color: '#64748b' }}>
              Response time: <span className="font-bold" style={{ color: '#60a5fa' }}>Usually within 24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}