import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  text?: string;
}

export function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Animated line */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
      </div>
      
      {/* Center decoration */}
      {text && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-[#0a0a0f] px-6 py-2 border border-indigo-500/30 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
              <span className="text-sm text-zinc-400 font-mono">{text}</span>
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative dots */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}
