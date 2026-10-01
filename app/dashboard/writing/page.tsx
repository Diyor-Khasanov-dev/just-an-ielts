'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function WritingPage() {
  const { t } = useLanguage()
  const wm = t.writingModule

  const [taskType, setTaskType] = useState<'task1' | 'task2'>('task2')
  const [essayText, setEssayText] = useState<string>(
    `In recent years, artificial intelligence and automated systems have transformed modern workplace environments. While some individuals argue that AI threatens traditional job security, I firmly believe that automated technology creates more opportunities by enhancing human productivity and creating new specialized industries.\n\nTo begin with, automation relieves employees from tedious, repetitive tasks, allowing them to focus on creative problem-solving. For instance, data entry and basic administrative roles can now be handled seamlessly by machine learning algorithms, enabling workers to upskill and transition into high-value managerial roles.\n\nFurthermore, technological advancements historically generate entirely new career sectors. The rise of cloud computing and software engineering over the past two decades serves as a clear illustration. Similarly, the current expansion of AI necessitates prompt engineers, ethical compliance officers, and cyber-security specialists.\n\nIn conclusion, although technological disruption requires workforce adaptability, AI ultimately acts as a catalyst for economic growth and higher-skilled employment.`
  )
  const [showModelAnswer, setShowModelAnswer] = useState(false)
  const [evaluated, setEvaluated] = useState(false)

  const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length
  const minWords = taskType === 'task1' ? 150 : 250
  const progressPct = Math.min(100, Math.round((wordCount / minWords) * 100))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{wm.eyebrow}</p>
          <h1>{wm.title}</h1>
          <p>{wm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-200">
            {wm.target}: Band 7.5
          </span>
        </div>
      </div>

      {/* Task Type Switcher */}
      <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm w-150!">
        <button
          onClick={() => {
            setTaskType('task1')
            setEvaluated(false)
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            taskType === 'task1'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {wm.task1}
        </button>
        <button
          onClick={() => {
            setTaskType('task2')
            setEvaluated(false)
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            taskType === 'task2'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {wm.task2}
        </button>
      </div>

      {/* Essay Prompt Box */}
      <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-3">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <span className="text-xs font-extrabold uppercase text-indigo-600 tracking-wider">
            {wm.promptTitle}
          </span>
          <span className="text-[11px] font-bold text-gray-400">
            {wm.minWords}: {minWords} {wm.wordCount.toLowerCase()}
          </span>
        </div>
        <p className="text-sm font-semibold text-gray-900 leading-relaxed">
          {taskType === 'task1' ? wm.promptTask1 : wm.promptTask2}
        </p>
      </div>

      {/* Text Editor Area */}
      <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500">{wm.wordCount}:</span>
            <b className={`text-sm font-extrabold ${wordCount >= minWords ? 'text-emerald-600' : 'text-indigo-600'}`}>
              {wordCount} / {minWords}
            </b>
          </div>
          <button
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Eye size={14} /> {showModelAnswer ? wm.hideModelAnswer : wm.showModelAnswer}
          </button>
        </div>

        {/* Word count progress bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              progressPct >= 100 ? 'bg-emerald-500' : 'bg-indigo-600'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <textarea
          rows={10}
          value={essayText}
          onChange={(e) => setEssayText(e.target.value)}
          placeholder={wm.placeholder}
          className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 text-xs sm:text-sm font-medium leading-relaxed text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <span className="text-xs text-gray-400">
            ✦ Auto-saved local draft
          </span>
          <button
            onClick={() => setEvaluated(true)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles size={15} /> {wm.evaluateAi}
          </button>
        </div>
      </section>

      {/* Model Answer Modal / Section */}
      {showModelAnswer && (
        <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 space-y-3 font-sans border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{wm.modelAnswerTitle}</span>
            <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">Band 9.0 Verified</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
            {wm.modelAnswerText}
          </p>
        </section>
      )}

      {/* AI Evaluation Diagnostics Breakdown */}
      {evaluated && (
        <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-xl space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-indigo-600" />
              <h3 className="text-lg font-extrabold text-gray-900">{wm.aiDiagnostics}</h3>
            </div>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-full">
              Estimated Score: Band 7.5
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { criteria: wm.taskAchievement, score: '7.5', detail: 'Fully addresses all parts of the prompt with clear position.' },
              { criteria: wm.coherenceCohesion, score: '7.0', detail: 'Logical paragraph flow. Use varied cohesive devices.' },
              { criteria: wm.lexicalResource, score: '8.0', detail: 'Strong academic vocabulary and effective collocations.' },
              { criteria: wm.grammaticalAccuracy, score: '7.5', detail: 'Good mix of complex structures with rare minor errors.' },
            ].map((crit, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-gray-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-gray-500 uppercase">{crit.criteria}</span>
                  <b className="text-base font-extrabold text-indigo-600">{crit.score}</b>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{crit.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
