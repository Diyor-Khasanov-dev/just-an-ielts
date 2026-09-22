import Link from "next/link";
import { Bell, BookOpen, ChevronDown, GraduationCap, LayoutDashboard, LogOut, Settings, Sparkles, Target, UserRound } from "lucide-react";
import { getSession } from "../lib/session";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/practice", label: "Practice hub", icon: Target },
  { href: "/dashboard/vocabulary", label: "Vocabulary", icon: BookOpen },
];

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const user = await getSession();
  const name = user?.name ?? "Guest learner";
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link href="/" className="brand sidebar-brand"><span className="brand-mark">i</span><span>just an <strong>IELTS</strong></span></Link>
        <div className="sidebar-label">Workspace</div>
        <nav className="side-nav" aria-label="Dashboard navigation">
          {navItems.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="side-link"><Icon size={19} /><span>{label}</span></Link>)}
        </nav>
        <div className="sidebar-label">Your account</div>
        <nav className="side-nav">
          <Link href="/profile" className="side-link"><UserRound size={19} /><span>Profile</span></Link>
          <Link href="/profile" className="side-link"><Settings size={19} /><span>Preferences</span></Link>
        </nav>
        <div className="sidebar-bottom">
          <div className="streak-card"><Sparkles size={16} /><div><strong>12 day streak</strong><span>Keep your rhythm going</span></div></div>
          <div className="sidebar-user"><div className="avatar">{initial}</div><div className="user-copy"><strong>{name}</strong><span>{user?.email ?? "Sign in to save progress"}</span></div>{user ? <a className="logout" href="/api/auth/logout" aria-label="Log out"><LogOut size={16} /></a> : <Link href="/login"><ChevronDown size={16} /></Link>}</div>
        </div>
      </aside>
      <div className="app-content">
        <header className="app-navbar"><div className="crumb"><GraduationCap size={18} /><span>Study workspace</span></div><div className="nav-actions"><button className="icon-button" aria-label="Notifications"><Bell size={19} /><i /></button><div className="navbar-avatar">{initial}</div></div></header>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
