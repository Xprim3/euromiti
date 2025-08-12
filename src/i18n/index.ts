import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import ru from './locales/ru.json'
import ja from './locales/ja.json'
import zh from './locales/zh.json'
import ar from './locales/ar.json'

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'ja' | 'zh' | 'ar'

export const availableLocales: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    fr,
    de,
    it,
    pt,
    ru,
    ja,
    zh,
    ar
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    es: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    fr: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    it: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    pt: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    ru: {
      currency: {
        style: 'currency',
        currency: 'RUB'
      }
    },
    ja: {
      currency: {
        style: 'currency',
        currency: 'JPY'
      }
    },
    zh: {
      currency: {
        style: 'currency',
        currency: 'CNY'
      }
    },
    ar: {
      currency: {
        style: 'currency',
        currency: 'SAR'
      }
    }
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    es: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    fr: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    de: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    it: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    pt: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    ru: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    ja: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    zh: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    ar: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    }
  }
})

export default i18n
