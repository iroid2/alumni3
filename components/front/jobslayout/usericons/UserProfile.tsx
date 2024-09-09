import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import React from 'react'

export default function UserProfile() {
  return (
    
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="overflow-hidden rounded-full"
      >
        <Image
          src="https://img.freepik.com/premium-photo/picture-african-american-man-smiling-passport-photo_1105541-16752.jpg?w=740"
          width={36}
          height={36}
          alt="Avatar"
          className="overflow-hidden rounded-full"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  )
}
