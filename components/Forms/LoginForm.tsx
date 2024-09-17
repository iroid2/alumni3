'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../global/Textinput'
import SubmitButton from '../global/SubmitButton'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { signIn } from "next-auth/react"

import { getUserByEmail } from '@/actions/users'
import { UserRole } from '@/types/user';  // Adjust the path as needed
import { User } from '@/types/user'

export type registerProps = {
  email: string
  password: string  
}

export default function LoginForm() {
  const {register, handleSubmit, reset, formState:{errors}, setError} = useForm<registerProps>()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
 
  async function onSubmit(data: registerProps) {
    setLoading(true);
    try {
      // First, check if the email exists
      const userResponse = await getUserByEmail(data.email);
      
      if (userResponse.status !== 200 || !userResponse.data) {
        setError('email', { 
          type: 'manual', 
          message: 'No account found with this email' 
        });
        toast.error("No account found with this email");
        setLoading(false);
        return;
      }
      
      // If email exists, attempt to sign in
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result?.error) {
        setError('password', { 
          type: 'manual', 
          message: 'Wrong password' 
        });
        toast.error("Wrong password");
      } else {
        toast.success("Login Successful");
        
        const userData = userResponse.data;
        
        // First, let's ensure userData.role is a valid UserRole
        const userRole = userData.role as UserRole;

        // Redirect based on user role
        switch (userRole) {
          case UserRole.EMPLOYED:
            router.push('/employed-dashboard');
            break;
          case UserRole.UNEMPLOYED:
            router.push('/unemployed-dashboard');
            break;
          case UserRole.STUDENT:
            router.push('/student-dashboard');
            break;
          default:
            console.log("Unknown role, redirecting to profile");
            router.push('/employed');
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  }  

  return (
    <div className="  bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
       <h2 className="mt-6 text-center md:w-[50%] w-full mx-auto text-3xl font-extrabold text-gray-900">
          KYAMBOGO UNIVERSITY ALUMNI TRACKING AND TRACER STUDY SYSTEM
        </h2>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
       
        <p className="mt-2 text-center text-sm text-gray-600">
          Your gateway to alumni connections and opportunities
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Login to Your Account</h2>
            <p className="text-sm text-gray-500">Welcome back, please enter your details to login</p>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>   
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                rules={{ required: "Email is required" }}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
                type='password'
                rules={{ required: "Password is required" }}
              />

              <div>
                <SubmitButton title='Login' loading={loading} />
              </div>
            </form>

            <p className="mt-2 text-center text-sm text-gray-600">
              Not Registered?{' '}
              <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
 
    </div>
  )
}

