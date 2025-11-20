import {
  ArrowUpRight,
  Github,
  ExternalLink,
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
      {/* Cinematic section divider */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-blade-runner animate-gradient"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Cinematic */}
        <div className="text-center mb-16 relative">
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl opacity-5 text-[#00F5FF]"
          >
            💼
          </div>

          <div className="inline-block mb-6 relative">
            <div
              className="px-6 py-3 glass-cyber rounded-full font-accent font-bold transform -rotate-2 glow-cyan tracking-widest text-[#00F5FF] border border-[rgba(0,245,255,0.3)]"
            >
              ✨ FEATURED WORK
            </div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 gradient-spice rounded-full flex items-center justify-center text-xs font-bold glow-orange text-white"
            >
              4
            </div>
          </div>

          <h2 className="mb-6 relative inline-block">
            Projects I'm{" "}
            <span className="relative">
              <span
                className="inline-block text-[#ff6b35] text-glow-orange"
              >
                proud of
              </span>
              <Star
                className="absolute -top-8 -right-8 w-8 h-8 animate-pulse-glow text-[#FFA066] fill-[#FFA066]"
              />
            </span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto font-body text-gray-200 font-medium"
          >
            Real products solving real problems, with measurable
            impact 📊
          </p>
        </div>

        {/* Bento Grid Layout - Cinematic Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {projects.map((project, index) => {
            // Create varied layouts
            const isFeatured = index === 0;
            const isWide = index === 1 || index === 4;
            const isTall = index === 2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative cursor-pointer ${isFeatured
                  ? "md:col-span-2 md:row-span-2"
                  : ""
                  } ${isWide ? "md:col-span-2" : ""} ${isTall ? "md:row-span-2" : ""}`}
                onClick={() => handleProjectClick(project)}
              >
                <div
                  className={`h-full ${index % 4 === 0
                    ? "gradient-blade-runner"
                    : index % 4 === 1
                      ? "gradient-spice"
                      : index % 4 === 2
                        ? "gradient-cyber"
                        : "gradient-dune"
                    } rounded-3xl p-[2px] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 ${index % 4 === 0
                      ? "hover:glow-cyan"
                      : index % 4 === 1
                        ? "hover:glow-orange"
                        : index % 4 === 2
                          ? "hover:glow-cyan"
                          : "hover:glow-orange"
                    }`}
                >
                  <div
                    className="h-full rounded-[22px] p-8 flex flex-col bg-[#131721]"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {index === 0 && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs font-accent font-bold mb-3 tracking-wider text-cyan-400 glow-cyan">
                            <Star className="w-3 h-3 fill-cyan-400" />
                            FEATURED PROJECT
                          </div>
                        )}
                        {index !== 0 && (
                          <div
                            className="inline-block px-3 py-1 glass-dune rounded-full text-xs font-accent font-bold mb-3 transform -rotate-1 tracking-wider text-[#C89B3C]"
                          >
                            {project.role ||
                              project.company ||
                              "Product Management"}
                          </div>
                        )}
                        <h3
                          className="mb-2 transition-colors text-white font-semibold"
                        >
                          {project.title}
                        </h3>
                      </div>

                      {index === 0 && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-12 h-12 gradient-cyber rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform glow-cyan">
                            <Star
                              className="w-6 h-6 text-[#0A0E1A] fill-[#0A0E1A]"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <p
                      className={`mb-6 font-body text-gray-300 font-medium ${isFeatured ? "text-lg" : ""}`}
                    >
                      {project.description}
                    </p>

                    {/* Impact Tags */}
                    {isFeatured && project.metrics && (
                      <div className="mb-6 grid grid-cols-3 gap-3">
                        {project.metrics.map((item, i) => (
                          <div
                            key={i}
                            className="text-center p-3 glass-cyber rounded-xl border border-[rgba(0,240,255,0.2)]"
                          >
                            <div
                              className="text-2xl font-display font-bold text-glow-orange text-[#FF8C42]"
                            >
                              {item.value}
                            </div>
                            <div className="text-xs text-gray-400 mt-1 font-body tracking-wide">
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
                            className="px-3 py-1 glass-dune rounded-lg text-sm font-accent tracking-wider hover:glow-orange transition-all text-[#C89B3C]"
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
                          className="flex items-center gap-2 text-sm font-accent tracking-wider text-gray-400 transition-colors hover:text-[#00F0FF]"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 gradient-blade-runner rounded-full text-sm font-accent font-bold hover:glow-cyan transition-all group/link tracking-wider text-[#0A0E1A]"
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

        {/* Fun CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-[3px] gradient-blade-runner rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform shadow-xl glow-cyan">
            <div
              className="rounded-3xl p-8 bg-[#131721]"
            >
              <div className="text-5xl mb-4">🎯</div>
              <div
                className="font-display font-bold text-2xl mb-2 text-[#00F0FF]"
              >
                Want to see more?
              </div>
              <p className="text-gray-300 mb-6 font-body">
                Check out my GitHub for additional projects and
                experiments
              </p>
              <a
                href="https://github.com/iridescent-anupam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-dune rounded-full font-accent font-bold hover:glow-orange transition-all tracking-wider text-[#0A0E1A]"
              >
                <Github className="w-5 h-5" />
                VISIT GITHUB
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
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