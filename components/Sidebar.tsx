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
  PanelLeftClose,
  PanelLeftOpen,
  PenLine,
  Settings,
  Sparkles,
  Target,
  X
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface SidebarProps {
  isOpen?: boolean
  isCollapsed?: boolean
  onClose?: () => void
  onToggleCollapse?: () => void
}

export function Sidebar({ isOpen, isCollapsed, onClose, onToggleCollapse }: SidebarProps) {
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

      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className='flex items-center justify-between mb-2 sidebar-header'>
          <Link href='/dashboard' className='flex items-center overflow-hidden'>
            <img src='/logo.png' alt='Logo' className='w-15 h-12 object-contain shrink-0' />
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
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className='p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 hidden sm:flex items-center justify-center transition-colors shrink-0'
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>
          )}
        </div>

        <div className='sidebar-section'>
          <p className='section-label'>{t.sidebar.workspace}</p>
          {mainLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                title={label}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} className='shrink-0' />
                <span className='nav-text'>{label}</span>
              </Link>
            )
          })}
        </div>

        <div className='sidebar-section'>
          <p className='section-label'>{t.sidebar.skillPractice}</p>
          {skillLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                title={label}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} className='shrink-0' />
                <span className='nav-text'>{label}</span>
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
            title={t.sidebar.settings}
            className={`nav-link ${pathname === '/dashboard/settings' ? 'active' : ''}`}
          >
            <Settings size={18} className='shrink-0' />
            <span className='nav-text'>{t.sidebar.settings}</span>
          </Link>

          <Link
            href='/login'
            onClick={onClose}
            title={t.sidebar.logout}
            className='nav-link logout-link'
          >
            <LogOut size={18} className='shrink-0' />
            <span className='nav-text'>{t.sidebar.logout}</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
