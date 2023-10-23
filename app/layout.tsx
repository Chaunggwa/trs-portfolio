import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Special_Elite({weight: "400", style: "normal", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'TRS | Portfolio',
  description: 'Portfolio of developer Thu Rein Soe, a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden bg-stone-100 text-gray-950`}>
        

        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
