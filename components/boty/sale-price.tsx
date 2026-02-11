"use client"

import { useState, useEffect } from "react"
import { SaleCountdown, SaleCountdownCompact } from "./sale-countdown"
import { TrendingUp } from "lucide-react"

interface SalePriceProps {
  price: number
  size?: "sm" | "md" | "lg"
}

/** Generates a pseudo-random "bought today" count that stays stable per price
 *  for the lifetime of the page but feels dynamic across products. */
function useBoughtToday(price: number) {
  const [count, setCount] = useState<number | null>(null)
  useEffect(() => {
    // Seed from price to keep it stable per product
    const base = Math.floor((price * 7.3 + 13) % 40) + 14
    setCount(base)
    // Slowly tick up every 30-90s to create "live" feeling
    const id = setInterval(() => {
      setCount((c) => (c ?? base) + 1)
    }, (Math.floor(price % 5) + 3) * 10000)
    return () => clearInterval(id)
  }, [price])
  return count
}

/** Small: product grid cards */
function SalePriceSm({ price, beforePrice }: { price: number; beforePrice: number }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {/* Anchor: faded original price with strikethrough */}
        <span className="text-sm text-red-400/70 line-through font-medium">
          ${beforePrice.toFixed(2)}
        </span>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
          30% OFF
        </span>
      </div>
      {/* Sale price: big and green-tinted */}
      <span className="text-lg font-bold text-foreground">
        ${price.toFixed(2)}
      </span>
      <SaleCountdownCompact />
    </div>
  )
}

/** Medium: shop page cards */
function SalePriceMd({ price, beforePrice, boughtToday }: { price: number; beforePrice: number; boughtToday: number | null }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <span className="text-sm text-red-400/70 line-through font-medium">
          ${beforePrice.toFixed(2)}
        </span>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
          SAVE 30%
        </span>
      </div>
      <span className="text-xl font-bold text-foreground">
        ${price.toFixed(2)}
      </span>
      <div className="flex items-center gap-3">
        <SaleCountdownCompact />
        {boughtToday !== null && (
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-emerald-600" />
            {boughtToday} bought today
          </span>
        )}
      </div>
    </div>
  )
}

/** Large: product detail page -- full psychological treatment */
function SalePriceLg({ price, beforePrice, boughtToday }: { price: number; beforePrice: number; boughtToday: number | null }) {
  const savings = beforePrice - price

  return (
    <div className="flex flex-col gap-3">
      {/* "Today Only" urgency strip */}
      <div className="inline-flex items-center gap-1.5 self-start bg-amber-50 border border-amber-200/60 text-amber-700 px-3 py-1 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wide">Today Only Price</span>
      </div>

      {/* Price block */}
      <div className="flex items-end gap-3">
        {/* Sale price: dominant */}
        <span className="text-4xl md:text-5xl font-bold text-foreground leading-none">
          ${price.toFixed(2)}
        </span>
        {/* Original price: faded red strikethrough */}
        <span className="text-xl text-red-400/60 line-through font-medium pb-1">
          ${beforePrice.toFixed(2)}
        </span>
      </div>

      {/* Savings callout + discount badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
          30% OFF
        </span>
        <span className="text-sm text-emerald-600 font-medium">
          You save ${savings.toFixed(2)}
        </span>
      </div>

      {/* Countdown */}
      <SaleCountdown />

      {/* Social proof: bought today */}
      {boughtToday !== null && (
        <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 boty-shadow">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span className="text-sm text-foreground font-medium">
            <strong className="text-emerald-700">{boughtToday} women</strong> bought this today
          </span>
          <span className="text-xs text-muted-foreground ml-auto">Selling fast</span>
        </div>
      )}
    </div>
  )
}

export function SalePrice({ price, size = "md" }: SalePriceProps) {
  const beforePrice = +(price / 0.7).toFixed(2)
  const boughtToday = useBoughtToday(price)

  if (size === "sm") return <SalePriceSm price={price} beforePrice={beforePrice} />
  if (size === "lg") return <SalePriceLg price={price} beforePrice={beforePrice} boughtToday={boughtToday} />
  return <SalePriceMd price={price} beforePrice={beforePrice} boughtToday={boughtToday} />
}
