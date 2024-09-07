import Banner from '@/components/front/Banner'
import Footer from '@/components/front/Footer'
import Hero from '@/components/front/Hero'
import Nav from '@/components/front/Nav'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='overflow-x-hidden relative'>
        <div className=" fixed z-50 top-0 w-full">
        <Banner/>
        <Nav/>
        </div>
        {children}
        <Footer/>
        </div>
  )
}
