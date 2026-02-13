"use client"

import { useEffect } from "react"
import { applyFacebookBrowserFixes } from "@/lib/fb-browser"

/**
 * Renders nothing visible. Detects Facebook in-app browser on mount
 * and applies CSS classes to <html> that trigger performance fixes.
 */
export function FBCompat() {
  useEffect(() => {
    applyFacebookBrowserFixes()
  }, [])

  return null
}
