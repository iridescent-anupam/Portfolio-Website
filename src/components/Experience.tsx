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
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-accent rounded-full mb-4">
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
              Work Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Driving impact at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">scale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">
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

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Glass Card */}
                <div className="glass-card-dark rounded-3xl p-6 md:p-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden shadow-xl">
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-semibold text-gray-300 mb-3">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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

                    {/* Logo */}
                    <div
                      style={{ width: '100px', height: '100px', minWidth: '200px', minHeight: '120px' }}
                      className="glass-subtle rounded-2xl p-2 flex-shrink-0"
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
                  <p className="text-gray-400 leading-relaxed mb-6 font-body text-sm md:text-base border-l-2 border-cyan-500/30 pl-4">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest flex items-center gap-2">
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
                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-400 leading-relaxed">
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
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-2 group/btn cursor-pointer"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-card-dark rounded-3xl p-8 max-w-2xl">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-display font-bold text-white mb-3">
              Want to know more about my experience?
            </h3>
            <p className="text-gray-400 mb-6">
              Download my full resume for detailed information
              about my work history and accomplishments.
            </p>
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}