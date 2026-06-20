import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RoboAgentix — Enterprise AI & Software Engineering",
    short_name: "RoboAgentix",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e10",
    theme_color: "#0e0e10",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
