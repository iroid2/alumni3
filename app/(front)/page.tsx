import Footer from '@/components/front/Footer'
import Hero from '@/components/front/Hero'
import { DockDemo } from '@/components/front/jobslayout/usericons/Dock'
import Nav from '@/components/front/Nav'
import Faq from '@/components/landingFo/Faq'
import FeedBack from '@/components/landingFo/FeedBack'
import Process from '@/components/landingFo/Process'
import React from 'react'

export default function page() {
  return (
    <div className='relative'>
      {/* <Nav/> */}
      <Hero/>
      <Process/>
      <FeedBack/>
      <Faq/>
      <DockDemo/>
    </div>
  )
}
