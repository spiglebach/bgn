import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from "@/app/providers";
import AppHeader from "@/components/layout/app-header";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Társasjátékos Esemény Szervező', // TODO localize
  icons: {
    icon: "/icon.ico"
  }
}

interface RootLayoutProps {
  children: ReactNode,
  params: {
    locale: string
  }
}

export default function RootLayout({children, params: {locale}}: RootLayoutProps) {
  return (
    <html lang={locale}>
    <body className={inter.className}>
    <Providers>
      <AppHeader/>
      {children}
    </Providers>
    </body>
    </html>
  )
}
