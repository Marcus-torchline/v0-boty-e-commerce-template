const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!

export type Product = {
  id: string
  name: string
  description: string
  price: number
  original_price: number | null
  image: string
  badge: string | null
  category: string
  featured?: boolean
}

/* ── helpers ── */

function medusaFetch(path: string) {
  return fetch(`${BASE_URL}${path}`, {
    cache: "no-store",
    headers: {
      "x-publishable-api-key": PUBLISHABLE_KEY,
    },
  })
}

function determineCategory(title: string, handle: string): string {
  const lower = (title + " " + (handle ?? "")).toLowerCase()
  if (lower.includes("bundle") || lower.includes("gift") || lower.includes("kit")) return "bundles"
  if (lower.includes("sleeve") || lower.includes("arm")) return "sleeves"
  if (lower.includes("belt") || lower.includes("waist")) return "belts"
  if (lower.includes("band") || lower.includes("thigh")) return "bands"
  if (lower.includes("gel") || lower.includes("cream")) return "accessories"
  return "other"
}

function determineBadge(title: string): string | null {
  const lower = title.toLowerCase()
  if (lower.includes("best") || lower.includes("original")) return "Bestseller"
  if (lower.includes("starter") || lower.includes("new")) return "New"
  if (lower.includes("bundle") || lower.includes("full body")) return "Best Value"
  if (lower.includes("gift")) return "Gift"
  return null
}

/** Amounts from Medusa may be in cents (integer like 5499) or dollars (54.99).
 *  If the value is > 999 we assume it is cents and divide by 100. */
function normalizeCurrency(raw: number): number {
  return raw > 999 ? raw / 100 : raw
}

function extractPrice(variant: any): number {
  // Medusa v2 with region: calculated_price.calculated_amount
  if (variant?.calculated_price?.calculated_amount != null) {
    return normalizeCurrency(variant.calculated_price.calculated_amount)
  }

  // Medusa v2 without region: prices array
  if (variant?.prices?.length) {
    const usd = variant.prices.find((pr: any) => pr.currency_code === "usd")
    if (usd?.amount != null) return normalizeCurrency(usd.amount)
    // fallback to first price
    if (variant.prices[0]?.amount != null) return normalizeCurrency(variant.prices[0].amount)
  }

  // Medusa v1 style
  if (variant?.price?.amount != null) return normalizeCurrency(variant.price.amount)

  return 0
}

function extractOriginalPrice(variant: any): number | null {
  if (variant?.calculated_price?.original_amount != null) {
    const orig = normalizeCurrency(variant.calculated_price.original_amount)
    const calc = normalizeCurrency(variant.calculated_price.calculated_amount)
    // Only show original if it's actually different (i.e. a sale)
    return orig > calc ? orig : null
  }
  return null
}

function mapMedusaToProduct(p: any): Product {
  const v = p.variants?.[0]
  const price = extractPrice(v)
  const originalPrice = extractOriginalPrice(v)
  const title = p.title ?? ""
  const category = determineCategory(title, p.handle)
  const badge = determineBadge(title)

  const rawDesc = p.subtitle || p.description || ""
  const description =
    rawDesc.length > 120 ? rawDesc.slice(0, 117).trimEnd() + "..." : rawDesc

  return {
    id: p.id,
    name: title,
    description,
    price,
    original_price: originalPrice,
    image: p.thumbnail ?? "",
    badge,
    category,
    featured: badge === "Bestseller" || badge === "Best Value" || category === "sleeves",
  }
}

/* ── Fetch helpers ── */

async function getRegionId(): Promise<string | null> {
  try {
    const res = await medusaFetch("/store/regions")
    if (!res.ok) return null
    const data = await res.json()
    // prefer US region, fallback to first
    const regions = data.regions ?? []
    const us = regions.find((r: any) => r.currency_code === "usd")
    return (us ?? regions[0])?.id ?? null
  } catch {
    return null
  }
}

/* ── Public API ── */

export async function getMedusaProducts(): Promise<Product[]> {
  // Get region for calculated prices
  const regionId = await getRegionId()
  const params = new URLSearchParams({ limit: "100" })
  if (regionId) params.set("region_id", regionId)
  // Request variant prices
  params.set("fields", "+variants.calculated_price,+variants.prices")

  const res = await medusaFetch(`/store/products?${params}`)

  if (!res.ok) {
    const body = await res.text()
    console.error("[v0] Medusa products error:", res.status, body)
    return []
  }

  const data = await res.json()
  console.log("[v0] Medusa returned", (data.products ?? []).length, "products")
  if (data.products?.[0]) {
    const sample = data.products[0]
    console.log("[v0] Sample product:", sample.title, "| variant prices:", JSON.stringify(sample.variants?.[0]?.prices ?? sample.variants?.[0]?.calculated_price ?? "none"))
  }

  return (data.products ?? []).map(mapMedusaToProduct)
}

export async function getMedusaProductById(id: string): Promise<Product | null> {
  const regionId = await getRegionId()
  const params = new URLSearchParams()
  if (regionId) params.set("region_id", regionId)
  params.set("fields", "+variants.calculated_price,+variants.prices")

  const res = await medusaFetch(`/store/products/${id}?${params}`)

  if (!res.ok) return null

  const data = await res.json()
  return data.product ? mapMedusaToProduct(data.product) : null
}

export async function getMedusaCategories(): Promise<string[]> {
  const products = await getMedusaProducts()
  const cats = new Set(products.map((p) => p.category))
  return Array.from(cats).sort()
}
