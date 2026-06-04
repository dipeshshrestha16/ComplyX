"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden section-pad"
      style={{ background: "#0d6ee6" }}
    >
      {/* Subtle white grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative z-10">
        <div
          className="flex flex-col items-center text-center mx-auto"
          style={{ maxWidth: "680px" }}
        >
          <h2 className="cta-h2">
            Ready to formalize your security posture?
          </h2>

          <p
            className="text-[16px] sm:text-[18px]"
            style={{
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              marginTop: "16px",
              lineHeight: "28px",
            }}
          >
            Join 400+ organizations managing global risk and compliance on
            ComplyX. Profile setup takes under two minutes.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto"
            style={{ marginTop: "36px" }}
          >
            {/* Primary CTA */}
            <Link
              href="#"
              className="group inline-flex items-center justify-center gap-2 font-bold active:scale-[0.98] w-full sm:w-auto"
              style={{
                background: "#f8fafd",
                color: "#0c1723",
                borderRadius: "14px",
                padding: "14px 28px",
                minHeight: "56px",
                fontSize: "16px",
                transition: "background 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#ffffff";
                el.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#f8fafd";
                el.style.boxShadow = "none";
              }}
            >
              Create company profile&nbsp;
              <span className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[5px]">
                →
              </span>
            </Link>

            {/* Outline CTA */}
            <Link
              href="#"
              className="inline-flex items-center justify-center text-white font-bold active:scale-[0.98] w-full sm:w-auto"
              style={{
                background: "transparent",
                border: "0.67px solid rgba(255,255,255,0.3)",
                borderRadius: "14px",
                padding: "14px 28px",
                minHeight: "56px",
                fontSize: "16px",
                transition: "background 0.15s ease, border-color 0.15s ease, transform 0.1s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.1)";
                el.style.borderColor = "rgba(255,255,255,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(255,255,255,0.3)";
              }}
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
