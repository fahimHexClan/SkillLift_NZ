"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section style={{
      padding: "100px 48px",
      background: "#fff",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            background: "#eff6ff",
            border: "1px solid #dbeafe",
            marginBottom: 20,
          }}>
            <MapPin size={14} color="#1a56db" />
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#1a56db",
              letterSpacing: "0.08em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              FIND US
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Visit Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #1a56db, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Locations
            </span>
          </h2>
        </motion.div>

        {/* Map Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}>
          {/* Sri Lanka */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(15,23,42,0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Map */}
            <div style={{
              width: "100%",
              height: 400,
              background: "#f8fafc",
              position: "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.9!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDc5wrA1NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Info Card */}
            <div style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: 16,
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 10px 30px rgba(15,23,42,0.15)",
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #1a56db, #3b82f6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <MapPin size={22} color="#fff" strokeWidth={2} />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 8,
                  }}>
                    Sri Lanka Office
                  </h3>

                  <p style={{
                    fontSize: 14,
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    309, Galle Road<br />
                    Panadura, Sri Lanka
                  </p>

                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "#1a56db",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Zealand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(15,23,42,0.1)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Map */}
            <div style={{
              width: "100%",
              height: 400,
              background: "#f8fafc",
              position: "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0!2d174.7!3d-36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiUyAxNzTCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2snz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Info Card */}
            <div style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: 16,
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 10px 30px rgba(15,23,42,0.15)",
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <MapPin size={22} color="#fff" strokeWidth={2} />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 8,
                  }}>
                    New Zealand Office
                  </h3>

                  <p style={{
                    fontSize: 14,
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Mount Albert<br />
                    Auckland, New Zealand
                  </p>

                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "#7c3aed",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
