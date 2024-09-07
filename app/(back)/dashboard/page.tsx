import { Card } from '@/components/ui/card'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default async function page() {
const session = await getServerSession(authOptions)

const user = session?.user
  return (
    <div>
      <div className="flex w-full justify-center bg-purple-600  items-center h-[100px]">
        <h2 className='text-white md:text-3xl text-2xl font-extrabold'>Welcome Admin {user?.name}  </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 m-4">
        <Card className='p-4 user'>
          <h2 className='font-bold text-2xl'>User Management</h2>
          <div className="total-alum flex   items-center justify-between">
            <h1 className='font-bold'>Total Almuni:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="pending-alum flex items-center justify-between">
            <h1 className='font-bold'>Pending Approvals:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="flagged-alum flex items-center justify-between">
            <h1 className='font-bold'>Flagged Profiles:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <Link href={'/dashboard/profile'}>More user management</Link>
        </Card>
        <Card className='p-4 evennts'>
          <h2 className='font-bold text-2xl'>Events Management</h2>
          <div className="total-alum flex items-center justify-between">
            <h1 className='font-bold'>Upcoming Events:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="pending-alum flex items-center justify-between">
            <h1 className='font-bold'>New Event Requests:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
           
          <Link href={'/dashboard/profile'}>More user management</Link>
        </Card>
        <Card className='p-4 jobs flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>Job Postings</h2>
          <div className="total-alum flex items-center justify-between">
            <h1 className='font-bold'>New Job Submissions:</h1>
            <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="pending-alum flex   items-center justify-between">
            <h1 className='font-bold'>Active Jobs:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
           
          <Link href={'/dashboard/profile'}>More user management</Link>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5  m-5">
      <Card className='p-4 user'>
          <h2 className='font-bold text-2xl'>User Management</h2>
          <div className="total-alum flex   items-center justify-between">
            <h1 className='font-bold'>Total Almuni:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="pending-alum flex items-center justify-between">
            <h1 className='font-bold'>Pending Approvals:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="flagged-alum flex items-center justify-between">
            <h1 className='font-bold'>Flagged Profiles:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <Link href={'/dashboard/profile'}>More user management</Link>
        </Card>
        <Card className='p-4 evennts'>
          <h2 className='font-bold text-2xl'>Events Management</h2>
          <div className="total-alum flex items-center justify-between">
            <h1 className='font-bold'>Upcoming Events:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
          <div className="pending-alum flex items-center justify-between">
            <h1 className='font-bold'>New Event Requests:</h1>
           <span className='text-[27px] font-extrabold'>20</span>
          </div>
           
          <Link href={'/dashboard/profile'}>More user management</Link>
        </Card>
      </div>
    </div>
  )
}
