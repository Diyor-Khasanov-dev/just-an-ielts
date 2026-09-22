"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Flame,
  Headphones,
  Mic2,
  PenLine,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillData {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  previewTitle: string;
  previewContent: string;
  accentStat: string;
}

const SKILLS_DATA: SkillData[] = [
  {
    id: "reading",
    icon: BookOpen,
    title: "Reading Precision",
    tagline: "Build lightning speed without sacrificing accuracy.",
    description:
      "Master Skimming & Scanning algorithms tuned to actual Academic & General IELTS passage patterns. Stop re-reading sentences and spot answers in seconds.",
    bullets: [
      "Real-time speed & WPM timer",
      "Keyword & Synonym highlighter",
      "Instant breakdown for True/False/Not Given",
    ],
    previewTitle: "Speed Reading Drill #14",
    previewContent:
      "Passage snippet: 'The decline of coastal ecosystems has accelerated over the past three decades...'",
    accentStat: "Avg WPM +45%",
  },
  {
    id: "listening",
    icon: Headphones,
    title: "Active Listening",
    tagline: "Train your ear to catch distractors & native accents.",
    description:
      "Practice with varied accents (British, Australian, North American) with adjustable audio speeds and transcript syncing to catch tricky distractors effortlessly.",
    bullets: [
      "Interactive transcript auto-scroll",
      "Native speaker accent switcher",
      "Distractor identification alerts",
    ],
    previewTitle: "Section 3: Academic Discussion",
    previewContent:
      "Speaker A: 'Should we prioritize solar panels or wind turbines for the campus grid?'",
    accentStat: "Accuracy 88%",
  },
  {
    id: "writing",
    icon: PenLine,
    title: "AI Writing Evaluator",
    tagline: "Instant Task 1 & Task 2 grading against official band criteria.",
    description:
      "Submit your essays for instant feedback on Coherence, Lexical Resource, Grammatical Accuracy, and Task Achievement with targeted rewrites.",
    bullets: [
      "Instant band score prediction",
      "Vocabulary & phrasing upgrade suggestions",
      "Structure & paragraph flow analyzer",
    ],
    previewTitle: "Task 2: Essay Feedback",
    previewContent:
      "Grammatical Range: 8.0 | Coherence: 7.5. Recommendation: Enhance transition words in paragraph 2.",
    accentStat: "Band +1.0 Goal",
  },
  {
    id: "speaking",
    icon: Mic2,
    title: "Speaking Confidence",
    tagline: "Natural fluency, pronunciation, and hesitation tracking.",
    description:
      "Simulate Part 1, 2, and 3 interviews with voice prompts. Get instant feedback on your speaking pace, filler words, and vocabulary range.",
    bullets: [
      "Voice recording & instant transcript",
      "Filler word ('um/uh') frequency analyzer",
      "Collocation & idiomatic phrase tips",
    ],
    previewTitle: "Part 2: Cue Card Simulation",
    previewContent:
      "Prompt: 'Describe a memorable journey you took.' Fluency score: 8.0. Pace: 135 WPM.",
    accentStat: "Fluency 8.5",
  },
];

const FAQS = [
  {
    question: "How does 'just an IELTS' help me score Band 7.5 or higher?",
    answer:
      "Unlike generic platforms that throw hundreds of unstructured practice tests at you, 'just an IELTS' uses targeted 15-minute daily focus sessions. We isolate your exact weak points across Reading, Listening, Writing, and Speaking, giving you instant actionable feedback so every minute spent translates into real score gains.",
  },
  {
    question: "Is the AI Writing and Speaking evaluation accurate?",
    answer:
      "Yes! Our AI evaluation model is strictly trained on official IELTS band descriptors (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy). It provides precise band predictions along with step-by-step rewrites to elevate your score.",
  },
  {
    question: "Can I prepare if I only have 20 minutes a day?",
    answer:
      "Absolutely. In fact, our core methodology is built around consistent, high-intensity 15 to 25 minute daily focus blocks. Short, focused sessions maintain high memory retention and prevent burnout.",
  },
  {
    question: "Is 'just an IELTS' suitable for both Academic & General Training?",
    answer:
      "Yes. We support both Academic and General Training modules, tailored specifically to your test format goals.",
  },
];

