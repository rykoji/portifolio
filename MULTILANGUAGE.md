# Sistema de Múltiplos Idiomas (Multilanguage System)

## 📖 Sobre / About

Este portfólio possui um sistema de internacionalização (i18n) que permite alternar entre **Português** e **Inglês**.

This portfolio has an internationalization (i18n) system that allows switching between **Portuguese** and **English**.

---

## 🏗️ Estrutura / Structure

### 1. **Contexto de Idioma** / Language Context
**Arquivo / File:** `src/contexts/LanguageContext.tsx`

- Gerencia o estado global do idioma
- Salva a preferência do usuário no `localStorage`
- Fornece o hook `useLanguage()` para acessar as traduções

**Manages the global language state**
- Saves user preference in `localStorage`
- Provides the `useLanguage()` hook to access translations

### 2. **Arquivo de Traduções** / Translations File
**Arquivo / File:** `src/translations/index.ts`

Contém todas as traduções organizadas por seção:
- Sidebar (Menu lateral)
- Hero (Seção inicial)
- About (Sobre)
- Projects (Projetos)
- Skills (Habilidades)
- Experience (Experiência)
- Contact (Contato)

**Contains all translations organized by section**

### 3. **Componentes** / Components

#### `LanguageToggle`
**Arquivo / File:** `src/components/LanguageToggle.tsx`

Botão que alterna entre os idiomas com ícone de globo.

**Button that switches between languages with a globe icon.**

#### `FloatingHeader`
**Arquivo / File:** `src/components/FloatingHeader.tsx`

Header flutuante que aparece ao rolar a página, contendo o botão de idioma.

**Floating header that appears when scrolling, containing the language button.**

---

## 🚀 Como Usar / How to Use

### Para o Usuário / For Users

1. **No Sidebar** (Desktop): O botão de idioma está na parte inferior da sidebar
2. **No Header Flutuante**: Ao rolar a página, um botão aparecerá no canto superior direito
3. Clique no botão para alternar entre **PT** e **EN**
4. A preferência é salva automaticamente

**In the Sidebar** (Desktop): The language button is at the bottom of the sidebar
**In the Floating Header**: When scrolling, a button will appear in the top right corner
- Click the button to switch between **PT** and **EN**
- The preference is saved automatically

### Para Desenvolvedores / For Developers

#### 1. **Usar Traduções em um Componente** / Using Translations in a Component

```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t.sectionName.title}</h1>
      <p>{t.sectionName.description}</p>
    </div>
  );
}
```

#### 2. **Adicionar Novas Traduções** / Adding New Translations

Edite o arquivo `src/translations/index.ts`:

```tsx
export const translations = {
  pt: {
    newSection: {
      title: 'Título em Português',
      description: 'Descrição em Português',
    },
  },
  en: {
    newSection: {
      title: 'Title in English',
      description: 'Description in English',
    },
  },
};
```

#### 3. **Alternar Idioma Programaticamente** / Programmatically Change Language

```tsx
const { language, setLanguage } = useLanguage();

// Definir para inglês / Set to English
setLanguage('en');

// Definir para português / Set to Portuguese
setLanguage('pt');
```

#### 4. **Verificar Idioma Atual** / Check Current Language

```tsx
const { language } = useLanguage();

if (language === 'pt') {
  console.log('Idioma atual: Português');
} else {
  console.log('Current language: English');
}
```

---

## 📁 Arquivos Modificados / Modified Files

- ✅ `src/App.tsx` - Adicionado LanguageProvider e FloatingHeader
- ✅ `src/components/Sidebar.tsx` - Integrado LanguageToggle e traduções
- ✅ `src/components/HeroSection.tsx` - Todas as strings traduzidas
- ✅ `src/components/AboutSection.tsx` - Todas as strings traduzidas
- ✅ `src/components/ProjectsSection.tsx` - Todas as strings traduzidas
- ✅ `src/components/SkillsSection.tsx` - Todas as strings traduzidas
- ✅ `src/components/ExperienceSection.tsx` - Todas as strings traduzidas
- ✅ `src/components/ContactSection.tsx` - Todas as strings traduzidas

## 🆕 Arquivos Criados / New Files

- 📄 `src/contexts/LanguageContext.tsx` - Contexto de idioma
- 📄 `src/translations/index.ts` - Arquivo de traduções
- 📄 `src/components/LanguageToggle.tsx` - Botão de alternância de idioma
- 📄 `src/components/FloatingHeader.tsx` - Header flutuante com botão de idioma

---

## 🎨 Características / Features

- ✨ Alternância suave entre idiomas / Smooth language switching
- 💾 Persistência da preferência no localStorage / Preference persistence in localStorage
- 🎯 Fácil de adicionar novos idiomas / Easy to add new languages
- 🔄 Traduções organizadas e fáceis de manter / Organized and easy to maintain translations
- 🌐 Header flutuante para fácil acesso / Floating header for easy access
- 📱 Responsivo em todos os dispositivos / Responsive on all devices

---

## 🛠️ Tecnologias Utilizadas / Technologies Used

- React Context API
- TypeScript
- LocalStorage API
- Lucide React (ícones / icons)
- Tailwind CSS

---

## 📝 Notas / Notes

- O idioma padrão é **Português (pt)** / The default language is **Portuguese (pt)**
- Todas as traduções estão centralizadas no arquivo `translations/index.ts`
- O sistema é extensível e pode suportar mais idiomas facilmente

**All translations are centralized in the `translations/index.ts` file**
**The system is extensible and can easily support more languages**

