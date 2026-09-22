import { ArrowRight, BookOpen, Headphones, Mic2, PenLine } from "lucide-react";

const modules = [
  { title: "Reading", detail: "3 passages · 40 questions", time: "25–45 min", icon: BookOpen, tone: "blue" },
  { title: "Listening", detail: "4 sections · 40 questions", time: "30 min", icon: Headphones, tone: "violet" },
  { title: "Writing", detail: "Task 1 & Task 2 feedback", time: "40–60 min", icon: PenLine, tone: "orange" },
  { title: "Speaking", detail: "Part 1, 2 & 3 mock practice", time: "15–25 min", icon: Mic2, tone: "green" },
];

export default function PracticePage() {
  return <><section className="page-heading"><p className="section-kicker">Practice hub</p><h1>What would you like to improve?</h1><p className="muted">Choose one skill and let&apos;s make this session count.</p></section><section className="practice-grid">{modules.map(({ title, detail, time, icon: Icon, tone }) => <article className="practice-card" key={title}><span className={`practice-icon ${tone}`}><Icon size={24} /></span><h2>{title}</h2><p>{detail}</p><div><span>{time}</span><button>Start <ArrowRight size={15} /></button></div></article>)}</section><section className="daily-note"><span>✦</span><div><strong>Today&apos;s recommendation</strong><p>Your Reading score is closest to your target. A 25-minute matching-headings drill is the strongest next step.</p></div><button>Begin a focused drill <ArrowRight size={16} /></button></section></>;
}
