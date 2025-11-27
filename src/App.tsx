import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Sidebar } from './components/Sidebar';
import { FloatingHeader } from './components/FloatingHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <LanguageProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <FloatingHeader />
        
        <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-0 lg:ml-20' : 'ml-0 lg:ml-64'}`}>
          <div id="hero" className="min-h-screen">
            <HeroSection />
          </div>
          
          <div id="sobre" className="min-h-screen">
            <AboutSection />
          </div>
          
          <div id="projetos" className="min-h-screen">
            <ProjectsSection />
          </div>
          
          <div id="habilidades" className="min-h-screen">
            <SkillsSection />
          </div>
          
          <div id="experiencia" className="min-h-screen">
            <ExperienceSection />
          </div>
          
          <div id="contato" className="min-h-screen">
            <ContactSection />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}

