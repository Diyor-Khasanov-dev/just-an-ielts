'use client'

import Link from 'next/link'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from '@/components/LanguageSelector'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function LoginPage() {
  const router = useRouter()
  const { t } = useLanguage()

  const continueToOnboarding = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/onboarding')
  }

  return (
    <main className='auth-page'>
      <div className='auth-orb one' />
      <div className='auth-orb two' />
      <header className='auth-header flex items-center justify-between gap-4'>
        <Link href='/'>
          <img src='/logo.png' alt='' className='w-15 h-12 object-contain' />
        </Link>
        <div className='flex items-center gap-4'>
          <LanguageSelector />
          <ThemeToggle />

          <p className="hidden sm:block text-xs">
            {t.auth.newToIelts}{' '}
            <Link href='/onboarding' className='text-indigo-600 font-bold hover:underline'>
              {t.auth.createAccount} <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </header>

      <section className='auth-layout'>
        <div className='auth-intro'>
          <div className='intro-badge'>
            <Sparkles size={15} /> Targeted IELTS Preparation workspace
          </div>
          <h1>
            {t.auth.purposeTitle}
            <br />
            <em>{t.auth.purposeTitleEm}</em>
          </h1>
          <p>{t.auth.purposeDesc}</p>
          <div className='intro-proof'>
            <div className='avatar-stack'>
              <i>AM</i>
              <i>SH</i>
              <i>RK</i>
            </div>
            <span>{t.hero.trustedBy}</span>
          </div>
          <div className='quote-card'>
            <span>“</span>
            <p>
              My score improved because I finally knew <em>what</em> to practise next.
            </p>
            <small>— Mai, band 7.5</small>
          </div>
        </div>

        <div className='auth-panel glass-card'>
          <p className='eyebrow'>{t.auth.welcomeBack}</p>
          <h2>{t.auth.signInToContinue}</h2>
          <p className='panel-subtitle'>{t.auth.subtitle}</p>
          <button
            type='button'
            onClick={() => router.push('/onboarding')}
            className='social-button'
          >
            <span className='google-g'>G</span> {t.auth.continueWithGoogle}
          </button>
          <div className='divider'>
            <span>{t.auth.orContinueWithEmail}</span>
          </div>
          <form onSubmit={continueToOnboarding}>
            <label>
              {t.auth.emailAddress}
              <input required type='email' placeholder='you@example.com' />
            </label>
            <label>
              {t.auth.password}
              <Link href='#'>{t.auth.forgotPassword}</Link>
              <input required type='password' placeholder='••••••••' />
            </label>
            <button type='submit' className='submit-button'>
              {t.auth.signIn} <ArrowRight size={17} />
            </button>
          </form>
          <p className='terms'>
            {t.auth.termsAgreement} <Link href='#'>{t.auth.terms}</Link> and{' '}
            <Link href='#'>{t.auth.privacyPolicy}</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
