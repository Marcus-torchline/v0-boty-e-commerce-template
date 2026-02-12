import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://confitone.com',
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: 'https://confitone.com/#our-products',
     changeFrequency: 'weekly',
     priority: 0.9
    },
    { url: 'https://confitone.com/#our-story',
     changeFrequency: 'weekly',
     priority: 0.7
    },
  ]
}
