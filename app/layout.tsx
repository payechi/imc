import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Inventive Multimedia Academy | Shine Your Skills',
  description: 'Professional multimedia training institute offering courses in Graphic Designing, Animation, VFX, and more with 100% Placement Assistance.',
  keywords: 'multimedia academy, graphic design training, animation courses, VFX, programming',
  openGraph: {
    title: 'Inventive Multimedia Academy',
    description: 'Shine Your Skills - 100% Placement Assistance',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
