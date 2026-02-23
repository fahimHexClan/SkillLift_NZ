"use client";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Award } from "lucide-react";

export default function GalleryHero() {
  return (
    <section style={{
      minHeight: "60vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      paddingTop: 120,
      paddingBottom: 60,
    }}>
      {/* Grid Pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Gradient Orbs */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,86,219,0.15), transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
        filter: "blur(90px)",
      }} />

      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 48px",
        width: "100%",
        position: "relative",
        zIndex: 10,
        textAlign: "center",
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 100,
            background: "rgba(26,86,219,0.1)",
            border: "1px solid rgba(26,86,219,0.3)",
            marginBottom: 24,
          }}
        >
          <Camera size={14} color="#1a56db" />
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#93bbfd",
            letterSpacing: "0.08em",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            OUR GALLERY
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            color: "#fff",
          }}
        >
          Moments That{" "}
          <span style={{
            background: "linear-gradient(135deg, #1a56db, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Inspire
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 40,
            maxWidth: 680,
            margin: "0 auto 40px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Explore our journey through learning, growth, and success. Every image tells a story of transformation.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: ImageIcon, value: "500+", label: "Photos" },
            { icon: Camera, value: "50+", label: "Events" },
            { icon: Award, value: "2000+", label: "Students" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(26,86,219,0.15)",
                  border: "1px solid rgba(26,86,219,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Icon size={20} color="#1a56db" strokeWidth={2} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
