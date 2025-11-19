import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Sparkles, Star } from "lucide-react";
import { awards } from "../data/content";

export function Awards() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-400 font-mono">Recognition</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent">
            Awards & Honors
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Recognized for exceptional performance and innovation
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              <Card className="relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {/* Trophy icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform">
                      <Trophy className="w-8 h-8 text-yellow-400" />
                      <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <CardTitle className="text-lg leading-tight text-zinc-100 group-hover:text-yellow-300 transition-colors">
                          {award.name}
                        </CardTitle>
                        <Badge className="flex-shrink-0 bg-yellow-500/20 text-yellow-300 border-yellow-500/30 font-mono">
                          {award.year}
                        </Badge>
                      </div>
                      <p className="text-orange-400 font-mono text-sm mb-2">{award.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed">{award.description}</p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
