'use client'

import { useState } from 'react'

type Tone = 'warn' | 'good'

type Module = {
  name: string
  band: string
  detail: string
}

const modules: Module[] = [
  {
    name: 'Listening',
    band: '8.5',
    detail:
      'Four recordings, one shot each — the kind of sustained focus multiple-choice apps never train.',
  },
  {
    name: 'Reading',
    band: '8.0',
    detail:
      'Three passages built to punish skimming. Matching headings and True/False/Not Given, exactly as scored.',
  },
  {
    name: 'Writing',
    band: '7.5',
    detail:
      'Two tasks, marked against the real descriptors the same day — not “within a few business days.”',
  },
  {
    name: 'Speaking',
    band: '8.0',
    detail: 'An 11–14 minute recorded interview, transcribed and picked apart line by line.',
  },
]

const essayStates = {
  before: {
    label: 'First attempt — Band 6.0',
    text: 'Some people believe that unpaid community work should be a compulsory part of school education. While I understand this view, I believe schools should encourage rather than require it because some student are busy and it is not fair for them.',
    notes: [
      {
        tone: 'warn' as Tone,
        text: "Subject–verb slips ('some student are') cost you in Grammatical Range.",
      },
      {
        tone: 'warn' as Tone,
        text: 'The counter-argument is stated but never developed — Task Response wants a reason, not a claim.',
      },
    ],
  },
  after: {
    label: 'Fourth attempt — Band 7.5',
    text: 'Some people believe that unpaid community work should be a compulsory part of school education. While I understand this view, I believe schools should encourage rather than require it, since students already balance exams, part-time jobs, and family responsibilities.',
    notes: [
      {
        tone: 'good' as Tone,
        text: 'The counter-argument now carries a reason — exactly what Task Response is checking for.',
      },
      {
        tone: 'good' as Tone,
        text: "Grammar is clean enough that the marker stops noticing it. That's the point.",
      },
    ],
  },
}

const testimonials = [
  {
    quote:
      "I didn't need more practice tests. I needed someone to tell me why my 'coherent' essays kept getting marked down. It turned out to be one habit, repeated in every essay.",
    name: 'Amira',
    result: 'Band 6.0 → 8.0 in 7 weeks',
    featured: true,
  },
  {
    quote:
      'The Speaking transcripts were the uncomfortable part. Reading your own filler words back is not fun. It works, though.',
    name: 'Dilnoza',
    result: 'Speaking 6.5 → 7.5',
    featured: false,
  },
  {
    quote: 'First time a Reading question type got explained instead of just marked wrong.',
    name: 'Javlon',
    result: 'Reading 6.0 → 7.0',
    featured: false,
  },
]

