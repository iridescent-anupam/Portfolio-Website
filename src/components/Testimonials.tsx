import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm mb-4">
            <Quote className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-zinc-400 font-mono">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            What People Say
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Testimonials from colleagues and stakeholders
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              
              <Card className="relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  {/* Quote icon */}
                  <div className="relative mb-6">
                    <Quote className="w-12 h-12 text-indigo-500/30" />
                    <div className="flex gap-1 absolute -top-2 right-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-zinc-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 font-mono border border-indigo-500/30 group-hover:scale-110 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-zinc-100 font-mono">{testimonial.name}</p>
                      <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                      <p className="text-zinc-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
