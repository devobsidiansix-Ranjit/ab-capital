// app/layout.tsx
import Navbar from '@/components/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AB Capital Company Formation',
  description: 'AB Capital Company Formation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* ✅ Google Tag Manager includes both script and noscript automatically */}
      {process.env.NODE_ENV === 'production' && (
        <GoogleTagManager gtmId="GTM-54DQNPT5" />
      )}
      <head>
        {/* ✅ Google Ads (gtag.js) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=AW-11272677516`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-11272677516');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
