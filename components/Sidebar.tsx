'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Headphones,
  History,
  LayoutDashboard,
  LineChart,
  LogOut,
  Mic2,
  PenLine,
  Settings,
  Sparkles,
  Target,
  X
} from 'lucide-react'
import { AppMark } from './AppMark'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const mainLinks = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/practice', label: 'Practice hub', icon: Target },
  { href: '/dashboard/tests', label: 'Mock tests', icon: BookOpen },
  { href: '/dashboard/progress', label: 'My progress', icon: LineChart },
  { href: '/dashboard/history-points', label: 'History & Points', icon: History },
]

const skillLinks = [
  { href: '/dashboard/listening', label: 'Listening', icon: Headphones },
  { href: '/dashboard/reading', label: 'Reading', icon: BookOpen },
  { href: '/dashboard/writing', label: 'Writing', icon: PenLine },
  { href: '/dashboard/speaking', label: 'Speaking', icon: Mic2 },
  { href: '/dashboard/vocabulary', label: 'Vocabulary', icon: GraduationCap },
  { href: '/dashboard/grammar', label: 'Grammar', icon: CheckCircle2 },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="flex items-center justify-between">
          <AppMark href="/dashboard" />
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-500 hover:bg-gray-100 sm:hidden"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="sidebar-section">
          <p>Workspace</p>
          {mainLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>

        <div className="sidebar-section">
          <p>Skill Practice</p>
          {skillLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <Sparkles size={17} />
            <p>Ready for Band 8+?</p>
            <span>Unlock AI writing feedback & full mock exams.</span>
            <Link href="/dashboard/tests" onClick={onClose}>
              Explore plans →
            </Link>
          </div>

          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className={`nav-link ${pathname === '/dashboard/settings' ? 'active' : ''}`}
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>

          <Link href="/login" onClick={onClose} className="nav-link logout-link">
            <LogOut size={18} />
            <span>Log out</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
