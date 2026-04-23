"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["Backend Developer", "Software Engineer", "Python Developer"];

const STACK_TAGS: { name: string; color: string; bg: string }[] = [
  { name: "Python",         color: "#60a5fa", bg: "rgba(59,130,246,0.12)" },
  { name: "FastAPI",        color: "#34d399", bg: "rgba(16,185,129,0.12)" },
  { name: "Django",         color: "#6ee7b7", bg: "rgba(16,185,129,0.1)"  },
  { name: "PostgreSQL",     color: "#93c5fd", bg: "rgba(59,130,246,0.1)"  },
  { name: "Docker",         color: "#22d3ee", bg: "rgba(6,182,212,0.12)"  },
  { name: "GitHub Actions", color: "#c084fc", bg: "rgba(168,85,247,0.12)" },
];

function TypewriterText() {
  const [idx, setIdx]         = useState(0);
  const [displayed, setDisp]  = useState("");
  const [deleting, setDel]    = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const cur = ROLES[idx];
    if (!deleting) {
      if (displayed.length < cur.length) {
        timer.current = setTimeout(() => setDisp(cur.slice(0, displayed.length + 1)), 75);
      } else {
        timer.current = setTimeout(() => setDel(true), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(() => setDisp(displayed.slice(0, -1)), 45);
      } else {
        setDel(false);
        setIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, deleting, idx]);

  return (
    <span>
      <span
        style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayed}
      </span>
      <span style={{ color: "#3b82f6", animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: "easeOut" } }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Glow blobs */}
      <div aria-hidden style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "500px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: "10%", right: "5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "760px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem", zIndex: 1 }}>
        {/* Available badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.9rem", borderRadius: "999px", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
          Disponible · Argentina
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
          style={{ fontSize: "clamp(2.4rem, 7vw, 4.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f1f5f9", margin: 0, lineHeight: 1.05 }}>
          Joaquín Muñoz
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
          style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em", minHeight: "2.6rem", display: "flex", alignItems: "center" }}>
          <TypewriterText />
        </motion.div>

        {/* Description */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.35}
          style={{ color: "#94a3b8", fontSize: "clamp(1rem, 2vw, 1.1rem)", lineHeight: 1.75, maxWidth: "580px", margin: 0 }}>
          Desarrollador backend con Python especializado en APIs REST y sistemas con lógica de negocio compleja.
          Proyectos en producción con FastAPI, Django, CI/CD y deploy automatizado.
        </motion.p>

        {/* Stack tags */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
          {STACK_TAGS.map((t) => (
            <span key={t.name} style={{ padding: "0.28rem 0.7rem", borderRadius: "0.4rem", fontSize: "0.8rem", fontWeight: 500, color: t.color, background: t.bg, border: `1px solid ${t.color}28`, fontFamily: "var(--font-geist-mono, monospace)" }}>
              {t.name}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => scrollTo("proyectos")}
            style={{ padding: "0.75rem 1.75rem", borderRadius: "0.6rem", fontWeight: 700, fontSize: "0.95rem", background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 0 32px rgba(59,130,246,0.28)", transition: "opacity 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            style={{ padding: "0.75rem 1.75rem", borderRadius: "0.6rem", fontWeight: 600, fontSize: "0.95rem", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
          >
            Contacto
          </button>
        </motion.div>

        {/* Social */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.65}
          style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          {[
            { href: "https://github.com/JoacoM2003", label: "GitHub", hoverColor: "#f1f5f9",
              icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
            { href: "https://linkedin.com/in/joaquin-munoz-dev", label: "LinkedIn", hoverColor: "#60a5fa",
              icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = s.hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)} }
      `}</style>
    </section>
  );
}
