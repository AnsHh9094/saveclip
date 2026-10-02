import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://saveclip.site"; // change to your domain

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/instagram-downloader`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/youtube-downloader`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/twitter-downloader`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tiktok-downloader`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/facebook-downloader`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
