"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "For any Query?",
    lines: ["LK: +94 713 680 690", "NZ: +64 20 454 8250"],
    bg: "linear-gradient(135deg, #1a56db 0%, #1d4ed8 100%)",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@skilllift.lk", "admin@skilllift.lk"],
    bg: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
  },
  {
    icon: MapPin,
    title: "Visit Anytime",
    lines: ["309, Galle Road,", "Panadura, Sri Lanka"],
    bg: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
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
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: "1.5px solid #e2e8f0",
    background: "#f8fafc",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 13.5,
    color: "#0a0f1e",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section style={{ padding: "80px 48px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* ── TOP ROW: Photo + Cards + Form ─────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 48, alignItems: "start" }}>

          {/* LEFT — Photo + info cards */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Photo */}
            <div style={{
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 24px 60px rgba(10,15,30,0.14)",
              marginBottom: -60, position: "relative", zIndex: 1,
            }}>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80"
                alt="Customer support"
                style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,15,30,0.3), transparent 60%)",
              }} />
            </div>

            {/* Three info cards - overlapping photo bottom */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, position: "relative", zIndex: 2 }}>
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: card.bg,
                      borderRadius: 16, padding: "22px 18px",
                      boxShadow: "0 12px 32px rgba(10,15,30,0.18)",
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: "rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 12,
                    }}>
                      <Icon size={18} color="#fff" strokeWidth={1.75} />
                    </div>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 8,
                    }}>{card.title}</div>
                    {card.lines.map((line, j) => (
                      <div key={j} style={{
                        fontSize: 11.5, color: "rgba(255,255,255,0.8)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1.5,
                      }}>{line}</div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "#fff", borderRadius: 24,
              padding: "48px 44px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 32px rgba(10,15,30,0.07)",
            }}
          >
            {/* Form header */}
            <div className="eyebrow" style={{ marginBottom: 12 }}>Send us email</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 32, fontWeight: 700, color: "#0a0f1e",
              letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.2,
            }}>
              Feel Free to <em style={{ fontStyle: "italic", color: "#1a56db" }}>Write</em>
            </h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: 16, padding: "48px 32px",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={48} color="#22c55e" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", phone: "", message: "" }); }}
                  className="btn-primary"
                  style={{ marginTop: 24, padding: "12px 28px", fontSize: 13 }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input
                    style={inputStyle} placeholder="Enter Name" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "#1a56db")}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                  />
                  <input
                    style={inputStyle} placeholder="Enter Email" type="email" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "#1a56db")}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input
                    style={inputStyle} placeholder="Enter Subject" value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "#1a56db")}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                  />
                  <input
                    style={inputStyle} placeholder="Enter Phone" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "#1a56db")}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                {/* Message */}
                <textarea
                  style={{ ...inputStyle, height: 130, resize: "none", marginBottom: 24 }}
                  placeholder="Enter Message"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={e => (e.target.style.borderColor = "#1a56db")}
                  onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                />

                {/* reCAPTCHA placeholder */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 24,
                  padding: "12px 16px", borderRadius: 10,
                  border: "1.5px solid #e2e8f0", background: "#f8fafc",
                }}>
                  <input type="checkbox" id="robot" style={{ width: 18, height: 18, cursor: "pointer" }} />
                  <label htmlFor="robot" style={{
                    fontSize: 13, color: "#475569",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
                  }}>I'm not a robot</label>
                  <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 32, height: 32, background: "url(https://www.gstatic.com/recaptcha/api2/logo_48.png) center/contain no-repeat" }} />
                    <div style={{ fontSize: 8, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>reCAPTCHA</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "14px 36px", fontSize: 14, opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Sending..." : (<>Send Message <Send size={14} /></>)}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}