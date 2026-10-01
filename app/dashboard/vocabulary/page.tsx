'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  RotateCw,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const vocabDecks = [
  {
    topic: 'Environment & Climate Change',
    words: [
      {
        word: 'Mitigate',
        pos: 'verb',
        band: 'Band 7.5+',
        def: 'To make something less harmful, severe, or serious.',
        example: 'Governments must implement green infrastructure to mitigate heat island effects in urban centers.',
        collocations: ['mitigate risk', 'mitigate impact', 'mitigate climate change'],
        synonyms: ['alleviate', 'mollify', 'attenuate']
      },
      {
        word: 'Catastrophic',
        pos: 'adjective',
        band: 'Band 7.0+',
        def: 'Involving or causing sudden great damage or suffering.',
        example: 'Failure to limit greenhouse gas emissions could lead to catastrophic ecological degradation.',
        collocations: ['catastrophic failure', 'catastrophic consequences'],
        synonyms: ['disastrous', 'calamitous', 'ruinous']
      },
      {
        word: 'Biodiversity',
        pos: 'noun',
        band: 'Band 8.0+',
        def: 'The variety of plant and animal life in the world or in a particular habitat.',
        example: 'Deforestation severely threatens biodiversity in tropical rainforest ecosystems.',
        collocations: ['preserve biodiversity', 'loss of biodiversity'],
        synonyms: ['ecological variety', 'biological richness']
      }
    ]
  },
  {
    topic: 'Technology & Automation',
    words: [
      {
        word: 'Pervasive',
        pos: 'adjective',
        band: 'Band 7.5+',
        def: 'Spreading widely throughout an area or a group of people.',
        example: 'The pervasive nature of smartphones has fundamentally altered interpersonal communication.',
        collocations: ['pervasive influence', 'pervasive technology'],
        synonyms: ['ubiquitous', 'omnipresent', 'widespread']
      },
      {
        word: 'Automate',
        pos: 'verb',
        band: 'Band 6.5+',
        def: 'To convert a process or facility to be operated by automated machinery.',
        example: 'Manufacturing companies automate routine production lines to maximize efficiency.',
        collocations: ['fully automate', 'automate tasks'],
        synonyms: ['computerize', 'mechanize']
      }
    ]
  }
]

export default function VocabularyPage() {
  const { t } = useLanguage()
  const vm = t.vocabularyModule

  const [activeDeckIdx, setActiveDeckIdx] = useState(0)
  const [activeWordIdx, setActiveWordIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [masteredWords, setMasteredWords] = useState<string[]>([])

  const currentDeck = vocabDecks[activeDeckIdx]
  const currentWord = currentDeck.words[activeWordIdx] || currentDeck.words[0]

  const isMastered = masteredWords.includes(currentWord.word)

  const toggleMastered = (word: string) => {
    if (masteredWords.includes(word)) {
      setMasteredWords(masteredWords.filter((w) => w !== word))
    } else {
      setMasteredWords([...masteredWords, word])
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{vm.eyebrow}</p>
          <h1>{vm.title}</h1>
          <p>{vm.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
            {vm.mastered}: {masteredWords.length} {vm.words}
          </span>
        </div>
      </div>

      {/* Deck Selector Tabs */}
      <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm max-w-xl">
        {vocabDecks.map((deck, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveDeckIdx(idx)
              setActiveWordIdx(0)
              setFlipped(false)
            }}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer text-center ${
              activeDeckIdx === idx
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {deck.topic}
          </button>
        ))}
      </div>

      {/* Interactive Flashcard Card */}
      <section className="glass-card rounded-3xl p-8 md:p-12 border border-white/90 shadow-xl max-w-2xl mx-auto text-center space-y-6 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs font-bold text-gray-400 border-b border-gray-200 pb-4">
          <span className="uppercase tracking-wider text-purple-600">{currentDeck.topic}</span>
          <span>{activeWordIdx + 1} / {currentDeck.words.length}</span>
        </div>

        {/* Card Flip Container */}
        <div
          onClick={() => setFlipped(!flipped)}
          className={`p-8 md:p-10 rounded-2xl border transition-all duration-300 cursor-pointer min-h-[260px] flex flex-col justify-center items-center gap-3 ${
            flipped
              ? 'bg-purple-900 text-white border-purple-800 shadow-2xl scale-[1.01]'
              : 'bg-white text-gray-900 border-gray-200 shadow-md hover:border-purple-300'
          }`}
        >
          {!flipped ? (
            <>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-extrabold border border-purple-200">
                {currentWord.band} · {currentWord.pos}
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{currentWord.word}</h2>
              <span className="text-xs text-gray-400 font-semibold flex items-center gap-1 mt-2">
                <RotateCw size={12} /> {vm.clickToFlip}
              </span>
            </>
          ) : (
            <div className="space-y-4 text-left w-full">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-purple-300 block">{vm.definition}</span>
                <p className="text-base font-bold text-white mt-0.5">{currentWord.def}</p>
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase text-purple-300 block">{vm.exampleSentence}</span>
                <p className="text-xs text-purple-100 italic leading-relaxed mt-0.5">
                  &ldquo;{currentWord.example}&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-purple-800/80">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-purple-300 block">{vm.collocations}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentWord.collocations.map((c, i) => (
                      <span key={i} className="text-[10px] bg-purple-800 text-purple-200 px-2 py-0.5 rounded font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold uppercase text-purple-300 block">{vm.synonyms}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentWord.synonyms.map((s, i) => (
                      <span key={i} className="text-[10px] bg-purple-800 text-purple-200 px-2 py-0.5 rounded font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Controls Nav */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => {
              setActiveWordIdx((prev) => Math.max(0, prev - 1))
              setFlipped(false)
            }}
            disabled={activeWordIdx === 0}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-800 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft size={14} /> {vm.prevWord}
          </button>

          <button
            onClick={() => toggleMastered(currentWord.word)}
            className={`px-5 py-2.5 text-xs font-extrabold rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
              isMastered
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
            }`}
          >
            <CheckCircle2 size={16} />
            {isMastered ? vm.masteredBadge : vm.markAsMastered}
          </button>

          <button
            onClick={() => {
              setActiveWordIdx((prev) => Math.min(currentDeck.words.length - 1, prev + 1))
              setFlipped(false)
            }}
            disabled={activeWordIdx === currentDeck.words.length - 1}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 text-gray-800 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1"
          >
            {vm.nextWord} <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  )
}
