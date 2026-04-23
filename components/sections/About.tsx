"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: "3rem" }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.85rem", borderRadius: "999px", background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.22)", color: "#c084fc", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Perfil
        </div>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f1f5f9", margin: 0 }}>
          Sobre mí
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
        {/* Profile text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
              Desarrollador backend con Python especializado en APIs REST y sistemas con lógica de negocio
              compleja. He construido aplicaciones en producción con autenticación, control de acceso por roles,
              CI/CD automatizado y deploy en la nube. Estudiante avanzado de Ingeniería en Sistemas (UTN, 5to año)
              con disponibilidad inmediata.
            </p>
          </div>
        </motion.div>

        {/* Education + Languages grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.75rem" }}
          >
            <h3 style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, margin: "0 0 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#3b82f6" }}>🎓</span> Educación
            </h3>
            {/* Timeline */}
            <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
              <div style={{ position: "absolute", left: "5px", top: "8px", bottom: 0, width: "2px", background: "rgba(59,130,246,0.2)" }} />
              <div style={{ position: "absolute", left: "0", top: "8px", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #3b82f6", background: "#0a0a0a" }} />
              <div style={{ marginBottom: "0.35rem" }}>
                <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.95rem", margin: "0 0 0.2rem" }}>
                  Ingeniería en Sistemas de Información
                </p>
                <p style={{ color: "#3b82f6", fontSize: "0.85rem", fontWeight: 500, margin: "0 0 0.35rem" }}>UTN · Facultad Regional Córdoba</p>
                <p style={{ color: "#64748b", fontSize: "0.83rem", margin: 0 }}>5to año en curso · 2021 — actualidad</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.75rem" }}
          >
            <h3 style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, margin: "0 0 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>🌐</span> Idiomas
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { lang: "Español", level: "Nativo", badge: "C2", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)" },
                { lang: "Inglés", level: "Intermedio — técnico fluido", badge: "B1/B2", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)" },
              ].map((l) => (
                <div key={l.lang} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem", background: "rgba(255,255,255,0.02)", borderRadius: "0.6rem", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 0.15rem" }}>{l.lang}</p>
                    <p style={{ color: "#64748b", fontSize: "0.78rem", margin: 0 }}>{l.level}</p>
                  </div>
                  <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, color: l.color, background: l.bg, border: `1px solid ${l.border}` }}>{l.badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
