'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  GraduationCap,
  Layers,
  RotateCw,
  Sparkles,
  Star,
  Volume2
} from 'lucide-react'

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
    topic: 'Technology & Artificial Intelligence',
    words: [
      {
        word: 'Pervasive',
        pos: 'adjective',
        band: 'Band 8.0+',
        def: 'Spreading widely throughout an area or a group of people.',
        example: 'Digital technology has become a pervasive element in modern educational systems.',
        collocations: ['pervasive influence', 'pervasive impact'],
        synonyms: ['ubiquitous', 'omnipresent', 'widespread']
      },
      {
        word: 'Automate',
        pos: 'verb',
        band: 'Band 7.0+',
        def: 'To convert a process or facility to be operated by automatic equipment.',
        example: 'Manufacturing companies automate routine tasks to increase operational productivity.',
        collocations: ['automate processes', 'fully automated'],
        synonyms: ['mechanize', 'computerize']
      }
    ]
  }
]

export default function VocabularyPage() {
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0)
  const [cardIdx, setCardIdx] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(12)

  const currentDeck = vocabDecks[selectedTopicIdx]
  const currentCard = currentDeck.words[cardIdx] || currentDeck.words[0]

  const nextCard = () => {
    setIsFlipped(false)
    setCardIdx((prev) => (prev + 1) % currentDeck.words.length)
  }

  const prevCard = () => {
    setIsFlipped(false)
    setCardIdx((prev) => (prev - 1 + currentDeck.words.length) % currentDeck.words.length)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">IELTS VOCABULARY DECK</p>
          <h1>Academic Vocabulary & Collocations</h1>
          <p>Master Band 7+ and 8+ words with interactive flashcards and spaced repetition.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
            Words Mastered: 148 / 300
          </span>
        </div>
      </div>

      {/* Topic Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {vocabDecks.map((deck, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedTopicIdx(idx)
              setCardIdx(0)
              setIsFlipped(false)
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedTopicIdx === idx
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {deck.topic} ({deck.words.length} words)
          </button>
        ))}
      </div>

      {/* Interactive Flashcard Component */}
      <section className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-gray-500">
          <span>
            Word <b className="text-purple-600">{cardIdx + 1}</b> of {currentDeck.words.length}
          </span>
          <span className="text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
            {currentCard.band}
          </span>
        </div>

        {/* Card Flip Wrapper */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="min-h-[280px] bg-white rounded-3xl p-8 border border-gray-200 shadow-xl cursor-pointer hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          <span className="absolute top-4 right-4 text-[10px] font-bold text-gray-400 flex items-center gap-1">
            <RotateCw size={12} /> Click card to flip
          </span>

          {!isFlipped ? (
            /* Card Front */
            <div className="my-auto text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-500">{currentCard.pos}</span>
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{currentCard.word}</h2>
              <p className="text-xs text-gray-400">Click to reveal definition & Band 8 example sentence</p>
            </div>
          ) : (
            /* Card Back */
            <div className="space-y-4 my-auto">
              <div>
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block">Definition</span>
                <p className="text-base font-bold text-gray-900 leading-snug">{currentCard.def}</p>
              </div>

              <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-100">
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">Exam Example</span>
                <p className="text-xs text-purple-950 font-medium italic mt-0.5">&ldquo;{currentCard.example}&rdquo;</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Collocations</span>
                  <p className="text-xs font-semibold text-gray-700">{currentCard.collocations.join(', ')}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Synonyms</span>
                  <p className="text-xs font-semibold text-gray-700">{currentCard.synonyms.join(', ')}</p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span>Topic: {currentDeck.topic}</span>
            <span>Spaced Repetition Active</span>
          </div>
        </div>

        {/* Flashcard Navigation & Rating Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevCard}
            className="p-3 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-bold text-xs flex items-center gap-1 cursor-pointer transition shadow-sm"
          >
            <ArrowLeft size={16} /> Previous
          </button>

          <div className="flex items-center gap-2">
            {['Hard', 'Medium', 'Easy'].map((rating) => (
              <button
                key={rating}
                onClick={() => {
                  setReviewedCount((prev) => prev + 1)
                  nextCard()
                }}
                className="px-3.5 py-2 bg-gray-100 hover:bg-purple-50 hover:text-purple-700 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                {rating}
              </button>
            ))}
          </div>

          <button
            onClick={nextCard}
            className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-xs flex items-center gap-1 cursor-pointer transition shadow-md"
          >
            Next Word <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  )
}
