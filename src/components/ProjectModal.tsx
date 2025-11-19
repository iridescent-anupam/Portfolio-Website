import { X, Github, ExternalLink, FileText, Play, Image as ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectMedia {
  type: "image" | "video" | "pdf";
  url: string;
  title?: string;
  thumbnail?: string;
}

interface ProjectMetric {
  value: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  role?: string;
  company?: string;
  year?: string;
  duration?: string;
  image?: string;
  description: string;
  challenge?: string;
  solution?: string;
  fullDescription?: string;
  metrics?: ProjectMetric[];
  tags?: string[];
  technologies?: string[];
  github?: string;
  liveUrl?: string;
  media?: ProjectMedia[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto glass-cyber border-2 p-0" style={{background: '#0A0E1A', borderColor: 'rgba(0, 245, 255, 0.3)'}}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full glass-cyber hover:glow-cyan transition-all"
          style={{background: 'rgba(0, 0, 0, 0.5)'}}
        >
          <X className="w-5 h-5" style={{color: '#00F5FF'}} />
        </button>

        {/* Hero Image/Video */}
        {project.image && (
          <div className="relative h-80 overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-6 left-6 px-4 py-2 glass-dune rounded-full font-accent font-bold text-sm transform -rotate-2 glow-orange tracking-wider" style={{color: '#C89B3C'}}>
              {project.role || 'Product Management'}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Header */}
          <DialogHeader>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <DialogTitle className="text-4xl font-display mb-2" style={{color: '#FFFFFF'}}>
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {project.description}
                  </DialogDescription>
                  <div className="flex items-center gap-3 text-sm font-body" style={{color: '#9CA3AF'}}>
                    {project.company && <span>{project.company}</span>}
                    {project.duration && (
                      <>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-cyber rounded-lg hover:glow-cyan transition-all"
                      style={{borderColor: 'rgba(0, 245, 255, 0.2)'}}
                    >
                      <Github className="w-5 h-5" style={{color: '#00F5FF'}} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 gradient-blade-runner rounded-lg font-accent font-bold hover:glow-cyan transition-all tracking-wider"
                      style={{color: '#0A0E1A'}}
                    >
                      VIEW LIVE
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg font-body" style={{color: '#E5E7EB', fontWeight: 500}}>
                {project.description}
              </p>
            </div>
          </DialogHeader>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center glass-cyber p-6 rounded-xl" style={{borderColor: 'rgba(0, 240, 255, 0.2)'}}>
                  <div className="text-3xl font-display font-bold text-glow-orange mb-2" style={{color: '#FF8C42'}}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-body tracking-wide" style={{color: '#9CA3AF'}}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Solution */}
          {(project.challenge || project.solution) && (
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenge && (
                <div className="p-6 rounded-xl" style={{background: 'rgba(255, 107, 53, 0.05)', border: '1px solid rgba(255, 107, 53, 0.2)'}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{background: '#FF6B35'}}></div>
                    <h3 className="font-display text-xl" style={{color: '#FF6B35'}}>Challenge</h3>
                  </div>
                  <p className="font-body" style={{color: '#E5E7EB', fontWeight: 500}}>
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-6 rounded-xl" style={{background: 'rgba(0, 245, 255, 0.05)', border: '1px solid rgba(0, 245, 255, 0.2)'}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{background: '#00F5FF'}}></div>
                    <h3 className="font-display text-xl" style={{color: '#00F5FF'}}>Solution</h3>
                  </div>
                  <p className="font-body" style={{color: '#E5E7EB', fontWeight: 500}}>
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          {project.fullDescription && (
            <div className="space-y-4">
              <h3 className="font-display text-2xl flex items-center gap-2" style={{color: '#00F5FF'}}>
                <div className="w-1 h-6 gradient-cyber rounded-full"></div>
                Project Details
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="font-body whitespace-pre-line leading-relaxed" style={{color: '#D1D5DB', fontWeight: 500}}>
                  {project.fullDescription}
                </p>
              </div>
            </div>
          )}

          {/* Media Gallery */}
          {project.media && project.media.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display text-2xl flex items-center gap-2" style={{color: '#00F5FF'}}>
                <div className="w-1 h-6 gradient-cyber rounded-full"></div>
                Media & Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.media.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl glass-cyber hover:glow-cyan transition-all" style={{borderColor: 'rgba(0, 245, 255, 0.2)'}}>
                    {item.type === "image" && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="aspect-video relative overflow-hidden">
                          <ImageWithFallback
                            src={item.url}
                            alt={item.title || "Project image"}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <div className="flex items-center gap-2" style={{color: '#00F5FF'}}>
                              <ImageIcon className="w-4 h-4" />
                              <span className="text-sm font-accent tracking-wider">VIEW IMAGE</span>
                            </div>
                          </div>
                        </div>
                        {item.title && (
                          <div className="p-3 font-body text-sm" style={{color: '#E5E7EB'}}>
                            {item.title}
                          </div>
                        )}
                      </a>
                    )}

                    {item.type === "video" && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="aspect-video relative overflow-hidden bg-black/20 flex items-center justify-center">
                          {item.thumbnail ? (
                            <ImageWithFallback
                              src={item.thumbnail}
                              alt={item.title || "Video thumbnail"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Play className="w-16 h-16" style={{color: '#00F5FF', opacity: 0.5}} />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                            <div className="w-16 h-16 rounded-full glass-cyber flex items-center justify-center glow-cyan">
                              <Play className="w-8 h-8" style={{color: '#00F5FF'}} />
                            </div>
                          </div>
                        </div>
                        {item.title && (
                          <div className="p-3 font-body text-sm" style={{color: '#E5E7EB'}}>
                            {item.title}
                          </div>
                        )}
                      </a>
                    )}

                    {item.type === "pdf" && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-4 gradient-dune rounded-xl glow-orange">
                            <FileText className="w-8 h-8" style={{color: '#0A0E1A'}} />
                          </div>
                          <div className="flex-1">
                            <div className="font-accent font-bold tracking-wider mb-1" style={{color: '#F4C430'}}>
                              {item.title || "View Document"}
                            </div>
                            <div className="text-sm font-body" style={{color: '#9CA3AF'}}>
                              PDF Document
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{color: '#00F5FF'}} />
                        </div>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display text-2xl flex items-center gap-2" style={{color: '#00F5FF'}}>
                <div className="w-1 h-6 gradient-cyber rounded-full"></div>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass-dune rounded-xl font-accent tracking-wider hover:glow-orange transition-all"
                    style={{color: '#C89B3C'}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}