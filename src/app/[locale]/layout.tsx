import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from "@/app/providers";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Társasjátékos Esemény Szervező',
  icons: {
    icon: "/icon.ico"
  }
}

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string
  }
}

export default function RootLayout({children, params: {locale}}: RootLayoutProps) {
  return (
    <html lang={locale}>
    <body className={inter.className}>
    <Providers>
      <Header/>
      {children}
    </Providers>
    </body>
    </html>
  )
}
