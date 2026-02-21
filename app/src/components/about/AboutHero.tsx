"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 60%, #061426 100%)",
      padding: "160px 48px 100px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid bg */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
        <defs>
          <pattern id="ah-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ah-grid)"/>
      </svg>

      {/* Glows */}
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(26,86,219,0.16) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "10%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            marginBottom: 28,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13, color: "rgba(255,255,255,0.45)",
          }}
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#0ea5e9" }}>About</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.06, letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          Our{" "}
          <em style={{ fontStyle: "italic", color: "#60a5fa" }}>Story</em>
          {" "}& Mission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 18, color: "rgba(255,255,255,0.48)",
            lineHeight: 1.75, maxWidth: 580, margin: "0 auto 48px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          SkillLift Education was built on one belief — that practical,
          career-focused training should be accessible to everyone, everywhere.
        </motion.p>

        {/* Pill tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}
        >
          {["Founded 2022", "NZ & Sri Lanka", "2,000+ Graduates", "15+ Instructors"].map((t) => (
            <span key={t} style={{
              padding: "8px 18px", borderRadius: 100,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "0.04em",
            }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}