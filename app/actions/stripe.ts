'use server'

import { stripe } from '@/lib/stripe'

export interface CheckoutItem {
  name: string
  description: string
  priceInCents: number
  quantity: number
}

export async function startCheckoutSession(items: CheckoutItem[]) {
  if (!items.length) {
    throw new Error('No items provided for checkout')
  }

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
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items,
    mode: 'payment',
  })

  return session.client_secret
}
