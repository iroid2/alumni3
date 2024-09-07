import React from 'react'
import Meteors from '../magicui/meteors'
import AnimatedGradientText from '../magicui/animated-gradient-text'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-16  lg:pt-[12rem] pt-[15rem]  xl:pb-0 bg-black z-2 ">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
            <div className=" flex   items-center justify-center ">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 rounded-full h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient  text-2xl px-4 py-2 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Made by Kyu
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
                 
                <Meteors number={30} />
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-300 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj ">Building Bridges Within <span className='inline animate-gradient   px-4 py-2 bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent'>Kyu Alumni</span>  Community</h1>

                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-white  font-inter">Networking Opportunities: Connect with fellow alumni to share insights, collaborate on projects, and explore career advancements.</p>

                <div className="relative inline-flex mt-10 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        over 200 opportunities available
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-16 md:mt-20">
            <img className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="" />
        </div>
    </section>
  )
}
