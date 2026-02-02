import { neon } from '@neondatabase/serverless'

// Create a reusable SQL client
export const sql = neon(process.env.DATABASE_URL!)

// Product type definition
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

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  const products = await sql`SELECT * FROM products ORDER BY featured DESC, created_at DESC`
  return products as Product[]
}

// Fetch products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await sql`SELECT * FROM products WHERE category = ${category} ORDER BY featured DESC, created_at DESC`
  return products as Product[]
}

// Fetch a single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const products = await sql`SELECT * FROM products WHERE id = ${id} LIMIT 1`
  return products[0] as Product || null
}

// Fetch featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await sql`SELECT * FROM products WHERE featured = true ORDER BY created_at DESC LIMIT 8`
  return products as Product[]
}
