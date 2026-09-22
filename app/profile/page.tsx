import Link from "next/link";
import { ChevronRight, Target } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="profile-page"><Link href="/dashboard" className="back-dashboard">← Back to dashboard</Link><p className="section-kicker">Your profile</p><h1>Shape your study journey.</h1><p className="muted">Your preferences help us make every recommendation more useful.</p><section className="profile-card"><div className="profile-avatar">G</div><div><h2>Guest learner</h2><p>Sign in with Google to save and sync your learning profile.</p></div><Link href="/login">Sign in <ChevronRight size={16} /></Link></section><section className="goal-card"><span><Target size={22} /></span><div><p className="section-kicker">Current goal</p><h2>Reach Band 8.0</h2><p>Set a target, then see every step that moves you closer.</p></div><button>Update goal</button></section></main>
  );
}
