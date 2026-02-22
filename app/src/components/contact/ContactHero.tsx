"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 60%, #061426 100%)",
      padding: "160px 48px 100px",
      position: "relative", overflow: "hidden",
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
        <defs>
          <pattern id="ct-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ct-grid)"/>
      </svg>
      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "5%", width: "30vw", height: "30vw", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 28,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: "#0ea5e9" }}>Contact Us</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 6vw, 80px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 20,
          }}
        >
          Contact <em style={{ fontStyle: "italic", color: "#60a5fa" }}>Us</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 17, color: "rgba(255,255,255,0.48)",
            maxWidth: 480, margin: "0 auto",
            fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.75,
          }}
        >
          Have a question or want to enroll? Reach out — our team is ready to help you take the next step.
        </motion.p>
      </div>
    </section>
  );
}