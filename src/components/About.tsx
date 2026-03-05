import {
  Target,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Rocket,
      value: "5+",
      label: "Products Launched",
      gradient: "from-orange-400 to-pink-500",
    },
    {
      icon: Users,
      value: "3",
      label: "Cross-functional Teams Led",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Average Revenue Growth",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Target,
      value: "100%",
      label: "On-time Delivery Rate",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Glass dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 relative">
            <div className="px-6 py-3 glass-accent-warm rounded-full font-bold text-orange-300 tracking-widest uppercase text-sm">
              ABOUT ME
            </div>
          </div>

          <h2 className="text-white mb-6 text-3xl md:text-5xl font-bold font-display">
            Strategy meets{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                execution
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            {/* Origin Story */}
            <div className="glass-card-dark rounded-2xl p-8 border-l-4 border-l-orange-400/50">
              <div className="text-sm font-bold text-orange-400 mb-2 uppercase tracking-wider">Origin Story</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Started as an{" "}
                <span className="font-bold text-white">
                  engineer
                </span>
                , discovered I loved{" "}
                <span className="px-2 py-1 bg-orange-500/15 rounded text-orange-300 mx-1 font-medium">
                  translating user pain into solutions
                </span>{" "}
                more than writing code. That's when I knew product management was my calling.
              </p>
            </div>

            {/* PM Philosophy */}
            <div className="glass-card-dark rounded-2xl p-8 border-l-4 border-l-cyan-400/50">
              <div className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider">PM Philosophy</div>
              <p className="text-lg text-gray-300 leading-relaxed font-medium italic">
                "I believe the best PMs are{" "}
                <span className="px-2 py-1 bg-cyan-500/15 rounded text-cyan-300 mx-1 font-bold not-italic">
                  translators
                </span>{" "}
                — between{" "}
                <span className="font-bold text-white not-italic">users & engineers</span>,{" "}
                <span className="font-bold text-white not-italic">data & intuition</span>,{" "}
                <span className="font-bold text-white not-italic">vision & execution</span>."
              </p>
            </div>

            {/* Beyond Work */}
            <div className="glass-card-dark rounded-2xl p-8 border-l-4 border-l-purple-400/50">
              <div className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-wider">Beyond Work</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                When not building products, you'll find me exploring{" "}
                <span className="px-2 py-1 bg-purple-500/15 rounded text-purple-300 mx-1 font-medium">
                  game design
                </span>{" "}
                (UX at its finest) or binging{" "}
                <span className="px-2 py-1 bg-pink-500/15 rounded text-pink-300 mx-1 font-medium">
                  sci-fi
                </span>
                .
              </p>
              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
                >
                  See how I apply this thinking in my work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative h-full min-h-[400px]">
            {/* Main card */}
            <div className="absolute top-0 right-0 w-4/5 h-3/4 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-all">
              <div className="absolute inset-[1px] glass-card-dark rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-display font-bold text-2xl text-white mb-3">
                    My Approach
                  </div>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>User-first thinking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Data-driven decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Agile execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller overlapping card */}
            <div className="absolute bottom-0 left-0 w-3/5 glass-card-dark rounded-2xl shadow-xl p-6 transform -rotate-6 hover:-rotate-3 transition-all z-10 border-purple-500/20">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-white mb-1">
                Growth Mindset
              </div>
              <div className="text-sm text-gray-400">
                Always learning, always improving
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute top-1/4 left-0 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-sm shadow-lg transform -rotate-12">
              Creative Problem Solver
            </div>
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              <div
                className="h-full rounded-3xl p-[1px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
              >
                <div className="h-full glass-card-dark rounded-[22px] p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform shadow-md`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium leading-tight">
                    {highlight.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}