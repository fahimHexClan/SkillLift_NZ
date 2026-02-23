"use client";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Video, Wallet, Infinity, Award, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    desc: "Learn from industry-verified trainers with 10+ years of real-world experience across technology, business, and creative disciplines.",
    accent: "#1a56db",
    gradient: "linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)",
    features: ["Industry Certified", "Real Projects", "Mentorship"],
  },
  {
    icon: Video,
    title: "Video-First Learning",
    desc: "Premium HD recorded sessions with downloadable resources, interactive quizzes, and hands-on projects — available 24/7.",
    accent: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    features: ["HD Quality", "Downloadable", "Interactive"],
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "Honest, upfront course pricing with flexible payment plans and no hidden fees. Invest in your future with confidence.",
    accent: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
    features: ["No Hidden Fees", "Payment Plans", "Money-Back"],
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    desc: "Every course purchase grants permanent access to all content, future updates, community forums, and exclusive resources.",
    accent: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    features: ["Forever Access", "Free Updates", "Community"],
  },
];

const stats = [
  { icon: Users, value: "15,000+", label: "Active Students" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: TrendingUp, value: "4.9/5", label: "Average Rating" },
];

function BenefitCard({ b, i }: { b: typeof benefits[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = b.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#ffffff",
        borderRadius: 24,
        padding: "40px 32px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 6px rgba(15,23,42,0.03), 0 10px 25px rgba(15,23,42,0.05)",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      whileHover={{
        y: -12,
        boxShadow: "0 20px 40px rgba(15,23,42,0.12), 0 0 0 1px " + b.accent + "22",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 20% 20%, ${b.accent}08, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top gradient bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: b.gradient,
      }} />

      {/* Icon with gradient background */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: b.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          boxShadow: `0 8px 24px ${b.accent}30`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Icon size={32} color="#ffffff" strokeWidth={2} />
      </motion.div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 12,
        color: "#0f172a",
        lineHeight: 1.3,
        letterSpacing: "-0.02em",
        position: "relative",
        zIndex: 1,
      }}>
        {b.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 14.5,
        color: "#64748b",
        lineHeight: 1.7,
        marginBottom: 24,
        flex: 1,
        position: "relative",
        zIndex: 1,
      }}>
        {b.desc}
      </p>

      {/* Features list */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
        zIndex: 1,
      }}>
        {b.features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 + idx * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CheckCircle2 size={16} color={b.accent} strokeWidth={2.5} />
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#475569",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Decorative corner element */}
      <div style={{
        position: "absolute",
        bottom: -20,
        right: -20,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: b.gradient,
        opacity: 0.05,
        pointerEvents: "none",
      }} />
    </motion.div>
  );
}

function StatCard({ stat, i }: { stat: typeof stats[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        borderRadius: 20,
        padding: "28px 24px",
        border: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
      }}
    >
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        background: "linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={26} color="#ffffff" strokeWidth={2} />
      </div>
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 32,
          fontWeight: 700,
          color: "#0f172a",
          lineHeight: 1,
          marginBottom: 6,
        }}>
          {stat.value}
        </div>
        <div style={{
          fontSize: 13,
          color: "#64748b",
          fontWeight: 600,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  const hRef = useRef(null);
  const hView = useInView(hRef, { once: true });

  return (
    <section style={{
      padding: "120px 48px",
      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.3,
        pointerEvents: "none",
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,86,219,0.08), transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "5%",
        right: "-5%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div ref={hRef} style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)",
              border: "1px solid #e0e7ff",
              marginBottom: 24,
            }}
          >
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)",
            }} />
            <span style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: "#1a56db",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Why Choose SkillLift
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={hView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Everything You Need to{" "}
            <span style={{
              background: "linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Succeed
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 17,
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: 680,
              margin: "0 auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Join thousands of learners who have transformed their careers with our comprehensive learning platform
          </motion.p>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          marginBottom: 64,
        }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} i={i} />
          ))}
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
        }}>
          {benefits.map((b, i) => (
            <BenefitCard key={i} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
