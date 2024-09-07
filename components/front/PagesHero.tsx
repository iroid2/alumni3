import React from 'react'

export default function PagesHero({title,className}:{title:string,className?:string}) {
  return (
    <div className={`flex w-full h-[200px] items-center ${className} text-yellow-50 bgImg justify-center`}>
        <h1 className='font-bold  text-3xl f'>{title}</h1>
      </div>
  )
}
