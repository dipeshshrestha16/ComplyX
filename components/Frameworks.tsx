import Link from "next/link";

const frameworks = [
  { category: "HEALTHCARE", name: "HIPAA",          description: "U.S. healthcare information privacy & security.", dot: "#3bb360" },
  { category: "PAYMENTS",   name: "PCI-DSS",        description: "Payment card data protection (v4.0).",            dot: "#3bb360" },
  { category: "INFOSEC",    name: "ISO 27001",      description: "International information security management.",   dot: "#3bb360" },
  { category: "BANKING",    name: "SWIFT CSP",      description: "Customer Security Programme controls.",            dot: "#3bb360" },
  { category: "FEDERAL",    name: "NIST 800-53",    description: "Federal security & privacy controls.",             dot: "#3bb360" },
  { category: "TRUST",      name: "SOC 2",          description: "Type I & II readiness with TSC mapping.",          dot: "#3bb360" },
  { category: "PRIVACY",    name: "GDPR",           description: "EU data protection regulation.",                   dot: "#3bb360" },
  { category: "HEALTHCARE", name: "HITRUST",        description: "Healthcare cybersecurity framework.",               dot: "#259cde" },
  { category: "FEDERAL",    name: "FedRAMP",        description: "U.S. cloud authorization program.",                dot: "#259cde" },
  { category: "DEFENSE",    name: "CMMC",           description: "Cybersecurity maturity for DoD supply chain.",     dot: "#259cde" },
  { category: "PRIVACY",    name: "CCPA / CPRA",    description: "California consumer privacy.",                     dot: "#259cde" },
  { category: "CUSTOM",     name: "Custom Framework", description: "Define your own controls and evidence.",         dot: "#0d6ee6", isCustom: true },
];

export default function Frameworks() {
  return (
    <section
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

        {/* Framework grid — 1 col → 2 col sm → 3 col lg → 4 col xl */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "12px" }}>
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="fw-card flex flex-col cursor-pointer"
              style={{
                background: fw.isCustom ? "#f6faff" : "#ffffff",
                border: fw.isCustom
                  ? "0.67px solid rgba(13,110,230,0.3)"
                  : "0.67px solid rgba(12,23,35,0.12)",
                borderRadius: "14px",
                padding: "18px",
                minHeight: "130px",
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
