"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Frameworks", href: "#frameworks" },
  { label: "How it works", href: "#workflow" },
  { label: "Platform", href: "#platform" },
  { label: "Get started", href: "#cta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(248, 250, 253, 0.8)",
        borderBottom: "0.67px solid rgba(12, 23, 35, 0.12)",
        height: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-page w-full">
        <div className="flex items-center justify-between">
          {/* LEFT: Logo + nav links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-[20px] font-extrabold leading-none select-none"
              style={{ letterSpacing: "-1px", color: "#0c1723" }}
            >
              COMPLY<span style={{ color: "#0d6ee6" }}>X</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-[14px] font-medium text-[#616a75] rounded-md transition-all duration-150 hover:text-[#0c1723] hover:bg-black/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Login + Get Started */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login — turns primary blue on hover */}
            <Link
              href="#"
              className="text-[14px] font-semibold text-[#0c1723] transition-colors duration-150 hover:text-[#0d6ee6]"
            >
              Login
            </Link>
            {/* Get Started — brightens + glow intensifies on hover */}
            <Link
              href="#cta"
              className="inline-flex items-center justify-center text-white text-[14px] font-semibold bg-[#0d6ee6] hover:bg-[#2b7ff0] active:scale-[0.98]"
              style={{
                borderRadius: "8px",
                padding: "8px 20px",
                height: "36px",
                transition: "background 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease",
                boxShadow: "0 4px 14px rgba(13,110,230,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(13,110,230,0.38)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(13,110,230,0.2)";
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md transition-colors hover:bg-black/[0.04]"
            style={{ color: "#0c1723" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-[64px] left-0 right-0 py-3 flex flex-col gap-1 z-50"
          style={{
            background: "rgba(248, 250, 253, 0.97)",
            borderBottom: "0.67px solid rgba(12, 23, 35, 0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mx-3 px-3 py-2.5 text-[14px] font-medium text-[#616a75] rounded-md transition-colors hover:text-[#0c1723] hover:bg-black/[0.04]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mx-3 px-3 pt-3" style={{ borderTop: "0.67px solid rgba(12,23,35,0.08)", marginTop: "4px" }}>
            <Link
              href="#"
              className="flex-1 text-center py-2 text-[14px] font-semibold rounded-md transition-colors hover:bg-black/[0.04]"
              style={{ color: "#0c1723" }}
            >
              Login
            </Link>
            <Link
              href="#cta"
              className="flex-1 text-center py-2 text-[14px] font-semibold text-white rounded-lg transition-colors hover:bg-[#0b62d4]"
              style={{ background: "#0d6ee6", boxShadow: "0 4px 14px rgba(13,110,230,0.2)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
