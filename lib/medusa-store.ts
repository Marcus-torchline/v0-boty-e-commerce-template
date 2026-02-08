const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!

// This matches the Product interface in ProductGrid
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
  const v = p.variants?.[0]

  const usdPrice =
    v?.prices?.find((pr: any) => pr.currency_code === "usd")?.amount ?? 0

  // Use Medusa title as name
  const name = p.title ?? ""

  // Use a short description: prefer subtitle, then truncate description
  const rawDesc = p.subtitle || p.description || ""
  const description =
    rawDesc.length > 120 ? rawDesc.slice(0, 117).trimEnd() + "..." : rawDesc

  return {
    id: p.id,
    name,
    description,
    price: usdPrice / 100, // Medusa stores cents
    original_price: null,
    image: p.thumbnail ?? "",
    badge: null,
    category: "bundles", // or some default; refine later
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

