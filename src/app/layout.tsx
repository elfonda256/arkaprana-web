import type { Metadata, Viewport } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingCta from "@/components/layout/WhatsAppFloatingCta";
import MobileStickyCta from "@/components/layout/MobileStickyCta";
import PageTransition from "@/components/shared/PageTransition";
import AmbientBackgroundAnimation from "@/components/decorative/AmbientBackgroundAnimation";
import DiagnosticTerminalDrawer from "@/components/shared/DiagnosticTerminalDrawer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F8FAFC",
};

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
  metadataBase: new URL("https://arkaprana.co.id"),
  alternates: {
    canonical: "https://arkaprana.co.id",
  },
  openGraph: {
    title: "ARKAPRANA | Technology & Intelligent Solutions",
    description:
      "Membangun fondasi digital dan menghadirkan kecerdasan: Sovereign Infrastructure, Carrier-Grade Network, Zero-Trust Cybersecurity & Private On-Premise AI.",
    url: "https://arkaprana.co.id",
    siteName: "ARKAPRANA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/brand/logo-full.png",
        width: 1200,
        height: 630,
        alt: "ARKAPRANA Technology & Intelligent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARKAPRANA | Technology & Intelligent Solutions",
    description:
      "Sovereign Infrastructure, Carrier-Grade Network, Zero-Trust Cybersecurity & Private On-Premise AI.",
    images: ["/brand/logo-full.png"],
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
    url: "https://arkaprana.co.id",
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
      email: "contact@arkaprana.co.id",
      telephone: "+62-816-997-963",
    },
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Zero-FOUC Instant Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Purge legacy dark state from earlier sessions
                  localStorage.removeItem('arkaprana_theme');
                  localStorage.removeItem('arkaprana_theme_v2');
                  var saved = localStorage.getItem('arkaprana_theme_v3');
                  var theme = saved === 'dark' ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-soft-bg)] selection:text-[var(--accent)] pb-16 sm:pb-0">
        <ThemeProvider>
          <LanguageProvider>
            <AmbientBackgroundAnimation />
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <WhatsAppFloatingCta />
            <MobileStickyCta />
            <DiagnosticTerminalDrawer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
