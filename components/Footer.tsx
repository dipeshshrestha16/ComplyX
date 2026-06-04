"use client";

import Link from "next/link";

const footerLinks = [
  { label: "PRIVACY", href: "#" },
  { label: "TERMS", href: "#" },
  { label: "SECURITY PORTAL", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f8fafd",
        borderTop: "0.67px solid rgba(12,23,35,0.12)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left: Logo + copyright */}
          <div className="flex flex-col" style={{ gap: "5px" }}>
            <Link
              href="/"
              className="font-extrabold leading-none select-none"
              style={{ fontSize: "20px", letterSpacing: "-1px", color: "#0c1723" }}
            >
              COMPLY<span style={{ color: "#0d6ee6" }}>X</span>
            </Link>
            <p style={{ fontSize: "13px", color: "#616a75" }}>
              © 2026 ComplyX Systems. All rights reserved.
            </p>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "1.1px",
                  color: "#616a75",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#0d6ee6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#616a75";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
