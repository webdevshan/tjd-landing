import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Jewellery Department | Modern Heirlooms That Last Forever',
  description: 'Discover fine jewellery curated by The Jewellery Department — timeless pieces designed to celebrate life\'s most precious moments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-kohinoor antialiased">{children}</body>
    </html>
  )
}
