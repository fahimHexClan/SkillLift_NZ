"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Image as ImageIcon, Award, Users, Calendar, Heart } from "lucide-react";

const stats = [
  { icon: ImageIcon, value: "500+", label: "Total Photos", color: "#1a56db" },
  { icon: Camera, value: "50+", label: "Events Covered", color: "#7c3aed" },
  { icon: Users, value: "2000+", label: "Students Featured", color: "#0ea5e9" },
  { icon: Award, value: "100+", label: "Achievements", color: "#10b981" },
  { icon: Calendar, value: "3+", label: "Years of Memories", color: "#f59e0b" },
  { icon: Heart, value: "10K+", label: "Likes & Shares", color: "#ec4899" },
];

export default function GalleryStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      padding: "100px 48px",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            Our Gallery in{" "}
            <span style={{
              background: "linear-gradient(135deg, #1a56db, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Numbers
            </span>
          </h2>
          <p style={{
            fontSize: 17,
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Every photo captures a moment of learning, growth, and achievement
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32,
        }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px ${stat.color}20`,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.05)",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: `0 8px 24px ${stat.color}40`,
                  }}
                >
                  <Icon size={32} color="#fff" strokeWidth={2} />
                </motion.div>

                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {stat.value}
                </div>

                <div style={{
                  fontSize: 15,
                  color: "#64748b",
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
