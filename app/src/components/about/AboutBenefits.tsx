"use client";
import { motion } from "framer-motion";
import { GraduationCap, Video, Wallet, Infinity } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    num: "01",
    title: "Expert Instructors",
    desc: "Learn from industry-verified trainers with real-world experience across technology, business, and creative fields.",
    accent: "#1a56db",
  },
  {
    icon: Video,
    num: "02",
    title: "Video Lessons",
    desc: "Easy self-paced tutorials and recordings you can access anytime, anywhere — built around your schedule.",
    accent: "#1a56db",
  },
  {
    icon: Wallet,
    num: "03",
    title: "Affordable Fees",
    desc: "Premium, career-focused training at prices that work for every budget. Quality education for everyone.",
    accent: "#1a56db",
  },
  {
    icon: Infinity,
    num: "04",
    title: "Lifetime LMS Access",
    desc: "Unlimited access to all materials, updates, and recordings forever — your investment never expires.",
    accent: "#0ea5e9",
  },
];

export default function AboutBenefits() {
  return (
    <section style={{ padding: "100px 48px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>Key Benefits</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 700,
            color: "#0a0f1e", lineHeight: 1.12, letterSpacing: "-0.022em",
          }}>
            Why Choose <em style={{ fontStyle: "italic", color: "#1a56db" }}>SkillLift?</em>
          </h2>
        </motion.div>

        {/* 4-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(26,86,219,0.1)", borderColor: "#1a56db" }}
                style={{
                  background: "#fff", borderRadius: 20,
                  padding: "36px 28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(10,15,30,0.05)",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Watermark num */}
                <div style={{
                  position: "absolute", top: -8, right: 14,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 68, fontWeight: 800,
                  color: "rgba(10,15,30,0.04)",
                  lineHeight: 1, userSelect: "none",
                }}>{b.num}</div>

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: i === 3 ? "#f0f9ff" : "#eff6ff",
                  border: `1px solid ${b.accent}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon size={22} color={b.accent} strokeWidth={1.75} />
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18, fontWeight: 700,
                  color: "#0a0f1e", marginBottom: 12, lineHeight: 1.3,
                }}>{b.title}</h3>

                <p style={{
                  fontSize: 13.5, color: "#64748b",
                  lineHeight: 1.75, margin: 0,
                }}>{b.desc}</p>

                {/* Bottom bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${b.accent}, ${b.accent}44)`,
                  borderRadius: "0 0 20px 20px",
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}