"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ShoppingBag, Sparkles } from "lucide-react"

function ProductImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover ${className || ""}`}
    />
  )
}
import { SalePrice } from "./sale-price"
import { useCart } from "./cart-context"

interface Product {
  id: string
  name: string
  description: string
  price: number
  original_price: number | null
  image: string
  badge: string | null
  category: string
  featured?: boolean
}

interface ProductGridProps {
  products: Product[]
}

const categories = [
  { label: "Top Sellers", value: "top-sellers" },
  { label: "Kits & Bundles", value: "bundles" },
  { label: "All Products", value: "all" },
]

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("top-sellers")
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  const dynamicCategories = categories

  const handleCategoryChange = (category: string) => {
    if (category !== selectedCategory) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedCategory(category)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 300)
    }
  }

  // Preload all product images on mount
  useEffect(() => {
    products.forEach((product) => {
      const img = new window.Image()
      img.src = product.image
    })
  }, [products])

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      gridObserver.observe(gridRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (gridRef.current) {
        gridObserver.unobserve(gridRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : selectedCategory === "top-sellers"
      ? products.filter((product) => product.featured || product.badge === "Bestseller")
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Our Products
          </span>
          <h2
            className={`font-sans leading-tight text-foreground mb-4 text-balance text-5xl md:text-6xl font-bold ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Simple Toning Solutions
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-md mx-auto ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            Comfortable, non-invasive products designed for busy women
          </p>
        </div>

        {/* Segmented Control */}
        {dynamicCategories.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-background rounded-full p-1 gap-1 flex-wrap justify-center">
              {dynamicCategories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div
          ref={gridRef}
          className={`grid gap-6 min-h-[400px] ${
            selectedCategory === "top-sellers"
              ? "sm:grid-cols-2 max-w-4xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No products found in this category.
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <Link
                key={`${selectedCategory}-${product.id}`}
                href={`/product/${product.id}`}
                className={`group transition-all duration-500 ease-out ${
                  isVisible && !isTransitioning
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isTransitioning ? "0ms" : `${index * 80}ms`,
                }}
              >
                <div className="bg-background rounded-3xl overflow-hidden boty-shadow boty-transition group-hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="boty-transition group-hover:scale-105"
                    />
                    {/* Sale badge */}
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide bg-emerald-500 text-white shadow-lg animate-gentle-pulse">
                      30% OFF TODAY
                    </span>
                    {/* Quick add button */}
                    <button
                      type="button"
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 boty-transition boty-shadow"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem({
                          id: product.id,
                          name: product.name,
                          description: product.description,
                          price: product.price,
                          image: product.image,
                        })
                      }}
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4 text-foreground" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <SalePrice price={product.price} size="sm" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-foreground/5"
          >
            View All Products
          </Link>
        </div>

        {/* Coming Soon teaser */}
        <div
          className={`mt-12 rounded-3xl p-8 md:p-12 bg-[#1A1A1A] text-center relative overflow-hidden transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 opacity-[0.04]">
            <Image
              src="/images/logo-ct-white.png"
              alt=""
              width={200}
              height={200}
              className="w-28 md:w-40 h-auto"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 text-balance">
              The Confitone Wellness Collection Keeps Growing
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Sweat-enhancing gels, targeted massage tools, and new
              compression products are in development. Everything we make
              follows the same philosophy: effective, comfortable, and
              designed for how real women actually live.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
