interface SketchAnnotationProps {
  text: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function SketchAnnotation({ text, position = 'top-right', className = '' }: SketchAnnotationProps) {
  const positionClasses = {
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
    'bottom-right': '-bottom-8 -right-8'
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className} group/annotation`}>
      {/* Arrow pointing to element */}
      <svg 
        className="absolute top-full left-1/2 -translate-x-1/2 w-12 h-12 text-indigo-400/50" 
        viewBox="0 0 50 50" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <path d="M 25 5 Q 25 25, 25 45" strokeDasharray="2,2" />
        <polygon points="25,45 22,40 28,40" fill="currentColor" />
      </svg>
      
      {/* Annotation box */}
      <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-indigo-500/30 rounded-lg px-3 py-2 transform -rotate-2 group-hover/annotation:rotate-0 transition-transform">
        <p className="text-xs text-indigo-300 font-mono whitespace-nowrap">{text}</p>
        
        {/* Sketch underline */}
        <svg className="absolute -bottom-1 left-2 right-2 h-1" viewBox="0 0 100 4" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 0 2 Q 50 3, 100 2" className="text-indigo-400/50" />
        </svg>
      </div>
    </div>
  );
}
