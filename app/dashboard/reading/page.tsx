'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Highlighter
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const passages = [
  {
    id: 1,
    title: 'Passage 1 · Renewable Energy Innovations in Northern Europe',
    difficulty: 'Band 6.5',
    text: [
      'In recent decades, Nordic nations have led global transitions toward sustainable power grids. Sweden and Denmark in particular have invested heavily in offshore wind turbines and geothermal heat pumps.',
      'A key driver of this adoption is public policy integration. National subsidies and strict carbon taxes incentivize both industrial manufacturers and residential homeowners to minimize fossil fuel reliance.',
      'However, intermittent energy production remains a hurdle. Grid operators utilize smart battery storage systems and cross-border energy sharing networks to balance supply during peak demand hours.'
    ]
  },
  {
    id: 2,
    title: 'Passage 2 · Urban Microclimates & The Heat Island Effect',
    difficulty: 'Band 7.5',
    text: [
      'Metropolitan regions frequently experience significantly warmer temperatures than surrounding rural hinterlands—a phenomenon known scientifically as the Urban Heat Island (UHI) effect.',
      'Dark impermeable surfaces, such as asphalt roadways and concrete roofs, absorb solar radiation during daylight hours and re-radiate thermal energy throughout the night, elevating ambient temperatures.',
      'To mitigate thermal distress, urban planners are implementing green infrastructure strategies, including extensive rooftop gardens, permeable pavement materials, and expanded urban tree canopies.'
    ]
  }
]

export default function ReadingPage() {
  const { t } = useLanguage()
  const rm = t.readingModule

  const [activePassage, setActivePassage] = useState(2)
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base')
  const [isHighlightMode, setIsHighlightMode] = useState(false)
  const [highlightedParas, setHighlightedParas] = useState<number[]>([1])

  // Interactive Question State
  const [tfAnswers, setTfAnswers] = useState<Record<number, string>>({
    1: '',
    2: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const currentPassage = passages.find((p) => p.id === activePassage) || passages[1]

  const toggleHighlightPara = (index: number) => {
    if (highlightedParas.includes(index)) {
      setHighlightedParas(highlightedParas.filter((i) => i !== index))
    } else {
      setHighlightedParas([...highlightedParas, index])
    }
  }

  const fontClasses = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm leading-relaxed',
    lg: 'text-base leading-relaxed'
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{rm.eyebrow}</p>
          <h1>{rm.title}</h1>
          <p>{rm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200">
            {rm.currentScore}: 6.5 / 9.0
          </span>
        </div>
      </div>

      {/* Passage Switcher & Reader Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2">
          {passages.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActivePassage(p.id)
                setSubmitted(false)
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activePassage === p.id
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {rm.passage} {p.id} ({p.difficulty})
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Font Size Adjuster */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200 text-xs font-bold text-gray-600">
            <span className="px-2 text-gray-400">{rm.fontSize}:</span>
            {(['sm', 'base', 'lg'] as const).map((sz) => (
              <button
                key={sz}
                onClick={() => setFontSize(sz)}
                className={`px-2.5 py-1 rounded-lg uppercase transition cursor-pointer ${
                  fontSize === sz ? 'bg-white text-gray-900 shadow-xs' : 'hover:text-gray-900'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>

          {/* Highlight Mode Toggle */}
          <button
            onClick={() => setIsHighlightMode(!isHighlightMode)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
              isHighlightMode
                ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Highlighter size={14} /> {isHighlightMode ? rm.highlightMode : rm.normalMode}
          </button>
        </div>
      </div>

      {/* Reader & Questions Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Passage Text Reader */}
        <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-4">
          <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
            <h3 className="text-base font-extrabold text-gray-900 line-clamp-1">{currentPassage.title}</h3>
            <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
              {currentPassage.difficulty}
            </span>
          </div>

          {isHighlightMode && (
            <p className="text-[11px] font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              ✦ {rm.clickToHighlight}
            </p>
          )}

          <div className={`space-y-4 text-gray-800 ${fontClasses[fontSize]}`}>
            {currentPassage.text.map((para, idx) => {
              const isHighlighted = highlightedParas.includes(idx)
              return (
                <p
                  key={idx}
                  onClick={() => isHighlightMode && toggleHighlightPara(idx)}
                  className={`p-3.5 rounded-xl transition ${
                    isHighlightMode ? 'cursor-pointer hover:bg-amber-100/50' : ''
                  } ${
                    isHighlighted
                      ? 'bg-amber-100/80 border-l-4 border-amber-500 font-medium'
                      : 'bg-white/50 border border-gray-100'
                  }`}
                >
                  <span className="font-extrabold text-amber-600 mr-2">[{idx + 1}]</span>
                  {para}
                </p>
              )
            })}
          </div>
        </section>

        {/* Right Column: Interactive Questions */}
        <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-gray-900">{rm.questionsTitle}</h3>
              <p className="text-xs text-gray-500">{rm.questionsDesc}</p>
            </div>
            {submitted && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold flex items-center gap-1 shrink-0">
                <CheckCircle2 size={14} /> {rm.scoreCorrect}
              </span>
            )}
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-gray-200">
              <p className="text-xs font-bold text-gray-900 leading-relaxed">
                1. Asphalt roadways reduce thermal absorption during daylight hours compared to natural terrain.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => {
                  const isSelected = tfAnswers[1] === opt
                  return (
                    <button
                      key={opt}
                      onClick={() => setTfAnswers({ ...tfAnswers, 1: opt })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <div className="p-2.5 bg-emerald-50 text-emerald-900 text-[11px] font-bold rounded-xl border border-emerald-200 mt-2">
                  {rm.correctAnswer} FALSE — Paragraph 2 states dark surfaces absorb solar radiation.
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-gray-200">
              <p className="text-xs font-bold text-gray-900 leading-relaxed">
                2. Rooftop gardens are among the strategies utilized to mitigate urban heat intensity.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => {
                  const isSelected = tfAnswers[2] === opt
                  return (
                    <button
                      key={opt}
                      onClick={() => setTfAnswers({ ...tfAnswers, 2: opt })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <div className="p-2.5 bg-emerald-50 text-emerald-900 text-[11px] font-bold rounded-xl border border-emerald-200 mt-2">
                  {rm.correctAnswer} TRUE — Paragraph 3 confirms rooftop gardens mitigate thermal distress.
                </div>
              )}
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setSubmitted(true)}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
            >
              {rm.submitAnswers} <ArrowRight size={15} />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
