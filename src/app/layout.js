import Header from '../components/Header'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

export const metadata = {
  title: 'Paragon Insurance | Personal & Commercial Insurance',
  description: 'Insurance agency offering personalized coverage for homes, autos, and businesses. Get a free quote today from Paragon Insurance.',
  keywords: ['insurance', 'Texas insurance', 'personal insurance', 'commercial insurance', 'home insurance', 'auto insurance', 'Dallas insurance'],
  openGraph: {
    title: 'Paragon Insurance | Personal & Commercial Insurance in Texas',
    description: 'Texas-based insurance agency offering personalized coverage for homes, autos, and businesses. Get a free quote today.',
    url: 'https://paragon-insurance.vercel.app',
    siteName: 'Paragon Insurance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paragon Insurance | Personal & Commercial Insurance in Texas',
    description: 'Texas-based insurance agency offering personalized coverage for homes, autos, and businesses.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}