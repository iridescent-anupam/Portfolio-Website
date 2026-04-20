import {
  ArrowUpRight,
  Github,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (
    project: (typeof projects)[0],
  ) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Glass divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-6 relative">
            <div
            className="px-6 py-3 skeu-pill font-accent font-bold tracking-widest"
            style={{ color: '#7dd3fc', fontSize: '0.8rem' }}
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            FEATURED WORK
          </div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)', color: '#0a0e1b', boxShadow: '0 0 12px rgba(245,158,11,0.5)' }}
            >
              {projects.length}
            </div>
          </div>

          <h2 className="mb-6 relative inline-block" style={{ color: '#f1f5f9' }}>
            Projects I'm{" "}
            <span className="relative">
              <span
                className="inline-block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
              >
                proud of
              </span>
              <Star
                className="absolute -top-8 -right-8 w-8 h-8 animate-pulse"
                style={{ color: '#f59e0b', fill: '#f59e0b', filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.5))' }}
              />
            </span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto font-body"
            style={{ color: '#64748b' }}
          >
            Real products solving real problems, with measurable
            impact
          </p>
        </div>

        {/* Bento Grid Layout - Glass Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {projects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative cursor-pointer ${isFeatured
                  ? "md:col-span-2 md:row-span-1"
                  : "md:col-span-1 md:row-span-1"
                  }`}
                onClick={() => handleProjectClick(project)}
              >
                <div
                  className={`h-full rounded-3xl p-[2px] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01]`}
                  style={{
                    background: index % 4 === 0
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(99,102,241,0.5))'
                      : index % 4 === 1
                        ? 'linear-gradient(135deg, rgba(245,158,11,0.4), rgba(249,115,22,0.4))'
                        : index % 4 === 2
                          ? 'linear-gradient(135deg, rgba(14,165,233,0.4), rgba(59,130,246,0.4))'
                          : 'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(236,72,153,0.4))',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e => {
                    const glowColor = index % 4 === 0 ? '59,130,246'
                      : index % 4 === 1 ? '245,158,11'
                      : index % 4 === 2 ? '14,165,233'
                      : '168,85,247';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(${glowColor},0.25), 0 4px 16px rgba(0,0,0,0.4)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)';
                  }}
                >
                  <div
                    className="h-full rounded-[22px] p-8 flex flex-col"
                    style={{
                      background: 'linear-gradient(145deg, #1b1f2d, #111827)',
                      boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4)',
                    }}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {index === 0 && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 skeu-pill rounded-full text-xs font-accent font-bold mb-3 tracking-wider" style={{ color: '#7dd3fc' }}>
                            <Star className="w-3 h-3" style={{ fill: '#7dd3fc' }} />
                            FEATURED PROJECT
                          </div>
                        )}
                        {index !== 0 && (
                          <div
                            className="inline-block px-3 py-1 skeu-pill rounded-full text-xs font-accent font-bold mb-3 tracking-wider"
                            style={{ color: '#f59e0b' }}
                          >
                            {project.role ||
                              project.company ||
                              "Product Management"}
                          </div>
                        )}
                        <h3
                          className="mb-2 transition-colors font-semibold group-hover:text-blue-400"
                          style={{ color: '#f1f5f9' }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {index === 0 && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                            <Star
                              className="w-6 h-6 text-zinc-950 fill-white"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <p
                      className={`mb-6 font-body ${isFeatured ? "text-lg" : ""}`}
                      style={{ color: '#94a3b8' }}
                    >
                      {project.description}
                    </p>

                    {/* Impact Tags */}
                    {isFeatured && project.metrics && (
                      <div className="mb-6 grid grid-cols-3 gap-3">
                        {project.metrics.map((item, i) => (
                          <div
                            key={i}
                            className="text-center skeu-stat p-3 rounded-xl"
                          >
                            <div
                              className="text-2xl font-display font-bold"
                              style={{ backgroundImage: 'linear-gradient(135deg, #f59e0b, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.3))' }}
                            >
                              {item.value}
                            </div>
                            <div className="text-xs mt-1 font-body tracking-wide" style={{ color: '#64748b' }}>
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(
                        project.technologies ||
                        project.tags ||
                        []
                      )
                        .slice(0, isFeatured ? 8 : 4)
                        .map((tech) => (
                          <span
                            key={tech}
                          className="px-3 py-1 skeu-pill rounded-lg text-sm font-accent tracking-wider transition-all"
                          style={{ color: '#94a3b8' }}>
                            {tech}
                          </span>
                        ))}
                    </div>

                    {/* Footer Links */}
                    <div className="mt-auto flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-accent tracking-wider text-zinc-500 transition-colors hover:text-blue-600"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && project.id !== 'pinterest-strategy' && project.id !== 'duolingo-green-owls' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-accent font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all group/link tracking-wider text-zinc-950"
                          onClick={(e) => e.stopPropagation()}
                        >
                          VIEW PROJECT
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}

// Small sparkles icon component used in header
function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}