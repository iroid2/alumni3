import { JobsPage } from '@/components/front/jobslayout/JobsPage'
import PagesHero from '@/components/front/PagesHero'
import React from 'react'

export default function page() {
  return (
    <div className='pt-[140px]'>
      {/* <PagesHero title='Jobs' className='h-[40px]'/> */}
      <JobsPage/>
       </div>
  )
}
