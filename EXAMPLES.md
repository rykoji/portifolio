# Exemplos de Uso do Sistema de Idiomas / Language System Usage Examples

## 📚 Exemplos Práticos / Practical Examples

### 1. Criar um Novo Componente com Tradução / Create a New Component with Translation

#### Passo 1: Adicionar Traduções / Step 1: Add Translations
Edite `src/translations/index.ts`:

```typescript
export const translations = {
  pt: {
    // ... outras traduções
    testimonials: {
      title: 'Depoimentos',
      subtitle: 'O que as pessoas dizem sobre meu trabalho',
      readMore: 'Ler mais',
    },
  },
  en: {
    // ... other translations
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What people say about my work',
      readMore: 'Read more',
    },
  },
};
```

#### Passo 2: Criar o Componente / Step 2: Create the Component

```tsx
// src/components/TestimonialsSection.tsx
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './ui/card';

export function TestimonialsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="px-6 lg:px-20 py-20">
      <h2 className="text-3xl font-bold mb-4">{t.testimonials.title}</h2>
      <p className="text-slate-600 mb-12">{t.testimonials.subtitle}</p>
      
      <Card className="p-6">
        <p>Conteúdo do depoimento...</p>
        <button>{t.testimonials.readMore}</button>
      </Card>
    </section>
  );
}
```

---

### 2. Adicionar Arrays de Conteúdo / Add Content Arrays

#### Exemplo: Lista de Certificações / Example: Certifications List

```typescript
// src/translations/index.ts
export const translations = {
  pt: {
    certifications: {
      title: 'Certificações',
      items: [
        {
          name: 'AWS Certified Developer',
          issuer: 'Amazon Web Services',
          date: '2024',
        },
        {
          name: 'React Developer Certificate',
          issuer: 'Meta',
          date: '2023',
        },
      ],
    },
  },
  en: {
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'AWS Certified Developer',
          issuer: 'Amazon Web Services',
          date: '2024',
        },
        {
          name: 'React Developer Certificate',
          issuer: 'Meta',
          date: '2023',
        },
      ],
    },
  },
};
```

#### Usar no Componente / Use in Component

```tsx
export function CertificationsSection() {
  const { t } = useLanguage();
  
  return (
    <section>
      <h2>{t.certifications.title}</h2>
      
      {t.certifications.items.map((cert, index) => (
        <div key={index}>
          <h3>{cert.name}</h3>
          <p>{cert.issuer} - {cert.date}</p>
        </div>
      ))}
    </section>
  );
}
```

---

### 3. Tradução Condicional / Conditional Translation

```tsx
export function DynamicContent() {
  const { t, language } = useLanguage();
  
  // Formatação de datas baseada no idioma
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(
      language === 'pt' ? 'pt-BR' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  };
  
  // Pluralização
  const getYearsText = (years: number) => {
    if (language === 'pt') {
      return years === 1 ? '1 ano' : `${years} anos`;
    }
    return years === 1 ? '1 year' : `${years} years`;
  };
  
  return (
    <div>
      <p>{formatDate(new Date())}</p>
      <p>{getYearsText(5)} de experiência</p>
    </div>
  );
}
```

---

### 4. Botão Personalizado de Idioma / Custom Language Button

```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function CustomLanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-4 py-2 rounded ${
          language === 'pt' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        🇧🇷 Português
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded ${
          language === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        🇺🇸 English
      </button>
    </div>
  );
}
```

---

### 5. Tradução de Metadados (SEO) / Metadata Translation (SEO)

```tsx
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

export function SEOComponent() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Atualizar título da página
    document.title = language === 'pt' 
      ? 'Ryan Taira - Desenvolvedor Web' 
      : 'Ryan Taira - Web Developer';
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        language === 'pt'
          ? 'Portfólio de Ryan Taira, desenvolvedor web especializado em React, Vue.js e ASP.NET Core'
          : 'Portfolio of Ryan Taira, web developer specialized in React, Vue.js and ASP.NET Core'
      );
    }
  }, [language]);
  
  return null;
}
```

---

### 6. Hook Personalizado para Pluralização / Custom Hook for Pluralization

