'use client';  
import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';  
import toast, { Toaster } from 'react-hot-toast';
import TextInput from '../global/Textinput';  
import SubmitButton from '../global/SubmitButton';  
import Image from 'next/image';  
import Link from 'next/link';  
 
import { useRouter } from 'next/navigation';
import { createUser } from '@/actions/users';

export type registerProps={
  email:string
  fullName:string
  gender:string
  maritalStatus:string
  password:string
  token: any
  role:any  
}

 

export default function RegisterForm({role}:{role?:string}) {  
  const { register, handleSubmit, reset,formState: { errors } } = useForm<registerProps>();  
  const [loading, setLoading] = useState(false);  
  const router=useRouter()

  async function onSubmit(data:registerProps) {  
    // console.log(data);  
    data.role=role
    setLoading(true)
    try {
      const res =await createUser(data)
      if(res.status === 201){
        reset()
    router.push(`/verify-account/${res.data?.id}`)
    toast.success('User Created SuccessFully !')
      } else if (res.status === 404){
        toast.error('Email Already Exists!')

      }
      
    } catch (error) {
      console.log(`Error`,error)
    }finally{
      setLoading(false)
    }
  }  

  return (  
    <div className='p-5'>  
      <div className="grid md:grid-cols-2 grid-cols-1 md:m-20 mx-2 md:px-0 px-8 my-10 md:w-[80%] w-full md:mx-auto shadow-md overflow-hidden rounded-md">  
      <Toaster
  position="top-center"
  
  reverseOrder={false}
/>
        <div className="py-8 w-full md:px-8 flex flex-col gap-2">  
          <h2 className='font-bold'>Login Your Account</h2>  
          <p>Welcome back, fill in the details to Login</p>  
          
          <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'>  
            <Image src={'/images/nwa.png'} alt='' width={20} height={20}/> google  
          </div>  

          <div className="">  
            <form className="" onSubmit={handleSubmit(onSubmit)}>   
              <div className="grid gap-3 pt-3">  
                <div className="grid grid-cols-2 gap-4">  
                  <TextInput register={register} errors={errors} label="Full Name" name="fullName" />  
                  <TextInput register={register} errors={errors} label="Email" name="email" placeholder='Enter Your Email' />  
                </div>  
                <div className="grid grid-cols-2 gap-4">  
                  <TextInput register={register} errors={errors} label="Password" name="password" type="password" />  
                </div>  
                <div className="grid grid-cols-2 gap-4 items-center">  
                  <div className="">  
                    <label htmlFor="gender">Gender</label> <br />  
                    <select   
                      className='h-10 shadow-md'   
                      {...register("gender", { required: "Gender is required" })}  
                    >  
                      <option value="">Select Gender</option>  
                      <option value="male">Male</option>  
                      <option value="female">Female</option>  
                    </select>  
                      
                  </div>  
                  <div className="">  
                    <label htmlFor="maritalStatus">Marital Status</label>  
                    <select   
                      className='h-10 shadow-md'   
                      {...register("maritalStatus", { required: "Marital status is required" })}  
                    >  
                      <option value="">Select Marital Status</option>  
                      <option value="married">Married</option>  
                      <option value="single">Single</option>  
                      <option value="other">Other</option>  
                    </select>  
                     
                  </div>  
                </div>  
              </div>  
              <div>  
                <div className="py-3">  
                  
                  <SubmitButton title='Create Account' className='w-full' loadingTitle='' loading={loading} />  
                </div>  
              </div>  
            </form>  
          
            <p className="text-center text-sm text-gray-500">  
              Already Registered?  
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login </Link>  
            </p>  
          </div>  
        </div>  
        <div className="hidden md:block">  
          <Image src='https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg' alt='' className='w-full h-full' width={400} height={400}/>  
        </div>  
      </div>  
    </div>  
  );  
}