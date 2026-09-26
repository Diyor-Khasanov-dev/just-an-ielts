'use client'

import Link from 'next/link'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Sparkles } from 'lucide-react'
import { AppMark } from '@/components/AppMark'

export default function LoginPage() {
  const router = useRouter()
  const continueToOnboarding = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/onboarding')
  }

  return <main className="auth-page">
    <div className="auth-orb one" /><div className="auth-orb two" />
    <header className="auth-header"><AppMark /><p>New to IELTS? <Link href="/onboarding">Create an account <ArrowRight size={14} /></Link></p></header>
    <section className="auth-layout">
      <div className="auth-intro"><div className="intro-badge"><Sparkles size={15} /> Your calm study space</div><h1>Practice with<br /><em>purpose.</em></h1><p>Build a focused routine for every IELTS skill, with clear feedback at every step.</p><div className="intro-proof"><div className="avatar-stack"><i>AM</i><i>SH</i><i>RK</i></div><span>Join 12,000+ learners preparing with clarity.</span></div><div className="quote-card"><span>“</span><p>My score improved because I finally knew <em>what</em> to practise next.</p><small>— Mai, band 7.5</small></div></div>
      <div className="auth-panel glass-card"><p className="eyebrow">Welcome back</p><h2>Sign in to continue.</h2><p className="panel-subtitle">We&apos;ll take you to a short setup, then your dashboard.</p><button type="button" onClick={() => router.push('/onboarding')} className="social-button"><span className="google-g">G</span> Continue with Google</button><div className="divider"><span>or continue with email</span></div><form onSubmit={continueToOnboarding}><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Password<Link href="#">Forgot password?</Link><input required type="password" placeholder="••••••••" /></label><button type="submit" className="submit-button">Sign in <ArrowRight size={17} /></button></form><p className="terms">By continuing, you agree to our <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>.</p></div>
    </section>
  </main>
}
