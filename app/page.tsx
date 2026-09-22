import Link from "next/link";

export default function LandingPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>IELTS Prep Platform</h1>
      <p>
        Welcome to the ultimate platform to prepare for your IELTS exam!
        Master Reading, Writing, Listening, and Speaking with our targeted practice tools and vocabulary builders.
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <Link href="/login">Go to Login</Link>
        {" | "}
        <Link href="/dashboard">Go to Dashboard</Link>
      </nav>
    </main>
  );
}
