"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/boty/cart-context"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleCheckout = async () => {
    if (!items.length) {
      setError("Your cart is empty.")
      return
    }
    if (!email) {
      setError("Please enter your email.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          items: items.map((i) => ({
            id: i.id,
            quantity: i.quantity,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        setError(data.error || "Failed to start checkout.")
        setLoading(false)
        return
      }

      // Clear the local cart and redirect to Stripe
      clearCart()
      window.location.href = data.url
    } catch (err) {
      console.error(err)
      setError("Unexpected error starting checkout.")
      setLoading(false)
    }
  }

  if (!items.length) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p>Your cart is empty.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <label className="block mb-2 text-sm font-medium">
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-border rounded-md px-3 py-2 text-sm"
            placeholder="you@example.com"
          />
        </label>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Order summary</h2>
        <div className="border border-border rounded-lg divide-y">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between px-4 py-3 text-sm">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-muted-foreground">
                  Qty {item.quantity}
                </div>
              </div>
              <div className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="flex justify-between px-4 py-3 text-sm font-semibold">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </section>

      {error && (
        <p className="text-sm text-red-600 mb-4">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium disabled:opacity-60"
      >
        {loading ? "Redirecting..." : "Continue to payment"}
      </button>
    </main>
  )
}
