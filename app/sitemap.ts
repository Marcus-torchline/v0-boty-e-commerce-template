import type { MetadataRoute } from 'next'
import { getMedusaProducts } from '@/lib/medusa-store'

const BASE_URL = 'https://www.confitone.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static marketing routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/#our-products`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/#our-story`,
      lastModified: new Date(),
    },
  ]

  // Try to fetch products from Medusa
  let products: Awaited<ReturnType<typeof getMedusaProducts>> = []
  try {
    products = await getMedusaProducts()
  } catch (err) {
    console.error('Error loading Medusa products for sitemap:', err)
    // If Medusa fails, just return static routes
    return staticRoutes
  }

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    // Your live product URLs look like /product/prod_01KGYA...
    url: `${BASE_URL}/product/${product.id}`,
    // We don't have updated_at from the mapped Product, so use "now" as a safe generic lastModified
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
