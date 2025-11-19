import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/493ce94d37860a1ea1616442504baf1a13a39ebe.png";

const personalInfo = {
  name: "Anupam Sanidhya",
  title: "Technical Product Manager",
  tagline: "Building innovative solutions that bridge business strategy and user-centric design.",
  location: "Seattle, WA",
  resume: "/path-to-your-resume.pdf" // TODO: Update with your resume link
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-medium text-gray-900 dark:text-white mb-6">
                Available for Opportunities
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6 font-display">
                Hey, I'm <span className="text-cyan-500">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-light mb-8">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-200 dark:border-gray-800 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-2 text-gray-900 dark:text-white"
              >
                Resume <Download className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Clean Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Anupam Sanidhya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-12 -left-12 bg-white dark:bg-[#1A1F2E] p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
                Currently exploring
              </p>
              <p className="text-gray-900 dark:text-white font-bold text-lg">
                AI-Driven User Experiences & Design Systems
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}