"use client"

import { useState, useEffect } from "react"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { getAllUsers } from "@/actions/users"

type Profile = {
  profilePicture?: string;
  graduationYear?: string;
  courseStudied?: string;
  employmentStatus?: string;
  religiousAfflictions?: string;
  localResidence?: string;
  personalSkills?: string;
  organization?: string;
  currentPosition?: string;
  businessType?: string;
  businessRelatedToStudy?: string;
  capitalSource?: string;
  supportNeeded?: string;
}

type Alumni = {
  id: string;
  fullName?: string;
  maritalStatus: string;
  profile?: Profile;
}

const ITEMS_PER_PAGE = 5

type AlumniTableProps = {
  title: string;
  employmentStatus: string;
}

export default function AlumniTable({ title, employmentStatus }: AlumniTableProps) {
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
    const matchesEmploymentStatus = alumni.profile?.employmentStatus?.toLowerCase() === employmentStatus.toLowerCase()

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
        <CardTitle>{title}</CardTitle>
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
              <TableHead>Name</TableHead>
              <TableHead>Graduation Year</TableHead>
              <TableHead className="md:table-cell">Course</TableHead>
              <TableHead className="hidden md:table-cell">Marital Status</TableHead>
              <TableHead className="hidden md:table-cell">Religion</TableHead>
              {employmentStatus === 'employed' && (
                <>
                  <TableHead className="hidden md:table-cell">Current Position</TableHead>
                  <TableHead className="hidden md:table-cell">Organization</TableHead>
                </>
              )}
              {employmentStatus === 'self-employed' && (
                <>
                  <TableHead className="hidden md:table-cell">Business Type</TableHead>
                  <TableHead className="hidden md:table-cell">Related to Study</TableHead>
                </>
              )}
              {employmentStatus === 'unemployed' && (
                <TableHead className="hidden md:table-cell">Support Needed</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAlumni.map((alumni, i) => (
              <TableRow key={alumni.id || i}>
                <TableCell className="font-medium">{alumni.fullName}</TableCell>
                <TableCell>
                  <Badge variant="outline">{alumni.profile?.graduationYear}</Badge>
                </TableCell>
                <TableCell className="md:table-cell">{alumni.profile?.courseStudied}</TableCell>
                <TableCell className="hidden md:table-cell">{alumni.maritalStatus}</TableCell>
                <TableCell className="hidden md:table-cell">{alumni.profile?.religiousAfflictions}</TableCell>
                {employmentStatus === 'employed' && (
                  <>
                    <TableCell className="hidden md:table-cell">{alumni.profile?.currentPosition}</TableCell>
                    <TableCell className="hidden md:table-cell">{alumni.profile?.organization}</TableCell>
                  </>
                )}
                {employmentStatus === 'self-employed' && (
                  <>
                    <TableCell className="hidden md:table-cell">{alumni.profile?.businessType}</TableCell>
                    <TableCell className="hidden md:table-cell">{alumni.profile?.businessRelatedToStudy}</TableCell>
                  </>
                )}
                {employmentStatus === 'unemployed' && (
                  <TableCell className="hidden md:table-cell">{alumni.profile?.supportNeeded}</TableCell>
                )}
              </TableRow>
            ))}
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