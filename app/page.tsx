'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Mic2,
  Moon,
  PenLine,
  Play,
  Sparkles,
  Star,
  Sun,
  Target,
  Zap
} from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

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
      color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
      description: 'Practice with accent variations (British, Australian, North American), track answer locations in real time, and build stamina for Section 4 academic lectures.',
      bullets: ['Variable audio playback speeds (0.75x to 1.5x)', 'Instant transcript sync with highlighted keywords', 'Distractor detection alerts in tricky conversations']
    },
    reading: {
      title: 'Build speed without sacrificing accuracy.',
      icon: BookOpen,
      badge: 'PARAGRAPH MATCHING',
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      description: 'Master True/False/Not Given questions, paragraph heading matching, and scientific passage scanning with built-in speed timers and text highlight tools.',
      bullets: ['Dual-pane passage reader with live line timer', 'Instant synonym finder for question keywords', 'Passage 1, 2 & 3 exam difficulty breakdown']
    },
    writing: {
      title: 'Turn complex ideas into Band 8+ responses.',
      icon: PenLine,
      badge: 'AI CRITERIA FEEDBACK',
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
      description: 'Get instant diagnostic feedback aligned directly with official IELTS descriptors: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammar.',
      bullets: ['Real-time word count & paragraph flow monitor', 'Band 9 model answer side-by-side comparison', 'Linking word and collocation enhancer']
    },
    speaking: {
      title: 'Speak naturally with confidence and clarity.',
      icon: Mic2,
      badge: 'CUE CARD SIMULATOR',
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
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
          <img src="/logo.png" alt="" className='w-15 h-12 object-contain' />
          <nav className='hidden md:flex items-center gap-6'>
            <a href='#how' className='hover:text-indigo-600 dark:hover:text-indigo-400 transition'>
              {t.nav.howItWorks}
            </a>
            <a href='#estimator' className='hover:text-indigo-600 dark:hover:text-indigo-400 transition'>
              {t.nav.estimator}
            </a>
            <a href='#skills' className='hover:text-indigo-600 dark:hover:text-indigo-400 transition'>
              {t.nav.skillsHub}
            </a>
            <Link href='/login' className='hover:text-indigo-600 dark:hover:text-indigo-400 transition'>
              {t.nav.signIn}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
              <Globe size={14} className="text-gray-500 dark:text-slate-400 ml-1.5 hidden sm:block" />
              {(['eng', 'uz', 'ru'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                    lang === code
                      ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-xs'
                      : 'text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
            </button>

            <Link className='nav-cta' href='/login'>
              {t.nav.startLearning} <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-copy'>
          <div className='intro-badge'>
            <Sparkles size={15} /> {t.hero.badge}
          </div>
          <h1>
            {t.hero.title1} <em>{t.hero.titleEm}</em>
          </h1>
          <p>{t.hero.subtitle}</p>

          <div className='hero-actions'>
            <Link href='/login' className='primary-action'>
              {t.hero.buildPlan} <ArrowRight size={17} />
            </Link>
            <a href='#how' className='watch-link'>
              <span>
                <Play size={13} fill='currentColor' />
              </span>{' '}
              {t.hero.seeHowItWorks}
            </a>
          </div>

          <div className='trust-line'>
            <div className='avatar-stack'>
              <i>RK</i>
              <i>MA</i>
              <i>LN</i>
            </div>
            <span>{t.hero.trustedBy}</span>
          </div>
        </div>

        {/* Hero Interactive Card Visual */}
        <div className='hero-dashboard glass-card'>
          <div className='preview-nav'>
            <b>{t.hero.todaysFocus}</b>
            <span>Friday, 26 Sep</span>
          </div>
          <div className='preview-score'>
            <div>
              <span>{t.hero.targetBand}</span>
              <b>Band {targetBand.toFixed(1)}</b>
              <small>68% {t.hero.readinessScore}</small>
            </div>
            <div className='score-ring'>
              68<small>%</small>
            </div>
          </div>
          <div className='preview-task'>
            <div className='skill-icon violet'>✦</div>
            <div>
              <span>{t.hero.recommendedSession}</span>
              <b>{t.hero.writingSessionTitle}</b>
              <small>{t.hero.writingSessionDesc}</small>
            </div>
            <ArrowRight size={18} className='text-indigo-600 dark:text-indigo-400' />
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
        <div className='glass-card rounded-3xl p-8 md:p-12 border border-white/80 dark:border-slate-800 shadow-xl'>
          <div className='text-center max-w-2xl mx-auto mb-10'>
            <p className='eyebrow'>{t.estimator.eyebrow}</p>
            <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
              {t.estimator.title} Band {targetBand.toFixed(1)}
            </h2>
            <p className='text-gray-500 dark:text-slate-400 text-sm md:text-base mt-2'>
              {t.estimator.subtitle}
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
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-950 scale-105'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700'
                }`}
              >
                Band {score.toFixed(1)}
              </button>
            ))}
          </div>

          {/* Estimator Details Display */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm'>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-500'>
                <Clock size={16} /> {t.estimator.pace}
              </div>
              <p className='text-2xl font-extrabold text-gray-900 dark:text-white'>
                {estimatorMap[targetBand].hours}
              </p>
              <span className='text-xs text-gray-500 dark:text-slate-400'>{t.estimator.dailyPractice}</span>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-500'>
                <Zap size={16} /> {t.estimator.timeline}
              </div>
              <p className='text-2xl font-extrabold text-gray-900 dark:text-white'>
                {estimatorMap[targetBand].duration}
              </p>
              <span className='text-xs text-gray-500 dark:text-slate-400'>{t.estimator.targetReadiness}</span>
            </div>

            <div className='flex flex-col gap-1 md:col-span-2'>
              <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400'>
                <Target size={16} /> {t.estimator.priorityStrategy}
              </div>
              <p className='text-sm font-semibold text-gray-800 dark:text-slate-200 leading-snug'>
                {estimatorMap[targetBand].focus}
              </p>
              <span className='text-xs text-gray-500 dark:text-slate-400'>
                {t.estimator.difficultyLevel} <b>{estimatorMap[targetBand].difficulty}</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Tabs */}
      <section id='skills' className='landing-skills'>
        <p className='eyebrow'>{t.skills.eyebrow}</p>
        <h2>{t.skills.title}</h2>

        {/* Skill Tab Navigation */}
        <div className='flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-slate-800 pb-4'>
          {(['listening', 'reading', 'writing', 'speaking'] as const).map((key) => {
            const isTabActive = activeTab === key
            const Icon = tabDetails[key].icon
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  isTabActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 dark:shadow-none'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700'
                }`}
              >
                <Icon size={18} />
                <span className='capitalize'>{t.skills[key] || key}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Skill Highlight Detail */}
        <div className='glass-card rounded-2xl p-8 border border-white/90 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          <div className='lg:col-span-2 space-y-4'>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTabData.color}`}
            >
              {activeTabData.badge}
            </span>
            <h3 className='text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight'>
              {activeTabData.title}
            </h3>
            <p className='text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed'>
              {activeTabData.description}
            </p>

            <ul className='space-y-2 pt-2'>
              {activeTabData.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className='flex items-center gap-2.5 text-sm text-gray-700 dark:text-slate-300 font-medium'
                >
                  <CheckCircle2 size={16} className='text-emerald-500 shrink-0' />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between min-h-[220px]'>
            <div>
              <p className='text-xs text-indigo-100 uppercase font-bold tracking-wider opacity-100'>
                {t.skills.masteryDrills}
              </p>
              <h4 className='text-xl font-bold mt-1 text-white'>{t.skills.startPracticeNow}</h4>
              <p className='text-xs text-indigo-100 mt-2 leading-relaxed'>
                100+ authentic exercises calibrated against official IELTS band scoring standards.
              </p>
            </div>

            <Link
              href='/login'
              className='mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-indigo-950 font-extrabold text-sm rounded-xl hover:bg-gray-100 transition shadow-md'
            >
              {t.skills.launchPracticeHub} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Storytelling Methodology Section */}
      <section id='how' className='method'>
        <div>
          <p className='eyebrow'>{t.method.eyebrow}</p>
          <h2>
            {t.method.title}
            <br />
            <em>{t.method.titleEm}</em>
          </h2>
          <p className='text-gray-500 dark:text-slate-400 text-sm leading-relaxed mt-4'>
            {t.method.subtitle}
          </p>
        </div>

        <div className='method-list'>
          {[
            t.method.step1,
            t.method.step2,
            t.method.step3,
            t.method.step4,
          ].map((text, i) => (
            <p key={text}>
              <span>0{i + 1}</span>
              {text}
              <Check size={17} />
            </p>
          ))}
          <Link href='/login' className='primary-action'>
            {t.method.createPlan} <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Testimonials Proof Section */}
      <section className='max-w-[1100px] w-full mx-auto px-6 py-12'>
        <div className='text-center mb-10'>
          <p className='eyebrow'>{t.testimonials.eyebrow}</p>
          <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight'>
            {t.testimonials.title}
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
            <div key={idx} className='glass-card rounded-2xl p-6 border border-white/80 dark:border-slate-800 space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill='currentColor' />
                  ))}
                </div>
                <span className='text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-800'>
                  {item.score} <small className='text-gray-400 font-normal'>{item.oldScore}</small>
                </span>
              </div>
              <p className='text-sm text-gray-600 dark:text-slate-300 italic leading-relaxed'>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className='flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-slate-800'>
                <div className='w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center'>
                  {item.avatar}
                </div>
                <div>
                  <h5 className='text-xs font-bold text-gray-900 dark:text-white'>{item.name}</h5>
                  <span className='text-[11px] text-gray-400'>{t.testimonials.verifiedLearner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-auto border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left w-full py-6 px-6 max-w-[1100px] mx-auto'>
        <img src="/logo.png" alt="just an ielts" className='w-15 h-12 object-contain' />
        <span className='text-xs sm:text-sm text-gray-600 dark:text-slate-400'>{t.footer.rights}</span>
        <div className='flex items-center gap-4'>
          <Link href='/login' className='text-sm font-semibold text-gray-700 dark:text-slate-300 hover:text-indigo-600 transition'>
            {t.nav.signIn}
          </Link>
          <Link
            href='/onboarding'
            className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-2xl text-white font-semibold text-sm transition shadow-sm'
          >
            {t.nav.getStarted}
          </Link>
        </div>
      </footer>
    </main>
  )
}
