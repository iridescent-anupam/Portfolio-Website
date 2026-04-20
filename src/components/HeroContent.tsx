import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

const personalInfo = {
    name: "Anupam Sanidhya",
    title: "Technical Product Manager",
    tagline: "Built civic tech serving 39 counties across WA, USA | Doubled global operational efficiency at Lexmark International | Technical PM: Code → Strategy → Scale",
    location: "Seattle, WA"
};

const techStack = ["Product Management & Strategy", "Digital Transformation", "Agile/SAFe® Delivery", "Cross-Functional Leadership", "Data-Driven Growth"];

export function HeroContent() {
    return (
        <section id="hero" className="relative overflow-hidden px-6 lg:px-8 py-20">
            {/* Skeuomorphic ambient glows */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }}></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)' }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 relative">
                        {/* Skeuomorphic availability badge — debossed pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 skeu-pill"
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="font-accent font-bold text-sm uppercase tracking-widest text-blue-400">
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
                                    className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight font-display leading-tight"
                                    style={{ color: '#f1f5f9', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
                                >
                                    Hey, I'm{" "}
                                    <span className="relative inline-block">
                                        <span className="text-transparent bg-clip-text"
                                            style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)' }}>
                                            {personalInfo.name}
                                        </span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-[2px]"
                                            style={{ background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', boxShadow: '0 0 8px rgba(59,130,246,0.6)' }}>
                                        </div>
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
                                <h2 className="text-2xl md:text-3xl font-display" style={{ color: '#7dd3fc' }}>
                                    {personalInfo.title}
                                </h2>
                                {/* Skeuomorphic embossed badge */}
                                <div className="px-4 py-1.5 skeu-btn transform rotate-2" style={{ display: 'inline-block' }}>
                                    <span className="font-accent font-bold text-sm tracking-wider text-amber-400">3+ YEARS EXP</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg leading-relaxed max-w-lg font-body"
                            style={{ color: '#94a3b8' }}
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Tech Stack Pills — skeuomorphic debossed pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-2"
                        >
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-xs font-accent font-bold tracking-wider skeu-pill cursor-default transition-all"
                                    style={{ color: '#7dd3fc' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs — skeuomorphic embossed buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            className="flex flex-wrap items-center gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                className="skeu-btn-primary inline-flex items-center gap-2 px-8 py-4 font-accent font-bold tracking-wider"
                                style={{ textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.08em' }}
                            >
                                <span>VIEW WORK</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                        </motion.div>

                        {/* Stat Cards — deeply debossed skeuomorphic counters */}
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
                                <div key={index} className="text-center skeu-stat p-4">
                                    <div
                                        className="text-3xl font-display font-bold"
                                        style={{
                                            backgroundImage: 'linear-gradient(135deg, #f59e0b, #f97316)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.3))',
                                        }}
                                    >{stat.value}</div>
                                    <div className="text-[11px] mt-1.5 font-body tracking-wide uppercase" style={{ color: '#94a3b8' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Ambient glow orbs behind photo */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse"
                                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)', animationDuration: '4s' }}></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl"
                                style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)' }}></div>

                            <div className="relative z-10">
                                {/* Skeuomorphic photo frame — raised card with gradient bevel border */}
                                <div className="relative group transition-transform duration-700 hover:-translate-y-2.5 hover:scale-[1.03] cursor-pointer">
                                    {/* Massive interactive ambient outer glow */}
                                    <div 
                                        className="absolute opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0"
                                        style={{ 
                                            top: "-30px", bottom: "-30px", left: "-30px", right: "-30px",
                                            borderRadius: "3rem",
                                            filter: "blur(40px)",
                                            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, rgba(124,58,237,0.25) 50%, transparent 100%)" 
                                        }}
                                    ></div>

                                    {/* Base dynamic LED glow ring */}
                                    <div className="absolute opacity-30 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0"
                                        style={{
                                            top: "-5px", bottom: "-5px", left: "-5px", right: "-5px",
                                            borderRadius: "2rem",
                                            filter: "blur(15px)",
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #7c3aed 100%)'
                                        }}></div>

                                    {/* Photo container — skeuomorphic raised card */}
                                    <div className="relative skeu-card rounded-3xl p-[5px] overflow-hidden group-hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-shadow duration-500 z-10">
                                        <img
                                            src={profileImage}
                                            alt="Anupam Sanidhya"
                                            className="w-full h-auto rounded-2xl relative z-10"
                                        />
                                        {/* Subtle top-left light sheen — simulates studio lighting */}
                                        <div className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)' }}></div>
                                    </div>
                                </div>

                                {/* Floating skeuomorphic info cards */}
                                <div className="absolute -top-6 -left-6 skeu-card rounded-xl p-3 transform -rotate-6 hover:rotate-0 transition-all duration-300 z-50">
                                    <div className="font-accent font-bold text-xs mb-1 tracking-wider text-blue-400">📍 LOCATION</div>
                                    <div className="text-sm font-body font-semibold" style={{ color: '#e2e8f0' }}>{personalInfo.location}</div>
                                </div>

                                <div className="absolute -bottom-6 -right-6 skeu-card rounded-xl p-4 transform rotate-6 hover:rotate-3 transition-all duration-300 z-50">
                                    <div className="font-accent font-bold text-xs mb-1 tracking-wider text-amber-400">CURRENTLY EXPLORING</div>
                                    <div className="text-sm font-body font-semibold" style={{ color: '#e2e8f0' }}>Agentic AI Systems & Building with LLMs</div>
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
