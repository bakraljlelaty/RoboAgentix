import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ["", "/services", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
