import {
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, personalInfo } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

// Rotate through vibrant accent colours for each experience card
const cardAccents = [
  { border: '#3b82f6', glow: 'rgba(59,130,246,0.08)',  check: '#60a5fa', label: 'rgba(59,130,246,0.7)'  },  // blue
  { border: '#8b5cf6', glow: 'rgba(139,92,246,0.08)',  check: '#a78bfa', label: 'rgba(139,92,246,0.7)'  },  // violet
  { border: '#06b6d4', glow: 'rgba(6,182,212,0.08)',   check: '#22d3ee', label: 'rgba(6,182,212,0.7)'   },  // cyan
  { border: '#f59e0b', glow: 'rgba(245,158,11,0.08)',  check: '#fbbf24', label: 'rgba(245,158,11,0.7)'  },  // amber
  { border: '#ec4899', glow: 'rgba(236,72,153,0.08)',  check: '#f472b6', label: 'rgba(236,72,153,0.7)'  },  // pink
];

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Glass divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 skeu-pill font-accent font-bold tracking-widest text-xs uppercase mb-4" style={{ color: '#7dd3fc' }}>
            Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: '#f1f5f9' }}>
            Driving impact at{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>scale</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-body" style={{ color: '#94a3b8' }}>
            3+ years of product leadership across enterprise
            systems, mobile apps, and SaaS platforms.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => {
            const isExpanded = expandedIds.includes(exp.id);
            const visibleAchievements = isExpanded
              ? exp.achievements
              : exp.achievements.slice(0, 3);

            const accent = cardAccents[index % cardAccents.length];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Coloured left-border accent strip */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full z-20" style={{ background: accent.border, boxShadow: `0 0 12px ${accent.border}` }}></div>
                {/* Skeuomorphic raised card */}
                <div className="rounded-3xl pl-7 pr-6 md:pr-8 py-6 md:py-8 group relative overflow-hidden transition-all hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                    boxShadow: `inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)`,
                    border: `1px solid rgba(255,255,255,0.04)`,
                  }}>
                  {/* Ambient coloured glow top-right */}
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: accent.glow }}></div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-blue-400 transition-colors" style={{ color: '#f1f5f9' }}>
                        {exp.role}
                      </h3>
                      <div className="text-lg font-semibold mb-3" style={{ color: '#94a3b8' }}>
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#64748b' }}>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-cyan-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-purple-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Logo — compact, supporting element */}
                    <div
                      style={{ width: '80px', height: '80px', minWidth: '80px', minHeight: '80px', background: 'linear-gradient(145deg, #1b1f2d, #111827)', boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.04)' }}
                      className="rounded-2xl p-2 flex-shrink-0 overflow-hidden"
                    >
                      <ImageWithFallback
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed mb-6 font-body text-sm md:text-base pl-4" style={{ color: '#94a3b8', borderLeft: `2px solid ${accent.border}60` }}>
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: accent.border }}>
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </div>

                    <div className="space-y-3">
                      <AnimatePresence initial={false} mode="wait">
                        {visibleAchievements.map((achievement, idx) => (
                          <motion.div
                            key={`${exp.id}-achievement-${idx}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent.check }} />
                            <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Expand/Collapse Button */}
                    {exp.achievements.length > 3 && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors mt-2 group/btn cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Show {exp.achievements.length - 3} More Achievements{" "}
                            <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}