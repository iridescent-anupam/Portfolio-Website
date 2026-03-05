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
    "Product Management": "from-purple-400 to-pink-500",
    "Technical Skills": "from-cyan-400 to-blue-500",
    "Cloud & DevOps": "from-cyan-400 to-teal-500",
    "Platform & Enterprise": "from-indigo-400 to-purple-500",
    "Design & Tools": "from-pink-400 to-rose-500",
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
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="px-5 py-2 glass-accent rounded-full font-bold text-sm text-cyan-400 tracking-widest uppercase">
              MY TOOLKIT
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-bold text-xs">
              50+ Skills
            </div>
          </div>

          <h2 className="text-white mb-3 relative inline-block text-3xl md:text-4xl font-bold">
            Full-stack{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                product toolkit
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From strategy to code, I bridge business and
            technology
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
                  className="h-full rounded-3xl p-[1px] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
                >
                  <div className="h-full glass-card-dark rounded-[22px] p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${accentGradient} rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg`}
                      >
                        {Icon && (
                          <Icon className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {category}
                        </h3>
                        <div className="text-xs text-gray-500 font-medium">
                          {skillList.length} skills
                        </div>
                      </div>
                    </div>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <div
                          key={skill}
                          className={`group/skill px-3 py-1.5 glass-subtle hover:glass-accent text-gray-300 hover:text-cyan-300 rounded-lg transition-all cursor-default ${isLarge ? "text-sm" : "text-xs"
                            }`}
                        >
                          <span className="font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
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