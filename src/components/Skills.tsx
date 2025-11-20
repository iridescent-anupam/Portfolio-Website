import {
  Code2,
  Palette,
  TrendingUp,
  Users,
  Zap,
  Brain,
  MessageSquare,
  Database,
} from "lucide-react";
import { skills } from "../data/content";

export function Skills() {
  const categoryIcons: Record<string, any> = {
    "Product Management": Brain,
    "Technical Skills": Code2,
    "Design & UX": Palette,
    "Business & Strategy": TrendingUp,
    "Collaboration & Tools": Users,
  };

  const categoryColors: Record<string, string> = {
    "Product Management": "from-purple-400 to-pink-500",
    "Technical Skills": "from-blue-400 to-cyan-500",
    "Design & UX": "from-yellow-400 to-orange-500",
    "Business & Strategy": "from-green-400 to-emerald-500",
    "Collaboration & Tools": "from-red-400 to-pink-500",
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Creative Divider */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Creative Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl opacity-5">
            🛠️
          </div>

          <div className="inline-flex items-center gap-3 mb-6">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold transform rotate-1 shadow-lg">
              🎨 MY TOOLKIT
            </div>
            <div className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm transform -rotate-2">
              50+ Skills
            </div>
          </div>

          <h2 className="text-gray-900 mb-4 relative inline-block">
            Full-stack{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                product toolkit
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400/30 transform -rotate-1"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to code, I bridge business and
            technology 🌉
          </p>
        </div>

        {/* Bento Grid Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, categoryIndex) => {
            const category = skillCategory.category;
            const skillList = skillCategory.skills;
            const Icon = categoryIcons[category];
            const colorGradient = categoryColors[category];

            // Make first card larger
            const isLarge = categoryIndex === 0;

            return (
              <div
                key={category}
                className={`group ${isLarge ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <div
                  className={`h-full bg-gradient-to-br ${colorGradient} rounded-3xl p-1 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:rotate-1`}
                >
                  <div className="h-full bg-white rounded-[22px] p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg`}
                      >
                        {Icon && (
                          <Icon className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-gray-900">
                          {category}
                        </h3>
                        <div className="text-sm text-gray-500 font-medium">
                          {skillList.length} skills
                        </div>
                      </div>
                    </div>

                    {/* Skills Pills */}
                    <div
                      className={`flex flex-wrap gap-2 ${isLarge ? "gap-3" : ""}`}
                    >
                      {skillList.map((skill) => (
                        <div
                          key={skill}
                          className={`group/skill px-4 py-2 bg-gray-50 hover:bg-gray-900 text-gray-700 hover:text-white rounded-xl transition-all transform hover:scale-105 cursor-default ${isLarge ? "text-base" : "text-sm"
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