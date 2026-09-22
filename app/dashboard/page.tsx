import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight, Clock3, Flame, Headphones, Mic2, PenLine, Play, Sparkles, Target } from "lucide-react";

const skills = [
  { name: "Reading", score: "7.5", progress: 75, icon: BookOpen, tone: "blue" },
  { name: "Listening", score: "8.0", progress: 80, icon: Headphones, tone: "violet" },
  { name: "Writing", score: "7.0", progress: 70, icon: PenLine, tone: "orange" },
  { name: "Speaking", score: "7.5", progress: 75, icon: Mic2, tone: "green" },
];

export default function DashboardPage() {
  return <>
    <section className="welcome-row"><div><p className="section-kicker">Tuesday, 22 September</p><h1>Good morning, <span>learner.</span></h1><p className="muted">Your next strong result starts with a small, focused win today.</p></div><Link href="/dashboard/practice" className="primary-button">Start a session <ArrowRight size={18} /></Link></section>
    <section className="hero-card"><div className="hero-grid" /><div className="hero-copy"><div className="eyebrow light"><Sparkles size={14} /> Today&apos;s focus</div><h2>Make your next<br />practice session count.</h2><p>We&apos;ve prepared a 35-minute plan to build your reading speed and sharpen your academic vocabulary.</p><Link href="/dashboard/practice" className="hero-action"><span className="play-icon"><Play size={15} fill="currentColor" /></span> Continue today&apos;s plan</Link></div><div className="target-orbit"><div className="target-score"><span>Target band</span><strong>8.0</strong><small>+0.5 to go</small></div></div></section>
    <section className="stat-grid"><div className="metric-card"><span className="metric-icon red"><Flame size={20} /></span><div><p>Current streak</p><strong>12 <small>days</small></strong></div><span className="metric-note">Best: 18</span></div><div className="metric-card"><span className="metric-icon yellow"><Clock3 size={20} /></span><div><p>This week</p><strong>4.2 <small>hours</small></strong></div><span className="metric-note positive">On track</span></div><div className="metric-card"><span className="metric-icon blue"><Target size={20} /></span><div><p>Tasks completed</p><strong>28 <small>/ 36</small></strong></div><span className="metric-note">This month</span></div></section>
    <section className="content-grid"><div className="content-card"><div className="section-head"><div><p className="section-kicker">Performance</p><h2>Your skill snapshot</h2></div><Link href="/dashboard/practice">View report <ChevronRight size={16} /></Link></div><div className="skills-list">{skills.map(({ name, score, progress, icon: Icon, tone }) => <div className="skill" key={name}><span className={`skill-icon ${tone}`}><Icon size={18} /></span><div className="skill-progress"><div><strong>{name}</strong><span>Band {score}</span></div><div className="progress-track"><i className={tone} style={{ width: `${progress}%` }} /></div></div><strong className="skill-score">{score}</strong></div>)}</div></div><div className="content-card next-card"><div className="section-head"><div><p className="section-kicker">Up next</p><h2>Continue learning</h2></div><button className="more-button" aria-label="More options">•••</button></div><div className="lesson-item"><span className="lesson-number">01</span><div><span className="lesson-tag">Reading · 25 min</span><h3>Matching headings without the guesswork</h3><p>Build a repeatable method for the IELTS Reading section.</p></div></div><Link href="/dashboard/practice" className="outline-button">Resume lesson <ArrowRight size={16} /></Link></div></section>
  </>;
}
