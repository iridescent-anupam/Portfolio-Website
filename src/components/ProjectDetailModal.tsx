import { X, Calendar, MapPin, Briefcase, Code, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  year: string;
  duration: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  fullDescription: string;
  metrics: Array<{ value: string; label: string }>;
  tags: string[];
  technologies: string[];
}

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black/80 border border-gold-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 border-2 border-gold-500/40 hover:border-gold-500 bg-black/80 hover:bg-gold-500/10 transition-all flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-gold-500" />
        </button>
        
        <div className="p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-gold-500 mb-4">
              <Play className="w-4 h-4" />
              <span className="text-xs tracking-[0.4em] uppercase">Full Feature</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display text-gold-400 mb-4 spotlight-text">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gold-500" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>{project.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-500" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="mb-8 aspect-video overflow-hidden border border-gold-500/30">
            <ImageWithFallback 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Full Description */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-display text-gold-500 mb-4 uppercase tracking-wider">Synopsis</h3>
              <div className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="mb-8">
            <h3 className="text-xl font-display text-gold-500 mb-4 uppercase tracking-wider">Impact Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="p-6 bg-black/60 border border-gold-500/20 text-center"
                >
                  <div className="text-2xl lg:text-3xl font-display text-gold-500 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-gold-500" />
              <h3 className="text-xl font-display text-gold-500 uppercase tracking-wider">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs bg-gold-500/10 text-gray-300 border border-gold-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tags */}
          <div>
            <h3 className="text-xl font-display text-amber-500 mb-4 uppercase tracking-wider">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
