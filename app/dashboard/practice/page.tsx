'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Filter,
  GraduationCap,
  Headphones,
  Mic2,
  PenLine,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  Zap
} from 'lucide-react'

export default function PracticeHubPage() {
  const [selectedSkill, setSelectedSkill] = useState<'listening' | 'reading' | 'writing' | 'speaking' | 'vocab' | 'grammar'>('listening')
  const [selectedDifficulty, setSelectedDifficulty] = useState<'band6' | 'band7' | 'band8'>('band7')
  const [selectedDuration, setSelectedDuration] = useState<number>(15)
  const [sessionLaunched, setSessionLaunched] = useState(false)

  const skillConfig = {
    listening: {
      name: 'Listening',
      icon: Headphones,
      color: 'bg-sky-50 text-sky-600 border-sky-200',
      types: ['Multiple Choice', 'Form Completion', 'Matching Headings', 'Map Labeling'],
      href: '/dashboard/listening'
    },
    reading: {
      name: 'Reading',
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      types: ['True / False / Not Given', 'Paragraph Matching', 'Summary Completion', 'Sentence Completion'],
      href: '/dashboard/reading'
    },
    writing: {
      name: 'Writing',
      icon: PenLine,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      types: ['Task 1 · Chart / Process', 'Task 2 · Opinion Essay', 'Task 2 · Discussion Essay', 'Paragraph Coherence Drill'],
      href: '/dashboard/writing'
    },
    speaking: {
      name: 'Speaking',
      icon: Mic2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      types: ['Part 1 · Introduction', 'Part 2 · Cue Card Simulator', 'Part 3 · Abstract Discussion', 'Pronunciation & Intonation'],
      href: '/dashboard/speaking'
    },
    vocab: {
      name: 'Vocabulary',
      icon: GraduationCap,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      types: ['Band 7+ Academic Words', 'Band 8+ Topic Collocations', 'Idiomatic Expressions', 'Synonym Replacement'],
      href: '/dashboard/vocabulary'
    },
    grammar: {
      name: 'Grammar',
      icon: CheckCircle2,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      types: ['Complex & Compound Sentences', 'Passive Voice Mastery', 'Conditionals & Inversion', 'Article & Preposition Accuracy'],
      href: '/dashboard/grammar'
    }
  }

  const activeConfig = skillConfig[selectedSkill]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">CUSTOM DRILL BUILDER</p>
          <h1>Practice Hub</h1>
          <p>Configure a targeted session or jump into daily recommended drills.</p>
        </div>
        <button
          onClick={() => setSessionLaunched(true)}
          className="primary-action cursor-pointer"
        >
          <Play size={16} fill="currentColor" /> Quick Launch Session
        </button>
      </div>

      {/* Session Launched Toast Notification */}
      {sessionLaunched && (
        <div className="bg-emerald-500 text-white rounded-2xl p-5 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles size={20} />
            <div>
              <b className="text-base">Practice Session Ready!</b>
              <p className="text-xs text-emerald-100 mt-0.5">
                Loaded {activeConfig.name} ({selectedDifficulty.toUpperCase()}, {selectedDuration} mins). Redirecting to interactive workspace...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={activeConfig.href}
              className="px-4 py-2 bg-white text-emerald-900 rounded-xl text-xs font-bold hover:bg-emerald-50 transition"
            >
              Start Drill →
            </Link>
            <button
              onClick={() => setSessionLaunched(false)}
              className="p-1 hover:bg-emerald-600 rounded-lg text-emerald-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Custom Session Builder Card */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md">
        <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-6">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-indigo-600" />
            <h2 className="text-xl font-extrabold text-gray-900">Custom Session Customizer</h2>
          </div>
          <span className="text-xs font-semibold text-gray-400">
            Tailor difficulty, question type & timer
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Select Skill */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
              1. Select Target Skill
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(skillConfig) as Array<keyof typeof skillConfig>).map((key) => {
                const item = skillConfig[key]
                const Icon = item.icon
                const isSelected = selectedSkill === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedSkill(key)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 shadow-sm'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={16} className={isSelected ? 'text-indigo-600' : 'text-gray-400'} />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Target Band & Duration */}
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                2. Band Target Level
              </label>
              <div className="flex items-center gap-2">
                {[
                  { id: 'band6', label: 'Band 6.0-6.5' },
                  { id: 'band7', label: 'Band 7.0-7.5' },
                  { id: 'band8', label: 'Band 8.0+' },
                ].map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setSelectedDifficulty(level.id as 'band6' | 'band7' | 'band8')}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                      selectedDifficulty === level.id
                        ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                3. Drill Duration
              </label>
              <div className="flex items-center gap-2">
                {[5, 12, 20, 30].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setSelectedDuration(mins)}
                    className={`flex-1 py-2 px-2 rounded-xl border text-xs font-semibold transition cursor-pointer text-center ${
                      selectedDuration === mins
                        ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold'
                        : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {mins} mins
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Question Types & Session Action */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Focus Modules
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeConfig.color}`}>
                  {activeConfig.name}
                </span>
              </div>

              <div className="space-y-2">
                {activeConfig.types.map((type, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200/60 text-xs font-medium text-gray-700"
                  >
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={activeConfig.href}
              className="mt-6 flex items-center justify-center gap-2 py-3 bg-indigo-950 text-white font-bold text-xs rounded-xl hover:bg-indigo-900 transition shadow-md"
            >
              Start Selected {activeConfig.name} Drill <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Practice Drills Grid */}
      <section>
        <div className="section-title">
          <div>
            <h2>Daily Recommended Drills</h2>
            <p>Short 10-15 minute practice tasks aligned with your target band 7.5 goal.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              skill: 'Listening',
              title: 'Section 3 · University Seminar',
              desc: 'Multiple choice & speaker agreement matching',
              time: '12 min',
              band: '7.0',
              icon: Headphones,
              color: 'sky',
              href: '/dashboard/listening'
            },
            {
              skill: 'Reading',
              title: 'Passage 2 · Climate Science',
              desc: 'True/False/Not Given & Paragraph Headings',
              time: '15 min',
              band: '7.5',
              icon: BookOpen,
              color: 'orange',
              href: '/dashboard/reading'
            },
            {
              skill: 'Writing',
              title: 'Task 2 · Technology Opinion',
              desc: 'Paragraph paragraph coherence & lexical resource',
              time: '20 min',
              band: '7.5',
              icon: PenLine,
              color: 'violet',
              href: '/dashboard/writing'
            },
            {
              skill: 'Speaking',
              title: 'Part 2 · Cue Card Drill',
              desc: 'Describe an unforgettable journey (1 min prep)',
              time: '10 min',
              band: '8.0',
              icon: Mic2,
              color: 'green',
              href: '/dashboard/speaking'
            },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <Link
                key={idx}
                href={item.href}
                className="skill-card group hover:border-indigo-300"
              >
                <div className={`skill-icon ${item.color}`}>
                  <Icon size={22} />
                </div>
                <div className="skill-card-head">
                  <span>Target Band</span>
                  <b>{item.band}</b>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <span>
                    <Clock size={14} /> {item.time}
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Diagnostic Diagnostic Prompt Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-7 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
            <Trophy size={24} className="text-indigo-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Unsure where to start? Take a 10-Min Diagnostic</h3>
            <p className="text-xs text-indigo-200 mt-1">
              Test all 4 skills in a quick micro-quiz to identify your current band baseline and precise weak points.
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/tests"
          className="shrink-0 px-5 py-3 bg-white text-indigo-950 font-bold text-xs rounded-xl hover:bg-indigo-50 transition shadow-lg flex items-center gap-2"
        >
          Start Diagnostic <Zap size={15} />
        </Link>
      </section>
    </div>
  )
}