const TESTIMONIALS = [
  {
    name: "Elena Rostova",
    role: "Targeted Band 8.0 • Achieved 8.5",
    initial: "E",
    improvement: "6.5 ➔ 8.5",
    quote:
      "The Writing evaluation was a game-changer for me. Seeing my exact grammatical errors and lexical suggestions helped me jump 1.5 bands in just 3 weeks!",
  },
  {
    name: "Aarav Patel",
    role: "Targeted Band 7.5 • Achieved 7.5",
    initial: "A",
    improvement: "6.0 ➔ 7.5",
    quote:
      "I used to get overwhelmed by full-length tests. The 15-minute daily micro-sessions fit right into my work schedule and kept my momentum going.",
  },
  {
    name: "Mei-Ling Chen",
    role: "Targeted Band 7.0 • Achieved 8.0",
    initial: "M",
    improvement: "6.5 ➔ 8.0",
    quote:
      "Minimalist, calm, and effective. No clutter, no distractions — just straight practice and clear progress tracking. Highly recommended!",
  },
];

export default function LandingPage() {
  const [activeSkill, setActiveSkill] = useState<string>("writing");
  const [currentBand, setCurrentBand] = useState<number>(6.5);
  const [targetBand, setTargetBand] = useState<number>(8.0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedSkill = SKILLS_DATA.find((s) => s.id === activeSkill) || SKILLS_DATA[2];

  // Calculate estimated study time
  const bandDiff = Math.max(0, targetBand - currentBand);
  const estimatedWeeks = Math.ceil(bandDiff * 6) || 2;
  const estimatedHours = Math.round(estimatedWeeks * 4.5);

  return (
    <div className="landing-redesign">
      {/* Floating Glass Navigation */}
      <div className="landing-nav-wrapper">
        <nav className="landing-nav" aria-label="Main Navigation">
          <Link href="/" className="brand">
            <span className="brand-mark">i</span>
            <span>
              just an <strong>IELTS</strong>
            </span>
          </Link>

          <div className="nav-links">
            <a href="#why-us">Why Us</a>
            <a href="#skills-hub">4 Skills Hub</a>
            <a href="#estimator">Score Estimator</a>
            <a href="#testimonials">Success Stories</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="btn-ghost">
              Log in
            </Link>
            <Link href="/login" className="btn-red">
              Start Free Trial <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-pill-dot" />
            <span>IELTS Preparation, Redefined with Precision</span>
          </div>

          <h1 className="hero-title text-shadow-hero">
            Master your <span className="highlight-red">IELTS Band Score</span> with quiet confidence.
          </h1>

          <p className="hero-subtitle">
            A minimalist, high-impact study space designed to turn overwhelming test prep into structured 15-minute daily wins.
          </p>

          <div className="hero-ctas">
            <Link href="/login" className="btn-red">
              Build My Study Plan <ArrowRight size={18} />
            </Link>
            <a href="#skills-hub" className="btn-secondary">
              Explore 4 Skills Hub <Sparkles size={16} className="text-red-500" />
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-group">
              <span className="avatar-placeholder">R</span>
              <span className="avatar-placeholder">S</span>
              <span className="avatar-placeholder">M</span>
              <span className="avatar-placeholder">A</span>
            </div>
            <p className="proof-text">
              Trusted by <strong>12,000+ test-takers</strong> globally.
              <br />
              Average score improvement of <strong>+1.0 Band</strong> in 30 days.
            </p>
          </div>
        </div>

        {/* Hero Interactive Visual Glass Card */}
        <div className="hero-visual-container">
          <div className="glow-orb-red" />
          <div className="glow-orb-dark" />

          <div className="hero-glass-card">
            <div className="card-header-bar">
              <div className="card-dots">
                <span className="card-dot dot-red" />
                <span className="card-dot dot-yellow" />
                <span className="card-dot dot-green" />
              </div>
              <span className="card-title-mini">Today&apos;s Focus Hub</span>
              <span className="badge-pill" style={{ padding: "3px 10px", fontSize: "10px" }}>
                LIVE SESSION
              </span>
            </div>

            <div className="card-body-content">
              <div className="hero-focus-widget">
                <span className="focus-tag">
                  <Sparkles size={12} /> TODAY&apos;S PRIORITY
                </span>
                <h3 className="focus-heading">Academic Writing Task 2 Strategy</h3>
                <div className="focus-meta">
                  <span className="focus-time">
                    <Clock size={14} /> 15 min focus session
                  </span>
                  <div className="play-badge">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="hero-stats-row">
                <div className="stat-pill">
                  <span className="stat-pill-label">Target Band</span>
                  <div className="stat-pill-value red">8.0</div>
                </div>
                <div className="stat-pill">
                  <span className="stat-pill-label">Current Band</span>
                  <div className="stat-pill-value">7.5</div>
                </div>
                <div className="stat-pill">
                  <span className="stat-pill-label">On Track</span>
                  <div className="stat-pill-value">+0.5</div>
                </div>
              </div>
            </div>

            {/* Floating Streak Badge Overlay */}
            <div className="floating-badge-streak">
              <div className="streak-fire-icon">
                <Flame size={18} />
              </div>
              <div>
                <span style={{ fontSize: "9px", color: "#6b7280", fontWeight: 700, display: "block" }}>
                  MOMENTUM
                </span>
                <strong style={{ fontSize: "13px", color: "#111827" }}>14 Day Practice Streak</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Strip */}
      <section className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon-box">
              <Zap size={20} />
            </div>
            <span>Instant AI Writing &amp; Speaking Feedback</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box">
              <Target size={20} />
            </div>
            <span>Official Cambridge Test Format Alignment</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box">
              <ShieldCheck size={20} />
            </div>
            <span>Focused 15-Min Daily Micro-Sessions</span>
          </div>
        </div>
      </section>

      {/* Storytelling Section: Why Us */}
      <section id="why-us" className="story-section">
        <div className="section-header-center">
          <span className="section-kicker">A Better Story for Your Prep</span>
          <h2 className="section-title">Stop getting overwhelmed by endless test practice.</h2>
          <p className="section-subtitle">
            Most IELTS prep platforms flood you with 50-page PDFs and unguided tests. We replaced noise with a clean, calm trajectory.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Old Way */}
          <div className="comparison-card old-way">
            <span className="comparison-card-badge">THE OLD OVERWHELMING WAY</span>
            <h3>Scattered practice without clarity</h3>
            <ul className="comparison-list">
              <li>
                <span className="list-icon">✕</span>
                <span>Hours spent solving full tests without knowing why you missed answers.</span>
              </li>
              <li>
                <span className="list-icon">✕</span>
                <span>No feedback on Essay grammar, cohesion, or vocabulary weak spots.</span>
              </li>
              <li>
                <span className="list-icon">✕</span>
                <span>Nervousness in Speaking test due to lack of real-time voice practice.</span>
              </li>
              <li>
                <span className="list-icon">✕</span>
                <span>Burnout from long 3-hour study marathons that don&apos;t stick.</span>
              </li>
            </ul>
          </div>

          {/* Just an IELTS Way */}
          <div className="comparison-card new-way">
            <span className="comparison-card-badge">THE JUST AN IELTS METHOD</span>
            <h3>Intentional, targeted band progress</h3>
            <ul className="comparison-list">
              <li>
                <span className="list-icon">✓</span>
                <span><strong>15-minute daily focus sessions</strong> targeting your exact skill gaps.</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span><strong>Instant AI Task 1 &amp; 2 evaluation</strong> with precise band breakdowns.</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span><strong>Speaking voice analysis</strong> for fluency, filler words, and pronunciation.</span>
              </li>
              <li>
                <span className="list-icon">✓</span>
                <span><strong>Clear visual trajectory</strong> showing your path to Band 7.5+ step-by-step.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive 4 Skills Hub Section */}
      <section id="skills-hub" className="skills-hub-section">
        <div className="section-header-center">
          <span className="section-kicker">Interactive Toolkit</span>
          <h2 className="section-title">All four IELTS skills in one unified rhythm.</h2>
          <p className="section-subtitle">Switch seamlessly between Reading, Listening, Writing, and Speaking with tailored tools.</p>
        </div>

        {/* Skill Tabs */}
        <div className="skills-tabs">
          {SKILLS_DATA.map((s) => {
            const Icon = s.icon;
            const isActive = activeSkill === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSkill(s.id)}
                className={`skill-tab-btn ${isActive ? "active" : ""}`}
                aria-selected={isActive}
                role="tab"
              >
                <Icon size={18} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Display Card */}
        <div className="skill-display-card">
          <div className="skill-display-info">
            <span className="section-kicker" style={{ fontSize: "11px" }}>
              {selectedSkill.title}
            </span>
            <h3>{selectedSkill.tagline}</h3>
            <p>{selectedSkill.description}</p>

            <div className="skill-feature-bullets">
              {selectedSkill.bullets.map((bullet, idx) => (
                <div key={idx} className="bullet-item">
                  <span className="bullet-check">✓</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <Link href="/login" className="btn-red">
              Try {selectedSkill.title} Practice <ArrowRight size={16} />
            </Link>
          </div>

          {/* Interactive Preview Window */}
          <div className="skill-preview-window">
            <div className="preview-window-top">
              <span style={{ fontWeight: 700, color: "#e2e8f0" }}>{selectedSkill.previewTitle}</span>
              <span className="badge-pill" style={{ padding: "2px 8px", fontSize: "10px" }}>
                {selectedSkill.accentStat}
              </span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#cbd5e1",
              }}
            >
              <p style={{ margin: 0, fontStyle: "italic" }}>{selectedSkill.previewContent}</p>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--red-accent)",
                  }}
                />
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>Real-time Band Feedback active</span>
              </div>
              <span style={{ fontSize: "12px", color: "#f87171", fontWeight: 700 }}>Band 8.0 Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Band Score Estimator Widget */}
      <section id="estimator" className="calculator-section">
        <div className="calc-card">
          <div className="calc-info">
            <span className="section-kicker" style={{ color: "#f87171" }}>
              INSTANT CALCULATOR
            </span>
            <h2>Estimate your path to Band 7.5+</h2>
            <p>Select your current estimated level and target score to see a realistic daily preparation timeline.</p>

            <div className="range-slider-group">
              <div className="range-label">
                <span>Current Band Level</span>
                <strong style={{ color: "#ffffff", fontSize: "16px" }}>Band {currentBand.toFixed(1)}</strong>
              </div>
              <input
                type="range"
                min="5.0"
                max="8.0"
                step="0.5"
                value={currentBand}
                onChange={(e) => setCurrentBand(parseFloat(e.target.value))}
                className="range-slider"
              />
            </div>

            <div className="range-slider-group">
              <div className="range-label">
                <span>Target Band Goal</span>
                <strong style={{ color: "#f87171", fontSize: "16px" }}>Band {targetBand.toFixed(1)}</strong>
              </div>
              <input
                type="range"
                min="6.5"
                max="9.0"
                step="0.5"
                value={targetBand}
                onChange={(e) => setTargetBand(parseFloat(e.target.value))}
                className="range-slider"
              />
            </div>
          </div>

          <div className="calc-result-box">
            <span
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
              }}
            >
              RECOMMENDED TIMELINE
            </span>
            <div className="result-target-score" style={{ marginTop: "12px" }}>
              {estimatedWeeks} <span>Weeks</span>
            </div>
            <p className="result-timeline">
              With <strong>15 minutes / day</strong> (~{estimatedHours} total focus hours).
            </p>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "grid",
                gap: "8px",
                textAlign: "left",
                fontSize: "13px",
                color: "#cbd5e1",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={14} className="text-red-400" /> Primary Focus: Lexical Resource &amp; Task 2 Structure
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={14} className="text-red-400" /> Reading Speed: Target 220 WPM
              </div>
            </div>

            <Link href="/login" className="btn-red" style={{ marginTop: "24px", width: "100%" }}>
              Start This Plan Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header-center">
          <span className="section-kicker">Student Results</span>
          <h2 className="section-title">Designed for learners aiming for excellence.</h2>
          <p className="section-subtitle">Read how students upgraded their band scores with focused preparation.</p>
        </div>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div>
                <span className="testimonial-score-badge">
                  <TrendingUp size={14} /> Band Jump: {t.improvement}
                </span>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-header-center">
          <span className="section-kicker">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: "var(--red-accent)",
                    }}
                  />
                </button>
                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="cta-final-section">
        <div className="cta-final-card">
          <h2>
            Ready to reach your <span style={{ color: "var(--red-accent)" }}>target band score</span>?
          </h2>
          <p>Start your personalized IELTS preparation today. Calm, structured, and free to get started.</p>

          <div className="cta-final-actions">
            <Link href="/login" className="btn-red" style={{ padding: "16px 32px", fontSize: "16px" }}>
              Start Preparing for Free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">i</span>
            <span>
              just an <strong>IELTS</strong>
            </span>
          </Link>
          <span>Focused preparation for meaningful band score results.</span>
          <span>© {new Date().getFullYear()} just an IELTS. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
