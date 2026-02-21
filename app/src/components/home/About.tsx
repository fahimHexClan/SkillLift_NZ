"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe } from "lucide-react";

const pillars = [
  { icon: Award, label: "Certified Programs", desc: "Internationally recognized qualifications" },
  { icon: Users, label: "Community Learning", desc: "Cohort-based with peer support" },
  { icon: Globe, label: "Global Reach", desc: "NZ and Sri Lanka campuses" },
];

export default function About() {
  return (
    <section style={{ padding: "120px 48px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>

          {/* LEFT — Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            style={{ position: "relative", height: 560 }}
          >
            {/* Main large panel */}
            <div style={{
              position: "absolute", left: 0, top: 0,
              width: "72%", height: "78%",
              background: "linear-gradient(155deg, #0d1b38 0%, #1a2035 100%)",
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 40px 80px rgba(10,15,30,0.2)",
            }}>
              {/* Abstract geometric decoration */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 200, height: 200, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(26,86,219,0.3), transparent)",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(to top, rgba(26,86,219,0.12), transparent)",
              }} />
              {/* Content inside */}
              <div style={{ padding: 40, position: "relative", zIndex: 1 }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
                  color: "#0ea5e9", textTransform: "uppercase", marginBottom: 16,
                }}>Our Approach</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22, fontWeight: 700, color: "#fff",
                  lineHeight: 1.4, maxWidth: 260,
                }}>
                  "Practical skills that employers actually need"
                </p>
              </div>
              {/* Grid pattern overlay */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
                <defs>
                  <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)"/>
              </svg>
            </div>

            {/* Secondary panel */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", right: 0, bottom: 0,
                width: "52%", height: "52%",
                background: "#fff",
                borderRadius: 20, padding: 32,
                boxShadow: "0 24px 64px rgba(10,15,30,0.14)",
                border: "1px solid rgba(226,232,240,0.6)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
            >
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
                color: "#1a56db", textTransform: "uppercase",
              }}>Student Outcome</div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42, fontWeight: 800, color: "#0a0f1e", lineHeight: 1,
                }}>94%</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 6, fontWeight: 500 }}>
                  Employment rate within 6 months
                </div>
              </div>
              {/* Progress bar */}
              <div style={{ height: 4, background: "#e2e8f0", borderRadius: 100, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "94%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  style={{ height: "100%", background: "linear-gradient(to right, #1a56db, #0ea5e9)", borderRadius: 100 }}
                />
              </div>
            </motion.div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute", bottom: "52%", right: "28%",
                background: "#0a0f1e", borderRadius: 12,
                padding: "14px 20px",
                boxShadow: "0 16px 40px rgba(10,15,30,0.25)",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                2,000+ Active Learners
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }}
          >
            <div className="eyebrow">About SkillLift</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700,
              color: "#0a0f1e", lineHeight: 1.15, letterSpacing: "-0.02em",
              marginBottom: 24,
            }}>
              Elevating Careers Across{" "}
              <em style={{ fontStyle: "italic", color: "#1a56db" }}>Two Nations</em>
            </h2>

            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 16 }}>
              SkillLift Education was founded with one conviction: that quality career training
              should be accessible, practical, and internationally relevant. We operate across
              New Zealand and Sri Lanka, bridging the gap between learners and opportunity.
            </p>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 40 }}>
              Our instructors are practitioners — professionals who bring real industry experience
              into every lesson, ensuring what you learn is immediately applicable.
            </p>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} style={{
                    display: "flex", gap: 18, alignItems: "flex-start",
                    padding: "20px 24px", borderRadius: 12,
                    background: "#fff", border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(10,15,30,0.04)",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, background: "#eff6ff",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={18} color="#1a56db" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, marginBottom: 3 }}>
                        {p.label}
                      </div>
                      <div style={{ fontSize: 13, color: "#64748b" }}>{p.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 14 }}>
              Learn Our Story <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}