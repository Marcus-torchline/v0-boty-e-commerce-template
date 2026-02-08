"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
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
  { label: "All", value: "all" },
  { label: "Sleeves", value: "sleeves" },
  { label: "Bundles", value: "bundles" },
]

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
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
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-24 bg-card">
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]"
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
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover boty-transition group-hover:scale-105"
                    />
                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide bg-white text-black ${
                          product.badge === "Sale"
                            ? "bg-destructive/10 text-destructive"
                            : product.badge === "New"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
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
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">
                        ${product.price}
                      </span>
                      {product.original_price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.original_price}
                        </span>
                      )}
                    </div>
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
      </div>
    </section>
  )
}
