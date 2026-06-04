"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// ── Framework demo data ────────────────────────────────────────────────────────
const frameworks = [
  {
    label: "ISO 27001",
    sub: "INFOSEC",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "PCI-DSS",
    sub: "PAYMENTS",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    label: "SOC 2",
    sub: "TRUST",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "Custom Framework",
    sub: "CUSTOM",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6" r="2" />
        <line x1="2" y1="6" x2="6" y2="6" />
        <line x1="10" y1="6" x2="22" y2="6" />
        <circle cx="16" cy="12" r="2" />
        <line x1="2" y1="12" x2="14" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <circle cx="10" cy="18" r="2" />
        <line x1="2" y1="18" x2="8" y2="18" />
        <line x1="12" y1="18" x2="22" y2="18" />
      </svg>
    ),
  },
];

const AUTO_INTERVAL = 2500; // ms between auto-advances
const RESUME_DELAY  = 5000; // ms of inactivity before resuming

export default function Hero() {
  const [selected, setSelected]           = useState(0);
  const [linesVisible, setLinesVisible]   = useState(false);
  const isPausedRef    = useRef(false);
  const intervalRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedRef     = useRef(false);

  // ── Hero text stagger entrance ─────────────────────────────────────────────
  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedRef.current) {
      setLinesVisible(true);
      return;
    }
    // Double rAF: ensures opacity:0 state is painted before the transition fires
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setLinesVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // ── Framework auto-rotation ────────────────────────────────────────────────
  useEffect(() => {
    // Start after a brief delay so it doesn't compete with the text entrance
    const kickoff = setTimeout(() => {
      if (reducedRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          setSelected((prev) => (prev + 1) % frameworks.length);
        }
      }, AUTO_INTERVAL);
    }, 1200);

    return () => {
      clearTimeout(kickoff);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Manual selection — pauses auto-rotation, resumes after RESUME_DELAY
  const handleSelect = (i: number) => {
    setSelected(i);
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, RESUME_DELAY);
  };

  // Returns stagger-aware transition style for each hero headline line
  const lineStyle = (delayMs: number): React.CSSProperties => ({
    display: "block",
    opacity:   linesVisible ? 1 : 0,
    transform: linesVisible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
  });

  return (
    <section className="relative overflow-hidden hero-pad" style={{ background: "#f8fafd" }}>
      <div className="container-page">
        <div className="hero-grid">

          {/* ── LEFT: Copy ── */}
          <div style={{ maxWidth: "590px" }}>

            {/* Badge pill — live-indicator */}
            <div
              className="inline-flex items-center gap-2 font-mono font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(13,110,230,0.08)",
                color: "#0d6ee6",
                borderRadius: "999px",
                padding: "5px 14px 5px 10px",
                fontSize: "10px",
              }}
            >
              <span className="relative inline-flex flex-shrink-0" style={{ width: "8px", height: "8px" }}>
                <span
                  className="animate-ping absolute inline-flex rounded-full"
                  style={{ width: "100%", height: "100%", background: "rgba(13,110,230,0.45)" }}
                />
                <span
                  className="relative inline-flex rounded-full"
                  style={{ width: "8px", height: "8px", background: "#0d6ee6" }}
                />
              </span>
              Security First · Enterprise · Institutional
            </div>

            {/* Headline — three lines, staggered entrance */}
            <h1 className="hero-h1">
              <span style={lineStyle(0)}>Compliance</span>
              <span style={lineStyle(150)}>
                at{" "}<span style={{ color: "#0d6ee6" }}>Institutional</span>
              </span>
              <span style={lineStyle(300)}>Scale.</span>
            </h1>

            {/* Description */}
            <p
              className="text-[16px] sm:text-[18px]"
              style={{
                fontWeight: 400,
                color: "#616a75",
                lineHeight: "28px",
                marginTop: "20px",
              }}
            >
              ComplyX automates the burden of audit readiness. One platform to
              manage HIPAA, PCI‑DSS, ISO&nbsp;27001, SWIFT, NIST, SOC&nbsp;2
              and any custom framework — across your entire organization.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3" style={{ marginTop: "28px" }}>
              <Link
                href="#cta"
                className="btn-cta-primary inline-flex items-center justify-center gap-2 text-white font-bold"
                style={{
                  background: "#0d6ee6",
                  borderRadius: "10px",
                  padding: "14px 24px",
                  height: "52px",
                  fontSize: "15px",
                  boxShadow: "0px 10px 30px -12px rgba(13,110,230,0.22)",
                }}
              >
                Create company profile&nbsp;<span className="cta-arrow">→</span>
              </Link>
              <Link
                href="#frameworks"
                className="btn-cta-outline inline-flex items-center justify-center gap-2 font-bold"
                style={{
                  background: "#ffffff",
                  color: "#0c1723",
                  border: "0.67px solid rgba(12,23,35,0.12)",
                  borderRadius: "10px",
                  padding: "14px 24px",
                  height: "52px",
                  fontSize: "15px",
                }}
              >
                Explore frameworks
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2" style={{ marginTop: "24px" }}>
              {["SOC 2 Type 2", "ISO 27001 certified", "HIPAA aligned"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <svg
                    width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#0d6ee6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: "13px", color: "#616a75" }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Framework selection demo ── */}
          <div className="w-full lg:max-w-[540px] lg:justify-self-end">
            <div
              className="bg-white flex flex-col w-full"
              style={{
                borderRadius: "18px",
                padding: "24px",
                boxShadow: "0 0 0 1px rgba(12,23,35,0.05), 0px 10px 30px -12px rgba(13,110,230,0.22)",
                gap: "16px",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#0c1723" }}>
                  Select Compliance Framework
                </span>
                <span
                  className="font-mono uppercase tracking-widest"
                  style={{ fontSize: "11px", color: "#616a75" }}
                >
                  FRAMEWORK_SELECT
                </span>
              </div>

              {/* 2×2 framework grid */}
              <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                {frameworks.map((fw, i) => {
                  const isActive = selected === i;
                  return (
                    <button
                      key={fw.label}
                      onClick={() => handleSelect(i)}
                      className="flex items-start text-left"
                      style={{
                        gap: "10px",
                        borderRadius: "12px",
                        padding: "14px",
                        border: isActive
                          ? "1.5px solid #0d6ee6"
                          : "0.67px solid rgba(12,23,35,0.12)",
                        background: isActive ? "#f0f6ff" : "transparent",
                        boxShadow: isActive
                          ? "0 0 0 3px rgba(13,110,230,0.08)"
                          : "none",
                        cursor: "pointer",
                        transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                      }}
                    >
                      {/* Icon container */}
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: isActive ? "#ddeafe" : "#edf2f8",
                          transition: "background 0.25s ease",
                        }}
                      >
                        {fw.icon(isActive ? "#0d6ee6" : "#616a75")}
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#0c1723", lineHeight: "1.3" }}>
                          {fw.label}
                        </span>
                        <span
                          className="font-mono uppercase tracking-widest"
                          style={{ fontSize: "9px", color: "#0d6ee6" }}
                        >
                          {fw.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Continue CTA */}
              <button
                className="w-full flex items-center justify-center font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
                style={{
                  background: "#0c1723",
                  borderRadius: "10px",
                  height: "44px",
                  fontSize: "14px",
                  gap: "6px",
                }}
              >
                Continue
                <span style={{ display: "inline-block" }}>→</span>
              </button>

              {/* Caption */}
              <p
                className="text-center font-mono uppercase tracking-widest"
                style={{ fontSize: "9px", color: "#616a75" }}
              >
                ~ GET COMPLIANT IN UNDER 30 SECONDS
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
