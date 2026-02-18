export type ProductCopy = {
  details?: string
  howToUse?: string
  shipping?: string
}

export type ProductSeo = {
  title: string
  description: string
}

export const PRODUCT_COPY: Record<string, ProductCopy> = {
  // Example – replace with your real IDs
  'prod_01KGYA5ZTVB0C7TMDGZYW17XXW': {
    details:
      'ThermoTone Sleeves use dual-layer compression and thermal fabric to smooth and support the upper arms while remaining breathable for all‑day wear.',
    howToUse:
      'Wear the sleeves on clean, dry skin for at least 1–3 hours per day while doing light activities. Start with shorter sessions and increase as comfortable.',
    shipping:
      'Ships within 1–2 business days from our US warehouse. Free shipping on orders over $50 and a 30‑day money‑back guarantee.',
  },
  // add more products here by ID
}

export const PRODUCT_SEO: Record<string, ProductSeo> = {
  'prod_01KGYA5ZTVB0C7TMDGZYW17XXW': {
    title: 'Arm Sleeves for Tighter, Firmer Skin | Confitone',
    description:
      'Get tighter, more defined arms with our bestselling compression sleeve. Targets loose skin, reduces sagging, delivers visible results. Wear anywhere, anytime.',
  },
  // add more products here by ID
}

// Fallback SEO if a product ID has no custom entry
export const DEFAULT_SEO: ProductSeo = {
  title: 'Confitone Compression Wear',
  description:
    'Explore Confitone compression wear designed to smooth, support, and sculpt your silhouette with everyday comfort.',
}
