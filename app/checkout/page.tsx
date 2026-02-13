'use client'

import { useCart } from '@/components/boty/cart-context'
import { Header } from '@/components/boty/header'
import { Footer } from '@/components/boty/footer'
import { ShoppingBag, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { createCheckoutSession, type CheckoutItem } from '@/app/actions/stripe'

export default function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const checkoutItems: CheckoutItem[] = items.map((item) => ({
        name: item.name,
        description: item.description,
        priceInCents: Math.round(item.price * 100),
        quantity: item.quantity,
      }))
      const url = await createCheckoutSession(checkoutItems)
      window.location.href = url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <h1 className="font-serif text-2xl text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some items to your cart before checking out.</p>
          <Link
            href="/"
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
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 boty-transition">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            Order Summary
          </h1>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-card rounded-2xl p-4 boty-shadow">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm truncate">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 bg-background rounded-full px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground text-xs rounded-full boty-transition"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground text-xs rounded-full boty-transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-muted-foreground hover:text-red-500 boty-transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="bg-card rounded-2xl p-6 boty-shadow mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-sm text-muted-foreground">{subtotal >= 50 ? 'Free' : 'Calculated at checkout'}</span>
            </div>
            <div className="border-t border-border my-3" />
            <div className="flex justify-between items-center">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-lg text-foreground">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 text-sm rounded-xl p-4 mb-4">
              {error}
            </div>
          )}

          {/* Checkout Button */}
          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-foreground text-background py-4 rounded-full font-semibold text-base hover:bg-foreground/90 boty-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Pay with Stripe
              </>
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            You{"'"}ll be securely redirected to Stripe to complete your payment.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
