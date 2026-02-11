"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Star, Truck, HeartHandshake } from "lucide-react"
import Link from "next/link"

const badges = [
  {
    icon: Shield,
    title: "30-Day Guarantee",
    description: "Full money-back promise",
    link: { href: "/master-policy", label: "Master Policy" }
  },
  {
    icon: Star,
    title: "4.9/5 Stars",
    description: "10,000+ happy customers"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: HeartHandshake,
    title: "Made for Women 40+",
    description: "Designed with you in mind"
  }
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`bg-background p-6 lg:p-8 text-center rounded-xl border border-stone-200 transition-all duration-700 ease-out border-none ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-2 text-2xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
              {"link" in badge && badge.link && (
                <Link
                  href={badge.link.href}
                  className="inline-block mt-3 text-xs font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  {badge.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
