'use client'

import { useState, useRef, useEffect } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n/translations'

const languages: { code: Language; shortLabel: string; label: string }[] = [
  { code: 'eng', shortLabel: 'EN', label: 'English' },
  { code: 'uz', shortLabel: 'UZ', label: 'O‘zbekcha' },
  { code: 'ru', shortLabel: 'RU', label: 'Русский' },
]

interface LanguageSelectorProps {
  className?: string
  align?: 'left' | 'right'
}

/** A modern dropdown language selector for topbar navigation. */
export function LanguageSelector({ className = '', align = 'right' }: LanguageSelectorProps) {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === lang) || languages[0]

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const selectLanguage = (code: Language) => {
    setLang(code)
    setIsOpen(false)
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="lang-dropdown-trigger"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe size={16} className="text-gray-500 dark:text-gray-400 shrink-0" />
        <span className="font-semibold text-xs text-gray-800 dark:text-gray-200">
          {currentLang.shortLabel}
        </span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`lang-dropdown-menu ${align === 'right' ? 'right-0' : 'left-0'}`}
          role="listbox"
          aria-label="Language options"
        >
          <div className="py-1">
            {languages.map(({ code, shortLabel, label }) => {
              const isSelected = lang === code

              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectLanguage(code)}
                  className={`lang-dropdown-item ${isSelected ? 'is-selected' : ''}`}
                >
                  <span className="font-bold text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    {shortLabel}
                  </span>
                  <span className="flex-1 text-xs font-medium text-gray-800 dark:text-slate-200 text-left">
                    {label}
                  </span>
                  {isSelected && <Check size={14} className="text-indigo-600 dark:text-indigo-400 shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
