import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTypewriter } from '../hooks/useTypewriter';
import profileImg from '/public/thumbnails/profile.png';

export function HeroSection() {
  const { t } = useLanguage();
  const { displayed, done } = useTypewriter(t.sidebar.subtitle, 55, 700);

  const scrollToNext = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl text-center text-white">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-blue-400/40 ring-4 ring-blue-500/20">
            <img
              src={profileImg}
              alt="Ryan Taira"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm mb-6 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
          <span>{displayed}</span>
          <span
            className="inline-block w-px h-3.5 bg-blue-300 transition-opacity duration-300"
            style={{ opacity: done ? 0 : 1 }}
          />
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          {t.hero.greeting}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </h1>

        <p
          className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '250ms' }}
        >
          {t.hero.description}
        </p>

        <div
          className="flex gap-4 justify-center flex-wrap animate-fade-in-up"
          style={{ animationDelay: '350ms' }}
        >
          <Button
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all"
          >
            {t.hero.viewProjects}
          </Button>
          <Button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
          >
            {t.hero.contact}
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
