"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#E8F5EE] via-[#5BB98C]/20 to-[#3DA870]/30">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#5BB98C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#3DA870]/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <span className="text-sm uppercase mb-6 block text-primary animate-blur-in opacity-0 tracking-widest font-medium" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Real Women, Real Results
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-balance text-foreground font-bold">
                <span className="block animate-blur-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>Reclaim Your</span>
                <span className="block animate-blur-in opacity-0 text-primary" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>Sleeveless Confidence.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 text-muted-foreground animate-blur-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Comfortable, non-invasive arm toning for daily life. If your arms changed almost overnight, you are not alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-blur-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-[#3DA870] boty-shadow font-medium"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
                </Link>
              </div>
              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start animate-blur-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.9/5 Stars</span>
                </div>
                <div className="text-sm text-muted-foreground">30-Day Money-Back Guarantee</div>
              </div>
            </div>
            {/* Right image */}
            <div className="relative animate-blur-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <img
                src="/images/confitone-hero.png"
                alt="Woman wearing Confitone arm toning sleeves"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground">
        <span className="text-xs tracking-widest uppercase font-bold">Scroll</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
