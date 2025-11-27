import { LanguageToggle } from './LanguageToggle';

export function FloatingHeader() {
  return (
    <header className="fixed top-0 right-0 z-30 p-4">
      <LanguageToggle />
    </header>
  );
}

