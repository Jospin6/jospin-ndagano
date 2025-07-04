import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `https://jospin-ndagano.vercel.app/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    }
  ];
}
