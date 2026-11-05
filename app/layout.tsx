import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ToneFinds | Discover Gear Worth Playing For',
    template: '%s | ToneFinds',
  },
  description:
    'Thoughtfully discovered music accessories for every musician, every setup and every stage of the journey.',
  keywords: [
    'guitar accessories',
    'music gear',
    'capos',
    'guitar picks',
    'guitar strings',
    'studio accessories',
    'musician gifts',
    'home recording',
  ],
  authors: [{ name: 'ToneFinds' }],
  openGraph: {
    title: 'ToneFinds | Discover Gear Worth Playing For',
    description:
      'Thoughtfully discovered music accessories for every musician, every setup and every stage of the journey.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tonefinds.com',
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
