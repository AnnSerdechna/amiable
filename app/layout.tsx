import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'amiable',
  description: 'Learning English repeatability',
}

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className={'overflow-hidden h-screen container mx-auto px-4'}>
        <header className={'px-6 py-4'}>
          Header
        </header>
        <div className={'flex h-full'}>
          <aside className={'w-1/4 p-6'}>
            Sidebar nav
          </aside>
          <main className={'flex-grow p-6'}>
            {children}
          </main>
        </div>
      </div>
    </body>
    </html>
  )
}
