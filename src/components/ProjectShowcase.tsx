import { Badge } from "./ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectShowcaseProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

export function ProjectShowcase({ title, description, image, tags, featured = false, link }: ProjectShowcaseProps) {
  return (
    <div className="group relative">
      {/* Sketch frame decoration */}
      <svg 
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
        viewBox="0 0 400 500" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      >
        <rect x="10" y="10" width="380" height="480" rx="20" strokeDasharray="8,4" />
        <rect x="5" y="5" width="390" height="490" rx="20" strokeDasharray="4,8" className="animate-pulse" />
      </svg>
      
      <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-all duration-500 group-hover:scale-[1.02]">
        {/* Image with overlay */}
        <div className="relative h-80 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10"></div>
          
          {/* Image */}
          <ImageWithFallback 
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 right-4 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-50 animate-pulse"></div>
                <Badge className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-zinc-900 border-0 font-mono">
                  ⭐ Featured
                </Badge>
              </div>
            </div>
          )}
          
          {/* Sketch arrow pointing to content */}
          <svg className="absolute bottom-4 right-4 w-16 h-16 text-indigo-400/50 z-20 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 10 10 Q 25 25, 40 40" strokeDasharray="3,3" className="animate-pulse" />
            <polygon points="40,40 35,38 38,35" fill="currentColor" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative p-6 z-20">
          <h3 className="text-2xl text-zinc-100 mb-3 group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-zinc-400 mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="border-zinc-700 text-zinc-400 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </div>
          
          {/* Link */}
          {link && (
            <a 
              href={link}
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-mono text-sm group/link"
            >
              View Project 
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
        
        {/* Bottom sketch line */}
        <svg className="absolute bottom-0 left-0 w-full h-2 text-indigo-500/30" viewBox="0 0 400 10" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 0 5 L 400 5" strokeDasharray="5,5" className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </svg>
      </div>
    </div>
  );
}
