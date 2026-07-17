import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site, siteUrl } from "@/lib/content";

const title = "RoboAgentix — AI & Custom Software Development";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — RoboAgentix",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "custom software development",
    "AI agents",
    "intelligent automation",
    "RPA",
    "AI solutions",
    "web and mobile development",
    "cloud solutions",
    "Qatar",
  ],
  authors: [{ name: "RoboAgentix" }],
  creator: "RoboAgentix",
  publisher: "RoboAgentix",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: site.description,
    url: siteUrl,
    siteName: "RoboAgentix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh">
        <div
          aria-hidden
          className="grid-bg pointer-events-none fixed inset-0 -z-10"
        />
        <div
          aria-hidden
          className="noise pointer-events-none fixed inset-0 -z-10 opacity-[0.035] mix-blend-soft-light"
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-medium focus:text-[#06140f]"
        >
          Skip to content
        </a>

        <Nav />
        <main id="main" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
