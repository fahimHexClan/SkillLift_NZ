"use client";
import { motion } from "framer-motion";
import { GraduationCap, Video, Wallet, Infinity, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    desc: "Learn from industry-verified trainers with real-world experience across technology, business, and creative fields.",
    features: ["Industry Certified", "10+ Years Experience", "Real-World Projects"],
  },
  {
    icon: Video,
    title: "Flexible Learning",
    desc: "Self-paced video tutorials and live sessions you can access anytime, anywhere — built around your schedule.",
    features: ["24/7 Access", "HD Video Content", "Mobile Friendly"],
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    desc: "Premium, career-focused training at prices that work for every budget. Quality education for everyone.",
    features: ["Payment Plans", "No Hidden Fees", "Money-Back Guarantee"],
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    desc: "Unlimited access to all materials, updates, and recordings forever — your investment never expires.",
    features: ["Forever Access", "Free Updates", "Community Support"],
  },
];

const stats = [
  { value: "2,000+", label: "Active Students", icon: TrendingUp, color: "#1a56db" },
  { value: "98%", label: "Success Rate", icon: CheckCircle2, color: "#10b981" },
  { value: "15+", label: "Expert Instructors", icon: GraduationCap, color: "#7c3aed" },
];

export default function About() {
  return (
    <section style={{ padding: "100px 48px", background: "#f0f7ff", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-10%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,86,219,0.05), transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 24px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
              border: "1px solid #e0e7ff",
              marginBottom: 24,
            }}
          >
            <Sparkles size={16} color="#1a56db" />
            <span style={{
              fontSize: 12,
              fontWeight: 800,
              background: "linear-gradient(135deg, #1a56db, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              WHY CHOOSE US
            </span>
          </motion.div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 3.5vw, 48px)", 
            fontWeight: 700,
            color: "#0a0f1e", 
            lineHeight: 1.12, 
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            Everything You Need to{" "}
            <em style={{ fontStyle: "italic", color: "#1a56db" }}>Succeed</em>
          </h2>
          <p style={{ 
            fontSize: 17, 
            color: "#64748b", 
            maxWidth: 680, 
            margin: "0 auto", 
            lineHeight: 1.7,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Join thousands of learners who have transformed their careers with our comprehensive platform
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 56,
        }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, boxShadow: `0 20px 40px ${stat.color}15` }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(10,15,30,0.06)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer",
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: stat.color,
                }} />

                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${stat.color}10`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <Icon size={28} color={stat.color} strokeWidth={2} />
                </div>

                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 44,
                  fontWeight: 800,
                  color: "#0a0f1e",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>{stat.value}</div>

                <div style={{
                  fontSize: 14,
                  color: "#64748b",
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 32px 64px rgba(26,86,219,0.12)",
                  borderColor: "#1a56db",
                }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(10,15,30,0.06)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    border: "1px solid #dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={28} color="#1a56db" strokeWidth={1.75} />
                </motion.div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0a0f1e",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}>{b.title}</h3>

                <p style={{
                  fontSize: 13.5,
                  color: "#64748b",
                  lineHeight: 1.75,
                  marginBottom: 20,
                  flex: 1,
                }}>{b.desc}</p>

                {/* Features */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingTop: 16,
                  borderTop: "1px solid #f1f5f9",
                }}>
                  {b.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <CheckCircle2 size={14} color="#1a56db" strokeWidth={2.5} />
                      <span style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#475569",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "#1a56db",
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
