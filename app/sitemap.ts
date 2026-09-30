import type { MetadataRoute } from "next";
import { siteUrl } from "./seo-config";
import { projects } from "@/lib/content/projects";
import { serviceData } from "@/lib/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    ...projects.flatMap((project) => project.links.internal ? [project.links.internal] : []),
    ...Object.keys(serviceData).map((slug) => `/services/${slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
