"use client";

import { motion } from "framer-motion";

const CONTACT_CARDS = [
  {
    label: "Email",
    value: "joaco.munoz04@gmail.com",
    href: "mailto:joaco.munoz04@gmail.com",
    iconColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "JoacoM2003",
    href: "https://github.com/JoacoM2003",
    iconColor: "#e2e8f0",
    iconBg: "rgba(255,255,255,0.08)",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "joaquin-munoz-dev",
    href: "https://linkedin.com/in/joaquin-munoz-dev",
    iconColor: "#60a5fa",
    iconBg: "rgba(59,130,246,0.12)",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: "6rem 1.5rem",
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.85rem", borderRadius: "999px", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Hablemos
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 1rem" }}>
            Contacto
          </h2>

          {/* Available badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 1.1rem", borderRadius: "999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", marginBottom: "0.75rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            <span style={{ color: "#10b981", fontSize: "0.9rem", fontWeight: 600 }}>Disponible — Argentina</span>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            Disponible para trabajo, pasantías o proyectos
          </p>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem",
                background: "#111111",
                borderRadius: "0.875rem",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              whileHover={{ borderColor: "rgba(59,130,246,0.35)", y: -3 }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "0.6rem", background: card.iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: card.iconColor, flexShrink: 0 }}>
                {card.icon}
              </div>
              <div>
                <p style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 0.2rem" }}>{card.label}</p>
                <p style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 500, margin: 0, wordBreak: "break-all" }}>{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CV button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" as const }}
          style={{ textAlign: "center" }}
        >
          <a
            href="/CV Muñoz Joaquin.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 2rem",
              borderRadius: "0.6rem",
              fontWeight: 700,
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(59,130,246,0.25)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar CV
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
