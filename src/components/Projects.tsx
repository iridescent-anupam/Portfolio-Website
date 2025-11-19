import { ArrowUpRight, Github } from "lucide-react";
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
      className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-gray-900 dark:text-white">
            Selected <span className="text-cyan-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            A collection of products and strategies solving complex problems.
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Side */}
              <div className={`relative overflow-hidden rounded-2xl aspect-video shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium tracking-wide">
                      {project.role}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 font-display group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem/Solution Snippet */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.problemStatement || project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Impact</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <span key={i} className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-2 text-gray-900 dark:text-white font-bold group-hover:translate-x-2 transition-transform">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
}