"use client"

import { SaleCountdown } from "./sale-countdown"

interface SalePriceProps {
  price: number
  size?: "sm" | "md" | "lg"
}

/** Renders the current price with a fake "before" price (30% higher) struck-through in red,
 *  plus a countdown timer to midnight PT. */
export function SalePrice({ price, size = "md" }: SalePriceProps) {
  const beforePrice = price / 0.7 // 30% higher = current is 70% of before

  const styles = {
    sm: { current: "text-base font-semibold", before: "text-sm", badge: true, countdown: false },
    md: { current: "text-lg font-bold", before: "text-sm", badge: true, countdown: false },
    lg: { current: "text-3xl font-bold", before: "text-xl", badge: true, countdown: true },
  }

  const s = styles[size]

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`${s.current} text-foreground`}>
          ${price.toFixed(2)}
        </span>
        <span className={`${s.before} text-red-400 line-through`}>
          ${beforePrice.toFixed(2)}
        </span>
        <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">
          30% OFF
        </span>
      </div>
      {s.countdown && <SaleCountdown />}
    </div>
  )
}
