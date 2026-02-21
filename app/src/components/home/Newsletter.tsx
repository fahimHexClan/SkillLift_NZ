"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Shield } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section style={{ padding: "0 48px 120px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 100%)",
            borderRadius: 24, overflow: "hidden",
            display: "grid", gridTemplateColumns: "1fr 1fr",
            position: "relative",
          }}
        >
          {/* Background elements */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{
              position: "absolute", top: "-30%", right: "5%",
              width: "40%", height: "180%",
              background: "radial-gradient(circle, rgba(26,86,219,0.15), transparent)",
            }} />
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
              <defs>
                <pattern id="nl-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#nl-grid)"/>
            </svg>
          </div>

          {/* Left */}
          <div style={{ padding: "72px 56px", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#0ea5e9",
            }}>
              <span style={{ width: 24, height: 2, background: "#0ea5e9", borderRadius: 2 }} />
              Stay Informed
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 36, fontWeight: 700, color: "#fff",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 18,
            }}>
              Subscribe for Updates &amp;{" "}
              <em style={{ fontStyle: "italic", color: "#93c5fd" }}>Exclusive Offers</em>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 360 }}>
              Get the latest course launches, career tips, and early enrollment discounts delivered to your inbox.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 32 }}>
              <Shield size={14} color="rgba(255,255,255,0.3)" />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                No spam. Unsubscribe at any time.
              </span>
            </div>
          </div>

          {/* Right */}
          <div style={{
            padding: "72px 56px", position: "relative", zIndex: 1,
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 14, padding: "32px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#86efac", marginBottom: 8 }}>
                  You&apos;re Subscribed
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                  Thank you — check your inbox for a welcome email.
                </div>
              </motion.div>
            ) : (
              <div>
                <label style={{
                  display: "block", fontSize: 12, fontWeight: 600,
                  color: "rgba(255,255,255,0.5)", marginBottom: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.05em",
                }}>
                  EMAIL ADDRESS
                </label>
                <div style={{ position: "relative", marginBottom: 14 }}>
                  <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && email && setSubscribed(true)}
                    style={{
                      width: "100%", padding: "16px 18px 16px 46px",
                      borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.05)",
                      color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 14, outline: "none",
                    }}
                  />
                </div>
                <button
                  onClick={() => email && setSubscribed(true)}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 14 }}
                >
                  Subscribe Now <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}