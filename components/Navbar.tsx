'use client'

import { Bell, ChevronDown, Menu, Search, Sparkles } from 'lucide-react'

interface NavbarProps {
  onOpenMobileMenu?: () => void
}

export function Navbar({ onOpenMobileMenu }: NavbarProps) {
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

        <div className="top-search">
          <Search size={14} className="text-gray-400" />
          <span>Search lessons, practice drills, or flashcards...</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-gray-100 rounded text-gray-400 font-semibold border border-gray-200">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="top-actions">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-indigo-50/70 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100">
          <Sparkles size={14} className="text-indigo-500" />
          <span>Target: Band 7.5</span>
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
