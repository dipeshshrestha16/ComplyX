const companies = [
  "Northbank",
  "Mercy Health",
  "Ledgerstone",
  "Atlas Federal",
  "Vault·OS",
  "Helix Bio",
];

export default function TrustBar() {
  return (
    <section
      className="bg-white"
      style={{
        borderTop: "0.67px solid rgba(12,23,35,0.12)",
        borderBottom: "0.67px solid rgba(12,23,35,0.12)",
      }}
    >
      <div className="container-page">
        {/* Desktop: label left, names right. Mobile: stacked. */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {/* Label */}
          <span
            className="font-mono uppercase whitespace-nowrap flex-shrink-0"
            style={{ fontSize: "10px", letterSpacing: "1px", color: "#616a75" }}
          >
            TRUSTED BY 400+ REGULATED ORGANIZATIONS
          </span>

          {/* Divider — desktop only */}
          <span
            className="hidden sm:block flex-shrink-0"
            style={{ width: "1px", height: "16px", background: "rgba(12,23,35,0.1)" }}
          />

          {/* Company names */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
            {companies.map((name) => (
              <span
                key={name}
                className="select-none cursor-default whitespace-nowrap"
                style={{ fontSize: "16px", fontWeight: 600, color: "#616a75", letterSpacing: "0.01em" }}
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
