'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  FileCheck2,
  GraduationCap,
  Headphones,
  Mic2,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface InsideLookSectionProps {
  className?: string
}

export function InsideLookSection({ className = '' }: InsideLookSectionProps) {
  const { t } = useLanguage()
  const ins = t.insideLook || {}

  const features = [
    {
      icon: Cpu,
      title: ins.feature1Title || 'Instant AI Criteria Diagnostics',
      desc:
        ins.feature1Desc ||
        'Real-time feedback on Task Achievement, Coherence, Lexical Resource, and Grammar for Writing & Speaking.',
      badge: ins.feature1Badge || 'Writing & Speaking',
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    },
    {
      icon: Headphones,
      title: ins.feature2Title || 'Authentic Audio Speed Drills',
      desc:
        ins.feature2Desc ||
        'Variable playback speeds (0.75x–1.5x), synchronized transcript highlights, distractor alerts, and Section 1-4 practice.',
      badge: ins.feature2Badge || 'Listening Mastery',
      color: 'bg-sky-500/10 text-sky-600 border-sky-200'
    },
    {
      icon: BookOpen,
      title: ins.feature3Title || 'Reading Passage Speed Reader',
      desc:
        ins.feature3Desc ||
        'Dual-pane passage reader, built-in line timer, synonym finder, and True/False/Not Given paragraph matching.',
      badge: ins.feature3Badge || 'Reading Accelerator',
      color: 'bg-amber-500/10 text-amber-600 border-amber-200'
    },
    {
      icon: Mic2,
      title: ins.feature4Title || 'Cue Card Simulator & Audio Recorder',
      desc:
        ins.feature4Desc ||
        'Part 1, 2, and 3 examiner prompts with 1-minute cue card planning timer, audio playback, and hesitation tracking.',
      badge: ins.feature4Badge || 'Speaking Simulator',
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    {
      icon: FileCheck2,
      title: ins.feature5Title || 'Full Mock Test Suite & Progress Analytics',
      desc:
        ins.feature5Desc ||
        'Timed full-length mock exams calibrated against official IDP & British Council scoring standards.',
      badge: ins.feature5Badge || 'Exam Simulation',
      color: 'bg-purple-500/10 text-purple-600 border-purple-200'
    },
    {
      icon: GraduationCap,
      title: ins.feature6Title || 'Vocabulary & Grammar Skill Boosters',
      desc:
        ins.feature6Desc ||
        'Topic-specific academic vocabulary packs, collocation builders, and targeted sentence structure drills.',
      badge: ins.feature6Badge || 'Foundation & Polish',
      color: 'bg-pink-500/10 text-pink-600 border-pink-200'
    }
  ]

  return (
    <section
      id='inside'
      className={`w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-16 md:py-20 ${className}`}
    >
      {/* Section Header */}
      <div className='text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3'>
        <p className='eyebrow text-xs sm:text-sm tracking-widest font-extrabold uppercase text-indigo-600'>
          {ins.eyebrow || 'INSIDE THE PLATFORM'}
        </p>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight'>
          {ins.title || 'Take a look inside JUST AN IELTS'}
        </h2>
        <p className='text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed'>
          {ins.subtitle ||
            'Explore the actual tools, interactive modules, and diagnostic feedback systems built to get you to your target band score.'}
        </p>
      </div>

      {/* Feature Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {features.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className='bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/80 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between space-y-4 group'
            >
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <div className='w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <Icon size={24} />
                  </div>
                  <span
                    className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${item.color}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>

              <div className='flex items-center gap-2 text-xs font-bold text-emerald-600 pt-3 border-t border-gray-100'>
                <CheckCircle2 size={15} />
                <span>Available in Workspace</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Prominent CTA Banner with "Try It Yourself" Button */}
      <div className='bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-indigo-800/40 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none' />
        <div className='space-y-2 max-w-xl relative z-10'>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1 border border-indigo-400/30'>
            <span>{ins.interactiveExp || 'Interactive Experience'}</span>
          </div>
          <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
            {ins.readyToTest || 'Ready to test your current IELTS band?'}
          </h3>
          <p className='text-indigo-200/90 text-sm sm:text-base leading-relaxed'>
            {ins.experienceDesc || 'Experience live criteria evaluation, authentic exam timing, and personalized progress tracking right now.'}
          </p>
        </div>

        <div className='relative z-10 shrink-0'>
          <Link
            href='/login'
            className='inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-indigo-950! hover:bg-gray-100 font-black text-base rounded-2xl transition shadow-xl hover:scale-105 active:scale-95 cursor-pointer'
          >
            <span>{ins.tryItYourself || 'Try It Yourself'}</span>
            <ArrowRight size={20} className='text-indigo-600' />
          </Link>
        </div>
      </div>
    </section>
  )
}
