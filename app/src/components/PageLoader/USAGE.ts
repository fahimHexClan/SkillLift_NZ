// ══════════════════════════════════════════════════════
// HOW TO USE PageLoader in your Next.js project
// ══════════════════════════════════════════════════════

// 1. Copy PageLoader.tsx → src/components/PageLoader.tsx

// 2. Add to your ROOT layout (app/layout.tsx):
// ─────────────────────────────────────────────
/*
"use client";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageLoader minDuration={1500} />
        {children}
      </body>
    </html>
  );
}
*/

// 3. OR use per-page (e.g. app/page.tsx):
// ─────────────────────────────────────────────
/*
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Hero";
// ...

export default function HomePage() {
  return (
    <main>
      <PageLoader minDuration={1200} />
      <Navbar />
      <Hero />
      ...
    </main>
  );
}
*/

// ── Props ─────────────────────────────────────────────
// minDuration?: number  — minimum ms to show loader (default: 1200ms)
//
// Examples:
//   <PageLoader />                   → shows for 1.2s minimum
//   <PageLoader minDuration={800} /> → faster (800ms)
//   <PageLoader minDuration={2000}/> → slower (2s)
// ─────────────────────────────────────────────────────