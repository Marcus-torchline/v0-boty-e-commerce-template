"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={bannerRef}
          className={`rounded-3xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[400px] transition-all duration-700 ease-out bg-gradient-to-br from-[#5BB98C] to-[#3DA870] ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text content - 70% */}
            <div className="flex-1 md:basis-[70%] text-left">
              <h3 className="text-4xl md:text-5xl text-white mb-4 lg:text-5xl font-bold text-balance">
                Ready to Reclaim Your Confidence?
              </h3>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of women who have discovered the gentle way to toned arms.
              </p>
              
              <div className="flex flex-col items-start gap-3 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">Comfortable for all-day wear</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">Non-invasive and gentle on your body</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base">30-day money-back guarantee</span>
                </div>
              </div>

              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#3DA870] px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-white/90 boty-shadow font-semibold"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
              </Link>
            </div>

            {/* Product image - 30% */}
            <div className="md:basis-[30%] flex-shrink-0 self-stretch flex items-center">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/confitone-compression-cta.png"
                  alt="Confitone compression waistband - built to resist sweat and pressure"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
