"use client";

import Link from "next/link";
import { useState } from "react";

const industries = [
  {
    label: "Hospital / Healthcare",
    sub: "HIPAA FOCUS",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="10" y1="10" x2="14" y2="10" />
      </svg>
    ),
  },
  {
    label: "Bank / Financial",
    sub: "PCI + SWIFT",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
  {
    label: "Fintech / Payments",
    sub: "PCI + SOC 2",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    label: "SaaS / Enterprise",
    sub: "SOC 2 + ISO",
    icon: (color: string) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden hero-pad" style={{ background: "#f8fafd" }}>
      <div className="container-page">
        <div className="hero-grid">

          {/* ── LEFT: Copy ── */}
          <div style={{ maxWidth: "590px" }}>

            {/* Badge pill — live-indicator style, matches ON TRACK pill */}
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
              {/* Pulsing "online" dot — solid centre + ping ripple behind it */}
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

            {/* Headline — responsive via CSS class */}
            <h1 className="hero-h1">
              Compliance
              <br />
              at{" "}
              <span style={{ color: "#0d6ee6" }}>Institutional</span>
              <br />
              Scale.
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

          {/* ── RIGHT: Step 1 card ── */}
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
              {/* Header row */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#0c1723" }}>
                  Step 1 — Identify Organization
                </span>
                <span
                  className="font-mono uppercase tracking-widest"
                  style={{ fontSize: "11px", color: "#616a75" }}
                >
                  SYSTEM_INIT_V2.0
                </span>
              </div>

              {/* 2×2 industry grid */}
              <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                {industries.map((ind, i) => {
                  const isSelected = selected === i;
                  return (
                    <button
                      key={ind.label}
                      onClick={() => setSelected(i)}
                      className="flex items-start text-left"
                      style={{
                        gap: "10px",
                        borderRadius: "12px",
                        padding: "14px",
                        border: isSelected
                          ? "1.5px solid #0d6ee6"
                          : "0.67px solid rgba(12,23,35,0.12)",
                        background: isSelected ? "#f0f6ff" : "transparent",
                        boxShadow: isSelected
                          ? "0 0 0 3px rgba(13,110,230,0.1)"
                          : "none",
                        cursor: "pointer",
                        transition: "border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease",
                      }}
                    >
                      {/* Icon box */}
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: isSelected ? "#ddeafe" : "#edf2f8",
                        }}
                      >
                        {ind.icon(isSelected ? "#0d6ee6" : "#616a75")}
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span
                          style={{ fontSize: "13px", fontWeight: 700, color: "#0c1723", lineHeight: "1.3" }}
                        >
                          {ind.label}
                        </span>
                        <span
                          className="font-mono uppercase tracking-widest"
                          style={{ fontSize: "9px", color: "#0d6ee6" }}
                        >
                          {ind.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Continue button */}
              <button
                className="w-full flex items-center justify-center font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
                style={{
                  background: "#0c1723",
                  borderRadius: "10px",
                  height: "44px",
                  fontSize: "14px",
                  opacity: selected !== null ? 1 : 0.5,
                  gap: "6px",
                }}
              >
                Continue
                <span style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease",
                  transform: selected !== null ? "translateX(0)" : "none",
                }}>→</span>
              </button>

              {/* Caption */}
              <p
                className="text-center font-mono uppercase tracking-widest"
                style={{ fontSize: "9px", color: "#616a75" }}
              >
                ~ 90 SECONDS TO YOUR FIRST COMPLIANCE ROADMAP
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
