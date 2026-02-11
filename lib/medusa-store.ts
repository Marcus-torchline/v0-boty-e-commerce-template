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

function mapMedusaToProduct(p: any): Product {
  const variants = Array.isArray(p.variants) ? p.variants : []
  const firstVariant = variants[0]

  let usdAmount = 0

  if (firstVariant && Array.isArray(firstVariant.prices)) {
    const usdPrice = firstVariant.prices.find(
      (pr: any) => pr.currency_code === "usd"
    )
    if (usdPrice?.amount != null) {
      usdAmount = usdPrice.amount
    }
  }

  // TEMP: if still zero, log for debugging
  if (usdAmount === 0) {
    // You can check your server logs to see what Medusa sends
    console.warn("No USD price found for product", p.id, p.title, p.variants)
  }

  const name = p.title ?? ""

  const rawDesc = p.subtitle || p.description || ""
  const description =
    rawDesc.length > 120 ? rawDesc.slice(0, 117).trimEnd() + "..." : rawDesc

  return {
    id: p.id,
    name,
    description,
    price: usdAmount / 100, // cents → dollars
    original_price: null,
    image: p.thumbnail ?? "",
    badge: null,
    category: "bundles",
    featured: false,
  }
}

export async function getMedusaProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/store/products`, {
    cache: "no-store",
    headers: {
      "x-publishable-api-key": PUBLISHABLE_KEY,
    },
  })

  if (!res.ok) {
    console.error("Medusa status", res.status)
    console.error("Medusa body", await res.text())
    throw new Error("Failed to fetch products")
  }

  const data = await res.json()
  const medusaProducts = data.products ?? []
  return medusaProducts.map(mapMedusaToProduct)
}


