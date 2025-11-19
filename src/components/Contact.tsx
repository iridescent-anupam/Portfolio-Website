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
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Creative Divider */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-8xl opacity-5">📬</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-5">💬</div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Creative Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold transform -rotate-2 shadow-lg">
              📧 LET'S CONNECT
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <Coffee className="w-6 h-6" />
            </div>
          </div>
          
          <h2 className="text-white mb-6">
            Let's create something{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                amazing
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400/30 transform rotate-1"></div>
            </span>
            {" "}together
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got an exciting project or just want to chat? Drop me a message! ☕
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="group">
              <div className="h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-1 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="h-full bg-gray-900 rounded-[22px] p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                      <Mail className="w-7 h-7 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display font-bold text-lg text-white mb-1">Email Me</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group">
              <div className="h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-1 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="h-full bg-gray-900 rounded-[22px] p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform">
                      <MapPin className="w-7 h-7 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display font-bold text-lg text-white mb-1">Based in</div>
                      <div className="text-blue-300">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group">
              <div className="h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl p-1 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="h-full bg-gray-900 rounded-[22px] p-8">
                  <div className="font-display font-bold text-lg text-white mb-4">Connect on Social</div>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all transform hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all transform hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 text-gray-900 transform -rotate-1">
              <div className="text-4xl mb-3">☕</div>
              <div className="font-display font-bold text-lg mb-2">Coffee Chat?</div>
              <p className="text-sm">
                I'm always up for a coffee chat about product management, tech, or literally anything interesting!
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="group">
            <div className="h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="h-full bg-white rounded-[22px] p-8">
                <div className="mb-6">
                  <div className="text-4xl mb-3">✉️</div>
                  <h3 className="text-gray-900 mb-2">Send a Message</h3>
                  <p className="text-gray-600">Fill out the form and I'll get back to you ASAP!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all resize-none text-gray-900"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group/btn px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
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
          <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full">
            <p className="text-white font-medium">
              Response time: <span className="text-yellow-400 font-bold">Usually within 24 hours</span> ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}