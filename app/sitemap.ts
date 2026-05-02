import type { MetadataRoute } from "next";
import { siteUrl } from "./seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/projects/boringtools",
    "/projects/ai-resume-analyzer",
    "/projects/ai-code-reviewer",
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
