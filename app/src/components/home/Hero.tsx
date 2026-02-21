"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const trustPoints = [
  "Internationally Recognized Certificates",
  "Expert-Led Live & Recorded Sessions",
  "Lifetime LMS Access Guaranteed",
];

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 55%, #061426 100%)",
      padding: "100px 48px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Geometric background elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Large soft glow */}
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
        }} />
        {/* Grid lines */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        {/* Diagonal accent line */}
        <div style={{
          position: "absolute", top: "15%", right: "8%",
          width: 1, height: "40%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
        }} />
        <div style={{
          position: "absolute", top: "10%", right: "18%",
          width: 1, height: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)",
        }} />
      </div>

      <div style={{
        maxWidth: 1320, margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "55fr 45fr", gap: 80,
        alignItems: "center", position: "relative", zIndex: 2,
      }}>
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "7px 16px 7px 8px", borderRadius: 100, marginBottom: 36,
              background: "rgba(14,165,233,0.1)",
              border: "1px solid rgba(14,165,233,0.25)",
            }}
          >
            <span style={{
              background: "#0ea5e9", color: "#fff",
              padding: "3px 10px", borderRadius: 100,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>NEW</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              2025 Intake Now Open — NZ &amp; Sri Lanka
            </span>
          </motion.div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 800, color: "#fff", lineHeight: 1.06,
            letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            A Globally{" "}
            <span style={{
              fontStyle: "italic",
              color: "#60a5fa",
              position: "relative",
              display: "inline-block",
            }}>
              Recognized
              <span style={{
                position: "absolute",
                bottom: 4,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #60a5fa, #0ea5e9)",
                borderRadius: 2,
              }} />
            </span>
            <br />Educational Institute
          </h1>

          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.52)",
            lineHeight: 1.75, marginBottom: 44, maxWidth: 520,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400,
          }}>
            SkillLift Education delivers career-focused, industry-relevant training
            across New Zealand and Sri Lanka — building skills that employers value.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
            <button className="btn-primary" style={{ padding: "15px 36px", fontSize: 15 }}>
              Explore Courses <ArrowRight size={16} />
            </button>
            <button className="btn-ghost-white" style={{ padding: "15px 28px" }}>
              <Play size={14} /> Watch Overview
            </button>
          </div>

          {/* Trust points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {trustPoints.map((pt) => (
              <div key={pt} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle size={15} color="#0ea5e9" />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Stats card panel */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {/* Main card */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20, padding: "40px 36px",
            backdropFilter: "blur(24px)",
          }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                color: "#0ea5e9", marginBottom: 10, textTransform: "uppercase",
              }}>Enrollment Overview</div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.2,
              }}>Join 2,000+ Students<br/>Building Real Careers</div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
              {[
                { val: "2,000+", label: "Active Students" },
                { val: "15+", label: "Expert Instructors" },
                { val: "7", label: "Courses Available" },
                { val: "2", label: "Countries" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "22px 20px",
                  background: "rgba(255,255,255,0.025)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1,
                  }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 5, fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two mini cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Sri Lanka", detail: "Panadura Campus", icon: "LK" },
              { label: "New Zealand", detail: "Auckland Campus", icon: "NZ" },
            ].map((loc) => (
              <div key={loc.label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, padding: "20px",
                backdropFilter: "blur(16px)",
              }}>
                <div style={{
                  width: 36, height: 24, borderRadius: 4,
                  background: "rgba(26,86,219,0.3)",
                  border: "1px solid rgba(26,86,219,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 9, fontWeight: 800, color: "#93c5fd",
                  letterSpacing: "0.05em", marginBottom: 12,
                }}>
                  {loc.icon}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                  {loc.label}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{loc.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}