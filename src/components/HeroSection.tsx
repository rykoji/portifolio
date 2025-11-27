import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToNext = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center justify-center px-6 lg:px-20 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl text-center text-white">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
            <img 
              src="/thumbnails/profile.png" 
              alt="Ryan Taira" 
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t.hero.greeting} <span className="text-blue-400">{t.hero.name}</span>
        </h1>
        
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="default"
          >
            {t.hero.viewProjects}
          </Button>
          <Button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="secondary"
          >
            {t.hero.contact}
          </Button>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

