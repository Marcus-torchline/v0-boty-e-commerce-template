// lib/medusa-store.ts

const BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!

export type MedusaProduct = {
  id: string
  title: string
  description?: string
  thumbnail?: string
}

export async function getMedusaProducts(): Promise<MedusaProduct[]> {
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
  return data.products as MedusaProduct[]
}
