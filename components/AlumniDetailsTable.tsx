"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
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
import { getAllUsers } from "@/actions/users"
import { Input } from "@/components/ui/input"

// Update the Profile type with the new fields
type Profile = {
  profilePicture?: string;
  graduationYear?: string;
  courseStudied?: string;
  employmentStatus?: string;
  religiousAfflictions?: string;
  localResidence?: string;
  personalSkills?: string;
  organization?: string;
  // Add other profile fields as needed
}

type Alumni = {
  id: string;
  fullName?: string;
  maritalStatus: string;
  profile?: Profile;
  // Add other user fields as needed
}

const ITEMS_PER_PAGE = 5

export default function AlumniTableDetails() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [alumni, setAlumni] = useState<Alumni[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchAlumni() {
      try {
        const data = await getAllUsers()
        setAlumni(data as Alumni[])
      } catch (error) {
        console.error("Failed to fetch alumni:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAlumni()
  }, [])

  const filteredAlumni = alumni.filter((alumni: Alumni) => {
    const matchesEmploymentStatus = 
      (pathname.includes("/employed") && alumni.profile?.employmentStatus === "employed") ||
      (pathname.includes("/unemployed") && alumni.profile?.employmentStatus === "unemployed") ||
      (pathname.includes("/self-employed") && alumni.profile?.employmentStatus === "self-employed") ||
      !pathname.includes("/employed") && !pathname.includes("/unemployed") && !pathname.includes("/self-employed")

    const searchableFields = [
      alumni.fullName,
      alumni.profile?.courseStudied,
      alumni.profile?.graduationYear,
      alumni.profile?.localResidence,
      alumni.profile?.organization,
      alumni.profile?.personalSkills,
      alumni.profile?.religiousAfflictions
    ]

    const matchesSearch = searchQuery === '' || searchableFields.some(field => 
      field?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return matchesEmploymentStatus && matchesSearch
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const pageCount = Math.ceil(filteredAlumni.length / ITEMS_PER_PAGE)
  const paginatedAlumni = filteredAlumni.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, pageCount))
  const goToPreviousPage = () => setCurrentPage((page) => Math.max(page - 1, 1))

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alumni Details</CardTitle>
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search alumni..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
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
           {
            paginatedAlumni?.map((alumni,i)=>{
              return(    <TableRow key={alumni.id || i}>
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
                  {alumni.fullName}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{alumni.profile?.graduationYear}</Badge>
                </TableCell>
                <TableCell className="  md:table-cell">Engneering</TableCell>
                <TableCell className="hidden md:table-cell">{alumni.maritalStatus}</TableCell>
                <TableCell className="hidden md:table-cell">
                Catholic
                </TableCell>
                 
              </TableRow>
              )
            })
           }
        
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-xs text-muted-foreground">
          Showing <strong>{paginatedAlumni.length}</strong> of <strong>{filteredAlumni.length}</strong> alumni
        </div>
        <div className="flex justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={currentPage === pageCount}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
