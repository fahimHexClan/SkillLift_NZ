"use client";
import { motion } from "framer-motion";

const stats = [
  { val: "2,000+", label: "Happy Students", sub: "Across NZ & Sri Lanka" },
  { val: "15+",    label: "Expert Instructors", sub: "Industry Practitioners" },
  { val: "7+",     label: "Practical Courses", sub: "Globally Relevant" },
  { val: "2+",     label: "Countries", sub: "NZ & Sri Lanka" },
];

export default function AboutStats() {
  return (
    <section style={{ padding: "0 48px 100px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 700,
            color: "#0a0f1e", letterSpacing: "-0.02em",
          }}>
            Trusted by{" "}
            <em style={{ fontStyle: "italic", color: "#1a56db" }}>Students</em>
            {" "}Across Sri Lanka
          </h2>
          {/* Decorative lines */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 16 }}>
            <div style={{ width: 64, height: 2, background: "linear-gradient(to right, transparent, #1a56db)", borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a56db" }} />
            <div style={{ width: 64, height: 2, background: "linear-gradient(to left, transparent, #1a56db)", borderRadius: 2 }} />
          </div>
        </motion.div>

        {/* Stats dark bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            background: "#0a0f1e", borderRadius: 24, overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "52px 40px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              position: "relative", textAlign: "center",
            }}>
              {i === 0 && (
                <div style={{
                  position: "absolute", top: -40, left: -40,
                  width: 180, height: 180,
                  background: "radial-gradient(circle, rgba(26,86,219,0.2), transparent)",
                  pointerEvents: "none",
                }} />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800,
                  color: "#fff", lineHeight: 1,
                  letterSpacing: "-0.025em", marginBottom: 10,
                }}
              >
                {s.val}
              </motion.div>
              <div style={{
                fontSize: 14, fontWeight: 600,
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4,
              }}>{s.label}</div>
              <div style={{
                fontSize: 12, color: "rgba(255,255,255,0.28)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}