import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionTitle } from './SectionTitle';

export function ContactSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      value: 'ryan_koji@hotmail.com',
      link: 'mailto:ryan_koji@hotmail.com',
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+55 (14) 98107-4123',
      link: 'tel:+5514981074123',
    },
    {
      icon: MapPin,
      title: t.contact.location,
      value: t.contact.locationValue,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/rykoji' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/ryan-taira-316b4056' },
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-6xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionTitle title={t.contact.title} description={t.contact.description} center />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card
                className="p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-slate-100 h-full"
                style={isVisible ? { transitionDelay: `${index * 100 + 200}ms` } : {}}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-slate-900 mb-3">{info.title}</h3>
                  <p className="text-slate-600">{info.value}</p>
                </div>
              </Card>
            );

            return info.link ? (
              <a key={index} href={info.link} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-blue-600 to-cyan-500 border-0 shadow-xl shadow-blue-600/20">
          <div className="flex gap-4 justify-center flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  size="lg"
                  asChild
                  className="bg-white text-blue-700 hover:bg-blue-50 gap-2 shadow-md font-semibold"
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
