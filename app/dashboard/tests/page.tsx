'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Headphones,
  Mic2,
  PenLine,
  Play,
  RotateCcw,
  Sparkles,
  Trophy
} from 'lucide-react'

export default function TestsPage() {
  const [moduleType, setModuleType] = useState<'academic' | 'general'>('academic')
  const [launched, setLaunched] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">FULL EXAM SIMULATION</p>
          <h1>IELTS Mock Tests Hub</h1>
          <p>Experience full-length exam simulations under strict official timing and conditions.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-200">
            Latest Mock Score: Band 7.5
          </span>
        </div>
      </div>

      {/* Academic / General Switcher */}
      <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm max-w-sm">
        <button
          onClick={() => setModuleType('academic')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            moduleType === 'academic' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Academic Module
        </button>
        <button
          onClick={() => setModuleType('general')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            moduleType === 'general' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          General Training
        </button>
      </div>

      {/* Main Full Mock Exam Launcher Card */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-800/60 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-800/40 px-3 py-1 rounded-full border border-indigo-700/50">
              Official Format Simulation · {moduleType.toUpperCase()}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">Complete 4-Skill IELTS Mock Exam #04</h2>
            <p className="text-xs text-indigo-200 mt-1">Full-length timed exam covering Listening, Reading, Writing, and Speaking.</p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs text-indigo-300 block">Total Duration</span>
            <b className="text-2xl font-mono text-white">2 hrs 45 mins</b>
          </div>
        </div>

        {/* 4 Skills Breakdown Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { skill: 'Listening', time: '30 mins', icon: Headphones, color: 'bg-sky-500/20 text-sky-300' },
            { skill: 'Reading', time: '60 mins', icon: BookOpen, color: 'bg-amber-500/20 text-amber-300' },
            { skill: 'Writing', time: '60 mins', icon: PenLine, color: 'bg-purple-500/20 text-purple-300' },
            { skill: 'Speaking', time: '11-14 mins', icon: Mic2, color: 'bg-emerald-500/20 text-emerald-300' },
          ].map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={idx} className="p-3.5 bg-indigo-950/70 rounded-xl border border-indigo-800/50 space-y-1">
                <div className="flex items-center gap-2">
                  <Icon size={16} className={s.color} />
                  <span className="text-xs font-bold text-white">{s.skill}</span>
                </div>
                <span className="text-[11px] text-indigo-300 font-mono block">{s.time}</span>
              </div>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-indigo-300">
            ✓ Instant Band Score Predictor report generated upon completion
          </span>
          <button
            onClick={() => setLaunched(true)}
            className="px-6 py-3.5 bg-white text-indigo-950 font-extrabold text-xs rounded-xl hover:bg-indigo-50 transition shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Start Timed Mock Exam <Play size={16} fill="currentColor" />
          </button>
        </div>

        {launched && (
          <div className="p-4 bg-emerald-500/20 border border-emerald-400/40 rounded-xl text-xs text-emerald-200 font-medium flex items-center justify-between">
            <span>Mock Exam Environment Loaded. Strictly timed clock active.</span>
            <button onClick={() => setLaunched(false)} className="underline hover:text-white">
              Dismiss
            </button>
          </div>
        )}
      </section>

      {/* Individual Skill Mock Tests */}
      <section className="space-y-4">
        <div className="section-title">
          <div>
            <h2>Individual Section Mock Tests</h2>
            <p>Focus on a single skill under strict official section timers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Listening Mock Test #08', duration: '30 mins', items: '40 Questions · 4 Sections', icon: Headphones, color: 'sky' },
            { title: 'Reading Mock Test #12', duration: '60 mins', items: '40 Questions · 3 Passages', icon: BookOpen, color: 'orange' },
            { title: 'Writing Mock Test #05', duration: '60 mins', items: 'Task 1 & Task 2 Essays', icon: PenLine, color: 'violet' },
            { title: 'Speaking Interview #03', duration: '14 mins', items: 'Parts 1, 2, and 3 Cue Card', icon: Mic2, color: 'green' },
          ].map((test, idx) => {
            const Icon = test.icon
            return (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/90 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`skill-icon ${test.color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{test.title}</h4>
                    <span className="text-xs text-gray-500">{test.items} · {test.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => setLaunched(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer flex items-center gap-1"
                >
                  Start <ArrowRight size={14} />
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
