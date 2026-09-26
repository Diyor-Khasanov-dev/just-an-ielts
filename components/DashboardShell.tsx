'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, BookOpen, ChevronDown, Headphones, LayoutDashboard, LineChart, Mic2, PenLine, Settings, Sparkles, Target } from 'lucide-react'
import { AppMark } from './AppMark'

const links = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/practice', label: 'Practice hub', icon: Target },
  { href: '/dashboard/tests', label: 'Mock tests', icon: BookOpen },
  { href: '/dashboard/progress', label: 'My progress', icon: LineChart },
]
const skills = [
  { href: '/dashboard/listening', label: 'Listening', icon: Headphones },
  { href: '/dashboard/reading', label: 'Reading', icon: BookOpen },
  { href: '/dashboard/writing', label: 'Writing', icon: PenLine },
  { href: '/dashboard/speaking', label: 'Speaking', icon: Mic2 },
]

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div className="dashboard-shell">
    <aside className="sidebar">
      <AppMark href="/dashboard" />
      <div className="sidebar-section"><p>Workspace</p>{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}><Icon size={18}/>{label}</Link>)}</div>
      <div className="sidebar-section"><p>Skill practice</p>{skills.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}><Icon size={18}/>{label}</Link>)}</div>
      <div className="sidebar-bottom">
        <div className="upgrade-card"><Sparkles size={17}/><p>Ready for band 8?</p><span>Unlock feedback & full tests.</span><Link href="/dashboard/tests">Explore plans</Link></div>
        <Link href="/dashboard/settings" className={`nav-link ${pathname === '/dashboard/settings' ? 'active' : ''}`}><Settings size={18}/>Settings</Link>
      </div>
    </aside>
    <div className="dashboard-main">
      <header className="dashboard-topbar"><button className="mobile-menu" aria-label="Open navigation"><LayoutDashboard size={20}/></button><div className="top-search">⌘ K <span>Search your practice</span></div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={18}/><i /></button><button className="profile-button"><span>AN</span><div className="profile-copy"><b>Alex Nguyen</b><small>Band target: 7.5</small></div><ChevronDown size={15}/></button></div></header>
      <main className="dashboard-content">{children}</main>
    </div>
  </div>
}
