import { Card } from './ui/card';
import { Code2, Rocket, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  
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
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.title}</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-700 mb-6">
              {t.about.paragraph1}
            </p>
            
            <p className="text-slate-700 mb-6">
              {t.about.paragraph2}
            </p>

            <p className="text-slate-700">
              {t.about.paragraph3}
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
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

