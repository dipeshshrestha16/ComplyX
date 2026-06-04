const steps = [
  {
    num: "01",
    title: "Create company profile",
    description:
      "Tell us about your organization — sector, geography, headcount, and infrastructure. ComplyX tailors the model accordingly.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Choose your frameworks",
    description:
      "Select one or more frameworks. We cross-map shared controls so SOC 2 + ISO 27001 isn't twice the work.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Automate evidence & reporting",
    description:
      "Connect cloud, IdP, HR, and ticketing. Continuous evidence flows into auditor-ready dossiers.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6ee6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="section-pad bg-white"
      style={{ borderTop: "0.67px solid rgba(12,23,35,0.12)" }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p
            className="font-bold uppercase tracking-[0.08em]"
            style={{ fontSize: "10px", color: "#0d6ee6", marginBottom: "12px" }}
          >
            / 03 — WORKFLOW
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.9px",
              color: "#0c1723",
              lineHeight: "1.15",
              maxWidth: "520px",
            }}
          >
            From zero to audit-ready in three deliberate steps.
          </h2>
        </div>

        {/* Steps — gap-px divider technique; 1-col mobile → 3-col md */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 overflow-hidden"
          style={{
            border: "0.67px solid rgba(12,23,35,0.12)",
            background: "rgba(12,23,35,0.12)",
            borderRadius: "18px",
            gap: "1px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col feature-cell"
            >
              {/* Step number badge */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(13,110,230,0.05)",
                  border: "0.67px solid rgba(13,110,230,0.15)",
                  marginBottom: "20px",
                }}
              >
                <span className="font-mono font-bold" style={{ fontSize: "12px", color: "#0d6ee6" }}>
                  {step.num}
                </span>
              </div>

              {/* Icon + title */}
              <div className="flex items-start gap-2.5" style={{ marginBottom: "8px" }}>
                <div className="flex-shrink-0 mt-0.5">{step.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0c1723", lineHeight: "1.3" }}>
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: "14px", fontWeight: 400, color: "#616a75", lineHeight: "22px" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
