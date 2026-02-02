"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

type Category = "sleeves" | "bundles" | "accessories"

const products = [
  // Sleeves
  {
    id: "arm-toning-sleeves",
    name: "Arm Toning Sleeves",
    description: "Original compression arm shapers",
    price: 49,
    originalPrice: null,
    image: "/images/confitone-hero.png",
    badge: "Bestseller",
    category: "sleeves" as Category
  },
  {
    id: "premium-thermal-sleeves",
    name: "Premium Thermal Sleeves",
    description: "Enhanced warmth for better results",
    price: 59,
    originalPrice: null,
    image: "/images/confitone-benefits.png",
    badge: "New",
    category: "sleeves" as Category
  },
  {
    id: "sport-compression-sleeves",
    name: "Sport Compression Sleeves",
    description: "Active lifestyle arm support",
    price: 54,
    originalPrice: null,
    image: "/images/confitone-hero.png",
    badge: null,
    category: "sleeves" as Category
  },
  {
    id: "plus-size-sleeves",
    name: "Plus Size Sleeves",
    description: "Extended comfort fit design",
    price: 52,
    originalPrice: null,
    image: "/images/confitone-benefits.png",
    badge: null,
    category: "sleeves" as Category
  },
  // Bundles
  {
    id: "starter-bundle",
    name: "Starter Bundle",
    description: "2 pairs + free guide book",
    price: 89,
    originalPrice: 108,
    image: "/images/confitone-banner.jpg",
    badge: "Sale",
    category: "bundles" as Category
  },
  {
    id: "complete-system",
    name: "Complete Toning System",
    description: "3 pairs + gel + guide book",
    price: 129,
    originalPrice: 169,
    image: "/images/confitone-hero.png",
    badge: "Best Value",
    category: "bundles" as Category
  },
  {
    id: "gift-set",
    name: "Gift Set",
    description: "Premium packaging for gifting",
    price: 79,
    originalPrice: null,
    image: "/images/confitone-benefits.png",
    badge: null,
    category: "bundles" as Category
  },
  {
    id: "monthly-subscription",
    name: "Monthly Subscription",
    description: "Fresh sleeves delivered monthly",
    price: 39,
    originalPrice: 49,
    image: "/images/confitone-banner.jpg",
    badge: "Subscribe & Save",
    category: "bundles" as Category
  },
  // Accessories
  {
    id: "toning-gel",
    name: "Toning Gel",
    description: "Enhances thermal activation",
    price: 29,
    originalPrice: null,
    image: "/images/confitone-benefits.png",
    badge: "New",
    category: "accessories" as Category
  },
  {
    id: "guide-book",
    name: "Toned Arms After 40",
    description: "5+ simple exercises guide",
    price: 19,
    originalPrice: null,
    image: "/images/confitone-banner.jpg",
    badge: null,
    category: "accessories" as Category
  },
  {
    id: "carrying-case",
    name: "Travel Carrying Case",
    description: "Compact storage solution",
    price: 15,
    originalPrice: null,
    image: "/images/confitone-hero.png",
    badge: null,
    category: "accessories" as Category
  },
  {
    id: "replacement-straps",
    name: "Replacement Straps",
    description: "Adjustable velcro straps set",
    price: 12,
    originalPrice: null,
    image: "/images/confitone-benefits.png",
    badge: null,
    category: "accessories" as Category
  }
]

const categories = [
  { value: "sleeves" as Category, label: "Sleeves" },
  { value: "bundles" as Category, label: "Bundles" },
  { value: "accessories" as Category, label: "Accessories" }
]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("sleeves")
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()
  
  const filteredProducts = products.filter(product => product.category === selectedCategory)

  const handleCategoryChange = (category: Category) => {
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
  }, [])

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

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Our Products
          </span>
          <h2 className={`font-sans leading-tight text-foreground mb-4 text-balance text-5xl md:text-6xl font-bold ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Simple Toning Solutions
          </h2>
          <p className={`text-lg text-muted-foreground max-w-md mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            Comfortable, non-invasive products designed for busy women
          </p>
        </div>

        {/* Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background rounded-full p-1 gap-1 relative">
            {/* Animated background slide */}
            <div
              className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{
                left: selectedCategory === 'sleeves' ? '4px' : selectedCategory === 'bundles' ? 'calc(33.333% + 2px)' : 'calc(66.666%)',
                width: 'calc(33.333% - 4px)'
              }}
            />
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div 
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <Link
              key={`${selectedCategory}-${product.id}`}
              href={`/product/${product.id}`}
              className={`group transition-all duration-500 ease-out ${
                isVisible && !isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isTransitioning ? '0ms' : `${index * 80}ms` }}
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
                        image: product.image
                      })
                    }}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
