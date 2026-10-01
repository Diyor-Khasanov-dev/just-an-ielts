'use client'

import { Bell, ChevronDown, Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from './LanguageSelector'

interface NavbarProps {
  onToggleSidebar?: () => void
  isCollapsed?: boolean
}

export function Navbar({}: NavbarProps) {
  const { t } = useLanguage()

  return (
    <header className="dashboard-topbar">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">

        <div className="top-search flex-1 max-w-xs sm:max-w-sm md:max-w-md">
          <Search size={14} className="text-gray-400 shrink-0" />
          <span className="truncate text-xs sm:text-sm">{t.navbar.searchPlaceholder}</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-gray-100 rounded text-gray-400 font-semibold border border-gray-200 shrink-0 ml-auto">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="top-actions flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageSelector align="right" />

        <button className="icon-button shrink-0" aria-label="Notifications">
          <Bell size={18} />
          <i />
        </button>

        <button className="profile-button shrink-0" aria-label="User profile menu">
          <span>AN</span>
          <div className="profile-copy hidden lg:block">
            <b>Alex Nguyen</b>
            <small>{t.navbar.targetBand} 7.5 · {t.navbar.examInDays}</small>
          </div>
          <ChevronDown size={15} className="text-gray-400 hidden lg:block" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
