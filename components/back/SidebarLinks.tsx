import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { 
    
    User, 
    Edit, 
    Users, 
    MessageSquare, 
    Calendar, 
    Briefcase, 
    BookOpen, 
   
    LogOut, 
    UserCheck, 
    BarChart 
  } from 'lucide-react';
import Link from 'next/link'
import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from 'lucide-react'

export default function SidebarLinks() {
    const dashboardRoutes = [
        { name: "Home", path: "/dashboard", icon: <Home className="h-5  w-5"/> },
        { name: "Profile", path: "/dashboard/profile", icon: <User className="h-5 w-5"/> },
        { name: "Edit Profile", path: "/dashboard/profile/edit", icon: <Edit  className="h-5 w-5"/> },
        { name: "Alumni Directory", path: "/dashboard/alumni-directory", icon: <Users className="h-5 w-5"/> },
        // { name: "Messages", path: "/dashboard/messages", icon: <MessageSquare className="h-5 w-5" /> },
        // { name: "Events", path: "/dashboard/events", icon: <Calendar className="h-5 w-5" /> },
        // { name: "Job Board", path: "/dashboard/jobs", icon: <Briefcase className="h-5 w-5" /> },
        // { name: "Alumni Stories", path: "/dashboard/stories", icon: <BookOpen className="h-5 w-5"/> },
        // { name: "Settings", path: "/dashboard/settings", icon: <Settings className="h-5 w-5"/> },
        { name: "Logout", path: "/logout", icon: <LogOut className="h-5 w-5"/> }
      ];
      
      // Admin-specific routes (if applicable)
      const adminRoutes = [
        { name: "User Management", path: "/dashboard/admin/users" }, // Manage users (approve, edit, delete)
        { name: "Event Management", path: "/dashboard/admin/events" }, // Create, edit, and delete events
        { name: "Job Management", path: "/dashboard/admin/jobs" }, // Approve, edit, and delete job postings
        { name: "Content Management", path: "/dashboard/admin/stories" }, // Approve, edit, and delete alumni stories
        { name: "Analytics", path: "/dashboard/admin/analytics" } // View site metrics and user engagement data
      ];
  return (
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
    <Link
      href="#"
      className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
    >
      <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
      <span className="sr-only">Acme Inc</span>
    </Link>
    {
      dashboardRoutes.map((route,i)=>{
        const Icon=route.icon
        return <TooltipProvider key={i}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={ route.path}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
               {route.icon}
              <span className="sr-only">{route.name}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{route.name}</TooltipContent>
        </Tooltip>
        </TooltipProvider>
      })
    }
    
    
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Orders</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Orders</TooltipContent>
    </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Package className="h-5 w-5" />
          <span className="sr-only">Products</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Products</TooltipContent>
    </Tooltip>
    </TooltipProvider>
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Users2 className="h-5 w-5" />
          <span className="sr-only">Customers</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Customers</TooltipContent>
    </Tooltip>
    </TooltipProvider>
   
   <TooltipProvider>
   <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <LineChart className="h-5 w-5" />
          <span className="sr-only">Analytics</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Analytics</TooltipContent>
    </Tooltip>
   </TooltipProvider>
    
  </nav>
  )
}
