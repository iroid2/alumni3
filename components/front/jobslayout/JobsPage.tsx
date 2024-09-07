import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/back/Sidebar"
import AboutHeader from "./JobsHeader"
import MainJobBody from "./MainJobBody"
import JobSidebar from "./JobSidebar"
import JobHeader from "./JobsHeader"

export function JobsPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <JobSidebar/>
      <div className="flex flex-col">
        <JobHeader/>
        <MainJobBody/>
      </div>
    </div>
  )
}
