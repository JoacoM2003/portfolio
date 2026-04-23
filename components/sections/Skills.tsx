"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Lenguajes",
    icon: "</>",
    color: "#60a5fa",
    border: "rgba(59,130,246,0.25)",
    skills: ["Python", "SQL"],
  },
  {
    label: "Backend",
    icon: "⚡",
    color: "#34d399",
    border: "rgba(16,185,129,0.25)",
    skills: ["FastAPI", "Django", "Flask", "SQLAlchemy", "Pydantic", "Alembic"],
  },
  {
    label: "Bases de Datos",
    icon: "🗄️",
    color: "#93c5fd",
    border: "rgba(59,130,246,0.25)",
    skills: ["PostgreSQL", "Modelado relacional", "Migraciones"],
  },
  {
    label: "Infraestructura",
    icon: "🐳",
    color: "#22d3ee",
    border: "rgba(6,182,212,0.25)",
    skills: ["Docker", "Docker Compose", "GitHub Actions", "Linux"],
  },
  {
    label: "Deploy",
    icon: "🚀",
    color: "#6ee7b7",
    border: "rgba(16,185,129,0.2)",
    skills: ["Render", "Vercel", "Neon"],
  },
  {
    label: "Otros",
    icon: "✦",
    color: "#c084fc",
    border: "rgba(168,85,247,0.25)",
    skills: ["JWT", "RBAC", "REST/OpenAPI", "Pandas", "NumPy", "Git"],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      style={{
        padding: "6rem 1.5rem",
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.85rem", borderRadius: "999px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Stack
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 0.75rem" }}>
            Habilidades Técnicas
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7, margin: 0 }}>
            Tecnologías que uso en proyectos reales.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#111111",
                border: `1px solid ${group.border}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.1rem" }}>{group.icon}</span>
                <h3 style={{ color: group.color, fontSize: "0.9rem", fontWeight: 700, margin: 0, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {group.label}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.25rem 0.65rem",
                      borderRadius: "0.35rem",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "#e2e8f0",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "var(--font-geist-mono, monospace)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