const faqs = [
  {
    q: 'Is the Writing feedback from a person, or AI?',
    a: 'Both. Every response gets an automated first pass against the band descriptors, then a certified marker reviews and edits the notes before you see them.',
  },
  {
    q: 'Can I practice just one module?',
    a: 'Yes — run any module on its own. Book a Speaking-only session or a single Writing task without sitting the full test.',
  },
  {
    q: 'How fast does marking come back?',
    a: 'Listening and Reading are instant. Writing is marked the same day. Speaking recordings are reviewed weekly.',
  },
  {
    q: 'Academic or General Training?',
    a: 'Both — choose the version when you start a test, and your practice history keeps them separate.',
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'See whether the method works for you.',
    features: [
      '1 full practice test',
      'Instant Listening & Reading marks',
      'Band descriptors for self-review',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Full access',
    price: '$19',
    period: '/month',
    description: 'Everything you need to practice consistently.',
    features: [
      'Unlimited practice tests',
      'Writing marked the same day',
      'Speaking recordings reviewed weekly',
      'Progress tracked by band, not percentage',
    ],
    cta: 'Get full access',
    highlighted: true,
  },
]

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

function CheckIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none' className='mt-0.5 h-4 w-4 shrink-0'>
      <path
        d='m5 10 3 3 7-7'
        stroke='currentColor'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
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

function PrimaryButton({
  children,
  href = '#pricing',
  light = false,
}: {
  children: React.ReactNode
  href?: string
  light?: boolean
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition duration-300 hover:-translate-y-0.5 ${
        light
          ? 'bg-white text-[#171A21] hover:bg-white/90'
          : 'bg-[#171A21] text-white shadow-[0_8px_24px_-10px_rgba(23,26,33,.6)] hover:bg-[#2a2e36]'
      }`}
    >
      {children}
      <span className='transition-transform duration-300 group-hover:translate-x-0.5'>
        <ArrowIcon />
      </span>
    </a>
  )
}

export default function Home() {
  const [essayView, setEssayView] = useState<'before' | 'after'>('after')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const essay = essayStates[essayView]

  return (
    <main className='min-h-screen overflow-x-hidden bg-[#FAF9F6] text-[#171A21] antialiased selection:bg-[#B08D57]/20'>
      {/* Ambient page texture */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 -z-10 opacity-[0.035]'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Navigation */}
      <header className='sticky top-0 z-50 border-b border-black/[0.055] bg-[#FAF9F6]/80 backdrop-blur-xl'>
        <div className='mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-6'>
          <a
            href='#top'
            className='font-serif text-[18px] tracking-[-0.02em] transition-opacity hover:opacity-65'
          >
            just an ielts
          </a>

          <nav
            aria-label='Main navigation'
            className='hidden items-center gap-8 text-[13px] text-[#171A21]/55 md:flex'
          >
            <a className='transition-colors hover:text-[#171A21]' href='#modules'>
              Practice
            </a>
            <a className='transition-colors hover:text-[#171A21]' href='#how'>
              How it works
            </a>
            <a className='transition-colors hover:text-[#171A21]' href='#pricing'>
              Pricing
            </a>
          </nav>

          <div className='flex items-center gap-3'>
            <a
              href='#login'
              className='hidden px-2 py-2 text-[13px] text-[#171A21]/55 transition-colors hover:text-[#171A21] sm:inline-flex'
            >
              Log in
            </a>
            <PrimaryButton>Start practicing</PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id='top' className='relative'>
        <div className='pointer-events-none absolute left-1/2 top-0 -z-10 h-[620px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(176,141,87,.10),transparent_62%)]' />

        <div className='mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:pb-28 md:pt-24'>
          <div>
            <SectionLabel>Focused IELTS preparation</SectionLabel>

            <h1 className='max-w-[720px] font-serif text-[clamp(2.75rem,7vw,5.35rem)] leading-[0.96] tracking-[-0.045em]'>
              Practice like
              <br />
              the real test.
              <br />
              <span className='text-[#171A21]/42'>Improve what matters.</span>
            </h1>

            <p className='mt-7 max-w-[520px] text-[16px] leading-7 text-[#171A21]/62 sm:text-[17px]'>
              Four modules, real test conditions, and feedback built around the actual band
              descriptors — without the filler of a traditional prep course.
            </p>

            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <PrimaryButton>Start practicing</PrimaryButton>
              <a
                href='#how'
                className='group inline-flex items-center gap-2 px-1 py-3 text-[14px] text-[#171A21]/60 transition-colors hover:text-[#171A21]'
              >
                See how marking works
                <span className='transition-transform group-hover:translate-x-0.5'>
                  <ArrowIcon />
                </span>
              </a>
            </div>

            <div className='mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-black/[0.07] pt-5 text-[12px] text-[#171A21]/45'>
              <span>4 modules</span>
              <span>Real timing</span>
              <span>Band-based feedback</span>
              <span>No card required</span>
            </div>
          </div>

          {/* Result card */}
          <div className='relative md:pl-5'>
            <div
              aria-hidden='true'
              className='absolute -inset-8 -z-10 rounded-full bg-[#B08D57]/10 blur-3xl'
            />

            <div className='relative overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-5 shadow-[0_30px_80px_-35px_rgba(23,26,33,.45)] backdrop-blur-2xl sm:p-7'>
              <div
                aria-hidden='true'
                className='absolute right-0 top-0 h-32 w-32 rounded-full bg-[#B08D57]/10 blur-3xl'
              />

              <div className='relative'>
                <div className='flex items-center justify-between text-[12px]'>
                  <span className='text-[#171A21]/55'>Amira&apos;s result</span>
                  <span className='rounded-full border border-black/[0.06] bg-white/60 px-2.5 py-1 text-[#171A21]/40'>
                    Practice test
                  </span>
                </div>

                <div className='mt-6 flex items-end gap-3'>
                  <span className='font-serif text-[76px] leading-[.8] tracking-[-.06em]'>8.0</span>
                  <span className='pb-1 text-[12px] text-[#171A21]/45'>overall band</span>
                </div>

                <div className='mt-9 space-y-5'>
                  {modules.map((module) => (
                    <div key={module.name}>
                      <div className='mb-2 flex items-center justify-between text-[13px]'>
                        <span className='text-[#171A21]/65'>{module.name}</span>
                        <span className='font-medium'>{module.band}</span>
                      </div>
                      <div className='h-1.5 overflow-hidden rounded-full bg-[#171A21]/[0.055]'>
                        <div
                          className='h-full rounded-full bg-[#B08D57] transition-all duration-700'
                          style={{
                            width: `${(parseFloat(module.band) / 9) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-8 flex items-center justify-between border-t border-black/[0.06] pt-5 text-[11px] text-[#171A21]/40'>
                  <span>Started at 6.0</span>
                  <span>Current: 8.0</span>
                </div>
              </div>
            </div>

            <p className='mt-4 text-center text-[12px] text-[#171A21]/38'>
              A result should show you what to work on next.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className='border-y border-black/[0.06] bg-[#F3F1EB]'>
        <div className='mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-6 md:grid-cols-[.7fr_1.3fr] md:items-start md:py-24'>
          <SectionLabel>The problem</SectionLabel>
          <div>
            <p className='max-w-3xl font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.12] tracking-[-0.025em]'>
              More questions aren&apos;t always more practice.
            </p>
            <p className='mt-6 max-w-2xl text-[16px] leading-7 text-[#171A21]/58'>
              Apps are good at counting correct answers. Classes are good at filling a timetable.
              The difficult part is knowing exactly why your score stopped moving — and what to
              change next.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id='modules' className='border-b border-black/[0.06]'>
        <div className='mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28'>
          <div className='max-w-2xl'>
            <SectionLabel>Practice</SectionLabel>
            <h2 className='font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em]'>
              Four modules.
              <br />
              One standard.
            </h2>
            <p className='mt-4 max-w-lg text-[15px] leading-6 text-[#171A21]/55'>
              Each module follows its real timing and format, so test day is the least surprising
              part of the process.
            </p>
          </div>

          <div className='mt-12 divide-y divide-black/[0.07] border-y border-black/[0.07]'>
            {modules.map((module, index) => (
              <div
                key={module.name}
                className='group grid gap-4 py-7 md:grid-cols-[64px_180px_1fr_80px] md:items-center md:gap-7'
              >
                <span className='font-mono text-[11px] text-[#171A21]/30'>0{index + 1}</span>
                <h3 className='font-serif text-[23px]'>{module.name}</h3>
                <p className='max-w-2xl text-[14px] leading-6 text-[#171A21]/58'>{module.detail}</p>
                <span className='text-[11px] text-[#171A21]/38 md:text-right'>
                  band {module.band}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marking demo */}
      <section id='how' className='bg-[#171A21] text-white'>
        <div className='mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-6 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-20 md:py-28'>
          <div>
            <SectionLabel>How it works</SectionLabel>

            <h2 className='font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.03em]'>
              Don&apos;t just get a score.
              <br />
              See the reason.
            </h2>

            <p className='mt-5 max-w-md text-[15px] leading-6 text-white/55'>
              This is Amira&apos;s Task 2 response. Toggle between attempts to see how a small
              change in reasoning and grammar can affect the feedback.
            </p>

            <div className='mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.06] p-1'>
              {(['before', 'after'] as const).map((view) => (
                <button
                  key={view}
                  type='button'
                  aria-pressed={essayView === view}
                  onClick={() => setEssayView(view)}
                  className={`rounded-full px-4 py-2 text-[12px] transition ${
                    essayView === view
                      ? 'bg-white text-[#171A21]'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  {view === 'before' ? 'First attempt' : 'Fourth attempt'}
                </button>
              ))}
            </div>
          </div>

          <article
            aria-live='polite'
            className='overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.065] shadow-2xl backdrop-blur-xl'
          >
            <div className='flex items-center justify-between border-b border-white/10 px-5 py-4 text-[11px] text-white/40 sm:px-7'>
              <span>Writing · Task 2</span>
              <span>{essay.label}</span>
            </div>

            <div className='p-5 sm:p-7'>
              <p className='text-[15px] leading-7 text-white/78'>{essay.text}</p>

              <div className='mt-7 space-y-4 border-t border-white/10 pt-5'>
                {essay.notes.map((note) => (
                  <div key={note.text} className='flex gap-3'>
                    <span
                      aria-hidden='true'
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        note.tone === 'good' ? 'bg-[#B08D57]' : 'bg-white/30'
                      }`}
                    />
                    <p className='text-[13px] leading-5 text-white/52'>{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className='border-b border-black/[0.06]'>
        <div className='mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28'>
          <div className='flex flex-col justify-between gap-5 md:flex-row md:items-end'>
            <div>
              <SectionLabel>Learner notes</SectionLabel>
              <h2 className='font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em]'>
                Progress should be
                <br />
                specific.
              </h2>
            </div>
            <p className='max-w-xs text-[13px] leading-5 text-[#171A21]/45'>
              No stock photos. Just the kind of feedback you get when practice becomes deliberate.
            </p>
          </div>

          <div className='mt-14 grid gap-5 md:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className={`rounded-[24px] border border-black/[0.07] bg-white/45 p-6 shadow-[0_15px_45px_-30px_rgba(23,26,33,.35)] ${
                  testimonial.featured ? 'md:col-span-2 md:p-8' : ''
                }`}
              >
                <blockquote
                  className={`font-serif leading-[1.2] ${
                    testimonial.featured
                      ? 'text-[25px] tracking-[-0.02em] md:text-[31px]'
                      : 'text-[20px]'
                  }`}
                >
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className='mt-7 flex items-center justify-between gap-4 border-t border-black/[0.06] pt-4 text-[11px]'>
                  <span className='font-medium'>{testimonial.name}</span>
                  <span className='text-[#171A21]/42'>{testimonial.result}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / metric */}
      <section className='bg-[#F3F1EB]'>
        <div className='mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-6 md:grid-cols-[.6fr_1.4fr] md:items-center md:py-24'>
          <div className='font-serif text-[clamp(5rem,12vw,9rem)] leading-none tracking-[-0.07em]'>
            +0.9
          </div>
          <div>
            <SectionLabel>Measured progress</SectionLabel>
            <p className='max-w-2xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.02em]'>
              Average band improvement between a learner&apos;s first and fourth full practice test.
            </p>
            <p className='mt-4 text-[12px] leading-5 text-[#171A21]/45'>
              Measured across 14,212 completed tests.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='border-y border-black/[0.06]'>
        <div className='mx-auto max-w-3xl px-5 py-20 sm:px-6 md:py-28'>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className='font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em]'>
            Questions, answered.
          </h2>

          <div className='mt-10 divide-y divide-black/[0.07] border-y border-black/[0.07]'>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div key={faq.q}>
                  <button
                    type='button'
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className='flex w-full items-center justify-between gap-6 py-5 text-left'
                  >
                    <span className='text-[15px] font-medium'>{faq.q}</span>
                    <span
                      aria-hidden='true'
                      className='grid h-7 w-7 shrink-0 place-items-center rounded-full border border-black/[0.08] text-[16px] text-[#171A21]/45'
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <p className='max-w-2xl pb-6 pr-10 text-[14px] leading-6 text-[#171A21]/55'>
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='bg-[#F3F1EB]'>
        <div className='mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28'>
          <div className='max-w-xl'>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className='font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.03em]'>
              Start small.
              <br />
              Go deeper when you need it.
            </h2>
          </div>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-[26px] border p-7 sm:p-8 ${
                  plan.highlighted
                    ? 'border-[#171A21] bg-[#171A21] text-white shadow-[0_30px_70px_-30px_rgba(23,26,33,.55)]'
                    : 'border-white/80 bg-white/55 text-[#171A21] shadow-[0_20px_50px_-30px_rgba(23,26,33,.3)]'
                }`}
              >
                {plan.highlighted && (
                  <span className='absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/55'>
                    Full access
                  </span>
                )}

                <p
                  className={`text-[12px] ${
                    plan.highlighted ? 'text-white/45' : 'text-[#171A21]/45'
                  }`}
                >
                  {plan.name}
                </p>

                <div className='mt-4 flex items-baseline gap-1'>
                  <span className='font-serif text-5xl tracking-[-0.04em]'>{plan.price}</span>
                  <span className={plan.highlighted ? 'text-white/40' : 'text-[#171A21]/40'}>
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-3 max-w-sm text-[13px] ${
                    plan.highlighted ? 'text-white/50' : 'text-[#171A21]/50'
                  }`}
                >
                  {plan.description}
                </p>

                <ul className='mt-7 space-y-3'>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-2 text-[13px] ${
                        plan.highlighted ? 'text-white/72' : 'text-[#171A21]/65'
                      }`}
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href='#start'
                  className={`mt-9 flex w-full items-center justify-center rounded-full px-5 py-3 text-[13px] font-medium transition hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? 'bg-white text-[#171A21] hover:bg-white/90'
                      : 'bg-[#171A21] text-white hover:bg-[#2a2e36]'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='bg-[#171A21] text-white'>
        <div className='mx-auto max-w-4xl px-5 py-24 text-center sm:px-6 md:py-32'>
          <SectionLabel>Before test day</SectionLabel>
          <h2 className='font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1] tracking-[-0.045em]'>
            Test day doesn&apos;t care
            <br />
            how many videos you watched.
          </h2>
          <p className='mx-auto mt-5 max-w-md text-[14px] leading-6 text-white/50'>
            Take one properly structured practice test and find the gap before the real thing.
          </p>
          <div className='mt-8'>
            <PrimaryButton light>Start your free test</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#171A21] text-white/40'>
        <div className='mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 px-5 py-8 text-[11px] sm:px-6 md:flex-row md:items-center md:justify-between'>
          <span className='font-serif text-[16px] text-white/80'>just an ielts</span>
          <p className='max-w-xl leading-5 md:text-right'>
            Practice tests are independently built and not affiliated with IDP, British Council, or
            Cambridge.
          </p>
        </div>
      </footer>
    </main>
  )
}
