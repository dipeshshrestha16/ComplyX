import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComplyX — Compliance at Institutional Scale",
  description:
    "ComplyX automates audit readiness across HIPAA, PCI-DSS, ISO 27001, SWIFT, NIST, SOC 2, GDPR and custom frameworks for hospitals, banks, and enterprises.",
  keywords: "compliance, HIPAA, PCI-DSS, ISO 27001, SOC 2, GDPR, audit readiness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
