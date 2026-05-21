import { Card } from './ui/card';
import { Code2, Rocket, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionTitle } from './SectionTitle';

export function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.cleanCode.title,
      description: t.about.highlights.cleanCode.description,
    },
    {
      icon: Rocket,
      title: t.about.highlights.performance.title,
      description: t.about.highlights.performance.description,
    },
    {
      icon: Users,
      title: t.about.highlights.collaboration.title,
      description: t.about.highlights.collaboration.description,
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20">
      <div
        ref={ref}
        className={`max-w-6xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionTitle title={t.about.title} />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-slate-700">{t.about.paragraph1}</p>
            <p className="text-slate-700">{t.about.paragraph2}</p>
            <p className="text-slate-700">{t.about.paragraph3}</p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                  style={isVisible ? { transitionDelay: `${index * 100 + 200}ms` } : {}}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
