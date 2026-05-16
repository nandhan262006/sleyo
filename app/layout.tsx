import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REFLEXSIONS | Luxury Beauty Experience',
  description:
    'Where artistry meets elegance. Experience transformative beauty services crafted with passion and precision.',
  keywords: ['luxury salon', 'beauty', 'hair styling', 'makeup', 'bridal', 'spa'],
  openGraph: {
    title: 'REFLEXSIONS | Luxury Beauty Experience',
    description: 'Where artistry meets elegance. Transformative beauty services crafted with passion and precision.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#c57645',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
