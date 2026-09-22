import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Sparkles } from "lucide-react";

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const { error } = await searchParams;
  const message = error === "configuration" ? "Google sign-in is being configured. Please try again shortly." : error === "authentication" ? "We couldn’t complete that Google sign-in. Please try again." : null;
  return (
    <main className="auth-page">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to home</Link>
      <section className="auth-shell">
        <div className="auth-story">
          <Link href="/" className="brand"><span className="brand-mark">i</span><span>just an <strong>IELTS</strong></span></Link>
          <div className="eyebrow"><Sparkles size={14} /> Your study space is ready</div>
          <h1>Every focused session moves your score forward.</h1>
          <p>Pick up your plan, protect your progress, and keep every IELTS insight in one calm workspace.</p>
          <div className="auth-proof">
            {["Personalised daily plan", "Progress saved across devices", "Google-secured sign in"].map((item) => <span key={item}><Check size={15} /> {item}</span>)}
          </div>
        </div>
        <div className="auth-card">
          <div className="auth-icon"><ShieldCheck size={24} /></div>
          <p className="card-kicker">Welcome back</p>
          <h2>Continue your preparation</h2>
          <p className="auth-description">Sign in securely with the Google account you use for your study plan.</p>
          <a href="/api/auth/google" className="google-button" aria-label="Continue with Google">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.35 12.23c0-.75-.07-1.47-.2-2.15H12v4.07h5.23a4.47 4.47 0 0 1-1.94 2.93v2.64h3.14c1.84-1.69 2.92-4.18 2.92-7.49Z"/><path fill="#34A853" d="M12 21.7c2.62 0 4.82-.87 6.43-2.35l-3.14-2.64c-.87.59-1.99.94-3.29.94-2.53 0-4.67-1.7-5.44-4v2.72H3.32A9.72 9.72 0 0 0 12 21.7Z"/><path fill="#FBBC05" d="M6.56 13.65a5.83 5.83 0 0 1 0-3.3V7.63H3.32a9.7 9.7 0 0 0 0 8.74l3.24-2.72Z"/><path fill="#EA4335" d="M12 6.35c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.81 3.42 14.62 2.3 12 2.3a9.72 9.72 0 0 0-8.68 5.33l3.24 2.72c.77-2.3 2.91-4 5.44-4Z"/></svg>
            Continue with Google
          </a>
          {message && <p className="auth-error" role="alert">{message}</p>}
          <p className="auth-terms">Google is the only sign-in method. By continuing, you agree to use just an IELTS responsibly.</p>
        </div>
      </section>
    </main>
  );
}
