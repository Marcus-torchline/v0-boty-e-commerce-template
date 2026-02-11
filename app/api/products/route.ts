import { NextResponse } from 'next/server'
import { getMedusaProducts } from '@/lib/medusa-store'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  try {
    const allProducts = await getMedusaProducts()

    const products =
      category && category !== 'all'
        ? allProducts.filter((p) => p.category === category)
        : allProducts

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
