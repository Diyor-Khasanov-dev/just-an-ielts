'use client'

import { useState } from 'react'
import {
  Mic,
  Pause,
  Sparkles,
  StopCircle,
  Volume2
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()
  const sm = t.speakingModule

  const [activePart, setActivePart] = useState<1 | 2 | 3>(2)
  const [prepSeconds] = useState(60)
  const [isPrepTimerRunning, setIsPrepTimerRunning] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordSeconds] = useState(0)
  const [recordedAudio, setRecordedAudio] = useState(false)

  const activeCard = cueCards.find((c) => c.id === (activePart === 1 ? 1 : 2)) || cueCards[0]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{sm.eyebrow}</p>
          <h1>{sm.title}</h1>
          <p>{sm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
            {sm.target}: Band 7.5
          </span>
        </div>
      </div>

      {/* Speaking Part Switcher */}
      <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm max-w-md">
        {[
          { id: 1, label: sm.part1 },
          { id: 2, label: sm.part2 },
          { id: 3, label: sm.part3 },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePart(p.id as 1 | 2 | 3)
              setIsRecording(false)
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer text-center ${
              activePart === p.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Cue Card Prompt Box */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-xs font-extrabold uppercase text-emerald-600 tracking-wider">
            {activeCard.part}
          </span>
          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">
            {activeCard.band}
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-gray-900">{activeCard.title}</h3>

        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 space-y-2">
          <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
            You should say:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm font-medium text-emerald-950">
            {activeCard.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recording Console & Timer */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Preparation Timer */}
          <div className="p-5 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider block">
                {sm.prepTimer}
              </span>
              <div className="text-3xl font-black text-indigo-900 mt-1">
                00:{prepSeconds < 10 ? `0${prepSeconds}` : prepSeconds}
              </div>
            </div>

            <button
              onClick={() => setIsPrepTimerRunning(!isPrepTimerRunning)}
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-2"
            >
              {isPrepTimerRunning ? <Pause size={14} /> : <Sparkles size={14} />}
              {isPrepTimerRunning ? sm.pauseTimer : sm.startPrepTimer}
            </button>
          </div>

          {/* Response Recorder */}
          <div className="p-5 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider block">
                {sm.recordAnswer}
              </span>
              <div className="text-3xl font-black text-emerald-600 mt-1 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isRecording ? 'bg-rose-500 animate-ping' : 'bg-gray-300'}`} />
                01:{recordSeconds < 10 ? `0${recordSeconds}` : recordSeconds}
              </div>
            </div>

            <button
              onClick={() => {
                if (isRecording) {
                  setIsRecording(false)
                  setRecordedAudio(true)
                } else {
                  setIsRecording(true)
                }
              }}
              className={`w-full py-2.5 font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${
                isRecording
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isRecording ? <StopCircle size={15} /> : <Mic size={15} />}
              {isRecording ? sm.stopRecording : sm.recordAnswer}
            </button>
          </div>
        </div>

        {/* Audio Recording Preview & AI Evaluation */}
        {recordedAudio && (
          <div className="space-y-6 pt-4 border-t border-gray-200 animate-in fade-in duration-300">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Volume2 size={20} />
                </button>
                <div>
                  <b className="text-xs font-bold text-emerald-950 block">{sm.recordingPreview}</b>
                  <span className="text-[11px] text-emerald-700">Duration: 01:45 · Clear Audio</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-white text-emerald-800 text-xs font-extrabold rounded-lg shadow-2xs">
                {sm.listenBack}
              </span>
            </div>

            {/* AI Analysis Cards */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-gray-900">{sm.aiAnalysis}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-400 block">{sm.fluencyScore}</span>
                  <b className="text-lg font-extrabold text-emerald-600 block mt-1">Band 7.5</b>
                  <p className="text-[11px] text-gray-500 mt-1">Smooth transition markers with natural pacing.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-400 block">{sm.lexicalResource}</span>
                  <b className="text-lg font-extrabold text-emerald-600 block mt-1">Band 8.0</b>
                  <p className="text-[11px] text-gray-500 mt-1">Good range of collocations and idiomatic phrasing.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-400 block">{sm.hesitationTracker}</span>
                  <b className="text-lg font-extrabold text-indigo-600 block mt-1">Low (2 fillers)</b>
                  <p className="text-[11px] text-gray-500 mt-1">Minimal hesitation during Part 2 cue card points.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
