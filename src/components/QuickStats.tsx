import { quickStats } from "../data/content";
import { TrendingUp, Sparkles } from "lucide-react";

export function QuickStats() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Gradient line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {quickStats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-2">
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {index === 0 && <TrendingUp className="w-5 h-5 text-indigo-400" />}
                      {index === 1 && <Sparkles className="w-5 h-5 text-purple-400" />}
                      {index === 2 && <TrendingUp className="w-5 h-5 text-pink-400" />}
                      {index === 3 && <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                  </div>
                  
                  {/* Value with gradient */}
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent font-mono">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <p className="text-zinc-400 text-sm md:text-base">{stat.label}</p>
                  
                  {/* Animated underline */}
                  <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
}
