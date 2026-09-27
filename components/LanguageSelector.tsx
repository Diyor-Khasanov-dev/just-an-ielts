'use client'

import { Check, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n/translations'

const languages: { code: Language; shortLabel: string; label: string }[] = [
  { code: 'eng', shortLabel: 'EN', label: 'English' },
  { code: 'uz', shortLabel: 'UZ', label: 'O‘zbekcha' },
  { code: 'ru', shortLabel: 'RU', label: 'Русский' },
]

/** A consistent, keyboard-accessible language control for public and app navigation. */
export function LanguageSelector() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="language-selector" role="group" aria-label="Choose display language">
      <Globe size={15} aria-hidden="true" className="language-selector-icon" />
      <div className="language-selector-options">
        {languages.map(({ code, shortLabel, label }) => {
          const isSelected = lang === code

          return (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={isSelected ? 'is-selected' : ''}
              aria-pressed={isSelected}
              title={label}
            >
              <span aria-hidden="true">{shortLabel}</span>
              <span className="language-selector-label">{label}</span>
              {isSelected && <Check size={12} aria-hidden="true" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
