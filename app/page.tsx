import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Mic2,
  PenLine,
  Play,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills: { icon: LucideIcon; title: string; detail: string; tone: string }[] = [
  { icon: BookOpen, title: "Reading", detail: "Build speed without losing accuracy.", tone: "blue" },
  { icon: Headphones, title: "Listening", detail: "Learn to catch what matters.", tone: "violet" },
  { icon: PenLine, title: "Writing", detail: "Turn ideas into clear arguments.", tone: "red" },
  { icon: Mic2, title: "Speaking", detail: "Find a natural, confident rhythm.", tone: "green" },
];

export default function LandingPage() {
  return (
    <main className="landing landing-refresh">
      <nav className="landing-nav" aria-label="Main navigation">
        <Link href="/" className="brand"><span className="brand-mark">i</span><span>just an <strong>IELTS</strong></span></Link>
        <div className="landing-links"><a href="#method">How it works</a><a href="#skills">Four skills</a><a href="#progress">Your progress</a></div>
        <div className="landing-actions"><Link className="text-link" href="/login">Log in</Link><Link className="nav-cta" href="/login">Start for free <ArrowRight size={15} /></Link></div>
      </nav>

      <section className="hero-v2">
        <div className="hero-v2-copy">
          <p className="hero-announcement"><span><Sparkles size={13} /></span> IELTS preparation, made personal</p>
          <h1>Make your next<br /><em>band score</em> feel possible.</h1>
          <p className="hero-description">A focused study space that turns big IELTS ambitions into the right small step for today.</p>
          <div className="hero-buttons"><Link href="/login" className="red-button">Build my study plan <ArrowRight size={18} /></Link><a href="#method" className="watch-link"><span><Play size={13} fill="currentColor" /></span> See the approach</a></div>
          <div className="hero-trust"><div className="mini-avatars"><i>R</i><i>S</i><i>M</i><i>A</i></div><p><strong>Made for learners aiming higher.</strong><br />One thoughtful session at a time.</p></div>
        </div>

        <div className="hero-v2-visual" aria-label="A preview of a personalised IELTS study plan">
          <div className="hero-orb hero-orb-red" /><div className="hero-orb hero-orb-blue" />
          <div className="dashboard-window">
            <div className="window-top"><div className="window-brand"><span>i</span> just an IELTS</div><div className="window-dots"><i /><i /><i /></div><p>Tuesday, 22 September</p></div>
            <div className="window-content">
              <aside className="window-rail"><span className="rail-active">⌂</span><span>◒</span><span>▤</span><span>◌</span></aside>
              <div className="window-main">
                <p className="window-greeting">GOOD MORNING, SAMIRA</p><h2>Today, your<br />practice has a plan.</h2>
                <div className="focus-card"><div><p>✦ TODAY&apos;S FOCUS</p><strong>Reading speed<br />&amp; vocabulary</strong><span><Clock3 size={11} /> 35 minute session</span></div><button aria-label="Start today’s focus"><Play size={15} fill="currentColor" /></button></div>
                <div className="score-row"><div><span>YOUR TARGET</span><strong>Band 8.0</strong></div><div className="score-ring"><b>7.5</b><small>current</small></div><div><span>ON TRACK</span><strong>+0.5 to go</strong></div></div>
              </div>
            </div>
          </div>
          <div className="floating-streak"><span><TrendingUp size={16} /></span><div><small>YOUR MOMENTUM</small><strong>12 day streak</strong></div></div>
          <div className="floating-score"><Star size={14} fill="currentColor" /><span>Next session ready</span></div>
        </div>
      </section>

      <section className="proof-strip"><p>One place for preparation that feels</p><strong>clearer <i /> calmer <i /> more intentional</strong><span>— so you can focus on the result.</span></section>

      <section id="method" className="method-section">
        <div className="section-intro"><p className="section-kicker">A path you can see</p><h2>Stop guessing what<br />to study <em>next.</em></h2></div>
        <div className="method-story"><p className="method-lead">IELTS is a big goal. Your preparation should make it feel manageable — with a clear rhythm, feedback you understand, and proof that you&apos;re moving forward.</p><div className="method-steps">
          <article><span>01</span><div><h3>Set your direction</h3><p>Choose your target band and find the skills that deserve your attention first.</p></div></article>
          <article><span>02</span><div><h3>Practice with intention</h3><p>Short, focused sessions build the habits that make a difference on test day.</p></div></article>
          <article><span>03</span><div><h3>See the progress</h3><p>Track the work behind your growth and always know your next best move.</p></div></article>
        </div></div>
      </section>

      <section id="skills" className="skills-section"><div className="skills-copy"><p className="section-kicker">The complete toolkit</p><h2>Every skill.<br /><em>One steady rhythm.</em></h2><p>Move between the four parts of IELTS without moving between scattered tools, tabs, and study plans.</p><Link href="/dashboard/practice" className="simple-link">Explore the practice hub <ChevronRight size={17} /></Link></div><div className="skill-grid">{skills.map(({ icon: Icon, title, detail, tone }) => <article key={title} className={`skill-tile ${tone}`}><span><Icon size={22} /></span><h3>{title}</h3><p>{detail}</p><ArrowRight size={17} /></article>)}</div></section>

      <section id="progress" className="progress-section"><div className="progress-copy"><p className="section-kicker">Progress, not pressure</p><h2>Watch your work<br /><em>add up.</em></h2><p>See your target, your current level, and the small wins that will get you there. No noise — just a useful view of where you are.</p><ul><li><Check size={16} /> A clear target for every skill</li><li><Check size={16} /> Focused recommendations for today</li><li><Check size={16} /> A history worth being proud of</li></ul></div><div className="progress-panel"><div className="panel-head"><div><span>PROGRESS OVERVIEW</span><h3>Your target is in sight.</h3></div><b>Band 8.0</b></div><div className="progress-chart"><div className="chart-axis"><span>8.0</span><span>7.0</span><span>6.0</span></div><div className="chart-lines"><i /><i /><i /><svg viewBox="0 0 360 138" preserveAspectRatio="none" aria-hidden="true"><path d="M0,112 C35,108 45,85 74,91 S111,68 139,74 S184,45 212,57 S260,38 287,42 S324,17 360,10" fill="none" stroke="currentColor" strokeWidth="4" /><circle cx="360" cy="10" r="6" /></svg><div className="chart-tag">You&apos;re here <strong>7.5</strong></div></div></div><div className="skill-bars"><div><span>Reading</span><i><b style={{ width: "82%" }} /></i><strong>7.5</strong></div><div><span>Writing</span><i><b style={{ width: "68%" }} /></i><strong>7.0</strong></div><div><span>Speaking</span><i><b style={{ width: "78%" }} /></i><strong>7.5</strong></div></div></div></section>

      <section className="landing-final"><div className="final-glow" /><p className="section-kicker">Your next chapter starts here</p><h2>Prepare with a plan.<br /><em>Walk in with belief.</em></h2><p>Give your IELTS goal a calm, capable place to grow.</p><Link href="/login" className="red-button">Start preparing for free <ArrowRight size={18} /></Link></section>
      <footer><Link href="/" className="brand"><span className="brand-mark">i</span><span>just an <strong>IELTS</strong></span></Link><span>Focused preparation for meaningful results.</span><span>© 2026</span></footer>
    </main>
  );
}
