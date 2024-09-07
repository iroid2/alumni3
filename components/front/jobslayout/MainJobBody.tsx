import { Button } from '@/components/ui/button'
import { ButtonBase } from '@mui/material'
import { Pin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function MainJobBody() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid grid-cols-3">
            <div className="card  border-1 border p-2 rounded-md">
                <div className="bg-green-300 p-2 rounded-md">
                <div className="flex items-center justify-between ">
                    <div className="date text-[15px] bg-red-400 rounded-full p-2">23/08/2022</div>
                    
                    <Pin className='bg-white p-2 text-[20px] rounded-full' />
                 
                </div>
                <div className="j0b-details flex items-center justify-between">
                    <div className="job flex-wrap w-[65%]">
                        <p className="company text-[14px]">Amazon</p>
                        <h1 className="job-title text-[18px] font-extrabold">Cerified Accountant</h1>
                    </div>
                    <Image src={'/images/alum.png'} alt='' width={40} height={30}/>
                </div>
                </div>
                <div className="flex justify-between p-2">
                    <div className="abt-salary">
                        <h1 className='font-extrabold text-[20px] '>$253</h1>
                        <p className="location font-bold text-[12px]">Kampala Uganda</p>
                    </div>
                    <Button className="abt-salary bg-black text-white  rounded-full">Details</Button>
                </div>
            </div>
          </div>
        </main>
  )
}
