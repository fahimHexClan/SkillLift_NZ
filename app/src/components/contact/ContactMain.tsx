"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    items: [
      { label: "Sri Lanka", value: "+94 713 680 690" },
      { label: "New Zealand", value: "+64 20 454 8250" },
    ],
    color: "#1a56db",
  },
  {
    icon: Mail,
    title: "Email Us",
    items: [
      { label: "General", value: "info@skilllift.lk" },
      { label: "Support", value: "support@skilllift.lk" },
    ],
    color: "#7c3aed",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    items: [
      { label: "Address", value: "309, Galle Road" },
      { label: "City", value: "Panadura, Sri Lanka" },
    ],
    color: "#0ea5e9",
  },
  {
    icon: Clock,
    title: "Working Hours",
    items: [
      { label: "Mon - Fri", value: "9:00 AM - 6:00 PM" },
      { label: "Saturday", value: "10:00 AM - 4:00 PM" },
    ],
    color: "#10b981",
  },
];

export default function ContactMain() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1.5px solid #e2e8f0",
    background: "#fff",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 14,
    color: "#0f172a",
    outline: "none",
    transition: "all 0.3s",
  };

  return (
    <section style={{
      padding: "100px 48px",
      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Contact Info Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 80,
        }}>
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px ${info.color}20`,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.05)",
                  cursor: "pointer",
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${info.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={24} color={info.color} strokeWidth={2} />
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: 16,
                }}>
                  {info.title}
                </h3>

                {info.items.map((item, j) => (
                  <div key={j} style={{ marginBottom: 8 }}>
                    <div style={{
                      fontSize: 12,
                      color: "#94a3b8",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: 2,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#475569",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Form Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 60,
          alignItems: "start",
        }}>
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              <MessageSquare size={14} color="#1a56db" />
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1a56db",
                letterSpacing: "0.08em",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                SEND MESSAGE
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}>
              Have a Question?{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a56db, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                We're Here
              </span>
            </h2>

            <p style={{
              fontSize: 16,
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: 32,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you!
            </p>

            {/* Image */}
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Contact support"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "48px 44px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 40px rgba(15,23,42,0.08)",
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  boxShadow: "0 10px 30px rgba(16,185,129,0.3)",
                }}>
                  <CheckCircle size={40} color="#fff" strokeWidth={2.5} />
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: 12,
                }}>
                  Message Sent!
                </h3>

                <p style={{
                  fontSize: 15,
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", phone: "", message: "" });
                  }}
                  style={{
                    padding: "14px 32px",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #1a56db, #7c3aed)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: "0 4px 16px rgba(26,86,219,0.3)",
                  }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginBottom: 20,
                }}>
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Full Name *
                    </label>
                    <input
                      style={inputStyle}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a56db";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Email Address *
                    </label>
                    <input
                      style={inputStyle}
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a56db";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginBottom: 20,
                }}>
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Phone Number
                    </label>
                    <input
                      style={inputStyle}
                      placeholder="+94 712 345 678"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a56db";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Subject
                    </label>
                    <input
                      style={inputStyle}
                      placeholder="Course Inquiry"
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1a56db";
                        e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: 8,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Message *
                  </label>
                  <textarea
                    style={{ ...inputStyle, height: 140, resize: "none" }}
                    placeholder="Tell us about your inquiry..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a56db";
                      e.target.style.boxShadow = "0 0 0 3px rgba(26,86,219,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(26,86,219,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 12,
                    background: loading ? "#94a3b8" : "linear-gradient(135deg, #1a56db, #7c3aed)",
                    color: "#fff",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    boxShadow: "0 4px 16px rgba(26,86,219,0.3)",
                  }}
                >
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
