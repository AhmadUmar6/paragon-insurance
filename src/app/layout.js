import Header from '../components/Header'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

export const metadata = {
  title: 'CMT Advocates',
  description: 'Professional legal services for all your needs.',
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