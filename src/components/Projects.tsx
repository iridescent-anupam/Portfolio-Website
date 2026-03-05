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
              className="px-6 py-3 glass-accent rounded-full font-accent font-bold tracking-widest text-cyan-400"
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              FEATURED WORK
            </div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
            >
              {projects.length}
            </div>
          </div>

          <h2 className="mb-6 relative inline-block text-white">
            Projects I'm{" "}
            <span className="relative">
              <span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"
              >
                proud of
              </span>
              <Star
                className="absolute -top-8 -right-8 w-8 h-8 animate-pulse text-orange-400 fill-orange-400"
              />
            </span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto font-body text-gray-300"
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
                  className={`h-full rounded-3xl p-[1px] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${index % 4 === 0
                      ? "bg-gradient-to-br from-cyan-500/30 to-purple-500/30 hover:from-cyan-500/50 hover:to-purple-500/50"
                      : index % 4 === 1
                        ? "bg-gradient-to-br from-orange-500/30 to-amber-500/30 hover:from-orange-500/50 hover:to-amber-500/50"
                        : index % 4 === 2
                          ? "bg-gradient-to-br from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/50 hover:to-blue-500/50"
                          : "bg-gradient-to-br from-pink-500/30 to-purple-500/30 hover:from-pink-500/50 hover:to-purple-500/50"
                    }`}
                >
                  <div
                    className="h-full rounded-[22px] p-8 flex flex-col glass-card-dark"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {index === 0 && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-accent rounded-full text-xs font-accent font-bold mb-3 tracking-wider text-cyan-400">
                            <Star className="w-3 h-3 fill-cyan-400" />
                            FEATURED PROJECT
                          </div>
                        )}
                        {index !== 0 && (
                          <div
                            className="inline-block px-3 py-1 glass-accent-warm rounded-full text-xs font-accent font-bold mb-3 tracking-wider text-orange-300"
                          >
                            {project.role ||
                              project.company ||
                              "Product Management"}
                          </div>
                        )}
                        <h3
                          className="mb-2 transition-colors text-white font-semibold group-hover:text-cyan-300"
                        >
                          {project.title}
                        </h3>
                      </div>

                      {index === 0 && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                            <Star
                              className="w-6 h-6 text-white fill-white"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <p
                      className={`mb-6 font-body text-gray-400 ${isFeatured ? "text-lg" : ""}`}
                    >
                      {project.description}
                    </p>

                    {/* Impact Tags */}
                    {isFeatured && project.metrics && (
                      <div className="mb-6 grid grid-cols-3 gap-3">
                        {project.metrics.map((item, i) => (
                          <div
                            key={i}
                            className="text-center p-3 glass-subtle rounded-xl"
                          >
                            <div
                              className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"
                            >
                              {item.value}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 font-body tracking-wide">
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
                            className="px-3 py-1 glass-subtle rounded-lg text-sm font-accent tracking-wider text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                          >
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
                          className="flex items-center gap-2 text-sm font-accent tracking-wider text-gray-400 transition-colors hover:text-cyan-400"
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
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-accent font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all group/link tracking-wider text-white"
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