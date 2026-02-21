"use client";
import { motion } from "framer-motion";
import { GraduationCap, Video, Wallet, Infinity } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    num: "01",
    title: "Expert Instructors",
    desc: "Learn from industry-verified trainers with real-world experience across technology, business, and creative disciplines.",
    accent: "#1a56db",
  },
  {
    icon: Video,
    num: "02",
    title: "Video-First Learning",
    desc: "High-quality recorded sessions with downloadable resources, available on demand — built around your schedule.",
    accent: "#0ea5e9",
  },
  {
    icon: Wallet,
    num: "03",
    title: "Transparent Pricing",
    desc: "Honest, upfront course pricing with no hidden fees. Invest in your future without financial stress.",
    accent: "#1a56db",
  },
  {
    icon: Infinity,
    num: "04",
    title: "Lifetime LMS Access",
    desc: "Every course purchase grants permanent access to all content, future updates, and community resources.",
    accent: "#0ea5e9",
  },
];

export default function Benefits() {
  return (
    <section style={{ padding: "120px 48px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div className="eyebrow">Why SkillLift</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 700,
              color: "#0a0f1e", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 480,
            }}>
              Built for Learners Who{" "}
              <em style={{ fontStyle: "italic", color: "#1a56db" }}>Take Their Future Seriously</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, maxWidth: 340, fontWeight: 400 }}>
            Every feature of our platform is designed to remove barriers between you and the career you want.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "#f1f5f9", borderRadius: 20, overflow: "hidden" }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ background: "#0a0f1e", transition: { duration: 0.2 } }}
                style={{
                  background: "#fff", padding: "48px 36px",
                  position: "relative", overflow: "hidden",
                  transition: "background 0.25s",
                  cursor: "default",
                }}
                className="benefit-card-pro"
              >
                {/* Number watermark */}
                <div style={{
                  position: "absolute", top: -12, right: 20,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 80, fontWeight: 800,
                  color: "rgba(15,23,42,0.04)",
                  lineHeight: 1, pointerEvents: "none",
                  userSelect: "none",
                }}>{b.num}</div>

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28, transition: "background 0.25s",
                }}>
                  <Icon size={22} color={b.accent} strokeWidth={1.75} />
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 19, fontWeight: 700, marginBottom: 14,
                  color: "#0a0f1e", lineHeight: 1.3,
                  transition: "color 0.25s",
                }}>{b.title}</h3>

                <p style={{
                  fontSize: 13.5, color: "#64748b", lineHeight: 1.75,
                  transition: "color 0.25s",
                }}>{b.desc}</p>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 3, background: `linear-gradient(to right, ${b.accent}, transparent)`,
                  opacity: 0, transition: "opacity 0.25s",
                }} className="benefit-bottom-bar" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .benefit-card-pro:hover h3 { color: #fff !important; }
        .benefit-card-pro:hover p { color: rgba(255,255,255,0.5) !important; }
        .benefit-card-pro:hover > div:first-of-type { background: rgba(255,255,255,0.08) !important; }
        .benefit-card-pro:hover .benefit-bottom-bar { opacity: 1 !important; }
      `}</style>
    </section>
  );
}