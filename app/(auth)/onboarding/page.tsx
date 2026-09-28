'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronRight, Crown, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from '@/components/LanguageSelector'
import { ThemeToggle } from '@/components/ThemeToggle'

const goals = ['University admission', 'Work or migration', 'Personal development', 'Not sure yet']
const dates = ['In less than 1 month', '1–3 months', '3–6 months', 'I have not booked yet']

export default function Onboarding() {
  const { t } = useLanguage()

  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(goals[0])
  const [plan, setPlan] = useState<'free' | 'premium'>('free')
  const choices = step === 1 ? goals : dates
  const isSetup = step < 3

  const moveForward = () => {
    if (step === 1) setSelected(dates[0])
    setStep((current) => current + 1)
  }

  return (
    <main className='onboarding-page'>
      <header className='onboarding-header flex items-center justify-between gap-4'>
        <Link href='/'>
          <img src='/logo.png' alt='' className='w-15 h-12 object-contain' />
        </Link>
        <div className='flex items-center gap-2 sm:gap-4'>
          <LanguageSelector align='right' />
          <ThemeToggle />

          <Link href='/login' className='hidden sm:block text-xs font-semibold'>
            Already have an account? <b className='text-indigo-600 hover:underline'>{t.nav.signIn}</b>
          </Link>
        </div>
      </header>

      <section className='onboarding-wrap'>
        <div className='stepper' aria-label={`Step ${step} of 3`}>
          <span className='complete'>1</span>
          <i className={step >= 2 ? 'complete' : ''} />
          <span className={step >= 2 ? 'complete' : ''}>2</span>
          <i className={step >= 3 ? 'complete' : ''} />
          <span className={step >= 3 ? 'complete' : ''}>3</span>
        </div>

        <div className='onboarding-content'>
          {isSetup ? (
            <>
              <p className='eyebrow'>
                {t.onboarding.personalisePath} · {t.onboarding.stepOf3} {step} OF 3
              </p>
              <h1>{step === 1 ? t.onboarding.whatBringsYou : t.onboarding.whenTakingTest}</h1>
              <p>
                {step === 1
                  ? 'Your goal helps us build a study plan that makes sense for you.'
                  : 'We will tailor your weekly pace to your timeline.'}
              </p>
              <div className='option-list'>
                {choices.map((option) => (
                  <button
                    type='button'
                    key={option}
                    onClick={() => setSelected(option)}
                    className={selected === option ? 'selected' : ''}
                  >
                    {option}
                    <span>{selected === option && <Check size={17} />}</span>
                  </button>
                ))}
              </div>
              <div className='onboarding-actions'>
                {step === 1 ? (
                  <span />
                ) : (
                  <button
                    type='button'
                    onClick={() => {
                      setStep(1)
                      setSelected(goals[0])
                    }}
                    className='back-button'
                  >
                    <ArrowLeft size={16} /> {t.onboarding.back}
                  </button>
                )}
                <button type='button' onClick={moveForward} className='next-button'>
                  {t.onboarding.continue} <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : (
            <>
              <p className='eyebrow'>
                {t.onboarding.planReady} · {t.onboarding.stepOf3} 3 OF 3
              </p>
              <h1>{t.onboarding.chooseStartingPoint}</h1>
              <p>
                Start free with a clear weekly plan, or unlock detailed feedback whenever you&apos;re ready.
              </p>
              <div className='plan-options'>
                <button
                  type='button'
                  onClick={() => setPlan('free')}
                  className={`plan-choice ${plan === 'free' ? 'selected' : ''}`}
                >
                  <span className='plan-choice-check'>
                    {plan === 'free' && <Check size={15} />}
                  </span>
                  <div>
                    <b>{t.onboarding.freePlan}</b>
                    <small>{t.onboarding.freePlanDesc}</small>
                  </div>
                  <strong>
                    $0 <small>forever</small>
                  </strong>
                </button>
                <button
                  type='button'
                  onClick={() => setPlan('premium')}
                  className={`plan-choice premium ${plan === 'premium' ? 'selected' : ''}`}
                >
                  <span className='plan-choice-check'>
                    {plan === 'premium' && <Check size={15} />}
                  </span>
                  <div>
                    <b>
                      <Crown size={15} /> {t.onboarding.premiumPlan}
                    </b>
                    <small>{t.onboarding.premiumPlanDesc}</small>
                  </div>
                  <strong>
                    $12 <small>/ month</small>
                  </strong>
                  <em>{t.onboarding.mostPopular}</em>
                </button>
              </div>
              <div className='onboarding-actions'>
                <button
                  type='button'
                  onClick={() => {
                    setStep(2)
                    setSelected(dates[0])
                  }}
                  className='back-button'
                >
                  <ArrowLeft size={16} /> {t.onboarding.back}
                </button>
                <Link href='/dashboard' className='next-button'>
                  {plan === 'premium' ? t.onboarding.startPremium : t.onboarding.continueForFree}{' '}
                  <ChevronRight size={17} />
                </Link>
              </div>
              <p className='plan-note'>
                <Sparkles size={14} /> You can change or upgrade your plan at any time.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
