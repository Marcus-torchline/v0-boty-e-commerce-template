'use client'

import { useCart } from '@/components/boty/cart-context'
import { Header } from '@/components/boty/header'
import { Footer } from '@/components/boty/footer'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { CheckoutItem } from '@/app/actions/stripe'
import { useMemo } from 'react'

const Checkout = dynamic(() => import('@/components/boty/checkout'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

export default function CheckoutPage() {
  const { items } = useCart()

  const checkoutItems: CheckoutItem[] = useMemo(
    () =>
      items.map((item) => ({
        name: item.name,
        description: item.description,
        priceInCents: Math.round(item.price * 100),
        quantity: item.quantity,
      })),
    [items],
  )

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <h1 className="font-serif text-2xl text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Add some items to your cart before checking out.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 boty-transition"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            Checkout
          </h1>
          <Checkout items={checkoutItems} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
