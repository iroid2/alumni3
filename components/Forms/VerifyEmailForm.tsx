'use client'
import { Eye, EyeOff, FileQuestionIcon, Lightbulb, Lock, LockKeyholeOpenIcon, Mail } from 'lucide-react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import Link from 'next/link'
import React, { useState } from 'react'

export default function VerifyEmail() {
 
 

  return (
    <div className="py-8  w-full  px-8  flex flex-col gap-5 bg-red-500 ">
    
                    <div className="text-center flex items-center flex-col">
                      <LockKeyholeOpenIcon />
                    <h2 className='font-extrabold '>Enter Code</h2>
                    <p>We sent a one time code to Your email</p>
                    </div>
                    <div className="">
            <form className="flex items-center w-full justify-center flex-col  "  >   
           
            <InputOTP maxLength={6} className='mx-auto w-[90%]'>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
 
      <div className='py-2 w-full'>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify Email</button>
      </div>
    </form>
   
    
  </div>
                </div>
  )
}
 
 

