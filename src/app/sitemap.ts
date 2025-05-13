import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shalops.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more routes as your application grows
    // {
    //   url: `${baseUrl}/services`,
    //   lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
