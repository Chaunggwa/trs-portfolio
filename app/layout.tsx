import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

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
      <body className={`${inter.className} max-w-full overflow-x-hidden relative bg-stone-100 text-gray-950`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[31.25rem] w-[31.25rem] z-[-10] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'>hi</div>
        <div className='bg-[#c2cdd6] absolute top-[-1rem] left-[31.25rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]'>hi</div>

        <Header />
        {children}</body>
    </html>
  )
}
