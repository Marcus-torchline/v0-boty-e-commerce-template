"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden confitone-transition ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-primary px-4 py-3 safe-area-bottom">
        <Link
          href="/shop"
          className="group flex items-center justify-center gap-2 bg-background text-foreground w-full py-3.5 rounded-full text-sm font-semibold tracking-wide confitone-transition hover:bg-background/90 confitone-shadow"
        >
          Shop Confitone Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 confitone-transition" />
        </Link>
      </div>
    </div>
  )
}
