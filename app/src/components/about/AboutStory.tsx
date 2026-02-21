"use client";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Globe } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Success Mission",
    desc: "To deliver practical, high-quality training that helps every student achieve their personal, academic, and professional goals.",
  },
  {
    icon: Eye,
    title: "Our Learning Vision",
    desc: "To become Sri Lanka's most trusted platform for skill development, offering modern courses that empower learners to grow and succeed.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operating across New Zealand and Sri Lanka, we bridge borders to bring world-class education to ambitious learners.",
  },
];

export default function AboutStory() {
  return (
    <section style={{ padding: "120px 48px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 100, alignItems: "center",
        }}>

          {/* LEFT — Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", height: 560 }}
          >
            {/* Large photo panel — student with backpack */}
            <div style={{
              position: "absolute", left: 0, top: 0,
              width: "62%", height: "72%",
              borderRadius: 24, overflow: "hidden",
              boxShadow: "0 32px 72px rgba(10,15,30,0.18)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                alt="Students learning"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Overlay tint */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,15,30,0.3), transparent)",
              }} />
            </div>

            {/* Secondary photo — bottom right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute", right: 0, bottom: 0,
                width: "55%", height: "54%",
                borderRadius: 24, overflow: "hidden",
                boxShadow: "0 24px 56px rgba(10,15,30,0.16)",
                border: "4px solid #fff",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
                alt="Teamwork"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute", bottom: "38%", right: "30%",
                background: "#fff", borderRadius: 16,
                padding: "18px 22px",
                boxShadow: "0 20px 48px rgba(10,15,30,0.14)",
                border: "1px solid rgba(226,232,240,0.8)",
                zIndex: 5,
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32, fontWeight: 800, color: "#0a0f1e", lineHeight: 1,
              }}>94%</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Employment Rate
              </div>
            </motion.div>

            {/* Year badge */}
            <div style={{
              position: "absolute", top: 20, left: 20,
              background: "#0a0f1e", borderRadius: 12,
              padding: "12px 18px", zIndex: 5,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Est. 2022
              </span>
            </div>

            {/* Blue geometric accent */}
            <div style={{
              position: "absolute", top: "8%", right: "37%",
              width: 80, height: 80, borderRadius: "50%",
              border: "2px solid rgba(26,86,219,0.2)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: "12%", right: "33%",
              width: 48, height: 48, borderRadius: "50%",
              background: "rgba(26,86,219,0.08)",
              pointerEvents: "none",
            }} />
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow">About SkillLift Education</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700,
              color: "#0a0f1e", lineHeight: 1.12,
              letterSpacing: "-0.022em", marginBottom: 22,
            }}>
              Take Your Skills to{" "}
              <em style={{ fontStyle: "italic", color: "#1a56db" }}>the Next Level</em>
            </h2>

            <p style={{
              fontSize: 15, color: "#64748b", lineHeight: 1.82,
              marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              SkillLift Education delivers practical, career-focused training that builds
              real skills and confidence. Based in New Zealand with a Sri Lanka branch,
              we create opportunities through expert guidance.
            </p>
            <p style={{
              fontSize: 15, color: "#64748b", lineHeight: 1.82,
              marginBottom: 40, fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              From language programs to digital marketing and design, every course is
              built around real industry needs — so what you learn, you can immediately use.
            </p>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    style={{
                      display: "flex", gap: 16, alignItems: "flex-start",
                      padding: "18px 22px", borderRadius: 14,
                      background: "#f8fafc", border: "1px solid #e2e8f0",
                    }}
                  >
                    <div style={{
                      width: 42, height: 42, borderRadius: 11,
                      background: "#eff6ff", border: "1px solid rgba(26,86,219,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#1a56db" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 15, fontWeight: 700, color: "#0a0f1e", marginBottom: 4,
                      }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{p.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 14 }}>
              Learn More About Us <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}