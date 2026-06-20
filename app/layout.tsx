import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://roboagentix.ai"),
  title: {
    default: "RoboAgentix — Enterprise AI & Software Engineering",
    template: "%s — RoboAgentix",
  },
  description: site.description,
  keywords: [
    "enterprise software",
    "agentic automation",
    "AI solutions",
    "business process automation",
    "digital transformation",
    "web and mobile development",
  ],
  authors: [{ name: "RoboAgentix" }],
  openGraph: {
    title: "RoboAgentix — Enterprise AI & Software Engineering",
    description: site.description,
    url: "https://roboagentix.ai",
    siteName: "RoboAgentix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboAgentix — Enterprise AI & Software Engineering",
    description: site.description,
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
