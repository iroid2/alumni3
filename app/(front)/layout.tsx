'use client'
import Banner from '@/components/front/Banner'
import Footer from '@/components/front/Footer'
import Nav from '@/components/front/Nav'
import { SessionProvider, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

function LayoutContent({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isAuthenticated = status === 'authenticated'

  return (
    <div className='overflow-x-hidden relative'>
      <div className="fixed z-50 top-0 w-full">
        {!isHomePage && isAuthenticated && (
          <>
            <Banner />
            <Nav />
          </>
        )}
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <LayoutContent>{children}</LayoutContent>
    </SessionProvider>
  )
}
