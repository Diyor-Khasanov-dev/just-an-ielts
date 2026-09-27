'use client'

import { Bell, ChevronDown, Globe, Menu, Moon, Search, Sparkles, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n/translations'

interface NavbarProps {
  onOpenMobileMenu?: () => void
}

export function Navbar({ onOpenMobileMenu }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: 'eng', label: 'ENG' },
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
  ]

  return (
    <header className="dashboard-topbar">
      <div className="flex items-center gap-3">
        <button
          className="mobile-menu"
          onClick={onOpenMobileMenu}
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

        <div className="top-search flex-1 max-w-md">
          <Search size={14} className="text-gray-400 shrink-0" />
          <span className="truncate">{t.navbar.searchPlaceholder}</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-gray-100 dark:bg-slate-800 rounded text-gray-400 font-semibold border border-gray-200 dark:border-slate-700 shrink-0">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="top-actions">
        {/* Language Selector */}
        <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
          <Globe size={14} className="text-gray-500 dark:text-slate-400 ml-1.5 hidden sm:block" />
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                lang === code
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
        </button>

        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-indigo-50/70 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold border border-indigo-100 dark:border-indigo-900">
          <Sparkles size={14} className="text-indigo-500" />
          <span>{t.navbar.targetBand} 7.5</span>
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={18} />
          <i />
        </button>

        <button className="profile-button">
          <span>AN</span>
          <div className="profile-copy">
            <b>Alex Nguyen</b>
            <small>Target Band 7.5 · Exam in 24 days</small>
          </div>
          <ChevronDown size={15} className="text-gray-400" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
