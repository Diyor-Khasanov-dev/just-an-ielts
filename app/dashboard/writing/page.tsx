'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Eye,
  Info,
  Lightbulb,
  PenLine,
  Sparkles,
  Target
} from 'lucide-react'

export default function WritingPage() {
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
          <p className="eyebrow">IELTS WRITING MODULE</p>
          <h1>Writing Practice & AI Evaluation</h1>
          <p>Draft responses with live word count, paragraph flow analysis, and official criteria feedback.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-200">
            Writing Target: Band 7.5
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
          Task 1 · Report / Chart (150 words)
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
          Task 2 · Opinion Essay (250 words)
        </button>
      </div>

      {/* Writing Prompt Card */}
      <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider">
            {taskType === 'task1' ? 'ACADEMIC TASK 1 PROMPT' : 'ACADEMIC TASK 2 PROMPT'}
          </span>
          <span className="text-xs font-semibold text-gray-400">Recommended Time: {taskType === 'task1' ? '20 mins' : '40 mins'}</span>
        </div>
        <h3 className="text-base font-extrabold text-gray-900 leading-snug">
          {taskType === 'task1'
            ? 'The graph below shows the percentage of electricity generated from renewable sources in four European countries between 2010 and 2024. Summarise the main features and make comparisons where relevant.'
            : 'Some people believe that artificial intelligence will replace human jobs, while others think it will create new career opportunities. Discuss both views and give your opinion.'}
        </h3>
      </section>

      {/* Main Writing Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Area (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-600">
                  Word Count: <b className="text-indigo-600 text-sm">{wordCount}</b> / {minWords}
                </span>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden hidden sm:block">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => setShowModelAnswer(!showModelAnswer)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <Eye size={14} /> {showModelAnswer ? 'Hide Model Answer' : 'View Band 9 Model'}
              </button>
            </div>

            <textarea
              value={essayText}
              onChange={(e) => {
                setEssayText(e.target.value)
                setEvaluated(false)
              }}
              rows={14}
              placeholder="Type your essay response here..."
              className="w-full p-4 rounded-xl border border-gray-200 bg-white/90 text-sm leading-relaxed text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans resize-y"
            />

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400">
                Auto-saved 1 min ago
              </span>

              <button
                onClick={() => setEvaluated(true)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
              >
                Evaluate Essay <Sparkles size={15} />
              </button>
            </div>
          </div>

          {/* Band 9 Model Answer Drawer */}
          {showModelAnswer && (
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-indigo-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
                <span>Band 9.0 Official Examiner Sample</span>
                <span>Word count: 285</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                &ldquo;The integration of artificial intelligence into the global labor market has ignited intense debate regarding economic stability and employment security. Although automation inevitably displaces specific routine roles, I maintain that technological advancement serves as a vital catalyst for job creation and workplace sophistication...&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Diagnostic Evaluation & Criteria Metrics Sidebar */}
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-base font-extrabold text-gray-900">Criteria Diagnosis</h3>
              <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                {evaluated ? 'Overall 7.5' : 'Ready'}
              </span>
            </div>

            {/* Criteria Breakdown Meters */}
            <div className="space-y-4">
              {[
                { name: 'Task Response / Achievement', band: '7.5', score: 82, color: 'bg-emerald-500' },
                { name: 'Coherence & Cohesion', band: '7.0', score: 75, color: 'bg-indigo-500' },
                { name: 'Lexical Resource (Vocab)', band: '7.5', score: 80, color: 'bg-purple-500' },
                { name: 'Grammatical Accuracy', band: '8.0', score: 88, color: 'bg-amber-500' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                    <span>{item.name}</span>
                    <span className="text-indigo-600">Band {item.band}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${evaluated ? item.score : 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Vocabulary & Linking Word Enhancer Pills */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                Recommended Transition Linkers
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Consequently', 'Furthermore', 'Notwithstanding', 'In stark contrast', 'It is widely contended'].map((phrase) => (
                  <span
                    key={phrase}
                    className="text-[11px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition cursor-pointer"
                    onClick={() => setEssayText(essayText + ` ${phrase}, `)}
                  >
                    + {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
