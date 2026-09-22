import Link from "next/link";

export default function ProfilePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>User Profile</h1>
      <p>Manage your account details, target IELTS score, and study preferences.</p>
      <nav style={{ marginTop: "1rem" }}>
        <Link href="/dashboard">Back to Dashboard</Link>
        {" | "}
        <Link href="/">Back to Home</Link>
      </nav>
    </main>
  );
}
