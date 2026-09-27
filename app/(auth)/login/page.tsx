'use client'

import Link from 'next/link'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Globe, Moon, Sparkles, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'

export default function LoginPage() {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

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
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
            <Globe size={14} className="text-gray-500 dark:text-slate-400 ml-1.5 hidden sm:block" />
            {(['eng', 'uz', 'ru'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                  lang === code
                    ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-xs'
                    : 'text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
          </button>

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
