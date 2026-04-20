import {
  Target,
  Rocket,
  Users,
  TrendingUp,
  Sparkles,
  Code2,
  MessageSquareQuote,
  Gamepad2,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Rocket,
      value: "5+",
      label: "Products Launched",
      accent: "#2563eb",
      bg: "#dbeafe",
    },
    {
      icon: Users,
      value: "3",
      label: "Cross-functional Teams",
      accent: "#7c3aed",
      bg: "#ede9fe",
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Avg. Revenue Growth",
      accent: "#059669",
      bg: "#d1fae5",
    },
    {
      icon: Target,
      value: "100%",
      label: "On-time Delivery",
      accent: "#ea580c",
      bg: "#ffedd5",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #eef2ff 0%, #f5f3ff 50%, #ecfdf5 100%)" }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed, #06b6d4)" }}
      />

      {/* Vivid background blobs */}
      <div
        className="absolute top-20 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", filter: "blur(50px)" }}
      />
      <div
        className="absolute bottom-20 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest"
            style={{ background: "#2563eb", color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.4)" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            style={{ color: "#0f172a" }}
          >
            Strategy meets{" "}
            <span
              className="relative inline-block"
              style={{ color: "#2563eb" }}
            >
              execution
              <span
                className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #2563eb, #06b6d4)" }}
              />
            </span>
          </h2>
          <p className="text-xl font-medium max-w-xl mx-auto" style={{ color: "#334155" }}>
            A product manager who bridges user empathy with business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center mb-24" style={{ marginTop: '5rem' }}>
          {/* Left: Story Cards */}
          <div className="flex flex-col flex-1" style={{ gap: '2.5rem' }}>
            {/* Origin Story */}
            <div
              className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 relative z-20"
              style={{
                background: "#ffffff",
                borderLeft: "6px solid #2563eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="flex items-center gap-2 mb-4 text-sm font-black uppercase tracking-widest"
                style={{ color: "#1d4ed8" }}
              >
                <Code2 className="w-4 h-4" />
                Origin Story
              </div>
              <p className="text-lg leading-relaxed font-medium" style={{ color: "#334155" }}>
                Started as an{" "}
                <strong className="font-black" style={{ color: "#0f172a" }}>engineer</strong>, discovered I
                loved{" "}
                <span
                  className="font-bold inline-block mx-1 align-baseline relative"
                  style={{ background: "#fef3c7", color: "#b45309", border: "1px solid #fde68a", padding: "4px 12px 6px 14px", borderRadius: "8px", position: "relative", top: "-1px" }}
                >translating user pain into solutions</span>{" "}
                more than writing code. That's when I knew product management was
                my calling.
              </p>
            </div>

            {/* PM Philosophy */}
            <div
              className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 relative z-20"
              style={{
                background: "#ffffff",
                borderLeft: "6px solid #0891b2",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="flex items-center gap-2 mb-4 text-sm font-black uppercase tracking-widest"
                style={{ color: "#0e7490" }}
              >
                <MessageSquareQuote className="w-4 h-4" />
                PM Philosophy
              </div>
              <p className="text-lg leading-relaxed font-medium italic" style={{ color: "#334155" }}>
                "I believe the best PMs are{" "}
                <span
                  className="font-black inline-block mx-1 align-baseline relative"
                  style={{ background: "#dbeafe", color: "#1d4ed8", border: "1px solid #bfdbfe", padding: "4px 12px 6px 14px", borderRadius: "8px", fontStyle: "normal", position: "relative", top: "-1px" }}
                >translators</span>{" "}
                — between{" "}
                <strong className="not-italic font-black" style={{ color: "#0f172a" }}>users & engineers</strong>,{" "}
                <strong className="not-italic font-black" style={{ color: "#0f172a" }}>data & intuition</strong>,{" "}
                <strong className="not-italic font-black" style={{ color: "#0f172a" }}>vision & execution</strong>."
              </p>
            </div>

            {/* Beyond Work */}
            <div
              className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 relative z-20"
              style={{
                background: "#ffffff",
                borderLeft: "6px solid #7c3aed",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="flex items-center gap-2 mb-4 text-sm font-black uppercase tracking-widest"
                style={{ color: "#6d28d9" }}
              >
                <Gamepad2 className="w-4 h-4" />
                Beyond Work
              </div>
              <p className="text-lg leading-relaxed font-medium" style={{ color: "#334155" }}>
                When not building products, you'll find me cooking, exploring{" "}
                <span
                  className="font-bold inline-block mx-1 align-baseline relative"
                  style={{ background: "#fae8ff", color: "#a21caf", border: "1px solid #f5d0fe", padding: "4px 12px 6px 14px", borderRadius: "8px", position: "relative", top: "-1px" }}
                >video games & cinema</span>{" "}
                or logging them on Letterboxd.
              </p>
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="relative flex-1 flex items-center justify-center lg:justify-end pr-0 lg:pr-8 pt-8 pb-10">
            <div className="relative w-full group mx-auto lg:ml-auto lg:mr-0" style={{ maxWidth: '270px', transform: 'translateY(-2.5rem)' }}>
              {/* Floating badge */}
              <div
                className="absolute -top-6 -left-8 px-5 py-2.5 rounded-full font-black text-sm text-white z-50 whitespace-nowrap hidden sm:block transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                  boxShadow: "0 10px 30px rgba(99,102,241,0.6)",
                  border: "2px solid #ffffff"
                }}
              >
                Creative Problem Solver ✨
              </div>

              {/* Main Approach Card */}
              <div
                className="rounded-3xl p-[3px] transform rotate-2 group-hover:rotate-0 group-hover:-translate-y-3 transition-all duration-500 relative z-10 w-full"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)",
                  boxShadow: "0 20px 60px rgba(99,102,241,0.4)",
                }}
              >
                <div
                  className="relative flex flex-col items-center"
                  style={{ background: "#fff", paddingTop: '2.5rem', paddingBottom: '1.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', borderRadius: '20px' }}
                >
                  {/* Soft color wash */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(20px)" }}
                  />

                  <div
                    className="mb-4 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 mx-auto"
                    style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 8px 24px rgba(99,102,241,0.5)", width: '3rem', height: '3rem', borderRadius: '12px' }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-display font-black text-2xl mb-4 relative z-10 text-center" style={{ color: "#1e293b" }}>
                    My Approach
                  </h3>

                  <div className="relative z-10 flex flex-col items-center w-full" style={{ gap: '0.75rem' }}>
                    {[
                      { label: "User-first thinking", bg: "#fef3c7", text: "#92400e", rotateClass: "-rotate-2" },
                      { label: "Data-driven decisions", bg: "#d1fae5", text: "#065f46", rotateClass: "rotate-3" },
                      { label: "Agile execution", bg: "#ede9fe", text: "#4c1d95", rotateClass: "-rotate-1" },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-center py-3.5 px-4 transition-all duration-300 cursor-default relative text-center transform ${item.rotateClass} hover:rotate-0 hover:scale-105 hover:z-20`}
                        style={{
                          background: item.bg,
                          width: '90%',
                          borderRadius: '3px 15px 5px 15px',
                          boxShadow: '3px 6px 15px rgba(0,0,0,0.05)'
                        }}
                      >
                        <div className="absolute top-0 left-0 right-0 h-2 rounded-t-sm opacity-50 mix-blend-overlay" style={{ background: 'linear-gradient(180deg, white, transparent)' }} />
                        <span className="font-semibold italic" style={{ color: item.text, fontSize: '1rem' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Growth Mindset Card */}
              <div
                className="absolute p-6 rounded-2xl transform -rotate-3 group-hover:rotate-1 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 z-50"
                style={{
                  bottom: "-6rem",
                  right: "-1rem",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", boxShadow: "0 8px 16px rgba(16,185,129,0.3)" }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-base" style={{ color: "#1e293b" }}>Growth Mindset</div>
                    <div className="text-sm font-semibold mt-0.5" style={{ color: "#475569" }}>Always learning & improving.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-24 pt-16 border-t border-indigo-500/10 relative z-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group"
              style={{
                background: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: `2px solid ${highlight.bg}`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: highlight.accent, boxShadow: `0 8px 24px ${highlight.accent}55` }}
              >
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black mb-1" style={{ color: "#0f172a" }}>
                {highlight.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "#64748b" }}>
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}