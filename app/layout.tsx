import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ireland Family Trip — Aug 2026',
  description: 'Family itinerary for our Ireland trip, August 2026',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-gray-900 antialiased">{children}</body>
    </html>
  )
}
