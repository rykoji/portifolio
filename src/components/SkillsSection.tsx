import { Card } from './ui/card';
import { Code2, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionTitle } from './SectionTitle';

export function SkillsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: Code2,
      skills: [
        { name: 'Vue.js', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { name: 'React', iconClass: 'devicon-react-original colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
        { name: 'HTML/CSS', iconClass: 'devicon-html5-plain colored' },
      ],
    },
    {
      title: t.skills.categories.backend,
      icon: Database,
      skills: [
        { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
        { name: 'Entity Framework', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'ASP.NET Core', iconClass: 'devicon-dotnetcore-plain colored' },
        { name: 'Golang', iconClass: 'devicon-go-original-wordmark colored' },
        { name: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' },
        { name: 'Supabase', iconClass: 'devicon-supabase-plain colored' },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', iconClass: 'devicon-github-original' },
        { name: 'Figma', iconClass: 'devicon-figma-plain colored' },
        { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
        { name: 'Visual Studio', iconClass: 'devicon-visualstudio-plain colored' },
      ],
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20 bg-slate-50">
      <div ref={ref} className="max-w-6xl w-full">
        <SectionTitle title={t.skills.title} description={t.skills.description} />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <Card
                key={catIndex}
                className="p-6 border border-slate-100 hover:shadow-lg"
                style={
                  isVisible
                    ? {
                        animation: `fadeInUp 0.5s ease both`,
                        animationDelay: `${catIndex * 120}ms`,
                      }
                    : { opacity: 0 }
                }
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm">
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white hover:bg-blue-50 hover:border-blue-100 border border-slate-100 cursor-default group"
                      style={
                        isVisible
                          ? {
                              animation: `fadeInUpSm 0.35s ease both`,
                              animationDelay: `${catIndex * 120 + skillIndex * 55 + 200}ms`,
                            }
                          : { opacity: 0 }
                      }
                    >
                      {skill.imgSrc ? (
                        <img
                          src={skill.imgSrc}
                          alt={skill.name}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
                        />
                      ) : (
                        <i
                          className={`${skill.iconClass} text-4xl inline-block group-hover:scale-110 transition-transform duration-200`}
                        />
                      )}
                      <span className="text-slate-700 text-center text-xs font-medium leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
