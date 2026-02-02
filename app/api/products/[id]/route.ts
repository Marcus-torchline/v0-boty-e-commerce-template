import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const sql = neon(process.env.DATABASE_URL!)
  
  try {
    const products = await sql`
      SELECT * FROM products WHERE id = ${id} LIMIT 1
    `
    
    if (products.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    
    return NextResponse.json(products[0])
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}
