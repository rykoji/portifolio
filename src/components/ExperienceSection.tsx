import { Card } from './ui/card';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionTitle } from './SectionTitle';

export function ExperienceSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: t.experience.items[0].title,
      company: t.experience.items[0].company,
      period: t.experience.items[0].period,
      description: t.experience.items[0].description,
    },
    {
      title: t.experience.items[1].title,
      company: t.experience.items[1].company,
      period: t.experience.items[1].period,
      description: t.experience.items[1].description,
    },
    {
      title: t.experience.items[2].title,
      company: t.experience.items[2].company,
      period: t.experience.items[2].period,
      description: t.experience.items[2].description,
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20">
      <div
        ref={ref}
        className={`max-w-4xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionTitle title={t.experience.title} description={t.experience.description} />

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-slate-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={isVisible ? { transitionDelay: `${index * 150 + 200}ms` } : {}}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md ring-2 ring-blue-200" />
                </div>

                <Card className="md:ml-20 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-slate-900">{exp.title}</h3>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-700 font-medium mb-2">{exp.company}</p>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
