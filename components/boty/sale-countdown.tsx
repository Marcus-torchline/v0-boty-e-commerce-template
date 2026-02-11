"use client"

import { useState, useEffect } from "react"

function getTimeUntilMidnightPT() {
  const now = new Date()
  // Get current time in Pacific
  const ptString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  const ptNow = new Date(ptString)

  // Midnight tonight PT
  const midnight = new Date(ptNow)
  midnight.setDate(midnight.getDate() + 1)
  midnight.setHours(0, 0, 0, 0)

  const diff = midnight.getTime() - ptNow.getTime()
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { hours, minutes, seconds }
}

export function SaleCountdown({ compact = false }: { compact?: boolean }) {
  const [time, setTime] = useState(getTimeUntilMidnightPT)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnightPT())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-destructive">
        {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
      </span>
    )
  }

  return (
    <div className="inline-flex items-center gap-1.5 bg-destructive/10 text-destructive px-3 py-1.5 rounded-full text-xs font-medium">
      <span>30% off ends in</span>
      <span className="font-mono font-bold tracking-wide">
        {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
      </span>
    </div>
  )
}
