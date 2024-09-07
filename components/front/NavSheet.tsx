import { Button } from "@/components/ui/button"
 
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 
import Link from "next/link"
import NavLinks from "./NavLinks"
 
export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <button type="button" className="text-gray-900">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Alumn</SheetTitle>
          
          <NavLinks/>
              
        </SheetHeader>
       
        <SheetFooter>
        <div className="  text-md flex-col ">
                <a href="/login" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>

                <a
                    href="/register"
                    title=""
                    className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                    role="button"
                >
                    Join community
                </a>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
