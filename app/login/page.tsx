import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Login</h1>
      <p>Sign in to access your IELTS dashboard.</p>
      <div style={{ margin: "1rem 0" }}>
        <button type="button">Sign in with Google</button>
      </div>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        Note: Authentication is supported exclusively via Google.
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <Link href="/">Back to Home</Link>
      </nav>
    </main>
  );
}
