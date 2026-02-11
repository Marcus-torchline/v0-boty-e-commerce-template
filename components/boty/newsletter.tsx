"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-10 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Community collage - Left */}
          <div className="md:w-[45%] flex-shrink-0">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/confitone-community-collage.png"
                alt="Real Confitone customers showing off their results with our compression arm sleeves"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text + Form - Right */}
          <div className="md:w-[55%] text-center md:text-left">
            <h2 className="font-sans text-3xl leading-tight text-primary-foreground mb-2 text-balance md:text-4xl lg:text-5xl font-bold">
              Join the Confitone Community
            </h2>
            <p className="text-base text-primary-foreground/80 mb-6">
              Subscribe for exclusive offers, arm toning tips, and early access to new products. Real women, real support.
            </p>

            {isSubscribed ? (
              <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
                <Check className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground">Welcome to the Confitone family!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md md:mx-0 mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 boty-transition"
                  required
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full text-sm tracking-wide boty-transition hover:bg-primary-foreground/90"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
                </button>
              </form>
            )}

            <p className="text-sm text-primary-foreground/60 mt-3">
              Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
