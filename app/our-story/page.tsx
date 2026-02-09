"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold])

  return { ref, isVisible }
}

export default function OurStoryPage() {
  const hero = useInView()
  const mission = useInView()
  const howItWorks = useInView()
  const social = useInView()
  const cta = useInView()

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#E8F5EE] via-[#5BB98C]/10 to-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#5BB98C]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#3DA870]/10 rounded-full blur-3xl" />
          </div>

          <div ref={hero.ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span
              className={`inline-block text-sm tracking-[0.3em] uppercase text-primary mb-6 font-medium ${hero.isVisible ? "animate-blur-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Our Story
            </span>
            <h1
              className={`font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight ${hero.isVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Real Women, <span className="text-primary">Real Results!</span>
            </h1>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div ref={mission.ref} className="max-w-4xl mx-auto px-6 lg:px-8">
            <div
              className={`transition-all duration-700 ease-out ${mission.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                Our mission is simple: help women feel confident in their bodies no matter their age.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {"We believe you shouldn't have to choose between comfort and results, or spend thousands on invasive procedures to feel good in sleeveless styles. That's why we created ThermoTone shaping technology you can wear on your terms."}
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-card">
          <div ref={howItWorks.ref} className="max-w-4xl mx-auto px-6 lg:px-8">
            <div
              className={`transition-all duration-700 ease-out ${howItWorks.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">
                How It Works
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                Our compression wear works by applying gentle pressure that supports blood flow and reduces fluid retention. Combined with thermal activation, this helps smooth and firm areas like your arms and waist where skin tends to lose definition with age.
              </p>

              <div className="relative rounded-3xl overflow-hidden aspect-video mb-10 confitone-shadow">
                <Image
                  src="/images/confitone-benefits.png"
                  alt="Confitone thermal technology - arm fat reduction support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-background">
          <div ref={social.ref} className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div
              className={`transition-all duration-700 ease-out ${social.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <p className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-2xl mx-auto">
                Over 23,000 women have used Confitone to help shape their bodies and upper arms, reduce the appearance of loose skin, and improve their looks in photos and everyday wear.
              </p>

              <div className="inline-flex flex-col items-center gap-4 bg-card rounded-3xl p-10 confitone-shadow">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-medium text-foreground">Excellent</span>
                  <span className="text-4xl font-bold text-foreground">4.8</span>
                </div>
                <span className="text-muted-foreground">12,319 Customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#5BB98C] to-[#3DA870]">
          <div ref={cta.ref} className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div
              className={`transition-all duration-700 ease-out ${cta.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your Contouring Journey Now
              </h2>
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#3DA870] px-8 py-4 rounded-full text-sm tracking-wide confitone-transition hover:bg-white/90 confitone-shadow font-semibold"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 confitone-transition" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
