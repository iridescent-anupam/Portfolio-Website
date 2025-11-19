import { GraduationCap, Calendar, MapPin, Star, Award, ExternalLink } from "lucide-react";
import { education, certifications, awards } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Education() {
  return (
    <section id="education" className="py-16 lg:py-20 px-6 lg:px-8 bg-gray-50 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-yellow-400 rounded-full mb-4 shadow-sm">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Education & Credentials
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Continuous <span className="text-yellow-500">learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic excellence combined with industry certifications and recognition.
          </p>
        </div>
        
        {/* Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all"
            >
              {/* Logo */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden flex-shrink-0 p-2">
                  <ImageWithFallback 
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* GPA Badge */}
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl px-4 py-2 text-center ml-auto">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">GPA</div>
                  <div className="text-2xl font-display font-bold text-gray-900">{edu.gpa}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 mb-3">{edu.field}</p>
                  <div className="text-sm font-semibold text-gray-600 mb-2">{edu.school}</div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-yellow-600" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-yellow-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 italic">{edu.description}</p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {edu.achievements.slice(0, 3).map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{achievement}</p>
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-2xl shadow-md p-6 border-2 border-gray-100 hover:border-blue-400 transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-white border-2 border-gray-200 rounded-xl overflow-hidden flex-shrink-0 p-2 group-hover:border-blue-400 transition-all">
                      <ImageWithFallback 
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="text-xs text-gray-400 mt-1">
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
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">Awards & Honors</h3>
            </div>
            
            <div className="space-y-4">
              {awards.map((award) => (
                <div 
                  key={award.id}
                  className="bg-white rounded-2xl shadow-md p-6 border-2 border-gray-100 hover:border-yellow-400 transition-all"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-yellow-50 border-2 border-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                      🏆
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{award.issuer}</p>
                      <p className="text-sm text-gray-700 mb-2">{award.description}</p>
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