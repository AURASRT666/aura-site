import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CinematicLight from "@/components/cinematic-light"
export const metadata: Metadata = {
  title: 'AURA | Premium Digital Marketplace',
  description: 'Premium digital marketplace',
  icons: {
    icon: '/icon.png',
  },
}

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white overflow-x-hidden">

        {/* IMPORTANT: render client effect AFTER hydration */}
        <div suppressHydrationWarning>
          <CinematicLight />
        </div>

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
