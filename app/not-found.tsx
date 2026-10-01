'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Compass,
  Headphones,
  Home,
  Mic2,
  PenLine,
  Search,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSelector } from '@/components/LanguageSelector'

export default function NotFound() {
  const { t } = useLanguage()

  const skillBadges = [
    { label: t.sidebar.listening, href: '/dashboard/listening', icon: Headphones, color: 'text-sky-500 bg-sky-50 border-sky-200' },
    { label: t.sidebar.reading, href: '/dashboard/reading', icon: BookOpen, color: 'text-amber-500 bg-amber-50 border-amber-200' },
    { label: t.sidebar.writing, href: '/dashboard/writing', icon: PenLine, color: 'text-indigo-500 bg-indigo-50 border-indigo-200' },
    { label: t.sidebar.speaking, href: '/dashboard/speaking', icon: Mic2, color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
  ]

  return (
    <main className='landing min-h-screen flex flex-col selection:bg-indigo-500/20'>
      <div className='landing-glow' />

      {/* Glass Header */}
      <header className='landing-header-sticky'>
        <div className='landing-nav flex items-center justify-between'>
          <Link href='/' className='shrink-0 flex items-center gap-2'>
            <img src='/logo.png' alt='just an ielts' className='w-15 h-12 object-contain' />
          </Link>

          <div className='flex items-center gap-3'>
            <LanguageSelector align='right' />
            <Link href='/' className='nav-cta hidden sm:inline-flex'>
              <Home size={15} /> {t.notFound.backHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Main 404 Hero Grid */}
      <section className='flex-1 flex items-center justify-center max-w-[1200px] w-full mx-auto px-6 py-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full'>

          {/* Left Column: 404 Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='lg:col-span-7 space-y-8'
          >
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 border border-indigo-200/80'>
              <Sparkles size={14} /> {t.notFound.eyebrow}
            </div>

            <div className='space-y-4'>
              <h1 className='text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-gray-900 leading-none'>
                404
              </h1>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight'>
                {t.notFound.title}{' '}
                <em className='not-italic text-indigo-600 font-serif font-normal'>
                  {t.notFound.titleEm}
                </em>
              </h2>
              <p className='text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl'>
                {t.notFound.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap items-center gap-4 pt-2'>
              <Link href='/' className='primary-action'>
                <Home size={17} /> {t.notFound.backHome}
              </Link>
              <Link
                href='/dashboard/practice'
                className='inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition duration-200'
              >
                <Compass size={17} /> {t.notFound.continuePracticing} <ArrowRight size={15} />
              </Link>
            </div>

            {/* Quick Skill Access */}
            <div className='pt-6 border-t border-gray-200/80'>
              <p className='text-xs font-bold uppercase tracking-wider text-gray-400 mb-3'>
                {t.sidebar.skillPractice}
              </p>
              <div className='flex flex-wrap gap-2.5'>
                {skillBadges.map(({ label, href, icon: Icon, color }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-transform duration-150 hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className='lg:col-span-5 relative mx-auto w-full max-w-[420px]'
          >
            {/* Background Animated Orbit */}
            <motion.div
              aria-hidden='true'
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className='absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200 pointer-events-none'
            />

            {/* Main Interactive Glass Card */}
            <div className='glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-white/90 shadow-2xl backdrop-blur-xl'>
              <div aria-hidden='true' className='absolute -right-10 -top-10 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl' />

              {/* Card Header */}
              <div className='flex items-center justify-between border-b border-gray-100 pb-4 mb-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-200'>
                    IELTS
                  </div>
                  <div>
                    <h4 className='text-xs font-bold text-gray-900'>IELTS Preparation</h4>
                    <p className='text-[10px] text-gray-400'>Workspace session</p>
                  </div>
                </div>
                <span className='px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200'>
                  404
                </span>
              </div>

              {/* Card Center Display */}
              <div className='py-6 text-center space-y-3'>
                <p className='text-xs font-bold uppercase tracking-wider text-indigo-600'>
                  {t.notFound.unexpectedQuestion}
                </p>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className='font-serif text-7xl sm:text-8xl font-bold tracking-tight text-gray-900'
                >
                  404
                </motion.div>
                <p className='text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed'>
                  {t.notFound.subtitle}
                </p>
              </div>

              {/* Simulated Progress Bar */}
              <div className='border-t border-gray-100 pt-5 space-y-2'>
                <div className='flex items-center justify-between text-[11px]'>
                  <span className='text-gray-500'>{t.notFound.findingNextStep}</span>
                  <span className='font-bold text-indigo-600'>85%</span>
                </div>
                <div className='h-2 w-full rounded-full bg-gray-100 overflow-hidden'>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                    className='h-full rounded-full bg-indigo-600'
                  />
                </div>
              </div>

              <div className='mt-4 flex items-center justify-between text-[10px] text-gray-400 font-medium'>
                <span>{t.notFound.keepGoing}</span>
                <span className='text-indigo-600 font-bold'>{t.notFound.nextQuestion}</span>
              </div>
            </div>

            {/* Floating Info Pill 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -left-4 bottom-6 rounded-2xl border border-white/90 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3'
            >
              <div className='w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0'>
                <Search size={15} />
              </div>
              <div>
                <p className='text-xs font-bold text-gray-900'>{t.notFound.lookingForPage}</p>
                <p className='text-[10px] text-gray-400'>{t.notFound.mainNav}</p>
              </div>
            </motion.div>

            {/* Floating Info Pill 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -right-4 top-6 rounded-2xl border border-white/90 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-xl hidden sm:block'
            >
              <p className='text-[10px] font-bold uppercase tracking-wider text-gray-400'>
                {t.notFound.targetBand}
              </p>
              <p className='font-serif text-lg font-extrabold text-indigo-600'>
                Band 8.5+
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Footer Banner */}
      <footer className='mt-auto border-t border-gray-200 bg-white/60 backdrop-blur-md py-6 px-6'>
        <div className='max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left'>
          <div className='flex items-center gap-3'>
            <img src='/logo.png' alt='just an ielts' className='w-12 h-10 object-contain' />
            <span>{t.footer.rights}</span>
          </div>
          <p className='max-w-md text-[11px] leading-relaxed text-gray-400'>
            {t.notFound.disclaimer}
          </p>
        </div>
      </footer>
    </main>
  )
}
