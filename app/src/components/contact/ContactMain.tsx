"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare, User, AtSign, Hash, Smartphone } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call / WhatsApp Us",
    items: [
      { label: "New Zealand", value: "+64 20 454 8250" },
      { label: "Sri Lanka", value: "+94 71 368 0690" },
    ],
    color: "#1a56db",
  },
  {
    icon: Mail,
    title: "Email Us",
    items: [
      { label: "General", value: "info@skilllift.co.nz" },
      { label: "Admin", value: "admin@skilllift.co.nz" },
    ],
    color: "#7c3aed",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    items: [
      { label: "New Zealand", value: "Auckland (online service)" },
      { label: "Sri Lanka", value: "309 Galle Road, Panadura" },
    ],
    color: "#0ea5e9",
  },
  {
    icon: Clock,
    title: "Working Hours",
    items: [
      { label: "Mon - Sat (NZ)", value: "9:00 AM - 7:00 PM" },
      { label: "Sunday", value: "Closed (bookings by arrangement)" },
    ],
    color: "#10b981",
  },
];

export default function ContactMain() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", phone: "", country: "", learningOption: "", message: "" });
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

  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section style={{
      padding: "100px 48px",
      background: "#f0f7ff",
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
              Have a question about the course, personal coaching, group classes or enrolment? Send us a message and our team will help you choose the right next step. We usually respond within one business day.
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
                  Thank you for contacting SkillLift Education. Your message has been received, and our team will respond within one business day.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", phone: "", country: "", learningOption: "", message: "" });
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
                {/* Name & Email */}
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
                      color: "#334155",
                      marginBottom: 10,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Full Name *
                    </label>
                    <div style={{ position: "relative" }}>
                      <User size={18} color="#64748b" strokeWidth={2} style={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }} />
                      <input
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          width: "100%",
                          padding: "14px 16px 14px 46px",
                          borderRadius: 10,
                          border: focused === "name" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                          background: "#ffffff",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#1e293b",
                          outline: "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: 10,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Email Address *
                    </label>
                    <div style={{ position: "relative" }}>
                      <Mail size={18} color="#64748b" strokeWidth={2} style={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }} />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          width: "100%",
                          padding: "14px 16px 14px 46px",
                          borderRadius: 10,
                          border: focused === "email" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                          background: "#ffffff",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#1e293b",
                          outline: "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Subject */}
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
                      color: "#334155",
                      marginBottom: 10,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Phone Number
                    </label>
                    <div style={{ position: "relative" }}>
                      <Phone size={18} color="#64748b" strokeWidth={2} style={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }} />
                      <input
                        placeholder="+94 712 345 678"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        style={{
                          width: "100%",
                          padding: "14px 16px 14px 46px",
                          borderRadius: 10,
                          border: focused === "phone" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                          background: "#ffffff",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#1e293b",
                          outline: "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: 10,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Subject
                    </label>
                    <div style={{ position: "relative" }}>
                      <MessageSquare size={18} color="#64748b" strokeWidth={2} style={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }} />
                      <select
                        value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        style={{
                          width: "100%",
                          padding: "14px 16px 14px 46px",
                          borderRadius: 10,
                          border: focused === "subject" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                          background: "#ffffff",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: form.subject ? "#1e293b" : "#94a3b8",
                          outline: "none",
                          transition: "all 0.2s ease",
                          appearance: "none",
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="Course Inquiry">Course Inquiry</option>
                        <option value="Personal Coaching">Personal Coaching</option>
                        <option value="Group Class">Group Class</option>
                        <option value="Payment and Enrolment">Payment and Enrolment</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Country & Preferred Learning Option */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginBottom: 20,
                }}>
                  <div>
                    <label style={{
                      display: "block", fontSize: 13, fontWeight: 600, color: "#334155",
                      marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Country
                    </label>
                    <input
                      placeholder="e.g. New Zealand"
                      value={form.country}
                      onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                      onFocus={() => setFocused("country")}
                      onBlur={() => setFocused(null)}
                      style={{
                        width: "100%", padding: "14px 16px", borderRadius: 10,
                        border: focused === "country" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                        background: "#ffffff", fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 14, fontWeight: 500, color: "#1e293b", outline: "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block", fontSize: 13, fontWeight: 600, color: "#334155",
                      marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      Preferred Learning Option
                    </label>
                    <select
                      value={form.learningOption}
                      onChange={(e) => setForm((f) => ({ ...f, learningOption: e.target.value }))}
                      onFocus={() => setFocused("learningOption")}
                      onBlur={() => setFocused(null)}
                      style={{
                        width: "100%", padding: "14px 16px", borderRadius: 10,
                        border: focused === "learningOption" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                        background: "#ffffff", fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 14, fontWeight: 500,
                        color: form.learningOption ? "#1e293b" : "#94a3b8",
                        outline: "none", transition: "all 0.2s ease", appearance: "none",
                      }}
                    >
                      <option value="">Select an option</option>
                      <option value="Personal Coaching">Personal Coaching</option>
                      <option value="Small-Group Class">Small-Group Class</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: 10,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Message *
                  </label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare size={18} color="#64748b" strokeWidth={2} style={{
                      position: "absolute",
                      left: 16,
                      top: 16,
                      pointerEvents: "none",
                    }} />
                    <textarea
                      placeholder="Tell us about your inquiry..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      style={{
                        width: "100%",
                        padding: "14px 16px 14px 46px",
                        borderRadius: 10,
                        border: focused === "message" ? "1.5px solid #2563eb" : "1.5px solid #cbd5e1",
                        background: "#ffffff",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#1e293b",
                        outline: "none",
                        transition: "all 0.2s ease",
                        height: 140,
                        resize: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 24 }}>
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
                  />
                  <label htmlFor="consent" style={{
                    fontSize: 12.5, color: "#64748b", lineHeight: 1.55,
                    fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
                  }}>
                    I agree that SkillLift Education may use my details to respond to this enquiry in accordance with the Privacy Policy.
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 10,
                    background: loading ? "#94a3b8" : "#2563eb",
                    color: "#ffffff",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    boxShadow: loading ? "none" : "0 4px 14px rgba(37,99,235,0.25)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: 16,
                          height: 16,
                          border: "2px solid #fff",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                        }}
                      />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} strokeWidth={2} />
                    </>
                  )}
                </motion.button>

                {/* Info Text */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  marginTop: 16,
                }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#10b981",
                  }} />
                  <p style={{
                    fontSize: 13,
                    color: "#64748b",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    margin: 0,
                  }}>
                    We usually respond within one business day
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}