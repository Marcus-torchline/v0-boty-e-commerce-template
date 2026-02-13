import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CartProvider } from '@/components/boty/cart-context'
import { FBCompat } from '@/components/boty/fb-compat'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
});

const SITE_URL = 'https://www.confitone.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Confitone — Reclaim Your Sleeveless Confidence',
    template: '%s | Confitone',
  },
  description: 'Comfortable, non-invasive arm toning sleeves for women 40+. Real women, real results. 30-day money-back guarantee.',
  generator: 'v0.app',
  keywords: ['arm toning', 'arm sleeves', 'arm shaper', 'women over 40', 'arm fat', 'compression sleeves', 'body confidence'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Confitone',
    title: 'Confitone — Reclaim Your Sleeveless Confidence',
    description: 'Comfortable, non-invasive arm toning sleeves for women 40+. Trusted by 23,000+ women. 30-day money-back guarantee.',
    images: [
      {
        url: '/images/confitone-hero.png',
        width: 1200,
        height: 630,
        alt: 'Confitone arm toning sleeves - reclaim your sleeveless confidence',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confitone — Reclaim Your Sleeveless Confidence',
    description: 'Comfortable, non-invasive arm toning sleeves for women 40+. Trusted by 23,000+ women.',
    images: ['/images/confitone-hero.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#5BB98C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for Facebook domains to reduce connection time */}
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1204483708506569');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1204483708506569&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <FBCompat />
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
