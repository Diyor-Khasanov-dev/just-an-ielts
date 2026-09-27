'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mic,
  Mic2,
  Play,
  RotateCcw,
  Sparkles,
  StopCircle,
  Volume2
} from 'lucide-react'

const cueCards = [
  {
    id: 1,
    part: 'Part 2 Cue Card',
    title: 'Describe a memorable journey you took.',
    bullets: [
      'Where you went and who you were with',
      'What mode of transport you used',
      'What memorable events occurred on the trip',
      'And explain why this journey stands out in your memory'
    ],
    band: 'Band 8.0 Target'
  },
  {
    id: 2,
    part: 'Part 2 Cue Card',
    title: 'Describe a technology product that improved your daily life.',
    bullets: [
      'What the device or application is',
      'How frequently you use it',
      'What features make it particularly useful',
      'And explain how it changed your daily routine'
    ],
    band: 'Band 7.5 Target'
  }
]

export default function SpeakingPage() {
  const [activePart, setActivePart] = useState<1 | 2 | 3>(2)
  const [prepSeconds, setPrepSeconds] = useState(60)
  const [isPrepTimerRunning, setIsPrepTimerRunning] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordSeconds, setRecordSeconds] = useState(0)
  const [recordedAudio, setRecordedAudio] = useState(false)

  const card = cueCards[0]

  const startPrepTimer = () => {
    setIsPrepTimerRunning(true)
    let time = 60
    const interval = setInterval(() => {
      time -= 1
      setPrepSeconds(time)
      if (time <= 0) {
        clearInterval(interval)
        setIsPrepTimerRunning(false)
      }
    }, 1000)
  }

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true)
      setRecordSeconds(0)
      const interval = setInterval(() => {
        setRecordSeconds((prev) => prev + 1)
      }, 1000)
      ;(window as unknown as { _recInterval?: NodeJS.Timeout })._recInterval = interval
    } else {
      setIsRecording(false)
      setRecordedAudio(true)
      clearInterval((window as unknown as { _recInterval?: NodeJS.Timeout })._recInterval)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">IELTS SPEAKING MODULE</p>
          <h1>Speaking Practice & Cue Card Simulator</h1>
          <p>Practice Parts 1, 2, and 3 under exam timing with prep countdown and audio response recorder.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
            Speaking Target: Band 7.5
          </span>
        </div>
      </div>

      {/* Part Selection Pills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { part: 1, title: 'Part 1 · Warm-Up Questions', desc: '4-5 min personal questions on home, work, hobbies' },
          { part: 2, title: 'Part 2 · Cue Card Individual Turn', desc: '1 min prep time + 2 min uninterrupted speech' },
          { part: 3, title: 'Part 3 · Abstract Discussion', desc: '4-5 min analytical discussion on broader topics' },
        ].map((item) => (
          <button
            key={item.part}
            onClick={() => setActivePart(item.part as 1 | 2 | 3)}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
              activePart === item.part
                ? 'border-emerald-500 bg-emerald-50/70 shadow-md ring-2 ring-emerald-200'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-xs font-extrabold uppercase text-emerald-600 block mb-1">Module Part {item.part}</span>
            <h4 className="text-sm font-bold text-gray-900">{item.title.split('·')[1]}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </button>
        ))}
      </div>

      {/* Cue Card Simulator View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cue Card Question Card (2 columns) */}
        <section className="lg:col-span-2 glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <Mic2 size={20} className="text-emerald-600" />
              <h3 className="text-lg font-extrabold text-gray-900">{card.part} Topic</h3>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              {card.band}
            </span>
          </div>

          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-extrabold text-amber-950">{card.title}</h2>
            <p className="text-xs text-amber-800 font-bold uppercase tracking-wider">You should say:</p>
            <ul className="space-y-2 text-xs text-amber-900 font-medium">
              {card.bullets.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timers & Audio Recorder Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* 1-Min Prep Timer */}
            <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-gray-500">1-Minute Prep Timer</span>
                <span className="text-lg font-mono font-extrabold text-amber-600">{prepSeconds}s</span>
              </div>
              <button
                onClick={startPrepTimer}
                disabled={isPrepTimerRunning}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg transition disabled:opacity-50 cursor-pointer"
              >
                {isPrepTimerRunning ? 'Timer Running...' : 'Start 1-Min Planning Countdown'}
              </button>
            </div>

            {/* Audio Recorder Controls */}
            <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-gray-500">Speech Recorder</span>
                <span className="text-lg font-mono font-extrabold text-emerald-600">
                  {Math.floor(recordSeconds / 60)}:{(recordSeconds % 60).toString().padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={toggleRecording}
                className={`w-full py-2.5 font-bold text-xs rounded-lg transition flex items-center justify-center gap-2 cursor-pointer ${
                  isRecording
                    ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isRecording ? (
                  <>
                    <StopCircle size={16} /> Stop Recording
                  </>
                ) : (
                  <>
                    <Mic size={16} /> Start 2-Min Speech Recording
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Recording Feedback Toast */}
          {recordedAudio && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Audio response captured ({recordSeconds}s). Fluency rating: <b>Band 7.5</b></span>
              </div>
              <button
                onClick={() => setRecordedAudio(false)}
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Re-record
              </button>
            </div>
          )}
        </section>

        {/* Right Sidebar: Fluency & Vocab Tips */}
        <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-5">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="text-base font-extrabold text-gray-900">Fluency & Tone Tips</h3>
            <Sparkles size={16} className="text-emerald-600" />
          </div>

          <div className="space-y-3 text-xs text-gray-700">
            <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
              <b className="text-emerald-600 block">High-Level Connectors</b>
              <p className="text-gray-500">Use expressions like &ldquo;Without a shadow of a doubt&rdquo;, &ldquo;Looking back on it now&rdquo;, &ldquo;What stood out most was...&rdquo;</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
              <b className="text-amber-600 block">Avoid Long Hesitations</b>
              <p className="text-gray-500">Use filler phrases if you need thinking time: &ldquo;That&apos;s an intriguing question, let me consider...&rdquo;</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-gray-200 space-y-1">
              <b className="text-indigo-600 block">Band 8.5 Model Preview</b>
              <p className="text-gray-500 italic">&ldquo;One particular trip that remains vividly etched in my memory took place two summers ago when I traveled to...&rdquo;</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
