'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Eye,
  Highlighter,
  RotateCcw,
  Search,
  Sparkles,
  Type
} from 'lucide-react'

const passages = [
  { id: 1, title: 'Passage 1 · The History of Silk Trade', difficulty: 'Band 6.5', words: 780, topic: 'Ancient trade routes & textile production' },
  { id: 2, title: 'Passage 2 · Urban Microclimates & Green Architecture', difficulty: 'Band 7.5', words: 920, topic: 'Environmental engineering & heat island mitigation' },
  { id: 3, title: 'Passage 3 · Cognitive Linguistic Frameworks', difficulty: 'Band 8.5', words: 1050, topic: 'Neuroscience, language acquisition & mental models' },
]

export default function ReadingPage() {
  const [activePassage, setActivePassage] = useState(2)
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base')
  const [isHighlightMode, setIsHighlightMode] = useState(false)
  const [highlightedParas, setHighlightedParas] = useState<number[]>([1])

  // Interactive Question State
  const [tfAnswers, setTfAnswers] = useState<Record<number, string>>({
    1: '',
    2: '',
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
    lg: 'text-base leading-relaxed',
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">IELTS READING MODULE</p>
          <h1>Reading Practice</h1>
          <p>Master speed reading, paragraph matching, and True/False/Not Given questions.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200">
            Reading Band: 7.0 / 9.0
          </span>
        </div>
      </div>

      {/* Passage Selector Pills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {passages.map((p) => {
          const isActive = p.id === activePassage
          return (
            <button
              key={p.id}
              onClick={() => {
                setActivePassage(p.id)
                setSubmitted(false)
              }}
              className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                isActive
                  ? 'border-amber-500 bg-amber-50/70 shadow-md ring-2 ring-amber-200'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-amber-600">Passage {p.id}</span>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                  {p.difficulty}
                </span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{p.title.split('·')[1]}</h4>
              <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <BookOpen size={12} /> {p.words} words
              </span>
            </button>
          )
        })}
      </div>

      {/* Dual Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Pane: Interactive Reader */}
        <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-4 flex flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-amber-600" />
              <h3 className="text-base font-extrabold text-gray-900">{currentPassage.title}</h3>
            </div>

            {/* Reader Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsHighlightMode(!isHighlightMode)}
                className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 transition cursor-pointer ${
                  isHighlightMode ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
                title="Toggle Highlighter"
              >
                <Highlighter size={14} /> <span className="hidden sm:inline">Highlight</span>
              </button>

              <div className="flex items-center bg-gray-100 rounded-lg p-0.5 border border-gray-200 text-xs font-bold">
                {(['sm', 'base', 'lg'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setFontSize(sz)}
                    className={`px-2 py-0.5 rounded uppercase transition cursor-pointer ${
                      fontSize === sz ? 'bg-white text-amber-600 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Passage Article Text */}
          <div className={`space-y-4 font-sans text-gray-800 ${fontClasses[fontSize]} max-h-[500px] overflow-y-auto pr-2`}>
            <p
              onClick={() => isHighlightMode && toggleHighlightPara(1)}
              className={`p-3 rounded-xl transition cursor-pointer ${
                highlightedParas.includes(1) ? 'bg-amber-100/80 border-l-4 border-amber-500' : 'hover:bg-gray-50'
              }`}
            >
              <b className="text-amber-700 mr-2">[Paragraph A]</b>
              Urban heat islands (UHIs) represent one of the most prominent environmental consequences of rapid global urbanization. As concrete, asphalt, and dark roofing materials replace natural vegetation, urban centers absorb and trap solar radiation during daytime hours, reradiating thermal energy well into the evening. Studies indicate that urban temperatures can exceed surrounding rural regions by up to 4.5°C to 8.0°C.
            </p>

            <p
              onClick={() => isHighlightMode && toggleHighlightPara(2)}
              className={`p-3 rounded-xl transition cursor-pointer ${
                highlightedParas.includes(2) ? 'bg-amber-100/80 border-l-4 border-amber-500' : 'hover:bg-gray-50'
              }`}
            >
              <b className="text-amber-700 mr-2">[Paragraph B]</b>
              To mitigate these microclimatic temperature spikes, environmental architects advocate for green infrastructure, particularly extensive rooftop vegetation systems and high-albedo cool roofs. Living roofs not only reduce ambient surface temperatures through evapotranspiration, but also provide critical stormwater retention capacity during intense storm surges.
            </p>

            <p
              onClick={() => isHighlightMode && toggleHighlightPara(3)}
              className={`p-3 rounded-xl transition cursor-pointer ${
                highlightedParas.includes(3) ? 'bg-amber-100/80 border-l-4 border-amber-500' : 'hover:bg-gray-50'
              }`}
            >
              <b className="text-amber-700 mr-2">[Paragraph C]</b>
              However, despite the clear environmental benefits, widespread municipal adoption faces notable economic barriers. Initial installation costs for retrofitting existing building stock are estimated at $120 to $180 per square meter, requiring structural reinforcements that discourage building owners without municipal tax incentives or energy subsidies.
            </p>
          </div>
        </section>

        {/* Right Pane: Interactive Questions */}
        <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-base font-extrabold text-gray-900">Questions 1 - 2: True / False / Not Given</h3>
              <span className="text-xs text-gray-500 font-semibold">Passage 2</span>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-3">
                <p className="text-xs font-bold text-gray-900 leading-snug">
                  1. Urban temperatures in dense metropolitan areas can be up to 8°C warmer than rural surroundings.
                </p>

                <div className="flex gap-2">
                  {['TRUE', 'FALSE', 'NOT GIVEN'].map((choice) => (
                    <button
                      key={choice}
                      onClick={() => setTfAnswers({ ...tfAnswers, 1: choice })}
                      className={`flex-1 py-2 px-2 rounded-lg border text-xs font-bold transition cursor-pointer ${
                        tfAnswers[1] === choice
                          ? 'border-amber-500 bg-amber-50 text-amber-900'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>

                {submitted && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                    <span><b>Correct (TRUE):</b> Paragraph A explicitly states &quot;temperatures can exceed surrounding rural regions by up to 4.5°C to 8.0°C.&quot;</span>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-3">
                <p className="text-xs font-bold text-gray-900 leading-snug">
                  2. Building retrofitting costs are fully subsidized by most municipal governments worldwide.
                </p>

                <div className="flex gap-2">
                  {['TRUE', 'FALSE', 'NOT GIVEN'].map((choice) => (
                    <button
                      key={choice}
                      onClick={() => setTfAnswers({ ...tfAnswers, 2: choice })}
                      className={`flex-1 py-2 px-2 rounded-lg border text-xs font-bold transition cursor-pointer ${
                        tfAnswers[2] === choice
                          ? 'border-amber-500 bg-amber-50 text-amber-900'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>

                {submitted && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                    <span><b>Correct (FALSE):</b> Paragraph C states adoption faces economic barriers and requires subsidies that building owners lack.</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
          >
            Check Reading Answers <ArrowRight size={15} />
          </button>
        </section>
      </div>
    </div>
  )
}
