"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function AboutCTA() {
  return (
    <section style={{ padding: "0 48px 100px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(155deg, #060d1c 0%, #0d1b38 100%)",
            borderRadius: 24, padding: "80px 80px",
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 48,
            position: "relative", overflow: "hidden",
          }}
        >
          {/* BG */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)"/>
          </svg>
          <div style={{
            position: "absolute", top: "-30%", right: "10%",
            width: "40%", height: "200%",
            background: "radial-gradient(circle, rgba(26,86,219,0.15), transparent)",
            pointerEvents: "none",
          }} />

          {/* Text */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
              color: "#0ea5e9", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16,
            }}>Ready to Begin?</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700,
              color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Start Your Journey<br />
              <em style={{ fontStyle: "italic", color: "#93c5fd" }}>with SkillLift Today</em>
            </h2>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <button className="btn-primary" style={{ padding: "15px 36px", fontSize: 14 }}>
              Explore Courses <ArrowRight size={15} />
            </button>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 30px", borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)", cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14, fontWeight: 500, transition: "all 0.25s",
              backdropFilter: "blur(8px)",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
            >
              <Mail size={15} /> Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}