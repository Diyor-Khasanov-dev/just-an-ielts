'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Headphones,
  Mic2,
  PenLine,
  Play,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap
} from 'lucide-react'
import { AppMark } from '@/components/AppMark'

export default function Home() {
  const [targetBand, setTargetBand] = useState<number>(7.5)
  const [activeTab, setActiveTab] = useState<'listening' | 'reading' | 'writing' | 'speaking'>('writing')

  // Estimator data
  const estimatorMap: Record<number, { hours: string; duration: string; focus: string; difficulty: string }> = {
    6.5: { hours: '4-6 hrs/week', duration: '3-4 weeks', focus: 'Foundational Grammar & Listening Section 1-2', difficulty: 'Moderate' },
    7.0: { hours: '6-8 hrs/week', duration: '4-6 weeks', focus: 'Academic Vocabulary & Essay Paragraph Coherence', difficulty: 'High' },
    7.5: { hours: '8-10 hrs/week', duration: '6-8 weeks', focus: 'Complex Sentence Structure & Speed Reading', difficulty: 'Advanced' },
    8.0: { hours: '10-12 hrs/week', duration: '8-12 weeks', focus: 'Lexical Precision & Natural Speaking Idioms', difficulty: 'Expert' },
    8.5: { hours: '12-15 hrs/week', duration: '12+ weeks', focus: 'Full Mock Exam Timing & Flawless Essay Logic', difficulty: 'Mastery' },
  }

  const tabDetails = {
    listening: {
      title: 'Train your ear for authentic exam pace.',
      icon: Headphones,
      badge: 'AUDIO SPEED DRILLS',
      color: 'text-sky-500 bg-sky-50 border-sky-200',
      description: 'Practice with accent variations (British, Australian, North American), track answer locations in real time, and build stamina for Section 4 academic lectures.',
      bullets: ['Variable audio playback speeds (0.75x to 1.5x)', 'Instant transcript sync with highlighted keywords', 'Distractor detection alerts in tricky conversations']
    },
    reading: {
      title: 'Build speed without sacrificing accuracy.',
      icon: BookOpen,
      badge: 'PARAGRAPH MATCHING',
      color: 'text-amber-500 bg-amber-50 border-amber-200',
      description: 'Master True/False/Not Given questions, paragraph heading matching, and scientific passage scanning with built-in speed timers and text highlight tools.',
      bullets: ['Dual-pane passage reader with live line timer', 'Instant synonym finder for question keywords', 'Passage 1, 2 & 3 exam difficulty breakdown']
    },
    writing: {
      title: 'Turn complex ideas into Band 8+ responses.',
      icon: PenLine,
      badge: 'AI CRITERIA FEEDBACK',
      color: 'text-indigo-500 bg-indigo-50 border-indigo-200',
      description: 'Get instant diagnostic feedback aligned directly with official IELTS descriptors: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammar.',
      bullets: ['Real-time word count & paragraph flow monitor', 'Band 9 model answer side-by-side comparison', 'Linking word and collocation enhancer']
    },
    speaking: {
      title: 'Speak naturally with confidence and clarity.',
      icon: Mic2,
      badge: 'CUE CARD SIMULATOR',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-200',
      description: 'Simulate Parts 1, 2, and 3 with realistic examiner prompts, prep countdown timers, audio recording previews, and vocabulary fluency suggestions.',
      bullets: ['Part 2 cue card 1-minute planning timer', 'Filler word & hesitation frequency analysis', 'Topic-specific vocabulary expansion packs']
    }
  }

  const activeTabData = tabDetails[activeTab]

  return (
    <main className='landing min-h-screen flex flex-col'>
      <div className='landing-glow' />

      {/* Sticky Glass Navbar */}
      <header className='landing-header-sticky'>
        <div className='landing-nav'>
          <AppMark />
          <nav className='hidden md:flex items-center gap-7'>
            <a href='#how' className='hover:text-indigo-600 transition'>
              How it works
            </a>
            <a href='#estimator' className='hover:text-indigo-600 transition'>
              Band Estimator
            </a>
            <a href='#skills' className='hover:text-indigo-600 transition'>
              Skills Hub
            </a>
            <Link href='/login' className='hover:text-indigo-600 transition'>
              Sign in
            </Link>
            <Link className='nav-cta' href='/login'>
              Start learning <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-copy'>
          <div className='intro-badge'>
            <Sparkles size={15} /> Targeted IELTS Preparation workspace
          </div>
          <h1>
            Every target band starts with <em>a better plan.</em>
          </h1>
          <p>
            Cut out the guesswork with focused practice drills, interactive exam tools, and clear
            feedback engineered for your specific score target.
          </p>

          <div className='hero-actions'>
            <Link href='/login' className='primary-action'>
              Build my study plan <ArrowRight size={17} />
            </Link>
            <a href='#how' className='watch-link'>
              <span>
                <Play size={13} fill='currentColor' />
              </span>{' '}
              See how it works
            </a>
          </div>

          <div className='trust-line'>
            <div className='avatar-stack'>
              <i>RK</i>
              <i>MA</i>
              <i>LN</i>
            </div>
            <span>Trusted by 12,000+ IELTS test takers worldwide</span>
          </div>
        </div>

        {/* Hero Interactive Card Visual */}
        <div className='hero-dashboard glass-card'>
          <div className='preview-nav'>
            <b>Today&apos;s Focus</b>
            <span>Friday, 26 Sep</span>
          </div>
          <div className='preview-score'>
            <div>
              <span>YOUR TARGET BAND</span>
              <b>Band {targetBand.toFixed(1)}</b>
              <small>68% readiness score</small>
            </div>
            <div className='score-ring'>
              68<small>%</small>
            </div>
          </div>
          <div className='preview-task'>
            <div className='skill-icon violet'>✦</div>
            <div>
              <span>RECOMMENDED SESSION</span>
              <b>Writing Task 2 · Coherence & Flow</b>
              <small>Opinion Essay · 12 min exercise</small>
            </div>
            <ArrowRight size={18} className='text-indigo-600' />
          </div>
          <div className='preview-bars'>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      {/* Interactive Band Target Estimator Section */}
      <section id='estimator' className='max-w-[1100px] w-full mx-auto px-6 py-16'>
        <div className='glass-card rounded-3xl p-8 md:p-12 border border-white/80 shadow-xl'>
          <div className='text-center max-w-2xl mx-auto mb-10'>
            <p className='eyebrow'>PERSONALIZED ROADMAP</p>
            <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900'>
              Calculate your path to Band {targetBand.toFixed(1)}
            </h2>
            <p className='text-gray-500 text-sm md:text-base mt-2'>
              Select your goal band score to see recommended weekly preparation time and
              high-priority study focus.
            </p>
          </div>

          {/* Band Selector Tabs */}
          <div className='flex flex-wrap items-center justify-center gap-3 mb-10'>
            {[6.5, 7.0, 7.5, 8.0, 8.5].map((score) => (
              <button
                key={score}
                onClick={() => setTargetBand(score)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                  targetBand === score
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}
              >
                Band {score.toFixed(1)}
              </button>
            ))}
          </div>

          {/* Estimator Details Display */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/80 rounded-2xl p-6 border border-gray-100 shadow-sm'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-500'>
                <Clock size={16} /> Recommended Pace
              </div>
              <p className='text-2xl font-extrabold text-gray-900'>
                {estimatorMap[targetBand].hours}
              </p>
              <span className='text-xs text-gray-500'>Consistent daily practice</span>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-500'>
                <Zap size={16} /> Estimated Timeline
              </div>
              <p className='text-2xl font-extrabold text-gray-900'>
                {estimatorMap[targetBand].duration}
              </p>
              <span className='text-xs text-gray-500'>To reach target readiness</span>
            </div>

            <div className='flex flex-col gap-1 md:col-span-2'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600'>
                <Target size={16} /> Priority Strategy
              </div>
              <p className='text-sm font-semibold text-gray-800 leading-snug'>
                {estimatorMap[targetBand].focus}
              </p>
              <span className='text-xs text-gray-500'>
                Difficulty level: <b>{estimatorMap[targetBand].difficulty}</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Tabs */}
      <section id='skills' className='landing-skills'>
        <p className='eyebrow'>PREPARE WITH INTENTION</p>
        <h2>Master every exam dimension.</h2>

        {/* Skill Tab Navigation */}
        <div className='flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4'>
          {(['listening', 'reading', 'writing', 'speaking'] as const).map((key) => {
            const isTabActive = activeTab === key
            const Icon = tabDetails[key].icon
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  isTabActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                <span className='capitalize'>{key}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Skill Highlight Detail */}
        <div className='glass-card rounded-2xl p-8 border border-white/90 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          <div className='lg:col-span-2 space-y-4'>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTabData.color}`}
            >
              {activeTabData.badge}
            </span>
            <h3 className='text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight'>
              {activeTabData.title}
            </h3>
            <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
              {activeTabData.description}
            </p>

            <ul className='space-y-2 pt-2'>
              {activeTabData.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className='flex items-center gap-2.5 text-sm text-gray-700 font-medium'
                >
                  <CheckCircle2 size={16} className='text-emerald-500 shrink-0' />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[220px]'>
            <div>
              <p className='text-xs text-white! uppercase font-bold tracking-wider opacity-100'>
                Skill Mastery Drills
              </p>
              <h4 className='text-xl font-bold mt-1'>Start Practice Now</h4>
              <p className='text-xs text-white! mt-2'>
                100+ authentic exercises calibrated against official IELTS band scoring standards.
              </p>
            </div>

            <Link
              href='/login'
              className='mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/20 text-indigo-950 font-bold text-sm rounded-xl hover:bg-white/10 transition shadow'
            >
              Launch Practice Hub <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Storytelling Methodology Section */}
      <section id='how' className='method'>
        <div>
          <p className='eyebrow'>A CALMER WAY TO PREPARE</p>
          <h2>
            Less guessing.
            <br />
            <em>More progress.</em>
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed mt-4'>
            Traditional test prep floods you with endless worksheets. We give you structured daily
            objectives, instant diagnostics, and step-by-step guidance.
          </p>
        </div>

        <div className='method-list'>
          {[
            'Set your target band score and upcoming test date.',
            'Follow a personalized weekly schedule focusing on your weakest areas.',
            'Receive instant criterion-based feedback after every exercise.',
            'Track your readiness band trajectory with clear, actionable insights.',
          ].map((text, i) => (
            <p key={text}>
              <span>0{i + 1}</span>
              {text}
              <Check size={17} />
            </p>
          ))}
          <Link href='/login' className='primary-action'>
            Create my study plan <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Testimonials Proof Section */}
      <section className='max-w-[1100px] w-full mx-auto px-6 py-12'>
        <div className='text-center mb-10'>
          <p className='eyebrow'>REAL TRANSFORMATION</p>
          <h2 className='text-3xl font-extrabold text-gray-900 tracking-tight'>
            Hear from test takers who hit their band
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              name: 'Mai Nguyen',
              score: 'Band 7.5',
              oldScore: 'from 6.0',
              quote:
                'The writing feedback was a game changer. I finally realized my task 2 paragraphs lacked cohesion.',
              avatar: 'MN',
            },
            {
              name: 'Rahul Sharma',
              score: 'Band 8.0',
              oldScore: 'from 7.0',
              quote:
                'The audio player speed controls and transcript highlight helped me master listening section 4 lectures.',
              avatar: 'RS',
            },
            {
              name: 'Elena Rostova',
              score: 'Band 7.5',
              oldScore: 'from 6.5',
              quote:
                'I used the speaking cue card simulator every evening. Having the 1-minute timer built in kept me disciplined.',
              avatar: 'ER',
            },
          ].map((item, idx) => (
            <div key={idx} className='glass-card rounded-2xl p-6 border border-white/80 space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill='currentColor' />
                  ))}
                </div>
                <span className='text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100'>
                  {item.score} <small className='text-gray-400 font-normal'>{item.oldScore}</small>
                </span>
              </div>
              <p className='text-sm text-gray-600 italic leading-relaxed'>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className='flex items-center gap-3 pt-2 border-t border-gray-100'>
                <div className='w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center'>
                  {item.avatar}
                </div>
                <div>
                  <h5 className='text-xs font-bold text-gray-900'>{item.name}</h5>
                  <span className='text-[11px] text-gray-400'>Verified Learner</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-auto border-t border-gray-200 flex justify-between items-center w-full'>
        <AppMark />
        <span>© 2026 just an ielts. Study with clarity and confidence.</span>
        <div className='flex items-center gap-4'>
          <Link href='/login' className='hover:text-indigo-600! transition'>
            Sign in
          </Link>
          <Link
            href='/onboarding'
            className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-2xl text-white! transition'
          >
            Get started
          </Link>
        </div>
      </footer>
    </main>
  )
}
