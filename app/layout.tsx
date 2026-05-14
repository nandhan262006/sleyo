import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'REFLEXSIONS | Luxury Beauty Experience',
  description: 'Where artistry meets elegance. Experience transformative beauty services crafted with passion and precision.',
  keywords: ['luxury salon', 'beauty', 'hair styling', 'makeup', 'bridal', 'spa'],
}

export const viewport = {
  themeColor: '#c57645',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
