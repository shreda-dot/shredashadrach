import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const paths = [
    "",
    "/projects",
    "/projects/schooldra",
    "/projects/inventory",
    "/projects/apprelab",
    "/about",
    "/resume",
    "/contact",
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
  }));
}
