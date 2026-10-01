'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Mic2,
  PenLine,
  Play
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function TestsPage() {
  const { t } = useLanguage()
  const tm = t.testsModule

  const [moduleType, setModuleType] = useState<'academic' | 'general'>('academic')
  const [launched, setLaunched] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{tm.eyebrow}</p>
          <h1>{tm.title}</h1>
          <p>{tm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-200">
            {tm.latestScore}: Band 7.5
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
          {tm.academicModule}
        </button>
        <button
          onClick={() => setModuleType('general')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            moduleType === 'general' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {tm.generalTraining}
        </button>
      </div>

      {/* Prominent Full Mock Test Banner */}
      <section className="glass-card rounded-3xl p-8 md:p-10 border border-white/90 shadow-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-800/80 pb-6">
          <div className="space-y-2 max-w-xl">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[11px] font-bold rounded-full border border-indigo-400/30 uppercase tracking-wider">
              {moduleType === 'academic' ? tm.academicModule : tm.generalTraining}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">{tm.fullMockExam} #03</h2>
            <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
              {tm.subtitle}
            </p>
          </div>

          <button
            onClick={() => setLaunched(!launched)}
            className="px-8 py-4 bg-white text-indigo-950 font-black text-sm rounded-2xl shadow-xl hover:bg-gray-100 transition transform active:scale-95 cursor-pointer shrink-0 flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" /> {tm.startFullMock}
          </button>
        </div>

        {/* Section Breakdown Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-indigo-200">
          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/60 flex items-center gap-2">
            <Headphones size={16} className="text-sky-400 shrink-0" />
            <span>{tm.listeningSection}</span>
          </div>

          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/60 flex items-center gap-2">
            <BookOpen size={16} className="text-amber-400 shrink-0" />
            <span>{tm.readingSection}</span>
          </div>

          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/60 flex items-center gap-2">
            <PenLine size={16} className="text-indigo-400 shrink-0" />
            <span>{tm.writingSection}</span>
          </div>

          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/60 flex items-center gap-2">
            <Mic2 size={16} className="text-emerald-400 shrink-0" />
            <span>{tm.speakingSection}</span>
          </div>
        </div>

        {launched && (
          <div className="p-4 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 rounded-xl text-xs font-semibold leading-relaxed animate-in fade-in duration-300">
            <b>✦ {tm.mockExamLaunched}:</b> {tm.mockInstructions}
          </div>
        )}
      </section>
    </div>
  )
}
