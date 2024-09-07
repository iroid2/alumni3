import React from 'react'
import { NavSheet } from './NavSheet'
import Link from 'next/link';
import NavLinks from './NavLinks';


export default function Nav() {
  
      
      // Optional links
      
      
  return (
    <header className="relative py-4 shadow-md md:py-3 bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex items-center     rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                   <span>alu </span> <span className='font-extrabold bg-white text-black text-2xl'>Mni</span> 
                </a>
            </div>

            <div className="flex lg:hidden">
               <NavSheet/>
            </div>

            <div className="hidden lg:absolute font-[20px] lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <NavLinks/>
                
{/* 
                <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Community Groups </a>

                <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a> */}
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a href="/login" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>

                <a
                    href="/register"
                    title=""
                    className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                    role="button"
                >
                    Join community
                </a>
            </div>
        </div>
    </div>
</header>
  )
}