```tsx
// src/hooks/usePlural.ts
import { useLanguage } from '../contexts/LanguageContext';

export function usePlural() {
  const { language } = useLanguage();
  
  const plural = (
    count: number,
    ptSingular: string,
    ptPlural: string,
    enSingular: string,
    enPlural: string
  ) => {
    if (language === 'pt') {
      return count === 1 ? `${count} ${ptSingular}` : `${count} ${ptPlural}`;
    }
    return count === 1 ? `${count} ${enSingular}` : `${count} ${enPlural}`;
  };
  
  return { plural };
}

// Uso / Usage
export function ProjectCounter() {
  const { plural } = usePlural();
  const projectCount = 5;
  
  return <p>{plural(projectCount, 'projeto', 'projetos', 'project', 'projects')}</p>;
  // Output PT: "5 projetos"
  // Output EN: "5 projects"
}
```

---

### 7. Rich Text / Texto Formatado

```tsx
// src/translations/index.ts
export const translations = {
  pt: {
    welcome: {
      message: (name: string) => `Bem-vindo, ${name}!`,
      greeting: (time: string) => `Bom dia! São ${time}.`,
    },
  },
  en: {
    welcome: {
      message: (name: string) => `Welcome, ${name}!`,
      greeting: (time: string) => `Good morning! It's ${time}.`,
    },
  },
};

// Uso / Usage
export function WelcomeMessage() {
  const { t } = useLanguage();
  const userName = 'João';
  const currentTime = '09:30';
  
  return (
    <div>
      <h1>{t.welcome.message(userName)}</h1>
      <p>{t.welcome.greeting(currentTime)}</p>
    </div>
  );
}
```

---

### 8. Validação de Formulário com Mensagens Traduzidas / Form Validation with Translated Messages

```tsx
// src/translations/index.ts
export const translations = {
  pt: {
    form: {
      errors: {
        required: 'Este campo é obrigatório',
        email: 'Digite um e-mail válido',
        minLength: (min: number) => `Mínimo de ${min} caracteres`,
      },
      labels: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
      },
      submit: 'Enviar',
    },
  },
  en: {
    form: {
      errors: {
        required: 'This field is required',
        email: 'Enter a valid email',
        minLength: (min: number) => `Minimum ${min} characters`,
      },
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      submit: 'Submit',
    },
  },
};

// Componente / Component
export function ContactForm() {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = (name: string, value: string) => {
    if (!value) return t.form.errors.required;
    if (name === 'email' && !value.includes('@')) return t.form.errors.email;
    if (value.length < 5) return t.form.errors.minLength(5);
    return '';
  };
  
  return (
    <form>
      <label>{t.form.labels.name}</label>
      <input onChange={(e) => validate('name', e.target.value)} />
      {errors.name && <span className="error">{errors.name}</span>}
      
      <button type="submit">{t.form.submit}</button>
    </form>
  );
}
```

---

## 🎯 Dicas / Tips

1. **Organize as traduções por seção** / Organize translations by section
2. **Use nomes descritivos** / Use descriptive names
3. **Mantenha a estrutura igual em ambos idiomas** / Keep the same structure in both languages
4. **Teste em ambos os idiomas** / Test in both languages
5. **Use TypeScript para type safety** / Use TypeScript for type safety

---

## ⚠️ Erros Comuns a Evitar / Common Mistakes to Avoid

❌ **Não fazer isso / Don't do this:**
```tsx
// Hard-coded text
return <h1>Sobre Mim</h1>;
```

✅ **Fazer isso / Do this:**
```tsx
// Using translations
const { t } = useLanguage();
return <h1>{t.about.title}</h1>;
```

❌ **Estrutura inconsistente / Inconsistent structure:**
```typescript
pt: {
  title: 'Título',
  description: 'Descrição',
},
en: {
  heading: 'Title', // ❌ Nome diferente!
  description: 'Description',
}
```

✅ **Estrutura consistente / Consistent structure:**
```typescript
pt: {
  title: 'Título',
  description: 'Descrição',
},
en: {
  title: 'Title', // ✅ Mesmo nome!
  description: 'Description',
}
```

