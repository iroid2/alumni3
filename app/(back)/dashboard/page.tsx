import { Card } from '@/components/ui/card'
import { authOptions } from '@/lib/authOptions'
import db from '@/utils/db'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { FaUserGraduate, FaBriefcase, FaCalendarAlt, FaChartLine } from 'react-icons/fa'
 

type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  stats: Array<{ label: string; value: string | number }>;
  link: string;
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  // Fetch actual data from your database
  const totalAlumni = await db.user.count()
  const profilesCount = await db.profile.count()
  const employedAlumni = await db.profile.count({
    where: { employmentStatus: 'Employed' }
  })
  const selfEmployedAlumni = await db.profile.count({
    where: { employmentStatus: 'Self-employed' }
  })
  const unemployedAlumni = await db.profile.count({
    where: { employmentStatus: 'Unemployed' }
  })
  const internationalAlumni = await db.profile.count({
    where: { localResidence: { not: 'Local' } }
  })
  const alumniWithDegree = await db.profile.count({
    where: { degree: { not: null } }
  })
  const alumniWithMajor = await db.profile.count({
    where: { majorFieldOfStudy: { not: null } }
  })

  const stats = {
    totalAlumni,
    profilesCount,
    employedAlumni,
    selfEmployedAlumni,
    unemployedAlumni,
    internationalAlumni,
    alumniWithDegree,
    alumniWithMajor,
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-purple-600 p-8 text-white">
        <h2 className='text-3xl font-extrabold'>Welcome, Admin {user?.name}</h2>
        <p className="mt-2 text-purple-200">Here's an overview of your alumni network</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 m-6">
        <StatCard
          title="Alumni Network"
          icon={<FaUserGraduate className="text-purple-500" size={24} />}
          stats={[
            { label: 'Total Alumni', value: stats.totalAlumni },
            { label: 'With Profiles', value: stats.profilesCount },
            { label: 'International', value: stats.internationalAlumni },
          ]}
          link="/dashboard/alumni"
        />
        
        <StatCard
          title="Employment Status"
          icon={<FaBriefcase className="text-blue-500" size={24} />}
          stats={[
            { label: 'Employed', value: stats.employedAlumni },
            { label: 'Self-employed', value: stats.selfEmployedAlumni },
            { label: 'Unemployed', value: stats.unemployedAlumni },
          ]}
          link="/dashboard/careers"
        />
        
        <StatCard
          title="Education Info"
          icon={<FaCalendarAlt className="text-green-500" size={24} />}
          stats={[
            { label: 'With Degree Info', value: stats.alumniWithDegree },
            { label: 'With Major Info', value: stats.alumniWithMajor },
            { label: 'Profile Completion', value: `${((stats.profilesCount / stats.totalAlumni) * 100).toFixed(1)}%` },
          ]}
          link="/dashboard/education"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 m-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaChartLine className="mr-2 text-orange-500" />
            Employment Trends
          </h3>
          <p className="text-gray-600">
            Employed: {((stats.employedAlumni / stats.profilesCount) * 100).toFixed(1)}%<br />
            Self-employed: {((stats.selfEmployedAlumni / stats.profilesCount) * 100).toFixed(1)}%<br />
            Unemployed: {((stats.unemployedAlumni / stats.profilesCount) * 100).toFixed(1)}%
          </p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Education Overview</h3>
          <p className="text-gray-600">
            Alumni with degree info: {((stats.alumniWithDegree / stats.profilesCount) * 100).toFixed(1)}%<br />
            Alumni with major info: {((stats.alumniWithMajor / stats.profilesCount) * 100).toFixed(1)}%
          </p>
        </Card>
      </div>
      
      <div className="m-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Alumni Insights</h3>
          <p className="text-gray-600">
            Total Alumni: {stats.totalAlumni}<br />
            Alumni with profiles: {((stats.profilesCount / stats.totalAlumni) * 100).toFixed(1)}%<br />
            International Alumni: {((stats.internationalAlumni / stats.profilesCount) * 100).toFixed(1)}%
          </p>
          <Link href="/dashboard/insights" className="text-purple-600 hover:underline mt-2 inline-block">
            View detailed insights
          </Link>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, icon, stats, link }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {icon}
      </div>
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center my-2">
          <span className="text-gray-600">{stat.label}</span>
          <span className="text-xl font-semibold">{stat.value}</span>
        </div>
      ))}
      <Link href={link} className="text-purple-600 hover:underline mt-4 inline-block">
        View details
      </Link>
    </Card>
  )
}