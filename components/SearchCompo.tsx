import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

export default function SearchCompo({title,placeholder}:{title:string,placeholder:string}) {
  return (
    <div className="flex justify-end py-5  items-center gap-4 px-5">
    <Button>  {title}</Button>
   <div className="relative self-end py-2">
      <Search className='absolute top-[35%] h-5 text-gray-400'/>
      <input placeholder={placeholder} className='border-gray-400 rounded-sm h-9 border-[.4px] px-5'/>
      
    </div>
   </div>
  )
}
