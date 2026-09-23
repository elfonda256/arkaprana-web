import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingCta from "@/components/layout/WhatsAppFloatingCta";
import MobileStickyCta from "@/components/layout/MobileStickyCta";
import PageTransition from "@/components/shared/PageTransition";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi infrastructure, network, cloud, cybersecurity, managed IT, system integration, automation dan artificial intelligence.",
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
    "Data Center Indonesia",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/brand/favicon.svg",
  },
  authors: [{ name: "PT ARKAPRANA TEKNOLOGI NUSANTARA" }],
  creator: "ARKAPRANA",
  publisher: "PT ARKAPRANA TEKNOLOGI NUSANTARA",
  metadataBase: new URL("https://arkaprana.com"),
  openGraph: {
    title: "ARKAPRANA | Technology & Intelligent Solutions",
    description:
      "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi infrastructure, network, cloud, cybersecurity, managed IT, system integration, automation dan artificial intelligence.",
    url: "https://arkaprana.com",
    siteName: "ARKAPRANA",
    locale: "id_ID",
    type: "website",
  },
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
    description:
      "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi infrastructure, network, cloud, cybersecurity, managed IT, system integration, automation dan artificial intelligence.",
    slogan: "BUILD. CONNECT. INTELLIGENCE.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Enterprise Inquiries",
      email: "elfano2156@gmail.com",
      telephone: "+62-816-997-963",
    },
  };

  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased bg-[#030712] text-slate-100`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] selection:bg-cyan-500/30 selection:text-white pb-16 sm:pb-0">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFloatingCta />
        <MobileStickyCta />
      </body>
    </html>
  );
}
