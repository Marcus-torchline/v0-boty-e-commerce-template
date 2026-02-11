"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Minus, Plus, ChevronDown, Shield, Heart, Award, Flame, Star, Check, Loader2 } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { useCart } from "@/components/boty/cart-context"
import useSWR from "swr"
import { SalePrice } from "@/components/boty/sale-price"

interface Product {
  id: string
  name: string
  description: string
  price: number
  original_price: number | null
  image: string
  badge: string | null
  category: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

const benefits = [
  { icon: Flame, label: "Thermal Tech" },
  { icon: Heart, label: "Comfortable Fit" },
  { icon: Shield, label: "30-Day Guarantee" },
  { icon: Award, label: "4.9/5 Stars" }
]

type AccordionSection = "details" | "howToUse" | "shipping"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const { addItem } = useCart()

  const { data: product, isLoading, error } = useSWR<Product>(
    `/api/products/${productId}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>("details")
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    if (!product) return
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const accordionItems: { key: AccordionSection; title: string; content: string }[] = [
    { 
      key: "details", 
      title: "Product Details", 
      content: product?.category === 'sleeves' 
        ? "Our arm toning sleeves feature advanced thermal technology that supports circulation and promotes gentle warmth. Made from premium neoprene material, they provide comfortable compression while allowing full range of motion. Suitable for all-day wear during daily activities."
        : product?.category === 'bundles'
        ? "This bundle includes everything you need to start your arm toning journey. Each set comes with detailed instructions and our exclusive Toned Arms After 40 guide with 5+ simple exercises."
        : "High-quality accessories designed to complement your Confitone arm toning routine. Made with the same attention to detail and comfort as our signature sleeves."
    },
    { 
      key: "howToUse", 
      title: "How to Use", 
      content: "Slide the sleeves onto your upper arms and secure with the adjustable velcro straps. Wear for 1-2 hours daily while walking, cooking, watching TV, or doing light activities. For best results, combine with the exercises in our Toned Arms After 40 guide. Hand wash with mild soap and air dry."
    },
    { 
      key: "shipping", 
      title: "Shipping & Returns", 
      content: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. We offer a 30-day money-back guarantee - if you're not satisfied with your results, return the product for a full refund."
    }
  ]

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-28 pb-20 flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-2xl text-foreground mb-4">Product not found</h1>
            <Link href="/shop" className="text-primary hover:underline">
              Return to shop
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground boty-transition mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card boty-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold bg-emerald-500 text-white shadow-lg animate-gentle-pulse">
                30% OFF TODAY
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-primary mb-2 block">
                  Confitone {product.category}
                </span>
                <h1 className="font-sans text-4xl md:text-5xl text-foreground mb-3 font-bold">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 (2,847 reviews)</span>
                </div>

                <p className="text-foreground/80 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <SalePrice price={product.price} size="lg" />
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground mb-3 block">Quantity</label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 boty-shadow">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex flex-col gap-3 mb-10">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base tracking-wide boty-transition boty-shadow font-bold ${
                    isAdded
                      ? "bg-[#3DA870] text-white"
                      : "bg-primary text-primary-foreground hover:bg-[#3DA870]"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart -- Lock In 30% Off"
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Free shipping on orders over $50. 30-day money-back guarantee.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-xl"
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center font-medium">{benefit.label}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-border/50">
                {accordionItems.map((item) => (
                  <div key={item.key} className="border-b border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-medium text-foreground">{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground boty-transition ${
                          openAccordion === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden boty-transition ${
                        openAccordion === item.key ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
