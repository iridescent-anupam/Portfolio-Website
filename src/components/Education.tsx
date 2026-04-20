import { Calendar, MapPin, Star, Award } from "lucide-react";
import { education, certifications, awards } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Education() {
  return (
    <section id="education" className="py-16 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Glass divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              Education & Credentials
            </span>
          </div>
          <h2 className="text-zinc-950 mb-4 text-3xl md:text-5xl font-bold font-display">
            Continuous <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">learning</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
            Academic excellence combined with industry certifications and recognition.
          </p>
        </div>

        {/* Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/60 border border-zinc-200/50 backdrop-blur-md shadow-sm rounded-3xl p-8 hover:border-yellow-500/30 transition-all"
            >
              {/* Logo */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-32 h-32 glass-subtle rounded-2xl overflow-hidden flex-shrink-0 p-1">
                  <ImageWithFallback
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* GPA Badge */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-2 text-center ml-auto">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wide">GPA</div>
                  <div className="text-2xl font-display font-bold text-zinc-950">{edu.gpa}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-zinc-950 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-zinc-600 mb-3">{edu.field}</p>
                  <div className="text-sm font-semibold text-zinc-500 mb-2">{edu.school}</div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-yellow-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-500 italic">{edu.description}</p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {edu.achievements.slice(0, 3).map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-500">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-zinc-950" />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-950">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white/60 border border-zinc-200/50 backdrop-blur-md shadow-sm rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 glass-subtle rounded-xl overflow-hidden flex-shrink-0 p-2 group-hover:border-cyan-500/30 transition-all">
                      <ImageWithFallback
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-zinc-500 mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="text-xs text-gray-600 mt-1">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-zinc-950" />
              </div>
              <h3 className="text-2xl font-display font-bold text-zinc-950">Awards & Honors</h3>
            </div>

            <div className="space-y-4">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="bg-white/60 border border-zinc-200/50 backdrop-blur-md shadow-sm rounded-2xl p-6 hover:border-yellow-500/30 transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50/50 border border-blue-100-warm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-orange-400" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-zinc-950 mb-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-zinc-500 mb-2">{award.issuer}</p>
                      <p className="text-sm text-zinc-500 mb-2">{award.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{award.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}