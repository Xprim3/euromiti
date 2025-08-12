import { createI18n } from 'vue-i18n'
import sq from './locales/sq.json'
import en from './locales/en.json'
import sr from './locales/sr.json'

export type Locale = 'sq' | 'en' | 'sr'

export const availableLocales: { code: Locale; name: string; flag: string }[] = [
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sr', name: 'Српски', flag: '🇷🇸' }
]

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: localStorage.getItem('locale') || 'sq', // Albanian as default
  fallbackLocale: 'sq',
  messages: {
    sq,
    en,
    sr
  },
  numberFormats: {
    sq: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    sr: {
      currency: {
        style: 'currency',
        currency: 'RSD'
      }
    }
  },
  datetimeFormats: {
    sq: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    sr: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    }
  }
})

export default i18n
