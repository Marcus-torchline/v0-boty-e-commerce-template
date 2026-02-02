import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description_html: string
  description_text: string | null
  cost_per_item: string | null
  compare_at_price: string | null
  main_image_url: string | null
  status: string
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

function determineCategory(title: string, handle: string): string {
  const lower = (title + handle).toLowerCase()
  if (lower.includes('bundle') || lower.includes('gift')) return 'bundles'
  if (lower.includes('kit')) return 'kits'
  if (lower.includes('sleeve')) return 'sleeves'
  if (lower.includes('belt') || lower.includes('waist')) return 'belts'
  if (lower.includes('band') || lower.includes('thigh')) return 'bands'
  if (lower.includes('gel') || lower.includes('cream')) return 'accessories'
  if (lower.includes('book') || lower.includes('ebook')) return 'accessories'
  return 'other'
}

function determineBadge(title: string, comparePrice: string | null, costPrice: string | null): string | null {
  if (comparePrice && costPrice && parseFloat(comparePrice) > parseFloat(costPrice)) {
    return 'Sale'
  }
  const lower = title.toLowerCase()
  if (lower.includes('gift')) return 'Gift'
  if (lower.includes('starter')) return 'New'
  if (lower.includes('full body') || lower.includes('bundle')) return 'Best Value'
  return null
}

export async function POST() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    
    // Read from local JSON file
    const filePath = join(process.cwd(), 'data', 'products-import.json')
    const rawData = readFileSync(filePath, 'utf8')
    const products: ShopifyProduct[] = JSON.parse(rawData)
    
    // Filter out mattress product and inactive products
    const confitoneProducts = products.filter(p => {
      const lower = (p.title + p.handle).toLowerCase()
      const isMattress = lower.includes('mattress')
      const isActive = p.status === 'active'
      return !isMattress && isActive
    })
    
    // Clear existing products
    await sql`DELETE FROM products`
    
    // Insert filtered products
    let imported = 0
    for (const product of confitoneProducts) {
      const description = product.description_text || stripHtml(product.description_html || '')
      const price = product.cost_per_item ? parseFloat(product.cost_per_item) : 0
      const originalPrice = product.compare_at_price ? parseFloat(product.compare_at_price) : null
      const category = determineCategory(product.title, product.handle)
      const badge = determineBadge(product.title, product.compare_at_price, product.cost_per_item)
      const featured = badge === 'Bestseller' || badge === 'Best Value' || category === 'kits'
      
      await sql`
        INSERT INTO products (id, name, description, price, original_price, image, badge, category, featured)
        VALUES (
          ${product.handle},
          ${product.title},
          ${description},
          ${price},
          ${originalPrice},
          ${product.main_image_url},
          ${badge},
          ${category},
          ${featured}
        )
      `
      imported++
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `Imported ${imported} Confitone products (excluded ${products.length - imported} non-Confitone products)`,
      products: confitoneProducts.map(p => ({ handle: p.handle, title: p.title }))
    })
  } catch (error) {
    console.error("Import error:", error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Read and preview products from JSON
    const filePath = join(process.cwd(), 'data', 'products-import.json')
    const rawData = readFileSync(filePath, 'utf8')
    const products: ShopifyProduct[] = JSON.parse(rawData)
    
    const confitoneProducts = products.filter(p => {
      const lower = (p.title + p.handle).toLowerCase()
      return !lower.includes('mattress') && p.status === 'active'
    })
    
    return NextResponse.json({ 
      message: "POST to this endpoint to import Confitone products",
      totalInFile: products.length,
      confitoneCount: confitoneProducts.length,
      products: confitoneProducts.map(p => ({ 
        handle: p.handle, 
        title: p.title,
        price: p.cost_per_item,
        compareAt: p.compare_at_price
      }))
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
