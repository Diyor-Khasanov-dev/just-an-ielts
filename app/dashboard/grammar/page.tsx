'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react'

const grammarModules = [
  {
    title: 'Complex & Compound Sentences',
    band: 'Impact: Band 7.0 → 8.0',
    desc: 'Master subordinating conjunctions (although, whereas, provided that) to increase Grammatical Range.',
    examples: ['While automation reduces manual tasks, it simultaneously creates technical roles.']
  },
  {
    title: 'Passive Voice in Academic Writing',
    band: 'Impact: Band 7.5+',
    desc: 'Use formal passive structures in Task 1 reports and Task 2 argument body paragraphs.',
    examples: ['Data was systematically gathered across 14 European metropolitan regions.']
  },
  {
    title: 'Inversion & Advanced Conditionals',
    band: 'Impact: Band 8.0+',
    desc: 'Utilize inverted conditional structures for emphasis in formal conclusions.',
    examples: ['Not only does green infrastructure reduce urban temperatures, but it also retains stormwater.']
  }
]

export default function GrammarPage() {
  const [activeModule, setActiveModule] = useState(0)
  const [selectedFix, setSelectedFix] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const quizQuestion = {
    errorSentence: 'If governments will not invest in renewable energy, pollution increases.',
    options: [
      { text: 'If governments do not invest in renewable energy, pollution will increase.', correct: true },
      { text: 'If governments will not invest in renewable energy, pollution will increase.', correct: false },
      { text: 'If governments do not invest in renewable energy, pollution increases.', correct: false },
    ]
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">IELTS GRAMMAR MODULE</p>
          <h1>Grammar Masterclass & Error Fixer</h1>
          <p>Eliminate frequent grammatical mistakes and expand sentence structures for higher Band scores.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full text-xs font-bold border border-rose-200">
            Grammar Score: Band 8.0 / 9.0
          </span>
        </div>
      </div>

      {/* Grammar Modules Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {grammarModules.map((mod, idx) => (
          <div
            key={idx}
            onClick={() => setActiveModule(idx)}
            className={`p-6 rounded-2xl border transition cursor-pointer space-y-3 ${
              activeModule === idx
                ? 'border-rose-500 bg-rose-50/70 shadow-md ring-2 ring-rose-200'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-[10px] font-extrabold uppercase text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">
              {mod.band}
            </span>
            <h3 className="text-base font-extrabold text-gray-900">{mod.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{mod.desc}</p>
          </div>
        ))}
      </div>

      {/* Interactive Mistake Corrector Drill */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-rose-600" />
            <h3 className="text-lg font-extrabold text-gray-900">Grammar Error Corrector Drill</h3>
          </div>
          <span className="text-xs font-semibold text-gray-400">Question 1 of 5</span>
        </div>

        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">Candidate Sentence (Contains Error)</span>
          <p className="text-sm font-semibold text-rose-950 font-mono">&ldquo;{quizQuestion.errorSentence}&rdquo;</p>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">Select Correct Grammatical Structure:</label>
          {quizQuestion.options.map((opt, idx) => {
            const isSelected = selectedFix === idx
            return (
              <button
                key={idx}
                onClick={() => {
                  setSelectedFix(idx)
                  setIsCorrect(opt.correct)
                }}
                className={`w-full p-4 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition cursor-pointer ${
                  isSelected
                    ? opt.correct
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                      : 'border-rose-500 bg-rose-50 text-rose-950 font-bold'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span>{opt.text}</span>
                {isSelected && (
                  <span className={opt.correct ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                    {opt.correct ? 'Correct Structure ✓' : 'Contains Error ✕'}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {isCorrect !== null && (
          <div className={`p-4 rounded-xl border text-xs leading-relaxed font-medium ${
            isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <b>{isCorrect ? 'Excellent!' : 'Review Rule:'}</b> In first conditional structures (&ldquo;If + present simple, future simple&rdquo;), the condition clause uses present tense (&ldquo;do not invest&rdquo;) rather than future modal (&ldquo;will not&rdquo;).
          </div>
        )}
      </section>
    </div>
  )
}
