'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronRight, Crown, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from '@/components/LanguageSelector'

export default function Onboarding() {
  const { t } = useLanguage()
  const ob = t.onboarding

  const goals = [ob.goals.uni, ob.goals.work, ob.goals.personal, ob.goals.notSure]
  const dates = [ob.dates.less1m, ob.dates.m1to3, ob.dates.m3to6, ob.dates.notBooked]

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

          <Link href='/login' className='hidden sm:block text-xs font-semibold'>
            {ob.alreadyHaveAccount} <b className='text-indigo-600 hover:underline'>{t.nav.signIn}</b>
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
                {ob.personalisePath} · {ob.stepOf3} {step} OF 3
              </p>
              <h1>{step === 1 ? ob.whatBringsYou : ob.whenTakingTest}</h1>
              <p>
                {step === 1
                  ? ob.step1Subtitle
                  : ob.step2Subtitle}
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
                    <ArrowLeft size={16} /> {ob.back}
                  </button>
                )}
                <button type='button' onClick={moveForward} className='next-button'>
                  {ob.continue} <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : (
            <>
              <p className='eyebrow'>
                {ob.planReady} · {ob.stepOf3} 3 OF 3
              </p>
              <h1>{ob.chooseStartingPoint}</h1>
              <p>
                {ob.step3Subtitle}
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
                    <b>{ob.freePlan}</b>
                    <small>{ob.freePlanDesc}</small>
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
                      <Crown size={15} /> {ob.premiumPlan}
                    </b>
                    <small>{ob.premiumPlanDesc}</small>
                  </div>
                  <strong>
                    $12 <small>/ month</small>
                  </strong>
                  <em>{ob.mostPopular}</em>
                </button>
              </div>

              <div className='onboarding-actions mt-6'>
                <button
                  type='button'
                  onClick={() => {
                    setStep(2)
                    setSelected(dates[0])
                  }}
                  className='back-button'
                >
                  <ArrowLeft size={16} /> {ob.back}
                </button>
                <Link href='/dashboard' className='next-button'>
                  {plan === 'premium' ? ob.startPremium : ob.continueForFree}{' '}
                  <ChevronRight size={17} />
                </Link>
              </div>
              <p className='plan-note'>
                <Sparkles size={14} /> {ob.planNote}
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
