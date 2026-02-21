"use client";
import { motion } from "framer-motion";

interface StatsProps {
  counts: { s: number; i: number; c: number; co: number };
}

const stats = [
  { key: "s" as const, suffix: "+", label: "Students Enrolled", sub: "Across NZ & Sri Lanka" },
  { key: "i" as const, suffix: "+", label: "Expert Instructors", sub: "Industry Practitioners" },
  { key: "c" as const, suffix: "", label: "Career Programs", sub: "Globally Relevant" },
  { key: "co" as const, suffix: "", label: "Countries", sub: "NZ & Sri Lanka" },
];

export default function Stats({ counts }: StatsProps) {
  const values = { s: counts.s.toLocaleString(), i: counts.i, c: counts.c, co: counts.co };

  return (
    <section style={{ padding: "0 48px 120px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          background: "#0a0f1e", borderRadius: 20, overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "56px 44px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Subtle background glow on first/featured */}
              {i === 0 && (
                <div style={{
                  position: "absolute", top: -40, left: -40,
                  width: 200, height: 200,
                  background: "radial-gradient(circle, rgba(26,86,219,0.2), transparent)",
                  pointerEvents: "none",
                }} />
              )}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 56, fontWeight: 800, color: "#fff",
                lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 10,
              }}>
                {values[s.key]}{s.suffix}
              </div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)",
                marginBottom: 4,
              }}>{s.label}</div>
              <div style={{
                fontSize: 12, color: "rgba(255,255,255,0.3)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}