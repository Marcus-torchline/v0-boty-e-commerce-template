import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!)
  
  try {
    const categories = await sql`
      SELECT DISTINCT category FROM products 
      WHERE category IS NOT NULL 
      ORDER BY category
    `
    
    return NextResponse.json(categories.map(c => c.category))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}
