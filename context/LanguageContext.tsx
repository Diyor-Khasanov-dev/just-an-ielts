'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, translations, Translations } from '@/lib/i18n/translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'just_ielts_lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('eng')

  useEffect(() => {
    let timer: number | undefined
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language
      if (saved && (saved === 'eng' || saved === 'uz' || saved === 'ru')) {
        // Defer the preference update until after hydration to avoid a cascading render.
        timer = window.setTimeout(() => setLangState(saved), 0)
      }
    } catch {
      // localStorage read failed or SSR fallback
    }

    return () => {
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem(STORAGE_KEY, newLang)
    } catch {
      // localStorage write failed
    }
  }

  const currentTranslations = translations[lang] || translations.eng

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      lang: 'eng' as Language,
      setLang: () => {},
      t: translations.eng,
    }
  }
  return context
}
