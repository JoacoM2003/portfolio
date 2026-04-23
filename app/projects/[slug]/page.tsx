"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import projects from "@/data/projects";
import TechBadge from "@/components/TechBadge";

const STATUS_STYLE: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "En producción": { bg: "rgba(16,185,129,0.1)", text: "#10b981", border: "rgba(16,185,129,0.3)", dot: "#10b981" },
  "En desarrollo":  { bg: "rgba(245,158,11,0.1)", text: "#f59e0b", border: "rgba(245,158,11,0.3)",  dot: "#f59e0b" },
  "Completado":     { bg: "rgba(148,163,184,0.1)", text: "#94a3b8", border: "rgba(148,163,184,0.2)", dot: "#94a3b8" },
};

const CAT_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  "Full Stack":     { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.3)" },
  "Backend":        { bg: "rgba(168,85,247,0.12)", text: "#c084fc", border: "rgba(168,85,247,0.3)" },
  "Backend / Data": { bg: "rgba(6,182,212,0.12)",  text: "#22d3ee", border: "rgba(6,182,212,0.3)"  },
};

export default function ProjectDetailPage() {
  const params  = useParams();
  const slug    = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? "");
  const project = projects.find((p) => p.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on escape, navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [lightboxIndex]);

  if (!project) notFound();

  const isArray = Array.isArray(project.capturas);
  const totalImgs = isArray ? (project.capturas as string[]).length : 0;

  const nextImg = () => {
    if (lightboxIndex !== null && totalImgs > 0) {
      setLightboxIndex((lightboxIndex + 1) % totalImgs);
    }
  };

  const prevImg = () => {
    if (lightboxIndex !== null && totalImgs > 0) {
      setLightboxIndex((lightboxIndex - 1 + totalImgs) % totalImgs);
    }
  };

  const st  = STATUS_STYLE[project.estado]  ?? STATUS_STYLE["Completado"];
  const cat = CAT_STYLE[project.categoria] ?? CAT_STYLE["Backend"];

  return (
    <>
      <article style={{ minHeight: "100vh", padding: "7rem 1.5rem 5rem", maxWidth: "820px", margin: "0 auto" }}>
        {/* Back */}
        <Link
          href="/#proyectos"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", color: "#64748b", fontSize: "0.88rem", fontWeight: 500, textDecoration: "none", marginBottom: "2.5rem", transition: "color 0.2s, transform 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.transform = "translateX(-4px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.transform = "translateX(0)"; }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Volver
        </Link>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            <span style={{ padding: "0.25rem 0.7rem", borderRadius: "0.35rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}>
              {project.categoria}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.25rem 0.7rem", borderRadius: "0.35rem", fontSize: "0.75rem", fontWeight: 600, background: st.bg, color: st.text, border: `1px solid ${st.border}` }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: st.dot, display: "inline-block" }} />
              {project.estado}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 1.25rem", lineHeight: 1.1 }}>
            {project.nombre}
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.75, margin: 0 }}>
            {project.descripcionCompleta}
          </p>
        </header>

        {/* Action links */}
        <div style={{ display: "flex", gap: "0.85rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.4rem", borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem", background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff", textDecoration: "none", boxShadow: "0 0 20px rgba(59,130,246,0.2)", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Demo
            </a>
          )}
          <a
            href={project.codigo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.4rem", borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Ver Código
          </a>
        </div>

        {/* Stack */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", margin: "0 0 1rem" }}>
            Stack Tecnológico
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {project.stack.map((t) => <TechBadge key={t} name={t} size="lg" />)}
          </div>
        </section>

        {/* What it solves */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", margin: "0 0 1rem" }}>
            ¿Qué resuelve?
          </h2>
          <div style={{ background: "rgba(59,130,246,0.04)", borderLeft: "3px solid #3b82f6", padding: "1.25rem 1.5rem", borderRadius: "0 0.5rem 0.5rem 0" }}>
            <p style={{ color: "#cbd5e1", fontSize: "1.02rem", lineHeight: 1.75, margin: 0 }}>
              {project.queResuelve}
            </p>
          </div>
        </section>

        {/* Technical decisions */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", margin: "0 0 1.25rem" }}>
            Decisiones Técnicas
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {project.decisionesTecnicas.map((d, i) => (
              <li key={i} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                <div style={{ minWidth: "26px", height: "26px", borderRadius: "50%", background: "rgba(6,182,212,0.12)", color: "#22d3ee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700, marginTop: "0.05rem", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        <section>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", margin: "0 0 1rem" }}>
            Capturas
          </h2>
          {isArray && totalImgs === 0 && (
            <p style={{ color: "#64748b", fontSize: "0.95rem" }}>Aún no se han añadido capturas.</p>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.85rem" }}>
            {isArray
              ? (project.capturas as string[]).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      borderRadius: "0.65rem",
                      overflow: "hidden",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.15)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <img
                      src={src}
                      alt={`${project.nombre} captura ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "0.65rem",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                  </button>
                ))
              : Array.from({ length: project.capturas as number }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: "16/9",
                      background: "#111111",
                      borderRadius: "0.65rem",
                      border: "1px dashed rgba(255,255,255,0.12)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <svg width="32" height="32" fill="none" stroke="#334155" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span style={{ color: "#334155", fontSize: "0.78rem" }}>Screenshot {i + 1}</span>
                  </div>
                ))}
          </div>
        </section>
      </article>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && isArray && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "1.5rem", alignItems: "center" }}>
            <span style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600 }}>
              {lightboxIndex + 1} / {totalImgs}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Prev Button */}
          {totalImgs > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              style={{
                position: "absolute",
                left: "2rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Main Image */}
          <img
            src={(project.capturas as string[])[lightboxIndex]}
            alt={`${project.nombre} captura ampliada`}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "0.5rem",
              boxShadow: "0 0 40px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing
          />

          {/* Next Button */}
          {totalImgs > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              style={{
                position: "absolute",
                right: "2rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
