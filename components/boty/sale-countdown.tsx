"use client"

import { useState, useEffect } from "react"
import { Clock, Flame } from "lucide-react"

function getTimeUntilMidnightPT() {
  const now = new Date()
  const ptString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  const ptNow = new Date(ptString)

  const midnight = new Date(ptNow)
  midnight.setDate(midnight.getDate() + 1)
  midnight.setHours(0, 0, 0, 0)

  const diff = midnight.getTime() - ptNow.getTime()
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

/** Compact countdown for product cards (sm/md) */
export function SaleCountdownCompact() {
  const [time, setTime] = useState<{
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    setTime(getTimeUntilMidnightPT())
    const id = setInterval(() => setTime(getTimeUntilMidnightPT()), 1000)
    return () => clearInterval(id)
  }, [])
  const pad = (n: number) => String(n).padStart(2, "0")

  if (!time) {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] text-red-500/80">
        <Clock className="w-3 h-3" />
        <span className="font-mono font-semibold">--:--:--</span>
        left
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1 text-[10px] text-red-500/80">
      <Clock className="w-3 h-3" />
      <span className="font-mono font-semibold">
        {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
      </span>
      left
    </span>
  )
}

/** Full countdown banner for PDP (lg) */
export function SaleCountdown() {
  const [time, setTime] = useState<{ hours: number; minutes: number; seconds: number } | null>(null)
  useEffect(() => {
    setTime(getTimeUntilMidnightPT())
    const id = setInterval(() => setTime(getTimeUntilMidnightPT()), 1000)
    return () => clearInterval(id)
  }, [])
  const pad = (n: number) => String(n).padStart(2, "0")

  const display = time
    ? [
        { val: pad(time.hours), label: "hr" },
        { val: pad(time.minutes), label: "min" },
        { val: pad(time.seconds), label: "sec" },
      ]
    : [
        { val: "--", label: "hr" },
        { val: "--", label: "min" },
        { val: "--", label: "sec" },
      ]

  return (
    <div className="flex items-center gap-3 bg-red-50 border border-red-200/60 rounded-2xl px-4 py-3">
      <Flame className="w-5 h-5 text-red-500 animate-pulse shrink-0" />
      <div className="flex flex-col">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
          Sale ends tonight
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          {display.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-red-300 font-bold">:</span>}
              <span className="bg-red-600 text-white font-mono font-bold text-sm px-2 py-1 rounded-lg min-w-[32px] text-center">
                {unit.val}
              </span>
              <span className="text-[10px] text-red-400 font-medium">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
