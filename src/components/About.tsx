import {
  Target,
  Rocket,
  Users,
  TrendingUp,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Rocket,
      value: "5+",
      label: "Products Launched",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      value: "3",
      label: "Cross-functional Teams Led",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Average Revenue Growth",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Target,
      value: "100%",
      label: "On-time Delivery Rate",
      color: "from-pink-400 to-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Creative Divider */}
      <div className="absolute top-0 left-0 w-1/3 h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>

      {/* Decorative Background */}
      <div className="absolute top-10 left-0 text-9xl opacity-5 transform -rotate-12">
        🎯
      </div>
      <div className="absolute bottom-10 right-0 text-9xl opacity-5 transform rotate-12">
        💡
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Creative Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 relative">
            <div className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold transform rotate-2 shadow-lg">
              👨‍💼 ABOUT ME
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-500 rounded-full"></div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full"></div>
          </div>

          <h2 className="text-gray-900 mb-6">
            Strategy meets{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                execution
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8 Q50 2, 100 8 T200 8"
                  stroke="#FDB913"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            {/* Origin Story */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-yellow-400 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
              <div className="text-sm font-bold text-yellow-600 mb-2 uppercase tracking-wider">Origin Story</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Started as an{" "}
                <span className="font-bold text-gray-900">
                  engineer
                </span>
                , discovered I loved{" "}
                <span className="px-2 py-1 bg-yellow-100 rounded mx-1 font-medium">
                  translating user pain into solutions
                </span>{" "}
                more than writing code. That's when I knew product management was my calling.
              </p>
            </div>

            {/* PM Philosophy */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all border-2 border-orange-300">
              <div className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wider">PM Philosophy</div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                "I believe the best PMs are{" "}
                <span className="px-2 py-1 bg-orange-200 rounded mx-1 font-bold not-italic">
                  translators
                </span>{" "}
                — between{" "}
                <span className="font-bold text-gray-900 not-italic">users & engineers</span>,{" "}
                <span className="font-bold text-gray-900 not-italic">data & intuition</span>,{" "}
                <span className="font-bold text-gray-900 not-italic">vision & execution</span>."
              </p>
            </div>

            {/* Beyond Work */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
              <div className="text-sm font-bold text-purple-600 mb-2 uppercase tracking-wider">Beyond Work</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                When not building products, you'll find me exploring{" "}
                <span className="px-2 py-1 bg-purple-100 rounded mx-1 font-medium">
                  game design
                </span>{" "}
                (UX at its finest) or binging{" "}
                <span className="px-2 py-1 bg-pink-100 rounded mx-1 font-medium">
                  sci-fi
                </span>
                .
              </p>
              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-purple-200">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
                >
                  See how I apply this thinking in my work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative h-full min-h-[400px]">
            {/* Main card */}
            <div className="absolute top-0 right-0 w-4/5 h-3/4 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-all">
              <div className="absolute inset-4 bg-white rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">🎨</div>
                  <div className="font-display font-bold text-2xl text-gray-900 mb-3">
                    My Approach
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>User-first thinking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Data-driven decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Agile execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller overlapping cards */}
            <div className="absolute bottom-0 left-0 w-3/5 bg-gray-900 text-white rounded-2xl shadow-xl p-6 transform -rotate-6 hover:-rotate-3 transition-all z-10">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-display font-bold mb-1">
                Growth Mindset
              </div>
              <div className="text-sm text-gray-300">
                Always learning, always improving
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute top-1/4 left-0 px-4 py-2 bg-green-500 text-white rounded-full font-bold text-sm shadow-lg transform -rotate-12 animate-bounce">
              ✨ Creative Problem Solver
            </div>
          </div>
        </div>

        {/* Impact Highlights - Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              <div
                className={`h-full bg-gradient-to-br ${highlight.color} rounded-3xl p-1 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:rotate-2`}
              >
                <div className="h-full bg-white rounded-[22px] p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform shadow-md`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold text-gray-900 mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">
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