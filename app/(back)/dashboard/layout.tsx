import Header from '@/components/back/Header'
import Sidebar from '@/components/back/Sidebar'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'

export default async function layout({children}:{children:ReactNode}) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <Sidebar/>
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header/>
     {children}
    </div>
  </div>
  )
}
