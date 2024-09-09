"use client"

import React, { useEffect, useState } from 'react'
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { MoreHorizontal, PlusCircle } from 'lucide-react'
import { Badge } from '../ui/badge'
import { getAllUsers } from '@/actions/users'

type UserData = {
  id: string;
  fullName: string | null;
  email: string | null;
  gender: string;
  maritalStatus: string;
  emailVerified: Date | null;
  password: string;
  image: string | null;
  role: string;
  isVerfied: boolean;
  token: number;
  createdAt: Date;
  updatedAt: Date;
};

type AlumniProfile = {
  id: string;
  fullName: string;
  email: string;
  employmentStatus: string;
  currentPosition: string;
  organization: string;
  graduationYear: string;
};

function Loader() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function Main() {
  const [alumni, setAlumni] = useState<AlumniProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        setLoading(true);
        const allUsers = await getAllUsers();
        const processedAlumni: AlumniProfile[] = allUsers.map(user => ({
          id: user.id,
          fullName: user.fullName || 'N/A',
          email: user.email || 'N/A',
          employmentStatus: 'N/A', // Placeholder value
          currentPosition: 'N/A', // Placeholder value
          organization: 'N/A', // Placeholder value
          graduationYear: 'N/A', // Placeholder value
        }));
        setAlumni(processedAlumni);
      } catch (error) {
        console.error('Error fetching alumni:', error);
        // Optionally, set an error state here and display an error message to the user
      } finally {
        setLoading(false);
      }
    }
    fetchAlumni();
  }, []);

  // For demonstration purposes, we'll randomly assign employment statuses
  const employedAlumni = alumni.filter((_, index) => index % 3 === 0);
  const unemployedAlumni = alumni.filter((_, index) => index % 3 === 1);
  const selfEmployedAlumni = alumni.filter((_, index) => index % 3 === 2);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="employed">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="employed">Employed</TabsTrigger>
            <TabsTrigger value="unemployed">Unemployed</TabsTrigger>
            <TabsTrigger value="self-employed">Self-Employed</TabsTrigger>
          </TabsList>
          <div className="ml-auto">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Alumni
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value="employed">
          <AlumniTable alumni={employedAlumni} title="Employed Alumni" />
        </TabsContent>
        <TabsContent value="unemployed">
          <AlumniTable alumni={unemployedAlumni} title="Unemployed Alumni" />
        </TabsContent>
        <TabsContent value="self-employed">
          <AlumniTable alumni={selfEmployedAlumni} title="Self-Employed Alumni" />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function AlumniTable({ alumni, title }: { alumni: AlumniProfile[], title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Manage alumni profiles and view their details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Current Position</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>Graduation Year</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alumni.map((alumnus) => (
              <TableRow key={alumnus.id}>
                <TableCell className="font-medium">{alumnus.fullName}</TableCell>
                <TableCell>{alumnus.email}</TableCell>
                <TableCell>{alumnus.currentPosition}</TableCell>
                <TableCell>{alumnus.organization}</TableCell>
                <TableCell>{alumnus.graduationYear}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{alumni.length}</strong> alumni
        </div>
      </CardFooter>
    </Card>
  )
}