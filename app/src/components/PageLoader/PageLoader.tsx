"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  minDuration?: number;
}

export default function PageLoader({ minDuration = 2000 }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const stages = [
      { target: 30, delay: 0, speed: 15 },
      { target: 60, delay: 300, speed: 25 },
      { target: 90, delay: 800, speed: 40 },
      { target: 100, delay: 1500, speed: 10 },
    ];

    stages.forEach(({ target, delay, speed }) => {
      timers.push(
        setTimeout(() => {
          const interval = setInterval(() => {
            setProgress(prev => {
              if (prev >= target) {
                clearInterval(interval);
                return prev;
              }
              return Math.min(prev + 1, target);
            });
          }, speed);
          timers.push(interval as unknown as NodeJS.Timeout);
        }, delay)
      );
    });

    timers.push(setTimeout(() => setVisible(false), minDuration + 400));

    return () => timers.forEach(t => clearTimeout(t));
  }, [minDuration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 55%, #061426 100%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
            <defs>
              <pattern id="loader-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loader-grid)"/>
          </svg>

          <div style={{
            position: "absolute", top: "-15%", right: "-10%",
            width: "55vw", height: "55vw",
            background: "radial-gradient(circle, rgba(26,86,219,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-15%", left: "-10%",
            width: "40vw", height: "40vw",
            background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", marginBottom: 48 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                width: 120, height: 120,
                borderRadius: "50%",
                border: "1.5px solid transparent",
                borderTopColor: "#1a56db",
                borderRightColor: "rgba(26,86,219,0.4)",
                position: "absolute", inset: -16,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                width: 100, height: 100,
                borderRadius: "50%",
                border: "1px solid transparent",
                borderTopColor: "#0ea5e9",
                borderLeftColor: "rgba(14,165,233,0.3)",
                position: "absolute", inset: -6,
              }}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 88, height: 88, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(26,86,219,0.3), rgba(14,165,233,0.2))",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 40px rgba(26,86,219,0.3), inset 0 0 20px rgba(26,86,219,0.1)",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(26,86,219,0.5)",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800, fontSize: 18, color: "#fff",
                  letterSpacing: "-0.03em", lineHeight: 1,
                }}>SL</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "50%",
                width: 80, height: 80,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(26,86,219,0.4), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28, fontWeight: 800, color: "#fff",
              letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6,
            }}>SkillLift</div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textTransform: "uppercase",
            }}>EDUCATION</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ width: 220 }}
          >
            <div style={{
              height: 2, background: "rgba(255,255,255,0.08)",
              borderRadius: 100, overflow: "hidden", marginBottom: 14,
            }}>
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #1a56db, #0ea5e9)",
                  borderRadius: 100,
                  width: `${progress}%`,
                  boxShadow: "0 0 8px rgba(14,165,233,0.6)",
                  transition: "width 0.15s ease-out",
                }}
              />
            </div>

            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{
                fontSize: 11, color: "rgba(255,255,255,0.3)",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                letterSpacing: "0.06em",
              }}>Loading</span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 13, fontWeight: 700,
                color: "#0ea5e9",
              }}>{progress}%</span>
            </div>
          </motion.div>

          {[
            { top: "20%", left: "15%", size: 4, delay: 0 },
            { top: "30%", right: "18%", size: 3, delay: 0.4 },
            { bottom: "25%", left: "20%", size: 5, delay: 0.8 },
            { bottom: "35%", right: "15%", size: 3, delay: 0.2 },
            { top: "65%", left: "8%", size: 2, delay: 1.1 },
            { top: "15%", right: "8%", size: 4, delay: 0.6 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: dot.top, bottom: (dot as any).bottom,
                left: dot.left, right: (dot as any).right,
                width: dot.size, height: dot.size,
                borderRadius: "50%",
                background: i % 2 === 0 ? "#1a56db" : "#0ea5e9",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
