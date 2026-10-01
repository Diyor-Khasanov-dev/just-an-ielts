'use client'

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Clock3, Headphones, Mic2, PenLine, BookOpen, Play } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function PracticePage() {
  const { t } = useLanguage()

  const skillData = [
    { label: t.sidebar.listening, detail: 'Section 3 · Academic', score: '7.0', color: 'sky', icon: Headphones, href: '/dashboard/listening' },
    { label: t.sidebar.reading, detail: 'Matching headings', score: '6.5', color: 'orange', icon: BookOpen, href: '/dashboard/reading' },
    { label: t.sidebar.writing, detail: 'Task 2 · Opinion essay', score: '7.0', color: 'violet', icon: PenLine, href: '/dashboard/writing' },
    { label: t.sidebar.speaking, detail: 'Part 2 · Cue card', score: '7.5', color: 'green', icon: Mic2, href: '/dashboard/speaking' },
  ]

  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Friday, 26 September</p>
          <h1>{t.dashboard.greeting}</h1>
          <p>{t.dashboard.subtitle}</p>
        </div>
      </div>

      <section className="goal-banner">
        <div className="goal-copy">
          <span className="soft-icon">
            <TargetIcon />
          </span>
          <div>
            <p>
              {t.settings.targetBandScore} <b>7.5</b>
            </p>
            <small>
              0.5 band {t.dashboard.awayFromTarget}
            </small>
          </div>
        </div>
        <div className="goal-progress">
          <div>
            <span>{t.dashboard.overallReadiness}</span>
            <b>68%</b>
          </div>
          <div className="progress-track">
            <i style={{ width: '68%' }} />
          </div>
        </div>
        <Link href="/dashboard/progress" className="text-link">
          {t.dashboard.viewProgress} <ArrowUpRight size={15} />
        </Link>
      </section>

      <section>
        <div className="section-title">
          <div>
            <h2>{t.dashboard.continueLeftOff}</h2>
            <p>{t.dashboard.shortFocusedPractice}</p>
          </div>
        </div>
        <div className="skill-grid">
          {skillData.map(({ label, detail, score, color, icon: Icon, href }) => (
            <Link href={href} className="skill-card" key={label}>
              <div className={`skill-icon ${color}`}>
                <Icon size={22} />
              </div>
              <div className="skill-card-head">
                <span>{t.dashboard.latestBand}</span>
                <b>{score}</b>
              </div>
              <h3>{label}</h3>
              <p>{detail}</p>
              <div className="card-footer">
                <span>
                  <Clock3 size={14} /> 15 {t.dashboard.min}
                </span>
                <ArrowUpRight size={17} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="dashboard-columns">
        <div className="glass-card focus-card">
          <div className="section-title">
            <div>
              <p className="eyebrow">{t.dashboard.todaysFocus}</p>
              <h2>{t.dashboard.ideasEasierToFollow}</h2>
            </div>
            <span className="pill">12 {t.dashboard.min}</span>
          </div>
          <p>{t.dashboard.linkingIdeasDesc}</p>
          <div className="focus-list">
            <span>
              <CheckCircle2 size={17} /> {t.dashboard.paragraphFlow}
            </span>
            <span>
              <CheckCircle2 size={17} /> {t.dashboard.clarityFeedback}
            </span>
          </div>
          <Link href="/dashboard/writing" className="dark-link">
            {t.dashboard.beginWritingTask} <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="glass-card activity-card">
          <div className="section-title">
            <div>
              <h2>{t.dashboard.recentActivity}</h2>
              <p>Your latest sessions</p>
            </div>
            <Link href="/dashboard/history-points">{t.dashboard.history}</Link>
          </div>
          {[
            ['Writing task 2', 'Band 7.0', 'Today, 09:40'],
            ['Listening: section 2', '8 / 10 correct', 'Yesterday'],
            ['Speaking cue card', 'Band 7.5', 'Wed, 24 Sep'],
          ].map(([a, b, c]) => (
            <div className="activity-row" key={a}>
              <span className="activity-dot" />
              <div>
                <b>{a}</b>
                <small>{c}</small>
              </div>
              <strong>{b}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m17 7 4-4" />
    </svg>
  )
}
