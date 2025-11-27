import { Card } from './ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      type: 'work',
      title: t.experience.items[0].title,
      company: t.experience.items[0].company,
      period: t.experience.items[0].period,
      description: t.experience.items[0].description,
    },
    {
      type: 'work',
      title: t.experience.items[1].title,
      company: t.experience.items[1].company,
      period: t.experience.items[1].period,
      description: t.experience.items[1].description,
    },
    {
      type: 'work',
      title: t.experience.items[2].title,
      company: t.experience.items[2].company,
      period: t.experience.items[2].period,
      description: t.experience.items[2].description,
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.experience.title}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          {t.experience.description}
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />
                </div>

                <Card className="md:ml-20 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-slate-900">{exp.title}</h3>
                        <span className="text-blue-600 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-slate-700 mb-2">{exp.company}</p>
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

