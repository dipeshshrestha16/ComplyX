"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const frameworks = [
  { category: "HEALTHCARE", name: "HIPAA",            description: "U.S. healthcare information privacy & security.", dot: "#3bb360" },
  { category: "PAYMENTS",   name: "PCI-DSS",          description: "Payment card data protection (v4.0).",            dot: "#3bb360" },
  { category: "INFOSEC",    name: "ISO 27001",        description: "International information security management.",   dot: "#3bb360" },
  { category: "BANKING",    name: "SWIFT CSP",        description: "Customer Security Programme controls.",            dot: "#3bb360" },
  { category: "FEDERAL",    name: "NIST 800-53",      description: "Federal security & privacy controls.",             dot: "#3bb360" },
  { category: "TRUST",      name: "SOC 2",            description: "Type I & II readiness with TSC mapping.",          dot: "#3bb360" },
  { category: "PRIVACY",    name: "GDPR",             description: "EU data protection regulation.",                   dot: "#3bb360" },
  { category: "HEALTHCARE", name: "HITRUST",          description: "Healthcare cybersecurity framework.",               dot: "#259cde" },
  { category: "FEDERAL",    name: "FedRAMP",          description: "U.S. cloud authorization program.",                dot: "#259cde" },
  { category: "DEFENSE",    name: "CMMC",             description: "Cybersecurity maturity for DoD supply chain.",     dot: "#259cde" },
  { category: "PRIVACY",    name: "CCPA / CPRA",      description: "California consumer privacy.",                     dot: "#259cde" },
  { category: "CUSTOM",     name: "Custom Framework", description: "Define your own controls and evidence.",           dot: "#0d6ee6", isCustom: true },
];

// Stagger constants
const STAGGER_MS  = 65;  // delay between each card
const DURATION_MS = 550; // animation duration

export default function Frameworks() {
  const [revealed,  setRevealed]  = useState(false);
  const [animDone,  setAnimDone]  = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Skip animation entirely — show all cards immediately
      setRevealed(true);
      setAnimDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();

          // After the last card finishes, clear inline styles so CSS hover takes over
          const maxDuration = (frameworks.length - 1) * STAGGER_MS + DURATION_MS + 80;
          setTimeout(() => setAnimDone(true), maxDuration);
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Inline stagger style for each card.
  // Once animDone=true the inline transform/transition are cleared so
  // the CSS .fw-card:hover transform works without conflict.
  const cardRevealStyle = (i: number): React.CSSProperties => {
    if (animDone) {
      // Only keep opacity:1; remove transform + transition to free up CSS hover
      return { opacity: 1 };
    }
    if (revealed) {
      return {
        opacity:    1,
        transform:  "translateY(0px)",
        transition: `opacity ${DURATION_MS}ms cubic-bezier(0.22,1,0.36,1) ${i * STAGGER_MS}ms, transform ${DURATION_MS}ms cubic-bezier(0.22,1,0.36,1) ${i * STAGGER_MS}ms`,
      };
    }
    // Pre-reveal hidden state
    return {
      opacity:   0,
      transform: "translateY(30px)",
    };
  };

  return (
    <section
      ref={sectionRef}
      id="frameworks"
      className="section-pad"
      style={{ background: "#f8fafd" }}
    >
      <div className="container-page">
        {/* Section header */}
        <div className="flex items-start justify-between flex-wrap gap-4" style={{ marginBottom: "40px" }}>
          <div>
            <p
              className="font-bold uppercase tracking-[0.08em]"
              style={{ fontSize: "10px", color: "#0d6ee6", marginBottom: "12px" }}
            >
              / 02 — FRAMEWORKS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.9px",
                color: "#0c1723",
                lineHeight: "1.15",
              }}
            >
              Supported control frameworks
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#616a75",
                marginTop: "12px",
                maxWidth: "480px",
              }}
            >
              12+ pre-mapped frameworks with cross-control reuse. Add your own
              bespoke framework in minutes.
            </p>
          </div>

          <Link
            href="#"
            className="flex items-center gap-1 transition-opacity duration-150 hover:opacity-70 flex-shrink-0 mt-1"
            style={{ fontSize: "14px", fontWeight: 700, color: "#0d6ee6" }}
          >
            View full catalog →
          </Link>
        </div>

        {/* Framework grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "12px" }}>
          {frameworks.map((fw, i) => (
            <div
              key={fw.name}
              className="fw-card flex flex-col cursor-pointer"
              style={{
                background:    fw.isCustom ? "#f6faff" : "#ffffff",
                border:        fw.isCustom
                  ? "0.67px solid rgba(13,110,230,0.3)"
                  : "0.67px solid rgba(12,23,35,0.12)",
                borderRadius:  "14px",
                padding:       "18px",
                minHeight:     "130px",
                ...cardRevealStyle(i),
              }}
            >
              <div className="flex items-center justify-between">
                <span className="uppercase" style={{ fontSize: "10px", color: "#616a75", letterSpacing: "0.06em" }}>
                  {fw.category}
                </span>
                <span
                  className="rounded-full flex-shrink-0"
                  style={{ width: "8px", height: "8px", background: fw.dot }}
                />
              </div>

              <h3
                style={{ fontSize: "19px", fontWeight: 700, color: "#0c1723", marginTop: "8px", lineHeight: "1.2" }}
              >
                {fw.name}
              </h3>

              <p
                style={{ fontSize: "13px", fontWeight: 400, color: "#616a75", marginTop: "4px", lineHeight: "1.5" }}
              >
                {fw.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
