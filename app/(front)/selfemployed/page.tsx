import AlumniTableDetails from '@/components/AlumniDetailsTable'
import SearchCompo from '@/components/SearchCompo'
import React from 'react'

export default function page() {
  return (
    <div className='pt-[140px]'>
      <SearchCompo placeholder='Search from Self Employed' title='SelfEmployed'/>
      <AlumniTableDetails/>
    </div>
  )
}
