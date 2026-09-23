import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi IT Infrastructure, Network, Cloud, Cybersecurity, Managed IT, System Integration dan Artificial Intelligence.",
  keywords: [
    "IT Infrastructure Indonesia",
    "Network Infrastructure Indonesia",
    "System Integrator Indonesia",
    "Cybersecurity Indonesia",
    "Cloud Infrastructure Indonesia",
    "Managed IT Services Indonesia",
    "Artificial Intelligence Indonesia",
    "Private AI Indonesia",
    "Enterprise AI Indonesia",
    "AI Automation Indonesia",
    "Data Center Indonesia"
  ],
  authors: [{ name: "PT ARKAPRANA TEKNOLOGI NUSANTARA" }],
  creator: "ARKAPRANA",
  publisher: "PT ARKAPRANA TEKNOLOGI NUSANTARA",
  metadataBase: new URL("https://arkaprana.com"),
  openGraph: {
    title: "ARKAPRANA | Technology & Intelligent Solutions",
    description: "Build. Connect. Intelligence. Solusi infrastruktur teknologi dan kecerdasan buatan enterprise.",
    url: "https://arkaprana.com",
    siteName: "ARKAPRANA",
    locale: "id_ID",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT ARKAPRANA TEKNOLOGI NUSANTARA",
    alternateName: "ARKAPRANA",
    url: "https://arkaprana.com",
    description: "Technology & Intelligent Solutions Company di Indonesia.",
    slogan: "BUILD. CONNECT. INTELLIGENCE.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Enterprise Inquiries",
      email: "hello@arkaprana.com"
    }
  };

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#030712] text-slate-100`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
