import AlumniTableDetails from '@/components/AlumniDetailsTable'
import SearchCompo from '@/components/SearchCompo'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='pt-[140px]'>
      <SearchCompo title='Search' placeholder='Search from Employed' />
      <AlumniTableDetails/>
      
    </div>
  )
}
