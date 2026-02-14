import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import pokemonRandomizerImg from '/public/thumbnails/pokemon-randomizer.png';
import tacticalCliboardImg from '/public/thumbnails/clipboard.png';

export function ProjectsSection() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      image: pokemonRandomizerImg,
      tags: ['Vue.js ', 'Pokemon API', 'CSS', 'Javascript'],
      github: 'https://github.com/rykoji/pokemon_randomizer',
      demo: 'https://rykoji.github.io/pokemon_randomizer/',
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      image: tacticalCliboardImg,
      tags: ['Vue.js', 'Tailwind CSS 4.0', 'Javascript'],
      github: 'https://github.com/rykoji/tacticalClipboard/',
      demo: 'https://rykoji.github.io/tacticalClipboard/',
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.projects.title}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          {t.projects.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.codeButton}
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.demoButton}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

