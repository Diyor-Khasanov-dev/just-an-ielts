'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronRight, Crown, Sparkles } from 'lucide-react'
import { AppMark } from '@/components/AppMark'

const goals = ['University admission', 'Work or migration', 'Personal development', 'Not sure yet']
const dates = ['In less than 1 month', '1–3 months', '3–6 months', 'I have not booked yet']

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(goals[0])
  const [plan, setPlan] = useState<'free' | 'premium'>('free')
  const choices = step === 1 ? goals : dates
  const isSetup = step < 3
  const moveForward = () => {
    if (step === 1) setSelected(dates[0])
    setStep((current) => current + 1)
  }

  return <main className="onboarding-page">
    <header className="onboarding-header"><AppMark /><Link href="/login">Already have an account? <b>Sign in</b></Link></header>
    <section className="onboarding-wrap">
      <div className="stepper" aria-label={`Step ${step} of 3`}><span className="complete">1</span><i className={step >= 2 ? 'complete' : ''} /><span className={step >= 2 ? 'complete' : ''}>2</span><i className={step >= 3 ? 'complete' : ''} /><span className={step >= 3 ? 'complete' : ''}>3</span></div>
      <div className="onboarding-content">
        {isSetup ? <><p className="eyebrow">LET&apos;S PERSONALISE YOUR PATH · STEP {step} OF 3</p><h1>{step === 1 ? 'What brings you to IELTS?' : 'When are you taking your test?'}</h1><p>{step === 1 ? 'Your goal helps us build a study plan that makes sense for you.' : 'We will tailor your weekly pace to your timeline.'}</p><div className="option-list">{choices.map((option) => <button type="button" key={option} onClick={() => setSelected(option)} className={selected === option ? 'selected' : ''}>{option}<span>{selected === option && <Check size={17} />}</span></button>)}</div><div className="onboarding-actions">{step === 1 ? <span /> : <button type="button" onClick={() => { setStep(1); setSelected(goals[0]) }} className="back-button"><ArrowLeft size={16} /> Back</button>}<button type="button" onClick={moveForward} className="next-button">Continue <ArrowRight size={17} /></button></div></> : <><p className="eyebrow">YOUR PLAN IS READY · STEP 3 OF 3</p><h1>Choose your starting point.</h1><p>Start free with a clear weekly plan, or unlock detailed feedback whenever you&apos;re ready.</p><div className="plan-options"><button type="button" onClick={() => setPlan('free')} className={`plan-choice ${plan === 'free' ? 'selected' : ''}`}><span className="plan-choice-check">{plan === 'free' && <Check size={15} />}</span><div><b>Free plan</b><small>Build your routine and practise every skill.</small></div><strong>$0 <small>forever</small></strong></button><button type="button" onClick={() => setPlan('premium')} className={`plan-choice premium ${plan === 'premium' ? 'selected' : ''}`}><span className="plan-choice-check">{plan === 'premium' && <Check size={15} />}</span><div><b><Crown size={15} /> Premium</b><small>Unlimited feedback, mock tests and targeted review.</small></div><strong>$12 <small>/ month</small></strong><em>Most popular</em></button></div><div className="onboarding-actions"><button type="button" onClick={() => { setStep(2); setSelected(dates[0]) }} className="back-button"><ArrowLeft size={16} /> Back</button><Link href="/dashboard" className="next-button">{plan === 'premium' ? 'Start Premium' : 'Continue for free'} <ChevronRight size={17} /></Link></div><p className="plan-note"><Sparkles size={14} /> You can change or upgrade your plan at any time.</p></>}
      </div>
    </section>
  </main>
}
