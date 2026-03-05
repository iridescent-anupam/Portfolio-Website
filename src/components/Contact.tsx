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

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Glass divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="px-6 py-3 glass-accent-warm rounded-full font-bold text-orange-300 tracking-widest uppercase text-sm">
              LET'S CONNECT
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-white mb-6 text-3xl md:text-5xl font-bold font-display">
            Let's create something{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                amazing
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30"></div>
            </span>
            {" "}together
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Got an exciting project or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="group">
              <div className="glass-card-dark rounded-3xl p-8 hover:border-orange-500/30 transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-lg text-white mb-1">Email Me</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-orange-300 hover:text-orange-200 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group">
              <div className="glass-card-dark rounded-3xl p-8 hover:border-cyan-500/30 transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-lg text-white mb-1">Based in</div>
                    <div className="text-cyan-300">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group">
              <div className="glass-card-dark rounded-3xl p-8 hover:border-purple-500/30 transition-all">
                <div className="font-display font-bold text-lg text-white mb-4">Connect on Social</div>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-xl transition-all cursor-pointer text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-subtle hover:bg-white/10 rounded-xl transition-all cursor-pointer text-white"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coffee chat card */}
            <div className="glass-accent rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="w-8 h-8 text-cyan-400" />
                <div className="font-display font-bold text-lg text-white">Coffee Chat?</div>
              </div>
              <p className="text-sm text-gray-300">
                I'm always up for a coffee chat about product management, tech, or literally anything interesting!
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="group">
            <div className="h-full rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 hover:from-orange-500/30 hover:via-pink-500/30 hover:to-purple-500/30 transition-all">
              <div className="h-full glass-card-dark rounded-[22px] p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Send a Message</h3>
                  <p className="text-gray-400">Fill out the form and I'll get back to you ASAP!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 glass-input rounded-xl"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 glass-input rounded-xl"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 glass-input rounded-xl resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer group/btn px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 glass rounded-full">
            <p className="text-gray-300 font-medium">
              Response time: <span className="text-cyan-400 font-bold">Usually within 24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}