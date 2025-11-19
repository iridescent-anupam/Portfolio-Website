import { X, Github, ExternalLink, ArrowRight, CheckCircle2, Lightbulb, Target } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../data/content";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden bg-white dark:bg-[#0A0E1A] border-none rounded-2xl shadow-2xl">
        <div className="h-full overflow-y-auto scrollbar-hide">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-8 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/10 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[400px] w-full">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-sm font-bold tracking-wider backdrop-blur-sm">
                      {project.role}
                    </span>
                    <span className="px-4 py-2 bg-white/10 text-white border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.duration}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all flex items-center gap-2"
                      >
                        View Live <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
                      >
                        View Code <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-24">

            {/* Overview */}
            <section className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyan-500 mb-2">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">The Challenge</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.problemStatement || project.challenge}
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyan-500 mb-2">
                  <Lightbulb className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">The Solution</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Metrics */}
            <section className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display">
                      {metric.value}
                    </div>
                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Discovery & Process */}
            {project.process && (
              <section>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 font-display">
                  Process & Discovery
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.process.map((step, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-cyan-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Full Description / Deep Dive */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-display not-prose">
                Deep Dive
              </h3>
              <div className="whitespace-pre-line text-gray-600 dark:text-gray-300">
                {project.fullDescription}
              </div>
            </section>

            {/* Learnings */}
            {project.learnings && (
              <section className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-display flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  Key Learnings
                </h3>
                <div className="grid gap-6">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-cyan-500 font-bold text-lg">0{index + 1}</span>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">{learning}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tech Stack */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-display">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {(project.technologies || project.tags).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}