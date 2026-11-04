import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://northstarworks.example",
      lastModified: new Date(),
    },
  ];
}
