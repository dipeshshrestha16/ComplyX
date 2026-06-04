"use client";

import { useState, useEffect, useRef } from "react";

const companies = [
  "Northbank",
  "Mercy Health",
  "Ledgerstone",
  "Atlas Federal",
  "Vault·OS",
  "Helix Bio",
];

export default function TrustBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedRef = useRef(false);

  // ── Desktop: cycle emphasis every 2 s ────────────────────────────────────
  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedRef.current) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="bg-white overflow-hidden"
      style={{
        borderTop:    "0.67px solid rgba(12,23,35,0.12)",
        borderBottom: "0.67px solid rgba(12,23,35,0.12)",
      }}
    >
      {/* ── DESKTOP layout ─────────────────────────────────────────────────── */}
      <div className="container-page hidden sm:block">
        <div
          className="flex flex-row items-center justify-between gap-6"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {/* Label */}
          <span
            className="font-mono uppercase whitespace-nowrap flex-shrink-0"
            style={{ fontSize: "10px", letterSpacing: "1px", color: "#616a75" }}
          >
            TRUSTED BY 400+ REGULATED ORGANIZATIONS
          </span>

          {/* Divider */}
          <span
            className="flex-shrink-0"
            style={{ width: "1px", height: "16px", background: "rgba(12,23,35,0.1)" }}
          />

          {/* Company names with rotating emphasis */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
            {companies.map((name, i) => (
              <span
                key={name}
                className="select-none cursor-default whitespace-nowrap"
                style={{
                  fontSize:   "16px",
                  fontWeight: 600,
                  color:      i === activeIndex ? "#0c1723" : "#616a75",
                  opacity:    i === activeIndex ? 1 : 0.45,
                  transition: "opacity 0.65s ease, color 0.65s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE layout — label + infinite marquee ──────────────────────── */}
      <div className="sm:hidden">
        {/* Label */}
        <div className="container-page" style={{ paddingTop: "14px", paddingBottom: "10px" }}>
          <span
            className="font-mono uppercase"
            style={{ fontSize: "10px", letterSpacing: "1px", color: "#616a75" }}
          >
            TRUSTED BY 400+ REGULATED ORGANIZATIONS
          </span>
        </div>

        {/* Marquee track — full section width, no container padding */}
        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: "16px", height: "36px" }}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width:      "32px",
              background: "linear-gradient(to right, #ffffff 40%, transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width:      "32px",
              background: "linear-gradient(to left, #ffffff 40%, transparent)",
            }}
          />

          {/* Doubled list for seamless loop (translateX -50% = exactly one set) */}
          <div
            className="trust-marquee-track"
            style={{ height: "100%" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="flex-shrink-0 select-none"
                style={{
                  fontSize:   "15px",
                  fontWeight: 600,
                  color:      "#616a75",
                  letterSpacing: "0.01em",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
