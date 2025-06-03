import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fruitilicious',
  description: 'Created by Ketan',
  generator: 'Ketan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
