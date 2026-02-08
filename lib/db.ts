// lib/products.ts (or whatever this file is)
// Switched from Neon DB to Medusa Store API

const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!

// Shape you’ll use in the frontend
export type Product = {
  id: string
  name: string
  description: string
  price: number
  original_price: number | null
  image: string
  badge: string | null
  category: 'sleeves' | 'bundles' | 'accessories'
  featured: boolean
  created_at: string
  updated_at: string
}

// Helper to map Medusa product → your Product type
function mapMedusaToProduct(p: any): Product {
  const variant = p.variants?.[0]

  const priceAmount =
    variant?.prices?.find((pr: any) => pr.currency_code === "usd")?.amount ?? 0

  return {
    id: p.id,
    name: p.title,
    description: p.description ?? "",
    price: priceAmount / 100, // Medusa prices are cents
    original_price: null,
    image: p.thumbnail ?? "",
    badge: null,
    // Quick heuristic mapping – you can refine later:
    category: "bundles",
    featured: false,
    created_at: p.created_at ?? "",
    updated_at: p.updated_at ?? "",
  }
}

// Fetch all products from Medusa
export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/store/products`, {
    cache: "no-store",
  })

  if (!res.ok) {
    console.error("Medusa products error", await res.text())
    throw new Error("Failed to fetch products")
  }

  const data = await res.json()
  return (data.products ?? []).map(mapMedusaToProduct)
}

// Fetch products by category – for now, just filter client-side
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const all = await getProducts()
  return all.filter((p) => p.category === category)
}

// Fetch a single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/store/products/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    console.error("Medusa product error", await res.text())
    return null
  }

  const data = await res.json()
  return mapMedusaToProduct(data.product)
}

// Featured products – simple “top N” for now
export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts()
  return all.slice(0, 8)
}
