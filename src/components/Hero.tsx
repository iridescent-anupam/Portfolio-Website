import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/493ce94d37860a1ea1616442504baf1a13a39ebe.png";

const personalInfo = {
  name: "Anupam Sanidhya",
  title: "Technical Product Manager",
  tagline: "Building innovative solutions that bridge business strategy and user-centric design.",
  location: "Seattle, WA",
  resume: "/path-to-your-resume.pdf" // TODO: Update with your resume link
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-8 overflow-hidden" style={{ background: '#050810' }}>
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Atmospheric glow orbs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-5 rounded-full blur-3xl" style={{ background: '#FF6B35' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] opacity-5 rounded-full blur-3xl" style={{ background: '#FF006E' }}></div>

        {/* Scan lines for cyberpunk effect */}
        <div className="scan-lines absolute inset-0 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Cinematic badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-cyber rounded-full glow-cyan transform -rotate-1 hover:rotate-0 transition-transform"
            >
              <Sparkles className="w-4 h-4" style={{ color: '#00F5FF' }} />
              <span className="font-accent font-bold text-sm uppercase tracking-widest" style={{ color: '#00F5FF' }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main heading with cinematic styling */}
            <div className="space-y-4">
              <div className="relative inline-block">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative z-10"
                  style={{ color: '#FFFFFF' }}
                >
                  Hey, I'm{" "}
                  <span className="relative inline-block">
                    <span className="text-glow-cyan" style={{ color: '#00F5FF' }}>{personalInfo.name}</span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-cyber animate-gradient"></div>
                  </span>
                  <span className="inline-block animate-wave ml-2">👋</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-baseline gap-4 flex-wrap"
              >
                <h2 className="font-display" style={{ color: '#F4C430' }}>
                  {personalInfo.title}
                </h2>
                <div className="px-4 py-1.5 glass-dune rounded-full transform rotate-2" style={{ borderColor: 'rgba(244, 196, 48, 0.4)' }}>
                  <span className="font-accent font-bold text-sm tracking-wider" style={{ color: '#F4C430' }}>3+ YEARS EXP</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl leading-relaxed max-w-lg font-body"
              style={{ color: '#F3F4F6', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Cinematic CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 border-gradient-cyber rounded-xl font-accent font-bold hover:glow-cyan transition-all transform hover:-translate-y-1 tracking-wider"
                style={{ background: '#1A1F3A', color: '#FFFFFF', fontWeight: 700 }}
              >
                VIEW WORK
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-4 gradient-dune rounded-xl font-accent font-bold hover:glow-orange transition-all transform hover:-rotate-2 tracking-wider"
                style={{ color: '#0A0E1A', fontWeight: 700 }}
              >
                <Download className="w-5 h-5 inline-block mr-2 group-hover:animate-bounce" />
                RESUME
              </a>
            </motion.div>

            {/* Stats with cinematic styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { label: "User Delight", value: "HIGH" },
                { label: "Sprints Completed", value: "∞" },
                { label: "Bugs Squashed", value: "200+" }
              ].map((stat, index) => (
                <div key={index} className="text-center glass-cyber p-4 rounded-lg">
                  <div className="text-3xl font-display font-bold text-glow-orange" style={{ color: '#FFA066' }}>{stat.value}</div>
                  <div className="text-xs mt-1 font-body tracking-wide" style={{ color: '#D1D5DB', fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Cinematic Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Profile Photo with Cinematic Treatment */}
            <div className="relative w-full max-w-md">
              {/* Glowing Background Orbs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl" style={{ background: '#FF006E' }}></div>

              {/* Main Photo Container */}
              <div className="relative z-10">
                {/* Photo with glass morphism border */}
                <div className="relative group">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-1 gradient-blade-runner rounded-3xl blur-sm group-hover:blur-md transition-all glow-cyan animate-gradient"></div>

                  {/* Photo container */}
                  <div className="relative glass-cyber rounded-3xl p-2 overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Anupam Sanidhya"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />

                    {/* Scan line effect overlay */}
                    <div className="absolute inset-0 scan-lines opacity-10 pointer-events-none"></div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: '#00F5FF' }}></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: '#FF006E' }}></div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 glass-cyber px-4 py-2 rounded-full flex items-center gap-2 glow-cyan">
                    <div className="w-3 h-3 rounded-full animate-pulse-glow" style={{ background: '#00FF00' }}></div>
                    <span className="font-accent font-bold text-xs tracking-wider" style={{ color: '#00F5FF' }}>ACTIVE</span>
                  </div>
                </div>

                {/* Floating info cards */}
                <div className="absolute -top-6 -left-6 glass-dune rounded-xl p-3 transform -rotate-6 hover:rotate-0 transition-all glow-orange shadow-xl">
                  <div className="font-accent font-bold text-xs mb-1 tracking-wider" style={{ color: '#FFFFFF' }}>📍 LOCATION</div>
                  <div className="text-sm font-body font-semibold" style={{ color: '#F4C430' }}>{personalInfo.location}</div>
                </div>

                <div className="absolute -bottom-6 -right-6 gradient-spice rounded-xl p-4 transform rotate-6 hover:rotate-3 transition-all shadow-xl">
                  <div className="font-accent font-bold text-xs mb-1 tracking-wider" style={{ color: '#0A0E1A' }}>🚀 STATUS</div>
                  <div className="text-sm font-body font-semibold" style={{ color: '#0A0E1A' }}>Ship Mode: ON</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}