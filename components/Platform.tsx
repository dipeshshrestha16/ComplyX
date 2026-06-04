"use client";

import { useRef, useEffect, useState } from "react";

// ── Animation config ──────────────────────────────────────────────────────────
const DURATION   = 1500;                       // ms — counter + bar fill
const TARGET_COUNT = 92;
const TARGET_BARS  = [94, 88, 96, 71];

/** Approximation of cubic-bezier(0.22, 1, 0.36, 1) — ease-out feel */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3.5);
}
// ─────────────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "AI-assisted mapping",
    description: "Upload existing policies and ComplyX AI maps controls across multiple frameworks automatically.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Continuous monitoring",
    description: "Scan cloud configurations, IAM, and infrastructure hourly. Drift surfaces before auditors do.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Evidence vault",
    description: "Immutable, timestamped evidence with full chain of custody for every control.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Audit-ready reports",
    description: "One-click SOC 2 Type II and ISO 27001 dossiers formatted for top-tier auditors.",
  },
];

const frameworkProgress = [
  { name: "SOC 2 Type II", score: 94 },
  { name: "ISO 27001",     score: 88 },
  { name: "HIPAA",         score: 96 },
  { name: "PCI-DSS",       score: 71 },
];

export default function Platform() {
  // ── Refs for direct DOM animation (avoids React re-renders per frame) ──────
  const cardWrapperRef  = useRef<HTMLDivElement>(null);
  const countSpanRef    = useRef<HTMLSpanElement>(null);
  const barFillRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const barLabelRefs    = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated     = useRef(false);
  const [cardVisible, setCardVisible]   = useState(false);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runAnimations = () => {
      // Step 1 — trigger CSS fade-up + float classes
      setCardVisible(true);

      if (prefersReduced) {
        // Skip animation — show final values immediately
        if (countSpanRef.current)
          countSpanRef.current.textContent = String(TARGET_COUNT);
        TARGET_BARS.forEach((target, i) => {
          if (barFillRefs.current[i])
            barFillRefs.current[i]!.style.width = `${target}%`;
          if (barLabelRefs.current[i])
            barLabelRefs.current[i]!.textContent = `${target}%`;
        });
        return;
      }

      // Step 2 — rAF loop for counter + bars
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t       = Math.min(elapsed / DURATION, 1);
        const eased   = easeOut(t);

        // Counter
        if (countSpanRef.current)
          countSpanRef.current.textContent = String(Math.round(eased * TARGET_COUNT));

        // Bars + labels
        TARGET_BARS.forEach((target, i) => {
          const val = eased * target;
          if (barFillRefs.current[i])
            barFillRefs.current[i]!.style.width = `${val}%`;
          if (barLabelRefs.current[i])
            barLabelRefs.current[i]!.textContent = `${Math.round(val)}%`;
        });

        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    // Step 3 — IntersectionObserver: fires once, then disconnects
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          runAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (cardWrapperRef.current) observer.observe(cardWrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="platform"
      className="section-pad"
      style={{
        background: "#f8fafd",
        borderTop: "0.67px solid rgba(12,23,35,0.12)",
      }}
    >
      <div className="container-page">
        <div className="platform-grid">

          {/* ── LEFT: Text + animated dashboard card ── */}
          <div className="flex flex-col">
            <p
              className="font-bold uppercase tracking-[0.08em]"
              style={{ fontSize: "10px", color: "#0d6ee6", marginBottom: "12px" }}
            >
              / 04 — PLATFORM
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.9px",
                color: "#0c1723",
                lineHeight: "1.15",
              }}
            >
              Continuous compliance.
              <br />
              Not periodic audits.
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#616a75",
                marginTop: "12px",
                lineHeight: "26px",
              }}
            >
              Audit logs and evidence collection should be the byproduct of good
              engineering — not a quarterly distraction.
            </p>

            {/* ── Card outer: IntersectionObserver anchor + fade-up CSS ── */}
            <div
              ref={cardWrapperRef}
              className={cardVisible ? "card-fade-enter" : "card-pre-enter"}
              style={{ flex: 1, minHeight: "280px", marginTop: "32px" }}
            >
              {/* ── Inner wrapper: float animation (delayed 0.8s, after fade-up) ── */}
              <div
                className={cardVisible ? "card-float-enter" : ""}
                style={{ height: "100%" }}
              >
                {/* ── Actual card ── */}
                <div
                  className="overflow-hidden flex flex-col"
                  style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    border: "0.67px solid rgba(12,23,35,0.12)",
                    boxShadow:
                      "0px 2px 4px rgba(12,23,35,0.05), 0px 12px 32px -8px rgba(12,23,35,0.10)",
                    height: "100%",
                  }}
                >
                  {/* Browser chrome */}
                  <div
                    className="flex items-center justify-between px-4 flex-shrink-0"
                    style={{
                      height: "40px",
                      background: "rgba(237,242,248,0.5)",
                      borderBottom: "0.67px solid rgba(12,23,35,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full" style={{ width: "10px", height: "10px", background: "rgba(255,95,87,0.65)" }} />
                      <span className="rounded-full" style={{ width: "10px", height: "10px", background: "rgba(254,188,46,0.75)" }} />
                      <span className="rounded-full" style={{ width: "10px", height: "10px", background: "rgba(40,200,64,0.75)" }} />
                    </div>
                    <span className="font-mono" style={{ fontSize: "10px", color: "#616a75", letterSpacing: "0.04em" }}>
                      complyx.app / dashboard
                    </span>
                  </div>

                  {/* Dashboard content */}
                  <div style={{ padding: "16px", flex: 1 }}>
                    {/* Score row */}
                    <div className="flex items-start justify-between" style={{ marginBottom: "14px" }}>
                      <div>
                        <p className="font-mono uppercase" style={{ fontSize: "10px", color: "#616a75", letterSpacing: "0.08em", marginBottom: "4px" }}>
                          Overall readiness
                        </p>
                        <div className="flex items-end gap-0.5">
                          {/* Count-up target — starts at 0, animated via ref */}
                          <span
                            ref={countSpanRef}
                            style={{ fontSize: "40px", fontWeight: 800, color: "#0c1723", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
                          >
                            0
                          </span>
                          <span style={{ fontSize: "18px", fontWeight: 700, color: "#0c1723", marginBottom: "2px" }}>%</span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-1.5 flex-shrink-0"
                        style={{ background: "rgba(59,179,96,0.1)", borderRadius: "999px", padding: "4px 10px", marginTop: "4px" }}
                      >
                        <span className="rounded-full" style={{ width: "6px", height: "6px", background: "#3bb360" }} />
                        <span className="font-mono uppercase" style={{ fontSize: "10px", fontWeight: 600, color: "#3bb360", letterSpacing: "0.06em" }}>
                          ON TRACK
                        </span>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="flex flex-col" style={{ gap: "10px" }}>
                      {frameworkProgress.map((fw, i) => (
                        <div key={fw.name}>
                          <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                            <span style={{ fontSize: "12px", fontWeight: 500, color: "#0c1723" }}>
                              {fw.name}
                            </span>
                            {/* Label — starts at 0%, animated via ref */}
                            <span
                              ref={(el) => { barLabelRefs.current[i] = el; }}
                              style={{ fontSize: "12px", fontWeight: 600, color: "#0d6ee6", fontVariantNumeric: "tabular-nums" }}
                            >
                              0%
                            </span>
                          </div>
                          <div
                            className="overflow-hidden rounded-full"
                            style={{ height: "6px", background: "#edf2f8" }}
                          >
                            {/* Fill — starts at width 0, animated via ref */}
                            <div
                              ref={(el) => { barFillRefs.current[i] = el; }}
                              className="h-full rounded-full"
                              style={{ width: "0%", background: "#0d6ee6" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: 2×2 feature grid ── */}
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-cell">
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(13,110,230,0.05)",
                    border: "0.67px solid rgba(13,110,230,0.1)",
                    marginBottom: "20px",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0c1723", lineHeight: "1.3" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#616a75", lineHeight: "22px", marginTop: "8px" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
