'use client'
import { Eye, EyeOff, Lightbulb, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ForgotPasswordForm() {
 
 

  return (
    <div className="py-8  w-full  px-8  flex flex-col gap-2">
    
                    <div className="text-center flex items-center flex-col">
                      <Lightbulb />
                    <h2 className='font-extrabold '>Forgot Your Account Password</h2>
                    <p>No worries we will  send reset Instructions</p>
                    </div>
                    <div className="">
            <form className=" "  >   
           
      <div>
       
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2 relative">
          <Mail className=' text-slate-300 w-5 h-5 absolute top-2 left-2'/>
          <input id="email" name="email" type="email"  required className="block w-full  px-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
 
      <div className='py-2'>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset Password</button>
      </div>
    </form>
    <p className=" text-center text-sm text-gray-500">
      Rememeber Your Details
      <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Back to Login</Link>
    </p>
    
  </div>
                </div>
  )
}
 
 

