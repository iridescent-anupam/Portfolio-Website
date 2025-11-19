import { Badge } from "./ui/badge";
import { CheckCircle2, Code2, Lightbulb, Users, BarChart3, Rocket, Zap } from "lucide-react";
import { coreCompetencies } from "../data/content";

const iconMap = [Code2, Lightbulb, Users, BarChart3, Rocket, Zap];

export function CoreCompetencies() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-zinc-400 font-mono">Core Competencies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            What I Bring
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreCompetencies.map((competency, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                
                {/* Card */}
                <div className="relative flex items-center gap-4 p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm group-hover:scale-[1.02]">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  
                  {/* Text */}
                  <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors flex-1">
                    {competency}
                  </span>
                  
                  {/* Check icon */}
                  <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
