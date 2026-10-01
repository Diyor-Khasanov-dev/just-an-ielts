'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  BookOpen,
  Flame,
  Headphones,
  Mic2,
  PenLine,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ProgressPage() {
  const { t } = useLanguage()
  const pm = t.progressModule

  const [activeRange, setActiveRange] = useState<'30d' | '60d' | 'all'>('30d')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{pm.eyebrow}</p>
          <h1>{pm.title}</h1>
          <p>{pm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200 flex items-center gap-1">
            <Flame size={14} className="text-amber-500 fill-amber-500" /> {pm.streakActive}
          </span>
        </div>
      </div>

      {/* Target Banner */}
      <section className="goal-banner">
        <div className="goal-copy">
          <span className="soft-icon">
            <Target size={22} className="text-indigo-200" />
          </span>
          <div>
            <p>
              {t.settings.targetBandScore} <b>7.5</b>
            </p>
            <small>
              {pm.overallReadiness}: <strong>68%</strong> · {pm.improvementNeeded}
            </small>
          </div>
        </div>

        <div className="goal-progress">
          <div>
            <span>{pm.estimatedReadiness}</span>
            <b>68%</b>
          </div>
          <div className="progress-track">
            <i style={{ width: '68%' }} />
          </div>
        </div>
      </section>

      {/* 4 Skills Progress Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { skill: t.sidebar.listening, score: '7.0', target: '7.5', ready: '78%', icon: Headphones, color: 'sky', href: '/dashboard/listening' },
          { skill: t.sidebar.reading, score: '6.5', target: '7.5', ready: '60%', icon: BookOpen, color: 'orange', href: '/dashboard/reading' },
          { skill: t.sidebar.writing, score: '7.0', target: '7.5', ready: '72%', icon: PenLine, color: 'violet', href: '/dashboard/writing' },
          { skill: t.sidebar.speaking, score: '7.5', target: '8.0', ready: '85%', icon: Mic2, color: 'green', href: '/dashboard/speaking' },
        ].map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-white/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className={`skill-icon ${item.color}`}>
                  <Icon size={20} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block font-bold">{pm.currentBand}</span>
                  <b className="text-2xl font-extrabold text-indigo-900">{item.score}</b>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-gray-600">
                  <span>{item.skill} Readiness</span>
                  <span className="text-indigo-600 font-bold">{item.ready}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: item.ready }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">Target: Band {item.target}</span>
                <Link href={item.href} className="text-indigo-600 font-bold hover:underline flex items-center gap-0.5">
                  Practice <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Trajectory Visualizer Chart & Weak Points Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Graph Mock (2 cols) */}
        <section className="lg:col-span-2 glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-5">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-600" />
              <h3 className="text-lg font-extrabold text-gray-900">{pm.trajectoryTitle}</h3>
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg p-1 text-xs font-bold">
              {(['30d', '60d', 'all'] as const).map((r) => {
                const labelMap: Record<string, string> = {
                  '30d': pm.days30,
                  '60d': pm.days60,
                  all: pm.allTime,
                }
                return (
                  <button
                    key={r}
                    onClick={() => setActiveRange(r)}
                    className={`px-3 py-1 rounded uppercase transition cursor-pointer ${
                      activeRange === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    {labelMap[r] || r}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bar / Trajectory Visualizer */}
          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-4 bg-indigo-50/40 rounded-2xl border border-indigo-100/60">
            {[
              { month: 'Week 1', score: 6.0, height: '40%' },
              { month: 'Week 2', score: 6.5, height: '55%' },
              { month: 'Week 3', score: 6.5, height: '55%' },
              { month: 'Week 4', score: 7.0, height: '70%' },
              { month: 'Week 5', score: 7.0, height: '70%' },
              { month: 'This Week', score: 7.5, height: '85%' },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] font-extrabold text-indigo-700 bg-white px-2 py-0.5 rounded shadow-xs border border-indigo-100">
                  {bar.score}
                </span>
                <div
                  className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-xl transition-all duration-500 shadow-sm"
                  style={{ height: bar.height }}
                />
                <span className="text-[10px] font-bold text-gray-500">{bar.month}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Weak Point Diagnostics */}
        <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="text-base font-extrabold text-gray-900">{pm.priorityDiagnostics}</h3>
            <Sparkles size={16} className="text-amber-500" />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
              <b className="text-amber-900 font-bold block">1. Reading Heading Matching</b>
              <p className="text-amber-800">{pm.readingErrors}</p>
              <Link href="/dashboard/reading" className="text-amber-700 font-bold hover:underline block pt-1">
                {pm.headingDrill}
              </Link>
            </div>

            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1">
              <b className="text-indigo-900 font-bold block">2. Task 2 Essay Paragraph Transitions</b>
              <p className="text-indigo-800">{pm.writingTransitions}</p>
              <Link href="/dashboard/writing" className="text-indigo-700 font-bold hover:underline block pt-1">
                {pm.essayEditor}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
