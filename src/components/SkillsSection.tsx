import { Card } from './ui/card';
import { Code2, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();
  
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
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.skills.title}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          {t.skills.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CategoryIcon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    return (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white hover:bg-slate-50 transition-colors border border-slate-200"
                      >
                        {skill.imgSrc ? (
                          <img src={skill.imgSrc} alt={skill.name} className="w-12 h-12" />
                        ) : (
                          <i className={`${skill.iconClass} text-5xl`}></i>
                        )}
                        <span className="text-slate-700 text-center text-xs font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

