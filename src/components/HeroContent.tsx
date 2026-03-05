import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

const personalInfo = {
    name: "Anupam Sanidhya",
    title: "Technical Product Manager",
    tagline: "Built civic tech serving 39 counties across WA, USA | Doubled global operational efficiency at Lexmark International | Technical PM: Code → Strategy → Scale",
    location: "Seattle, WA",
    resume: "/path-to-your-resume.pdf"
};

const techStack = ["Product Management & Strategy", "Digital Transformation", "Agile/SAFe® Delivery", "Cross-Functional Leadership", "Data-Driven Growth"];

export function HeroContent() {
    return (
        <section id="hero" className="relative overflow-hidden px-6 lg:px-8 py-20">
            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 relative">
                        {/* Glass badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="font-accent font-bold text-sm uppercase tracking-widest text-cyan-400">
                                Available for Opportunities
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <div className="space-y-4">
                            <div className="relative inline-block">
                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight font-display leading-tight text-white"
                                >
                                    Hey, I'm{" "}
                                    <span className="relative inline-block">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{personalInfo.name}</span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                                    </span>
                                    <span className="inline-block ml-2" style={{ animation: 'wave 2s ease-in-out infinite' }}>👋</span>
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-baseline gap-4 flex-wrap"
                            >
                                <h2 className="text-2xl md:text-3xl font-display text-cyan-300/80">
                                    {personalInfo.title}
                                </h2>
                                <div className="px-4 py-1.5 glass-accent-warm rounded-full transform rotate-2">
                                    <span className="font-accent font-bold text-sm tracking-wider text-orange-300">3+ YEARS EXP</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl leading-relaxed max-w-lg font-body text-gray-300"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Tech Stack Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-2"
                        >
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-xs font-accent font-bold tracking-wider glass-accent rounded-full text-cyan-300 hover:bg-cyan-500/10 transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            className="flex flex-wrap items-center gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-accent font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 tracking-wider text-white"
                            >
                                <span>VIEW WORK</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href={personalInfo.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-4 glass rounded-xl font-accent font-bold hover:bg-white/10 transition-all tracking-wider text-white"
                            >
                                <Download className="w-5 h-5 inline-block mr-2 group-hover:animate-bounce" />
                                RESUME
                            </a>
                        </motion.div>

                        {/* Stats */}
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
                                <div key={index} className="text-center glass-card-dark p-4 rounded-xl">
                                    <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">{stat.value}</div>
                                    <div className="text-xs mt-1 font-body tracking-wide text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Glow orbs */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <div className="relative group">
                                    {/* Gradient border */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-sm group-hover:blur-md transition-all opacity-60"></div>

                                    {/* Glass photo container */}
                                    <div className="relative glass-card-dark rounded-3xl p-2 overflow-hidden">
                                        <img
                                            src={profileImage}
                                            alt="Anupam Sanidhya"
                                            className="w-full h-auto rounded-2xl"
                                        />
                                        {/* Glass overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl"></div>
                                    </div>
                                </div>

                                {/* Floating glass cards */}
                                <div className="absolute -top-6 -left-6 glass-card-dark rounded-xl p-3 transform -rotate-6 hover:rotate-0 transition-all shadow-xl">
                                    <div className="font-accent font-bold text-xs mb-1 tracking-wider text-cyan-400">📍 LOCATION</div>
                                    <div className="text-sm font-body font-semibold text-gray-200">{personalInfo.location}</div>
                                </div>

                                <div className="absolute -bottom-6 -right-6 glass-accent-warm rounded-xl p-4 transform rotate-6 hover:rotate-3 transition-all shadow-xl">
                                    <div className="font-accent font-bold text-xs mb-1 tracking-wider text-orange-300">CURRENTLY EXPLORING</div>
                                    <div className="text-sm font-body font-semibold text-gray-200">Agentic AI Systems & Building with LLMs</div>
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
      `}</style>
        </section>
    );
}
