'use client'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ChangePasswordForm() {
const [toggleIcon,setToggleIcon]=useState(false)
function handleSetToggle(e:any){
  setToggleIcon(!toggleIcon)
  e.preventDefault()
}

const [password,showPassword]=useState('')

  return (
    <div className="py-8  w-full  px-8  flex flex-col gap-2">
                    <h2 className='font-bold'>Create A New Password</h2>
                    <p>Fill in the details to change the password</p>
                    <div className="">
            <form className=" "  >   
            <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">New Password</label>
       
        </div>
        <div className="mt-2 relative">
        <Lock className=' text-slate-300 w-5 h-5 absolute top-2 left-2'/>
          <input onChange={(e)=>showPassword(e.target.value)} value={password} id="password" name="password" type={toggleIcon?"text":"password"}  required className="block w-full px-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <button onClick={handleSetToggle} className=' text-slate-300 w-5 h-5 absolute top-2 right-2'>{toggleIcon ?<EyeOff  /> :<Eye/>} </button>
          
          
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900  ">Confirm Password</label>

        </div>
        <div className="mt-2 relative">
        <Lock className=' text-slate-300 w-5 h-5 absolute top-2 left-2'/>
          <input onChange={(e)=>showPassword(e.target.value)} value={password} id="password" name="password" type={toggleIcon?"text":"password"}  required className="block w-full px-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <button onClick={handleSetToggle} className=' text-slate-300 w-5 h-5 absolute top-2 right-2'>{toggleIcon ?<EyeOff  /> :<Eye/>} </button>
          
          
        </div>
      </div>
      <div className='py-2'>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save New Password</button>
      </div>
    </form>
    <p className=" text-center text-sm text-gray-500">
      Not Registered?
      <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create Account</Link>
    </p>
    
  </div>
                </div>
  )
}
 
 

