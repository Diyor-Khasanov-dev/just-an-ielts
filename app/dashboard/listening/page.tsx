'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const sections = [
  { id: 1, title: 'Section 1 · Student Housing Inquiry', difficulty: 'Band 6.0', duration: '5:20', topic: 'Conversation on accommodation deposit, rent rules & amenities' },
  { id: 2, title: 'Section 2 · Museum Guided Tour', difficulty: 'Band 6.5', duration: '6:15', topic: 'Monologue describing floor maps, ticket prices & historic exhibits' },
  { id: 3, title: 'Section 3 · Environmental Science Seminar', difficulty: 'Band 7.5', duration: '7:40', topic: 'Discussion between 3 students on renewable energy research data' },
  { id: 4, title: 'Section 4 · Marine Biology Academic Lecture', difficulty: 'Band 8.0', duration: '8:30', topic: 'University lecture on coral reef bleaching mechanisms & conservation' },
]

export default function ListeningPage() {
  const { t } = useLanguage()
  const lm = t.listeningModule

  const [activeSection, setActiveSection] = useState(3)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0)
  const [showTranscript, setShowTranscript] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(35) // percentage

  // Interactive Question State
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({
    1: '',
    2: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const currentSection = sections.find((s) => s.id === activeSection) || sections[2]

  const checkAnswer = (qNum: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [qNum]: answer }))
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{lm.eyebrow}</p>
          <h1>{lm.title}</h1>
          <p>{lm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-bold border border-sky-200">
            {lm.currentScore}: 7.0 / 9.0
          </span>
        </div>
      </div>

      {/* Section Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sections.map((sec) => {
          const isActive = sec.id === activeSection
          return (
            <button
              key={sec.id}
              onClick={() => {
                setActiveSection(sec.id)
                setIsPlaying(false)
                setSubmitted(false)
              }}
              className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                isActive
                  ? 'border-sky-500 bg-sky-50/70 shadow-md ring-2 ring-sky-200'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-sky-600">{lm.section} {sec.id}</span>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                  {sec.difficulty}
                </span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{sec.title.split('·')[1]}</h4>
              <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Clock size={12} /> {sec.duration} {lm.mins}
              </span>
            </button>
          )
        })}
      </div>

      {/* Simulated Audio Player Box */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-lg space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              <Headphones size={24} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">{currentSection.title}</h3>
              <p className="text-xs text-gray-500">{currentSection.topic}</p>
            </div>
          </div>

          {/* Speed & Transcript Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
              {[0.75, 1.0, 1.25, 1.5].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                    playbackSpeed === speed
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                showTranscript
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <FileText size={14} /> {lm.transcript}
            </button>
          </div>
        </div>

        {/* Audio Waveform & Player Controls Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500">
            <span>02:41</span>
            <span className="text-sky-600 font-extrabold">{lm.playingSection} {activeSection} ({playbackSpeed}x {lm.speed})</span>
            <span>{currentSection.duration}</span>
          </div>

          {/* Progress Bar / Waveform visualizer */}
          <div
            className="h-3 bg-gray-200 rounded-full relative cursor-pointer overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const clickedX = e.clientX - rect.left
              const newProgress = Math.round((clickedX / rect.width) * 100)
              setProgress(newProgress)
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setProgress(Math.max(0, progress - 10))}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              title={lm.rewind10s}
            >
              <RotateCcw size={18} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-lg transition transform active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" fill="currentColor" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              title={isMuted ? lm.unmute : lm.mute}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        {/* Synchronized Transcript Drawer */}
        {showTranscript && (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 text-sm leading-relaxed space-y-3 font-mono border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-sky-400 font-bold uppercase tracking-wider">
              <span>{lm.syncTranscript}</span>
              <span>{lm.audioTimestamp}: 02:41</span>
            </div>
            <p className="text-slate-300">
              <span className="text-amber-300 font-bold">Professor Williams:</span> Welcome back everyone. As we saw in the preliminary survey data,{' '}
              <mark className="bg-sky-500/30 text-sky-200 px-1 py-0.5 rounded border border-sky-400/40 font-semibold">
                solar irradiation efficiency dropped by 18% during peak humidity
              </mark>
              . This is key for question 22...
            </p>
            <p className="text-slate-400 text-xs italic">
              ✦ Highlighted text indicates direct answer triggers for questions 21-25.
            </p>
          </div>
        )}
      </section>

      {/* Interactive Exam Questions Section */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">{lm.questionsTitle}</h3>
            <p className="text-xs text-gray-500">{lm.questionsDesc}</p>
          </div>
          {submitted && (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> {lm.scoreCorrect}
            </span>
          )}
        </div>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-gray-200">
            <p className="text-sm font-bold text-gray-900">
              21. What primary cause did the researchers attribute to the efficiency drop?
            </p>
            <div className="space-y-2">
              {[
                { key: 'A', text: 'Unexpected cloud density fluctuations' },
                { key: 'B', text: 'Peak relative humidity levels above 85%' },
                { key: 'C', text: 'Dust accumulation on collector panels' },
              ].map((opt) => {
                const isSelected = userAnswers[1] === opt.key
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => checkAnswer(1, opt.key)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50 text-sky-950 font-bold'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>
                      <b className="mr-2 text-sky-600">{opt.key}.</b> {opt.text}
                    </span>
                    {submitted && opt.key === 'B' && (
                      <span className="text-emerald-600 font-bold text-[11px]">{lm.correctAnswer}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-gray-200">
            <p className="text-sm font-bold text-gray-900">
              22. According to the lecturer, what step should be taken before phase 2 deployment?
            </p>
            <div className="space-y-2">
              {[
                { key: 'A', text: 'Recalibrate humidity sensors' },
                { key: 'B', text: 'Increase budget allocations' },
                { key: 'C', text: 'Publish preliminary journal findings' },
              ].map((opt) => {
                const isSelected = userAnswers[2] === opt.key
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => checkAnswer(2, opt.key)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition cursor-pointer ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50 text-sky-950 font-bold'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>
                      <b className="mr-2 text-sky-600">{opt.key}.</b> {opt.text}
                    </span>
                    {submitted && opt.key === 'A' && (
                      <span className="text-emerald-600 font-bold text-[11px]">{lm.correctAnswer}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Submit Action */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
          >
            {lm.submitAnswers} <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  )
}
