const techColors: Record<string, { bg: string; text: string; border: string }> = {
  Python:          { bg: "rgba(59,130,246,0.12)",  text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  FastAPI:         { bg: "rgba(16,185,129,0.12)",  text: "#34d399", border: "rgba(16,185,129,0.25)" },
  Django:          { bg: "rgba(16,185,129,0.1)",   text: "#6ee7b7", border: "rgba(16,185,129,0.2)"  },
  PostgreSQL:      { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.2)"  },
  Docker:          { bg: "rgba(6,182,212,0.12)",   text: "#22d3ee", border: "rgba(6,182,212,0.25)"  },
  "Docker Compose":{ bg: "rgba(6,182,212,0.1)",   text: "#22d3ee", border: "rgba(6,182,212,0.2)"   },
  "GitHub Actions":{ bg: "rgba(168,85,247,0.12)", text: "#c084fc", border: "rgba(168,85,247,0.25)" },
  "Firebase Auth": { bg: "rgba(245,158,11,0.12)", text: "#fbbf24", border: "rgba(245,158,11,0.25)" },
  React:           { bg: "rgba(6,182,212,0.1)",   text: "#67e8f9", border: "rgba(6,182,212,0.2)"   },
  Pandas:          { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.2)"  },
  Cloudinary:      { bg: "rgba(245,158,11,0.1)",  text: "#fcd34d", border: "rgba(245,158,11,0.2)"  },
  SQL:             { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.2)"  },
  SQLAlchemy:      { bg: "rgba(220,38,38,0.1)",   text: "#f87171", border: "rgba(220,38,38,0.2)"   },
  Pydantic:        { bg: "rgba(16,185,129,0.1)",   text: "#6ee7b7", border: "rgba(16,185,129,0.2)"  },
  Alembic:         { bg: "rgba(245,158,11,0.1)",  text: "#fbbf24", border: "rgba(245,158,11,0.2)"  },
  Flask:           { bg: "rgba(148,163,184,0.1)", text: "#94a3b8", border: "rgba(148,163,184,0.2)" },
  Linux:           { bg: "rgba(234,179,8,0.1)",   text: "#fde047", border: "rgba(234,179,8,0.2)"   },
  Render:          { bg: "rgba(16,185,129,0.1)",   text: "#34d399", border: "rgba(16,185,129,0.2)"  },
  Vercel:          { bg: "rgba(255,255,255,0.06)", text: "#e2e8f0", border: "rgba(255,255,255,0.12)"},
  Neon:            { bg: "rgba(16,185,129,0.1)",   text: "#6ee7b7", border: "rgba(16,185,129,0.2)"  },
  JWT:             { bg: "rgba(168,85,247,0.1)",  text: "#c084fc", border: "rgba(168,85,247,0.2)"  },
  RBAC:            { bg: "rgba(168,85,247,0.1)",  text: "#c084fc", border: "rgba(168,85,247,0.2)"  },
  "REST/OpenAPI":  { bg: "rgba(6,182,212,0.1)",   text: "#22d3ee", border: "rgba(6,182,212,0.2)"   },
  NumPy:           { bg: "rgba(59,130,246,0.1)",   text: "#60a5fa", border: "rgba(59,130,246,0.2)"  },
  Git:             { bg: "rgba(245,158,11,0.1)",  text: "#fb923c", border: "rgba(245,158,11,0.2)"  },
  Embeddings:      { bg: "rgba(168,85,247,0.1)",  text: "#c084fc", border: "rgba(168,85,247,0.2)"  },
  NLP:             { bg: "rgba(168,85,247,0.12)", text: "#a78bfa", border: "rgba(168,85,247,0.25)" },
};

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function TechBadge({ name, size = "md" }: TechBadgeProps) {
  const c = techColors[name] ?? { bg: "rgba(148,163,184,0.1)", text: "#94a3b8", border: "rgba(148,163,184,0.2)" };
  const pad = size === "sm" ? "0.15rem 0.45rem" : size === "lg" ? "0.4rem 0.9rem" : "0.25rem 0.65rem";
  const fs  = size === "sm" ? "0.7rem" : size === "lg" ? "0.9rem" : "0.78rem";

  return (
    <span
      style={{
        padding: pad,
        borderRadius: "0.35rem",
        fontSize: fs,
        fontWeight: 500,
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        fontFamily: "var(--font-geist-mono, monospace)",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
        display: "inline-block",
        lineHeight: 1.5,
      }}
    >
      {name}
    </span>
  );
}
