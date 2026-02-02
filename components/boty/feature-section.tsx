"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Flame, Zap, Heart, Shield, Leaf, Flower2, Globe, Recycle } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Thermal Activation",
    description: "Supports circulation through gentle warmth"
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Wear while cooking, walking, or watching TV"
  },
  {
    icon: Heart,
    title: "Comfortable Fit",
    description: "Designed for all-day wear and movement"
  },
  {
    icon: Shield,
    title: "Non-Invasive",
    description: "No surgery, no harsh treatments"
  }
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const bentoRef = useRef<HTMLDivElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true)
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

    if (bentoRef.current) {
      observer.observe(bentoRef.current)
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current)
      }
      if (videoSectionRef.current) {
        videoObserver.unobserve(videoSectionRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bento Grid */}
        <div 
          ref={bentoRef}
          className="grid md:grid-cols-4 mb-20 md:grid-rows-[300px_300px] gap-6"
        >
          {/* Left Large Block - Benefits Image */}
          <div 
            className={`relative rounded-3xl overflow-hidden h-[500px] md:h-auto md:col-span-2 md:row-span-2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Image
              src="/images/confitone-benefits.png"
              alt="Arm fat reduction support with thermal activation"
              fill
              className="object-cover"
            />
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-lg rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2 font-medium">
                    Thermal <span className="text-primary">Technology</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Supports circulation and promotes warmth for comfortable, effective arm toning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - Confidence Message */}
          <div 
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center md:col-span-2 relative overflow-hidden transition-all duration-700 ease-out bg-gradient-to-br from-[#5BB98C] to-[#3DA870] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl text-white mb-2 font-bold">
                Gentle Support
              </h3>
              <h3 className="text-2xl md:text-3xl text-white/80 mb-4">
                Real Results
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Heart className="w-4 h-4 flex-shrink-0" />
                  <span>No Shaming, Just Support</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span>Non-Invasive Approach</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  <span>Works With Your Body</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - 30 Day Guarantee */}
          <div 
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden md:col-span-2 transition-all duration-700 ease-out bg-[#1A1A1A] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10 flex flex-col justify-center h-full text-left items-start">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-3">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-base mb-1 text-white/70">
                30-Day
              </h3>
              <h3 className="text-2xl md:text-3xl mb-2 text-white font-bold">
                Money-Back Guarantee
              </h3>
            </div>
          </div>
        </div>

        <div 
          ref={videoSectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center my-0 py-20"
        >
          {/* Banner Image */}
          <div 
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
              isVideoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Image
              src="/images/confitone-banner.jpg"
              alt="Say goodbye to flabby arms faster than ever - Confitone"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            ref={headerRef}
            className={`transition-all duration-700 ease-out ${
              isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
              Why Confitone
            </span>
            <h2 className={`font-sans text-4xl leading-tight text-foreground mb-6 text-balance md:text-6xl font-bold ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
              Toned Arms After 40
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-10 max-w-md ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
              We believe confidence should be simple, not complicated. Wear the sleeves while walking, cooking, or watching TV. Gentle support that works with your body, not against it.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-5 boty-transition hover:scale-[1.02] rounded-md bg-white"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 group-hover:bg-primary/20 boty-transition bg-stone-50">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
