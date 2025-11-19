import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { experience, personalInfo } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-cyber rounded-full mb-4 glow-cyan">
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
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-12 ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-6 h-6 bg-[#050810] rounded-full border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Company Logo */}
                <div
                  className={`${index % 2 === 1 ? "md:col-start-2 md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`inline-block glass-panel rounded-2xl p-6 ${index % 2 === 1 ? "" : "md:ml-auto"
                      }`}
                  >
                    <div className="w-32 h-32 bg-white/5 rounded-xl p-2">
                      <ImageWithFallback
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <div className="glass-card rounded-3xl p-8 hover:border-cyan-500/30 transition-all group">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-semibold text-gray-300 mb-3">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-cyan-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-purple-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 font-body">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest">
                        Key Achievements
                      </div>
                      {exp.achievements
                        .slice(0, 5)
                        .map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      {exp.achievements.length > 5 && (
                        <div className="text-sm text-gray-500 italic">
                          +{exp.achievements.length - 5} more
                          achievements
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-panel rounded-3xl p-8 max-w-2xl border border-white/10">
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}