"use client"

import RegisterForm from '@/components/Forms/RegisterForm'
import React from 'react'

export default function page() {
  return (
    <div className=''  suppressHydrationWarning={true}>
        <RegisterForm role='USER' />
    </div>
  )
}
