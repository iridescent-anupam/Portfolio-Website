import {
  Code2,
  Palette,
  Users,
  Brain,
  Cloud,
  Server,
} from "lucide-react";
import { skills } from "../data/content";

export function Skills() {
  const categoryIcons: Record<string, any> = {
    "Product Management": Brain,
    "Technical Skills": Code2,
    "Cloud & DevOps": Cloud,
    "Platform & Enterprise": Server,
    "Design & Tools": Palette,
  };

  const categoryAccents: Record<string, string> = {
    "Product Management": "from-blue-500 to-indigo-600",
    "Technical Skills": "from-blue-400 to-blue-600",
    "Cloud & DevOps": "from-amber-500 to-orange-500",
    "Platform & Enterprise": "from-indigo-500 to-violet-600",
    "Design & Tools": "from-amber-400 to-orange-400",
  };

  const categoryPillColors: Record<string, { bg: string; text: string; border: string }> = {
    "Product Management": { bg: 'rgba(59,130,246,0.12)', text: '#93c5fd', border: 'rgba(59,130,246,0.25)' },
    "Technical Skills":   { bg: 'rgba(34,211,238,0.1)',  text: '#67e8f9', border: 'rgba(34,211,238,0.2)'  },
    "Cloud & DevOps":     { bg: 'rgba(251,191,36,0.1)',  text: '#fcd34d', border: 'rgba(251,191,36,0.2)'  },
    "Platform & Enterprise": { bg: 'rgba(167,139,250,0.1)', text: '#c4b5fd', border: 'rgba(167,139,250,0.2)' },
    "Design & Tools":    { bg: 'rgba(249,115,22,0.1)',  text: '#fdba74', border: 'rgba(249,115,22,0.2)'  },
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Glass divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="px-5 py-2 skeu-pill font-accent font-bold text-xs tracking-widest uppercase" style={{ color: '#7dd3fc' }}>
              MY TOOLKIT
            </div>
            <div className="px-3 py-1.5 rounded-full font-bold text-xs text-white" style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', boxShadow: '0 0 14px rgba(249,115,22,0.35)' }}>
              50+ Skills
            </div>
          </div>

          <h2 className="mb-3 relative inline-block text-3xl md:text-4xl font-bold" style={{ color: '#f1f5f9' }}>
            Full-stack{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8, #c084fc)' }}>
                product toolkit
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-50" style={{ background: 'linear-gradient(90deg, #60a5fa, #818cf8)' }}></div>
            </span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            From strategy to code, I bridge business and technology
          </p>
        </div>

        {/* Bento Grid Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillCategory, categoryIndex) => {
            const category = skillCategory.category;
            const skillList = skillCategory.skills;
            const Icon = categoryIcons[category] || Users;
            const accentGradient = categoryAccents[category] || "from-gray-400 to-gray-500";

            const isLarge = categoryIndex === 0;

            return (
              <div
                key={category}
                className={`group ${isLarge ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <div
                  className="h-full rounded-3xl p-[1px] transition-all transform hover:-translate-y-1"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))', boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)' }}
                >
                  <div className="h-full rounded-[22px] p-6" style={{ background: 'linear-gradient(145deg, #1b1f2d, #111827)', boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.07), inset -1px -1px 0px rgba(0,0,0,0.4)' }}>
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${accentGradient} rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg`}
                      >
                        {Icon && (
                          <Icon className="w-6 h-6 text-zinc-950" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg" style={{ color: '#f1f5f9' }}>
                          {category}
                        </h3>
                        <div className="text-xs font-medium" style={{ color: '#94a3b8' }}>
                          {skillList.length} skills
                        </div>
                      </div>
                    </div>

                    {/* Skills Pills — colour-coded per category */}
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => {
                        const pill = categoryPillColors[category] || { bg: 'rgba(125,211,252,0.1)', text: '#7dd3fc', border: 'rgba(125,211,252,0.2)' };
                        return (
                          <div
                            key={skill}
                            className={`group/skill px-3 py-1.5 rounded-full transition-all cursor-default ${isLarge ? "text-sm" : "text-xs"}`}
                            style={{ background: pill.bg, color: pill.text, border: `1px solid ${pill.border}`, fontWeight: 500 }}
                          >
                            <span className="font-medium">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ATS-Friendly Skills List (Hidden but machine-readable) */}
        <div className="sr-only" aria-label="Skills for ATS">
          Product Strategy, Roadmap Development, Product Lifecycle Management, Agile, Scrum, SAFe®, User Research, UX, Data-driven Decision Making, Stakeholder Management, OKRs, KPIs, A/B Testing, Product Analytics, Market Research, Product Prototyping, JavaScript, TypeScript, Python, C, C++, C#, SQL, MySQL, ReactJS, Next.js, .NET, HTML, CSS, Bootstrap, Microsoft Azure, Azure Functions, Azure DevOps, CI/CD Pipelines, Netlify, Vercel, Microsoft Dynamics 365 CRM, SAP Integration, ServiceNow, Power Automate, Power Apps, AI Builder, SaaS, Figma, Canva, FluentUI, Tailwind CSS, shadcn/UI, RESTful APIs, Postman, Git, Jira, Sprint Planning, Backlog Management, User Stories, Buy vs Build Analysis
        </div>
      </div>
    </section>
  );
}