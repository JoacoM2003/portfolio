"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Proyectos",   href: "#proyectos"   },
  { label: "Habilidades", href: "#habilidades"  },
  { label: "Sobre mí",    href: "#sobre-mi"     },
  { label: "Contacto",    href: "#contacto"     },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = ["hero", "proyectos", "habilidades", "sobre-mi", "contacto"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em",
            backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", padding: 0,
          }}
        >
          JM.
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "0.25rem" }} className="nav-desktop">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
                  border: isActive ? "1px solid rgba(59,130,246,0.3)" : "1px solid transparent",
                  borderRadius: "0.5rem",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#f1f5f9" : "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#f1f5f9";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="mailto:joaco.munoz04@gmail.com"
          className="nav-desktop"
          style={{
            padding: "0.4rem 1rem", borderRadius: "0.5rem",
            fontSize: "0.85rem", fontWeight: 600,
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            color: "#fff", textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Contactar
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: "0.5rem" }}
          aria-label="Menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(18px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: active === link.href ? "rgba(59,130,246,0.15)" : "transparent",
                border: "none", borderRadius: "0.5rem",
                padding: "0.75rem 1rem", textAlign: "left",
                color: active === link.href ? "#f1f5f9" : "#94a3b8",
                fontSize: "0.95rem", fontWeight: active === link.href ? 600 : 400,
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </header>
  );
}
