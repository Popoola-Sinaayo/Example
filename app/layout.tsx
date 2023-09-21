import '../styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from "@components/Nav"
import Provider from "@components/Provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'This is an AI prompt Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
