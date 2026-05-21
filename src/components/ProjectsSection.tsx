import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionTitle } from './SectionTitle';
import pokemonRandomizerImg from '/public/thumbnails/pokemon-randomizer.png';
import tacticalCliboardImg from '/public/thumbnails/clipboard.png';
import eduSystemImg from '/public/thumbnails/schoolCrud.png';

export function ProjectsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: t.projects.items[2].title,
      description: t.projects.items[2].description,
      image: eduSystemImg,
      tags: ['React', 'TypeScript', 'Supabase', 'TanStack Table', 'ECharts'],
      github: 'https://github.com/rykoji/SchoolCrud',
      demo: 'https://systemedu.vercel.app/',
      featured: true,
    },
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      image: pokemonRandomizerImg,
      tags: ['Vue.js', 'Pokemon API', 'CSS', 'Javascript'],
      github: 'https://github.com/rykoji/pokemon_randomizer',
      demo: 'https://rykoji.github.io/pokemon_randomizer/',
      featured: false,
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      image: tacticalCliboardImg,
      tags: ['Vue.js', 'Tailwind CSS 4.0', 'Javascript'],
      github: 'https://github.com/rykoji/tacticalClipboard/',
      demo: 'https://rykoji.github.io/tacticalClipboard/',
      featured: false,
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20">
      <div
        ref={ref}
        className={`max-w-6xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionTitle title={t.projects.title} description={t.projects.description} />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden group relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                </div>
              )}

              <div
                className={`${project.featured ? 'aspect-[21/9]' : 'aspect-video'} bg-slate-200 overflow-hidden`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium"
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
                  <Button
                    size="sm"
                    asChild
                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/20"
                  >
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
