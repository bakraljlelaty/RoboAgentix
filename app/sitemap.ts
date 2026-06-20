import type { MetadataRoute } from "next";
import { caseStudies, siteUrl } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const work: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${siteUrl}/work/${c.slug}/`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...work];
}
