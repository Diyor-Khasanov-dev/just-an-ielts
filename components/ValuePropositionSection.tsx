'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Coins,
  Cpu,
  Crown,
  FileCheck2,
  Headphones,
  LineChart,
  Mic2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface ValuePropositionSectionProps {
  compact?: boolean
  showCta?: boolean
  className?: string
}

export function ValuePropositionSection({
  compact = false,
  showCta = true,
  className = ''
}: ValuePropositionSectionProps) {
  const { t } = useLanguage()
  const vp = t.valueProp || {}

  const [activeTab, setActiveTab] = useState<'buy' | 'results' | 'roi'>('buy')

  const deliverables = [
    {
      icon: Cpu,
      title: vp.item1Title || 'Instant AI Criteria Diagnostics',
      desc: vp.item1Desc || 'Real-time feedback on Task Achievement, Coherence, Lexical Resource, and Grammar for Writing & Speaking.',
      badge: 'Real-Time Evaluation',
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    },
    {
      icon: Headphones,
      title: vp.item2Title || 'Authentic Audio & Reading Speed Drills',
      desc: vp.item2Desc || 'Variable playback speeds, live transcript highlighting, distractor detection, and line timers.',
      badge: 'Interactive Practice',
      color: 'bg-sky-500/10 text-sky-600 border-sky-200'
    },
    {
      icon: Mic2,
      title: vp.item3Title || 'Cue Card Simulator & Speaking Recorder',
      desc: vp.item3Desc || '1-minute planning timer, audio recording playback, hesitation metrics, and topic expansion packs.',
      badge: 'Speaking Mastery',
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    {
      icon: FileCheck2,
      title: vp.item4Title || 'Full Mock Test Suite & Progress Analytics',
      desc: vp.item4Desc || 'Timed full-length mock exams calibrated against official British Council & IDP standards.',
      badge: 'Exam Simulation',
      color: 'bg-purple-500/10 text-purple-600 border-purple-200'
    }
  ]

  const metrics = [
    {
      value: vp.metric1Val || '+1.5 Band',
      label: vp.metric1Label || 'Average Score Increase',
      desc: vp.metric1Desc || 'Achieved by learners practicing 30 mins daily for 6 weeks.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      value: vp.metric2Val || '94%',
      label: vp.metric2Label || 'Target Pass Rate',
      desc: vp.metric2Desc || 'Students hitting their target band on their very first attempt.',
      icon: Target,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      value: vp.metric3Val || '2x Faster',
      label: vp.metric3Label || 'Study Efficiency',
      desc: vp.metric3Desc || 'Save up to 120 hours of ineffective manual worksheet drilling.',
      icon: Zap,
      color: 'from-amber-500 to-orange-600'
    }
  ]

  return (
    <section
      id='value-prop'
      className={`w-full max-w-[1100px] mx-auto px-4 sm:px-6 ${
        compact ? 'py-6' : 'py-16 md:py-20'
      } ${className}`}
    >
      {/* Header */}
      {!compact && (
        <div className='text-center max-w-3xl mx-auto mb-10 md:mb-14'>
          <p className='eyebrow text-xs sm:text-sm tracking-widest font-extrabold uppercase text-indigo-600 mb-2'>
            {vp.eyebrow || 'WHY CHOOSE JUST AN IELTS'}
          </p>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight'>
            {vp.title || 'What you get, your expected results &'}{' '}
            <em className='not-italic bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              {vp.titleEm || 'unmatched ROI.'}
            </em>
          </h2>
          <p className='text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed'>
            {vp.subtitle ||
              'Investing in your IELTS score is an investment in your global future. Here is exactly what you get, what you can achieve, and why it pays for itself.'}
          </p>
        </div>
      )}

      {/* Segmented Control Tabs */}
      <div className='flex items-center justify-center mb-8'>
        <div className='bg-gray-100/90 p-1.5 rounded-2xl flex items-center gap-1 sm:gap-2 border border-gray-200/80 shadow-inner max-w-full overflow-x-auto'>
          <button
            type='button'
            onClick={() => setActiveTab('buy')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'buy'
                ? 'bg-white text-indigo-600 shadow-md shadow-gray-200/60 scale-[1.02]'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
            }`}
          >
            <Brain size={16} />
            <span>{vp.tabWhatYouBuy || 'What You Get'}</span>
          </button>

          <button
            type='button'
            onClick={() => setActiveTab('results')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'results'
                ? 'bg-white text-indigo-600 shadow-md shadow-gray-200/60 scale-[1.02]'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
            }`}
          >
            <LineChart size={16} />
            <span>{vp.tabResults || 'Expected Results'}</span>
          </button>

          <button
            type='button'
            onClick={() => setActiveTab('roi')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'roi'
                ? 'bg-white text-indigo-600 shadow-md shadow-gray-200/60 scale-[1.02]'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
            }`}
          >
            <Coins size={16} />
            <span>{vp.tabRoi || 'Value & Profitability'}</span>
          </button>
        </div>
      </div>

      {/* Tab Content 1: What You Get (Deliverables) */}
      {activeTab === 'buy' && (
        <div className='space-y-6 animate-in fade-in duration-300'>
          <div className='bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-800/40'>
            <div className='absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none' />
            <div className='flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2'>
              <Sparkles size={16} className='text-amber-400' />
              <span>{vp.buyTitle || 'Complete IELTS Preparation Workspace'}</span>
            </div>
            <h3 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-white'>
              {vp.buyTitle || 'Complete IELTS Preparation Workspace'}
            </h3>
            <p className='text-indigo-200/90 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed'>
              {vp.buyDesc ||
                'An end-to-end, structured system engineered to systematically eliminate your weak points and boost your band score.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {deliverables.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className='bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-4 group'
                >
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <div className='w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform'>
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${item.color}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <h4 className='text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors'>
                      {item.title}
                    </h4>
                    <p className='text-sm text-gray-600 leading-relaxed'>{item.desc}</p>
                  </div>

                  <div className='flex items-center gap-2 text-xs font-bold text-emerald-600 pt-3 border-t border-gray-100'>
                    <CheckCircle2 size={15} />
                    <span>Included in Full Access</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Tab Content 2: Expected Results */}
      {activeTab === 'results' && (
        <div className='space-y-6 animate-in fade-in duration-300'>
          <div className='bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800'>
            <div className='flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2'>
              <TrendingUp size={16} />
              <span>Measurable Outcomes</span>
            </div>
            <h3 className='text-2xl sm:text-3xl font-extrabold text-white'>
              {vp.resultsTitle || 'Concrete, Quantifiable Outcomes'}
            </h3>
            <p className='text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed'>
              {vp.resultsDesc ||
                'Our structured methodology delivers measurable score improvements in weeks, not months.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className='bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between space-y-4 hover:border-indigo-300 transition-all'
                >
                  <div className='space-y-3'>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon size={24} />
                    </div>
                    <p className='text-3xl sm:text-4xl font-black text-gray-900 tracking-tight'>
                      {metric.value}
                    </p>
                    <h4 className='text-base font-bold text-gray-800'>{metric.label}</h4>
                    <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
                      {metric.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Tab Content 3: ROI & Profitability */}
      {activeTab === 'roi' && (
        <div className='space-y-6 animate-in fade-in duration-300'>
          <div className='bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-emerald-800/40'>
            <div className='flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2'>
              <Coins size={16} />
              <span>Financial Comparison</span>
            </div>
            <h3 className='text-2xl sm:text-3xl font-extrabold text-white'>
              {vp.roiTitle || 'Why This Purchase Is Extremely Profitable'}
            </h3>
            <p className='text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed'>
              {vp.roiDesc ||
                'Compare the total cost of traditional IELTS coaching and retakes vs. our platform.'}
            </p>
          </div>

          {/* ROI Comparison Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch'>
            {/* Private Tutor */}
            <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 opacity-90 hover:opacity-100 transition-opacity'>
              <div>
                <span className='text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100'>
                  Expensive Alternative
                </span>
                <h4 className='text-lg font-bold text-gray-900 mt-3'>
                  {vp.tutorCostTitle || 'Private Tutor & Offline Center'}
                </h4>
                <p className='text-3xl font-black text-gray-900 mt-2'>
                  {vp.tutorCostVal || '$800 - $2,000'}
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  {vp.tutorCostSub || 'per course (2-3 months)'}
                </p>
              </div>
              <ul className='space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3'>
                <li className='flex items-center gap-2'>
                  <span className='text-rose-500 font-bold'>✕</span> Fixed scheduling rigid timelines
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-rose-500 font-bold'>✕</span> Slow manual essay grading
                </li>
              </ul>
            </div>

            {/* Exam Retake Fee */}
            <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 opacity-90 hover:opacity-100 transition-opacity'>
              <div>
                <span className='text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100'>
                  Avoidable Penalty
                </span>
                <h4 className='text-lg font-bold text-gray-900 mt-3'>
                  {vp.retakeCostTitle || 'Failed Exam Retake Fee'}
                </h4>
                <p className='text-3xl font-black text-gray-900 mt-2'>
                  {vp.retakeCostVal || '$250+'}
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  {vp.retakeCostSub || 'per retake attempt + stress'}
                </p>
              </div>
              <ul className='space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3'>
                <li className='flex items-center gap-2'>
                  <span className='text-amber-500 font-bold'>✕</span> Delayed university or visa deadlines
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-amber-500 font-bold'>✕</span> Emotional frustration & fatigue
                </li>
              </ul>
            </div>

            {/* Our Platform (Highlighted) */}
            <div className='bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white! shadow-xl flex flex-col justify-between space-y-4 relative border-2 border-indigo-400 scale-[1.02]'>
              <div className='absolute -top-3 right-4 bg-amber-400 text-indigo-950 font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1'>
                <Crown size={12} /> Best ROI Choice
              </div>
              <div>
                <span className='text-xs font-extrabold uppercase tracking-wider text-indigo-100! bg-indigo-500/40 px-2.5 py-1 rounded-md border border-indigo-300/30'>
                  Smart Investment
                </span>
                <h4 className='text-lg font-bold text-white! mt-3'>
                  {vp.ourPlatformTitle || 'just an ielts Full Access'}
                </h4>
                <p className='text-4xl font-black text-white! mt-2'>
                  {vp.ourPlatformVal || '$12'}
                </p>
                <p className='text-xs text-indigo-100! mt-1'>
                  {vp.ourPlatformSub || 'per month (cancel anytime)'}
                </p>
              </div>

              <div className='bg-indigo-950/60 rounded-xl p-3 border border-indigo-400/30 space-y-1'>
                <p className='text-xs font-bold text-amber-300 flex items-center gap-1.5'>
                  <ShieldCheck size={14} />
                  <span>{vp.netSavingsVal || 'Save $1,000+'}</span>
                </p>
                <p className='text-[11px] text-indigo-100! leading-tight'>
                  {vp.netSavingsDesc ||
                    'Pass on your 1st try while avoiding expensive tutors and retake fees.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Optional CTA Footer */}
      {showCta && (
        <div className='mt-10 sm:mt-12 text-center bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4'>
          <p className='text-sm sm:text-base font-bold text-gray-800'>
            {vp.guaranteeText || 'Risk-free preparation · Structured for high score success'}
          </p>
          <div>
            <Link
              href='/login'
              className='inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base rounded-2xl transition shadow-lg shadow-indigo-200 cursor-pointer'
            >
              <span>{vp.ctaButton || 'Unlock Full Access Now'}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
