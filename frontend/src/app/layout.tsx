import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import './navbar.css'

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Project: Afternight',
  description: 'hi :3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="main">
          <div className="topbar"></div>
          <div className="header">
            <div className="headerTabLeft headerTab">
              <Link href="/">Home</Link>
            </div>
            <div className="headerTabLeft headerTab">
              <Link href="/about">About</Link>
            </div>
            <div className="headerTabLeft headerTab">
              <Link href="/updates">Updates</Link>
            </div>
            <div className="headerMain">
              <Image
                className="logo"
                src="/arrow.png"
                alt="Afternight Logo"
                width={32}
                height={32}
                priority
              />
              <p className="title">Project: Afternight</p>
            </div>
            <div className="headerTabRight headerTab">
              <Link href="/support">Support</Link>
            </div>
            <div className="headerTabRight headerTab">
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="headerTabRight headerTab">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="body">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
