/**
 * Detects the Facebook in-app browser (FBAV/FBAN) and applies
 * performance optimizations to prevent the site from freezing.
 *
 * The Facebook in-app browser has:
 * - Limited JS engine performance
 * - Poor GPU acceleration for CSS filters
 * - Aggressive memory limits
 * - Issues with backdrop-filter
 * - Limited IntersectionObserver support in older versions
 */

export function isFacebookBrowser(): boolean {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent || ''
  return /FBAN|FBAV|FB_IAB|FBIOS|Instagram/i.test(ua)
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent || ''
  )
}

/**
 * Applies Facebook browser fixes at runtime.
 * Call this once in a top-level client component (e.g. layout).
 */
export function applyFacebookBrowserFixes(): void {
  if (typeof window === 'undefined') return
  
  const isFB = isFacebookBrowser()
  const isMobile = isMobileDevice()

  if (isFB || isMobile) {
    // Add a class to <html> so CSS can target Facebook browser
    document.documentElement.classList.add('fb-compat')
    
    if (isFB) {
      document.documentElement.classList.add('fb-browser')
    }
  }
}
