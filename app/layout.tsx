import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "just an IELTS | Study with clarity",
  description: "A focused IELTS practice workspace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
