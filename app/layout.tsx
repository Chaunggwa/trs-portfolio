import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/theme-toggler'

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
      <body className={`${inter.className} w-full overflow-x-hidden bg-stone-100 text-gray-950 dark:text-gray-200 dark:bg-gray-600`}>
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
        >

        <Toaster position="top-right"/>
        <Header />
        {children}
        <Footer />
        <ModeToggle />
        </ThemeProvider>
        </body>
    </html>
  )
}
