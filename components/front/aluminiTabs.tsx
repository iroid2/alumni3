'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import UserCard from "./UserCard"
import { Search } from "lucide-react"

export function AluminiTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
     <div className="flex w-full justify-between ">
     <TabsList className=" flex ">
        <TabsTrigger value="employed">Employed</TabsTrigger>
        <TabsTrigger value="selfemployed">self-emplyed</TabsTrigger>
        <TabsTrigger value="password">Unemployed</TabsTrigger>
      </TabsList>
      <div className="flex items-center p-3 gap-4">
      <button className="">expand</button>
        <div className="relative">
          <Search className="absolute top-[35%] h-4 "/>
        <Input placeholder="search for alumni" className="px-6"/>
        </div>
      </div>
     </div>
      <TabsContent value="employed">
         <UserCard/>
         <UserCard/>
      </TabsContent>
      <TabsContent value="selfemployed">
        <Card>
        <UserCard/>
        <UserCard/>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
        <UserCard/>
        <UserCard/>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
