import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  
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
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/rykoji',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ryan-taira-316b4056',
    }
  ];

  return (
    <section className="flex items-center justify-center px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{t.contact.title}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-center">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" />
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

        <Card className="p-8 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="text-center">
            <div className="flex gap-4 justify-center flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="gap-2"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Icon className="w-5 h-5" />
                      {social.name}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

