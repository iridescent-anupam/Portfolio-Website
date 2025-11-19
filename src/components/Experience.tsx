import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";
import { experience, personalInfo } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 lg:py-20 px-6 lg:px-8 bg-gray-50 border-t-4 border-yellow-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-yellow-400 rounded-full mb-4 shadow-sm">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Work Experience
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Driving impact at{" "}
            <span className="text-yellow-500">scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3+ years of product leadership across enterprise
            systems, mobile apps, and SaaS platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 hidden md:block"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-12 ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:block"></div>

                {/* Company Logo */}
                <div
                  className={`${index % 2 === 1 ? "md:col-start-2 md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`inline-block bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 ${
                      index % 2 === 1 ? "" : "md:ml-auto"
                    }`}
                  >
                    <div className="w-32 h-32">
                      <ImageWithFallback
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-semibold text-gray-700 mb-3">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-yellow-600" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-yellow-600" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.type && (
                          <div className="px-2 py-0.5 bg-yellow-50 border border-yellow-400 text-yellow-700 rounded text-xs font-semibold">
                            {exp.type}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        Key Achievements
                      </div>
                      {exp.achievements
                        .slice(0, 5)
                        .map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      {exp.achievements.length > 5 && (
                        <div className="text-sm text-gray-500 italic">
                          +{exp.achievements.length - 5} more
                          achievements
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 max-w-2xl">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
              Want to know more about my experience?
            </h3>
            <p className="text-gray-700 mb-6">
              Download my full resume for detailed information
              about my work history and accomplishments.
            </p>
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}