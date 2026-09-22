import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <aside
        style={{
          width: "220px",
          borderRight: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link href="/dashboard/practice">Practice</Link>
          <Link href="/dashboard/vocabulary">Vocabulary</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/">Home</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
    </div>
  );
}
