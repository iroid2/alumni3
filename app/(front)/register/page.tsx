"use client"

import RegisterForm from '@/components/Forms/RegisterForm'
import React from 'react'

export default function page() {
  return (
    <div className='pt-20'  suppressHydrationWarning={true}>
        <RegisterForm role='USER' />
    </div>
  )
}
