"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import TechBadge from "./TechBadge";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Full Stack":     { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.3)" },
  "Backend":        { bg: "rgba(168,85,247,0.12)", text: "#c084fc", border: "rgba(168,85,247,0.3)" },
  "Backend / Data": { bg: "rgba(6,182,212,0.12)",  text: "#22d3ee", border: "rgba(6,182,212,0.3)"  },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cat = categoryColors[project.category] ?? categoryColors["Backend"];
  // Use the renamed field from the new data shape
  const p = project as unknown as {
    slug: string; nombre: string; categoria: string; estado: string;
    descripcionCorta: string; stack: string[]; demo: string | null; codigo: string;
  };

  return (
    <article
      className="project-card"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.45)";
        e.currentTarget.style.boxShadow = "0 0 32px rgba(59,130,246,0.1), 0 8px 32px rgba(0,0,0,0.4)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Category badge */}
      <span
        style={{
          alignSelf: "flex-start",
          padding: "0.2rem 0.65rem",
          borderRadius: "0.35rem",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          background: cat.bg,
          color: cat.text,
          border: `1px solid ${cat.border}`,
        }}
      >
        {p.categoria}
      </span>

      {/* Title */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", margin: 0, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
        {p.nombre}
      </h3>

      {/* Short description */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.9rem",
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {p.descripcionCorta}
      </p>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {p.stack.slice(0, 4).map((t) => <TechBadge key={t} name={t} size="sm" />)}
        {p.stack.length > 4 && (
          <span style={{ padding: "0.15rem 0.45rem", borderRadius: "0.3rem", fontSize: "0.7rem", color: "#64748b", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            +{p.stack.length - 4}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "0.6rem", marginTop: "auto" }}>
        <Link
          href={`/projects/${p.slug}`}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem",
            padding: "0.55rem 0.75rem",
            borderRadius: "0.45rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            color: "#fff",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Ver más
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              padding: "0.55rem 0.75rem",
              borderRadius: "0.45rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#94a3b8",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              textDecoration: "none",
              transition: "color 0.2s, border-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f1f5f9";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
