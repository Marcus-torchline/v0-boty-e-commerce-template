'use server'

import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'

export interface CheckoutItem {
  name: string
  description: string
  priceInCents: number
  quantity: number
}

export async function createCheckoutSession(items: CheckoutItem[]) {
  if (!items.length) {
    throw new Error('No items provided for checkout')
  }

  const headersList = await headers()
  const origin = headersList.get('origin') || 'http://localhost:3000'

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: item.description,
      },
      unit_amount: item.priceInCents,
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${origin}/checkout/success`,
    cancel_url: `${origin}/checkout`,
  })

  if (!session.url) {
    throw new Error('Failed to create checkout session')
  }

  return session.url
}
