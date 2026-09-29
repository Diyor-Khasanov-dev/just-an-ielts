'use client'

import { Bell, ChevronDown, PanelLeftClose, PanelLeftOpen, Search, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from './LanguageSelector'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  onToggleSidebar?: () => void
  isCollapsed?: boolean
}

export function Navbar({ onToggleSidebar, isCollapsed }: NavbarProps) {
  const { t } = useLanguage()

  return (
    <header className="dashboard-topbar">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <button
          className="sidebar-toggle-btn p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0"
          onClick={onToggleSidebar}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>

        <div className="top-search flex-1 max-w-xs sm:max-w-sm md:max-w-md">
          <Search size={14} className="text-gray-400 shrink-0" />
          <span className="truncate text-xs sm:text-sm">{t.navbar.searchPlaceholder}</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-gray-100 dark:bg-slate-800 rounded text-gray-400 font-semibold border border-gray-200 dark:border-slate-700 shrink-0 ml-auto">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="top-actions flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageSelector align="right" />
        <ThemeToggle />

        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-indigo-50/70 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold border border-indigo-100 dark:border-indigo-900 shrink-0">
          <Sparkles size={14} className="text-indigo-500" />
          <span>{t.navbar.targetBand} 7.5</span>
        </div>

        <button className="icon-button shrink-0" aria-label="Notifications">
          <Bell size={18} />
          <i />
        </button>

        <button className="profile-button shrink-0" aria-label="User profile menu">
          <span>AN</span>
          <div className="profile-copy hidden lg:block">
            <b>Alex Nguyen</b>
            <small>Target Band 7.5 · Exam in 24 days</small>
          </div>
          <ChevronDown size={15} className="text-gray-400 hidden lg:block" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
