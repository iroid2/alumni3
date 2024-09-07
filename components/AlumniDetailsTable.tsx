"use client"

import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AlumniTableDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alumni Detils</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="  w-[100px] sm:table-cell">
                <span className="">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Graduation Year</TableHead>
              <TableHead className="  md:table-cell">Course</TableHead>
              <TableHead className="hidden md:table-cell">
                Marital Status
              </TableHead>
              <TableHead className="hidden md:table-cell">Religion</TableHead>
               
            </TableRow>
          </TableHeader>
          <TableBody>
           
            <TableRow>
              <TableCell className="  sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="https://img.freepik.com/premium-photo/darkskinned-woman-with-afro-haircut-gazes-open-space-great-promotions_671421-215.jpg?w=740"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Gamer Gear Pro Controller
              </TableCell>
              <TableCell>
                <Badge variant="outline">2012</Badge>
              </TableCell>
              <TableCell className="  md:table-cell">Engneering</TableCell>
              <TableCell className="hidden md:table-cell">Single</TableCell>
              <TableCell className="hidden md:table-cell">
              Catholic
              </TableCell>
               
            </TableRow>
            
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}
