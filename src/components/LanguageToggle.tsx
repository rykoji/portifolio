import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useState, useRef, useEffect } from 'react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt', countryCode: 'BR', name: 'Português', label: 'PT/BR' },
    { code: 'en', countryCode: 'US', name: 'English', label: 'EN' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: 'pt' | 'en') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md"
      >
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            countryCode={currentLanguage?.countryCode || 'BR'}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              borderRadius: '2px'
            }}
            title={currentLanguage?.name}
          />
          <span className="font-medium">{currentLanguage?.label}</span>
        </div>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-lg shadow-xl overflow-hidden z-50 border border-slate-700">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code as 'pt' | 'en')}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700 transition-colors text-left ${
                language === lang.code ? 'bg-blue-600 text-white' : 'text-white'
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '2px'
                }}
                title={lang.name}
              />
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

