'use client'

import { Header } from '@/components/boty/header'
import { Footer } from '@/components/boty/footer'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useCart } from '@/components/boty/cart-context'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
        <h1 className="font-serif text-3xl text-foreground mb-3">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Your payment was successful. You{"'"}ll receive an email confirmation shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 boty-transition"
        >
          Back to Shop
        </Link>
      </div>
      <Footer />
    </main>
  )
}
