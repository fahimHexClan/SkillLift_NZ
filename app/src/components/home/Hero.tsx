"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
    <section style={{
      minHeight: "75vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      paddingTop: 72,
    }}>
      
      {/* Grid Pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Gradient Orbs */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "50%", height: "70%", background: "radial-gradient(circle, rgba(26,86,219,0.15), transparent 70%)", filter: "blur(100px)" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: "45%", height: "65%", background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)", filter: "blur(100px)" }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 48px", width: "100%", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px", borderRadius: 100,
                background: "rgba(26,86,219,0.1)",
                border: "1px solid rgba(26,86,219,0.3)",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a56db", boxShadow: "0 0 8px #1a56db" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#93bbfd", letterSpacing: "0.05em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                2025 ADMISSIONS OPEN
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 24,
                color: "#fff",
              }}
            >
              Transform Your{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #1a56db, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Career
              </span>
              <br />
              With Expert Training
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 36,
                maxWidth: 540,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Master in-demand skills with industry-verified courses. From crypto trading to graphic design — learn from the best, on your schedule.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", gap: 16, marginBottom: 48, flexWrap: "wrap" }}
            >
              <Link href="/courses" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26,86,219,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "16px 32px", borderRadius: 12,
                    background: "linear-gradient(135deg, #1a56db, #7c3aed)",
                    color: "#fff", border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 16, fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(26,86,219,0.3)",
                  }}
                >
                  Explore Courses
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                onClick={() => setShowVideo(true)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "16px 28px", borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  color: "#fff", cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 16, fontWeight: 600,
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s",
                }}
              >
                <Play size={16} fill="#fff" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex" }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${i % 2 ? "#1a56db" : "#7c3aed"}, ${i % 2 ? "#7c3aed" : "#1a56db"})`,
                      border: "2px solid #0f172a",
                      marginLeft: i > 1 ? -10 : 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, color: "#fff",
                    }}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>2,000+ Students</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Across 2 countries</div>
                </div>
              </div>

              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>4.9/5</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* Main Image */}
            <div style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students learning"
                style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.6), transparent 50%)" }} />
            </div>

            {/* Floating Card - Instructors */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                position: "absolute", bottom: 30, left: -30,
                padding: "16px 20px", borderRadius: 16,
                background: "rgba(15,23,42,0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(26,86,219,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Users size={20} color="#1a56db" />
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif" }}>15+</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Expert Instructors</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Certified */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute", top: 30, right: -20,
                padding: "12px 18px", borderRadius: 100,
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              <Award size={18} color="#1a56db" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Certified Courses
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Video Modal */}
    <AnimatePresence>
      {showVideo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 1000,
                aspectRatio: "16/9",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <button
                onClick={() => setShowVideo(false)}
                style={{
                  position: "absolute", top: 20, right: 20, zIndex: 10,
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s",
                }}

              >
                <X size={22} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="SkillLift Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
