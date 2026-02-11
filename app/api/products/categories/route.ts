import { NextResponse } from 'next/server'
import { getMedusaCategories } from '@/lib/medusa-store'

export async function GET() {
  try {
    const categories = await getMedusaCategories()
    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}
