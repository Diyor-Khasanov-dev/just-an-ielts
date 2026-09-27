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
import { useLanguage } from '@/context/LanguageContext'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { t } = useLanguage()

  const mainLinks = [
    { href: '/dashboard', label: t.sidebar.overview, icon: LayoutDashboard },
    { href: '/dashboard/practice', label: t.sidebar.practiceHub, icon: Target },
    { href: '/dashboard/tests', label: t.sidebar.mockTests, icon: BookOpen },
    { href: '/dashboard/progress', label: t.sidebar.myProgress, icon: LineChart },
    { href: '/dashboard/history-points', label: t.sidebar.historyPoints, icon: History },
  ]

  const skillLinks = [
    { href: '/dashboard/listening', label: t.sidebar.listening, icon: Headphones },
    { href: '/dashboard/reading', label: t.sidebar.reading, icon: BookOpen },
    { href: '/dashboard/writing', label: t.sidebar.writing, icon: PenLine },
    { href: '/dashboard/speaking', label: t.sidebar.speaking, icon: Mic2 },
    { href: '/dashboard/vocabulary', label: t.sidebar.vocabulary, icon: GraduationCap },
    { href: '/dashboard/grammar', label: t.sidebar.grammar, icon: CheckCircle2 },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && <div className='sidebar-overlay' onClick={onClose} aria-hidden='true' />}

      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className='flex items-center justify-between mb-2'>
          <Link href='/dashboard'>
            <img src='/logo.png' alt='' className='w-15 h-12 object-contain' />
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              className='p-1 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 sm:hidden'
              aria-label='Close sidebar'
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className='sidebar-section'>
          <p>{t.sidebar.workspace}</p>
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

        <div className='sidebar-section'>
          <p>{t.sidebar.skillPractice}</p>
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

        <div className='sidebar-bottom'>
          <div className='upgrade-card'>
            <Sparkles size={17} />
            <p>{t.sidebar.readyForBand8}</p>
            <span>{t.sidebar.unlockFeedback}</span>
            <Link href='/dashboard/tests' onClick={onClose}>
              {t.sidebar.explorePlans}
            </Link>
          </div>

          <Link
            href='/dashboard/settings'
            onClick={onClose}
            className={`nav-link ${pathname === '/dashboard/settings' ? 'active' : ''}`}
          >
            <Settings size={18} />
            <span>{t.sidebar.settings}</span>
          </Link>

          <Link href='/login' onClick={onClose} className='nav-link logout-link'>
            <LogOut size={18} />
            <span>{t.sidebar.logout}</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
