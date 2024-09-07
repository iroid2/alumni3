
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../global/Textinput'
import SubmitButton from '../global/SubmitButton'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { signIn } from "next-auth/react";
import { getServerSession } from 'next-auth'

export type registerProps={
  email:string
  password:string  
}
import { authOptions } from '@/lib/authOptions'
export default function LoginForm() {
  const {register,handleSubmit,reset,formState:{errors}}=useForm<registerProps>()
  const [loading,setLoading]=useState(false)
const [toggleIcon,setToggleIcon]=useState(false)

const router = useRouter()
 
async function onSubmit(data: registerProps) {
//   const session = await getServerSession(authOptions)

// const user = session?.user
// console.log(user)
  setLoading(true);
  try {
    console.log("Attempting to sign in with credentials:", data);
    const loginData = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    console.log("SignIn response:", loginData);
    if (loginData?.error) {
      toast.error("Sign-in error: Check your credentials");
    } else {
      reset();
      toast.success("Login Successful");
      // router.push(`/moreInfor/${user?.id}`);
    }
  } catch (error) {
    console.error("Network Error:", error);
    toast.error("Its seems something is wrong with your Network");
  }finally{
    setLoading(false)
  }
}  
  return (
   <div className="grid md:grid-cols-2 w-full grid-cols-1 md:m-10 mx-2 px-2 my-20 md:w-[70%] md:mx-auto shadow-md overflow-hidden rounded-md">
     <div className="py-8    px-8  flex flex-col gap-2">
                    <h2 className='font-bold'>Login Your Account</h2>
                    <p>Welcome back, fill in the details to Login</p>
                    
<div className="providers grid grid-cols-2 gap-4">
  <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'><Image src={'/images/nwa.png'} alt='' width={20} height={20}/> google</div>
  <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'><Image src={'/images/fb.png'} alt='' width={20} height={20}/> Facebook</div>
 
</div>
                    <div className="">
            <form className=" "  onSubmit={handleSubmit(onSubmit)}>   
            <div className="grid gap-3 pt-3">
    <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
  </div>
  <div className="grid gap-3 pt-3">
    <TextInput
      register={register}
      errors={errors}
      label="Password"
      name="password"
      type='password'
    />
  </div>
       

      <div>
       
        <div className="py-3">
        <SubmitButton  title='Login' className='w-full ' loadingTitle='' loading={loading}  />
        </div>
      </div>
      
    </form>
    <p className=" text-center text-sm text-gray-500">
      Not Registered?
      <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create Account</Link>
    </p>
    
  </div>
                </div>
                <div className="hidden md:block w-full">
           <Image src={'https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?t=st=1724271792~exp=1724275392~hmac=112335d0eb4136e71d05274f049bf2490b5b5ed7eb82e7ae27c12beb3608afee&w=740'} alt='' className='w-full h-full' width={400} height={400}/>
        </div>
   </div>
  )
}
 
 

