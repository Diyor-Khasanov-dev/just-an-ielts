'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function ArrowIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className='h-4 w-4'>
      <path
        d='M4 10h11M11 5l5 5-5 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className='h-4 w-4'>
      <path
        d='m3.5 9 6.5-5.5L16.5 9v7a1 1 0 0 1-1 1h-3.25v-4.5h-4.5V17H4.5a1 1 0 0 1-1-1V9Z'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className='h-4 w-4'>
      <circle cx='8.75' cy='8.75' r='4.75' stroke='currentColor' strokeWidth='1.4' />
      <path d='m12.25 12.25 4 4' stroke='currentColor' strokeWidth='1.4' strokeLinecap='round' />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className='h-5 w-5'>
      <path
        d='M4 4.5A1.5 1.5 0 0 1 5.5 3H16v13H5.5A1.5 1.5 0 0 0 4 17.5v-13Z'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinejoin='round'
      />
      <path
        d='M4 16.5A1.5 1.5 0 0 1 5.5 15H16'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#171A21]/45'>
      <span className='h-px w-5 bg-[#B08D57]' />
      {children}
    </p>
  )
}

export default function NotFound() {
  return (
    <main className='min-h-screen overflow-hidden bg-[#FAF9F6] text-[#171A21] antialiased selection:bg-[#B08D57]/20'>
      {/* Noise texture */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0 opacity-[0.035]'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient gold glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed left-1/2 top-0 z-0 h-[650px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(176,141,87,.11),transparent_62%)]'
      />

      {/* Navbar */}
      <header className='relative z-50 border-b border-black/[0.055] bg-[#FAF9F6]/80 backdrop-blur-xl'>
        <div className='mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-6'>
          <Link
            href='/'
            className='font-serif text-[18px] tracking-[-0.02em] transition-opacity hover:opacity-65'
          >
            just an ielts
          </Link>

          <nav className='flex items-center gap-3'>
            <Link
              href='/'
              className='hidden px-2 py-2 text-[13px] text-[#171A21]/50 transition-colors hover:text-[#171A21] sm:inline-flex'
            >
              Home
            </Link>

            <Link
              href='/practice'
              className='group inline-flex items-center gap-2 rounded-full bg-[#171A21] px-5 py-3 text-[13px] font-medium text-white shadow-[0_8px_24px_-10px_rgba(23,26,33,.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a2e36]'
            >
              Start practicing
              <span className='transition-transform duration-300 group-hover:translate-x-0.5'>
                <ArrowIcon />
              </span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <section className='relative z-10'>
        <div className='mx-auto grid min-h-[calc(100vh-68px)] max-w-6xl items-center gap-16 px-5 py-16 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:gap-20 md:py-20'>
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <SectionLabel>Page not found</SectionLabel>

            <h1 className='font-serif text-[clamp(6rem,15vw,11rem)] leading-[0.78] tracking-[-0.075em]'>
              404
            </h1>

            <div className='mt-9'>
              <h2 className='max-w-xl font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.04em]'>
                Not every answer
                <br />
                <span className='text-[#171A21]/38'>is the right one.</span>
              </h2>

              <p className='mt-6 max-w-[500px] text-[15px] leading-7 text-[#171A21]/55 sm:text-[16px]'>
                Looks like this page didn&apos;t make the cut. It may have moved, been removed, or
                the URL may be incorrect.
              </p>
            </div>

            {/* Actions */}
            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <Link
                href='/'
                className='group inline-flex items-center gap-2 rounded-full bg-[#171A21] px-5 py-3 text-[14px] font-medium text-white shadow-[0_8px_24px_-10px_rgba(23,26,33,.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a2e36]'
              >
                <HomeIcon />
                Back to home
                <span className='transition-transform duration-300 group-hover:translate-x-0.5'>
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                href='/practice'
                className='group inline-flex items-center gap-2 px-1 py-3 text-[14px] text-[#171A21]/55 transition-colors hover:text-[#171A21]'
              >
                Continue practicing
                <span className='transition-transform duration-300 group-hover:translate-x-0.5'>
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            {/* Meta */}
            <div className='mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-black/[0.07] pt-5 text-[11px] text-[#171A21]/38'>
              <span>Listening</span>
              <span>Reading</span>
              <span>Writing</span>
              <span>Speaking</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: 'easeOut',
            }}
            className='relative mx-auto w-full max-w-[450px]'
          >
            {/* Orbit */}
            <motion.div
              aria-hidden='true'
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#171A21]/10'
            />

            {/* Inner orbit */}
            <motion.div
              aria-hidden='true'
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B08D57]/15'
            />

            {/* Main card */}
            <div className='relative overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-5 shadow-[0_30px_80px_-35px_rgba(23,26,33,.45)] backdrop-blur-2xl sm:p-7'>
              {/* Card glow */}
              <div
                aria-hidden='true'
                className='absolute right-0 top-0 h-40 w-40 rounded-full bg-[#B08D57]/10 blur-3xl'
              />

              <div className='relative'>
                {/* Header */}
                <div className='flex items-center justify-between border-b border-black/[0.06] pb-5'>
                  <div className='flex items-center gap-3'>
                    <div className='grid h-9 w-9 place-items-center rounded-xl bg-[#171A21] text-white'>
                      <BookIcon />
                    </div>

                    <div>
                      <p className='text-[12px] font-medium'>IELTS Practice</p>
                      <p className='mt-0.5 text-[10px] text-[#171A21]/35'>Current session</p>
                    </div>
                  </div>

                  <span className='rounded-full border border-black/[0.06] bg-white/60 px-2.5 py-1 text-[10px] text-[#171A21]/40'>
                    404
                  </span>
                </div>

                {/* 404 */}
                <div className='py-10 text-center'>
                  <p className='text-[10px] font-medium uppercase tracking-[0.18em] text-[#B08D57]'>
                    Unexpected question
                  </p>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='mt-5 font-serif text-[90px] leading-none tracking-[-0.075em] sm:text-[110px]'
                  >
                    404
                  </motion.div>

                  <p className='mx-auto mt-5 max-w-[270px] text-[13px] leading-5 text-[#171A21]/45'>
                    The page you requested isn&apos;t available right now.
                  </p>
                </div>

                {/* Fake progress */}
                <div className='border-t border-black/[0.06] pt-5'>
                  <div className='mb-2 flex items-center justify-between text-[10px]'>
                    <span className='text-[#171A21]/38'>Finding your next step</span>

                    <span className='font-medium text-[#B08D57]'>68%</span>
                  </div>

                  <div className='h-1.5 overflow-hidden rounded-full bg-[#171A21]/[0.055]'>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '68%' }}
                      transition={{
                        duration: 1.4,
                        delay: 0.45,
                        ease: 'easeOut',
                      }}
                      className='h-full rounded-full bg-[#B08D57]'
                    />
                  </div>
                </div>

                <div className='mt-5 flex items-center justify-between text-[10px] text-[#171A21]/35'>
                  <span>Keep going</span>
                  <span>Next question →</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute -left-3 bottom-8 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_15px_45px_-25px_rgba(23,26,33,.4)] backdrop-blur-xl sm:-left-8'
            >
              <div className='flex items-center gap-3'>
                <div className='grid h-8 w-8 place-items-center rounded-full bg-[#B08D57]/10 text-[#B08D57]'>
                  <SearchIcon />
                </div>

                <div>
                  <p className='text-[11px] font-medium'>Looking for a page?</p>
                  <p className='mt-0.5 text-[10px] text-[#171A21]/38'>Try the main navigation</p>
                </div>
              </div>
            </motion.div>

            {/* Floating score */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute -right-2 top-8 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_15px_45px_-25px_rgba(23,26,33,.4)] backdrop-blur-xl sm:-right-6'
            >
              <p className='text-[10px] uppercase tracking-[0.14em] text-[#171A21]/35'>
                Your target
              </p>

              <p className='mt-1 font-serif text-[22px] tracking-[-0.04em]'>Band 9.0</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className='relative z-10 bg-[#171A21] text-white'>
        <div className='mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <SectionLabel>Back to preparation</SectionLabel>

              <h2 className='max-w-2xl font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-[-0.03em]'>
                One wrong answer
                <br />
                doesn&apos;t end the test.
              </h2>
            </div>

            <Link
              href='/dashboard/practice'
              className='group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#171A21] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90'
            >
              Start practicing
              <span className='transition-transform duration-300 group-hover:translate-x-0.5'>
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative z-10 bg-[#171A21] text-white/40'>
        <div className='mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 px-5 py-8 text-[11px] sm:px-6 md:flex-row md:items-center md:justify-between'>
          <Link
            href='/'
            className='font-serif text-[16px] text-white/80 transition-opacity hover:opacity-70'
          >
            just an ielts
          </Link>

          <p className='max-w-xl leading-5 md:text-right'>
            Practice tests are independently built and not affiliated with IDP, British Council, or
            Cambridge.
          </p>
        </div>
      </footer>
    </main>
  )
}
