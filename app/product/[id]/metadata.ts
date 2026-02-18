import type { Metadata } from 'next'
import { PRODUCT_SEO, DEFAULT_SEO } from './product-config'

type Params = { id: string }

// Next.js calls this for /product/[id]
export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const seo = PRODUCT_SEO[params.id] ?? DEFAULT_SEO

  return {
    title: seo.title,
    description: seo.description,
  }
}
