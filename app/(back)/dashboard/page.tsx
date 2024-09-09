import { Card } from '@/components/ui/card'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { FaUserGraduate, FaBriefcase, FaCalendarAlt, FaChartLine } from 'react-icons/fa'

// Add this type definition for the StatCard props
type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  stats: Array<{ label: string; value: string | number }>;
  link: string;
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  // TODO: Replace these with actual data from your database
  const stats = {
    totalAlumni: 1250,
    employedAlumni: 1050,
    averageSalary: 75000,
    internationalAlumni: 180,
    upcomingEvents: 5,
    activeJobPostings: 42,
    alumniEngagement: 78,
    skillEndorsements: 3200,
    mentorshipConnections: 95,
    donationsThisYear: 150000,
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
            { label: 'Employed', value: `${(stats.employedAlumni / stats.totalAlumni * 100).toFixed(1)}%` },
            { label: 'International', value: stats.internationalAlumni },
          ]}
          link="/dashboard/alumni"
        />
        
        <StatCard
          title="Career Insights"
          icon={<FaBriefcase className="text-blue-500" size={24} />}
          stats={[
            { label: 'Avg. Salary', value: `$${stats.averageSalary.toLocaleString()}` },
            { label: 'Active Job Postings', value: stats.activeJobPostings },
            { label: 'Skill Endorsements', value: stats.skillEndorsements },
          ]}
          link="/dashboard/careers"
        />
        
        <StatCard
          title="Engagement"
          icon={<FaCalendarAlt className="text-green-500" size={24} />}
          stats={[
            { label: 'Upcoming Events', value: stats.upcomingEvents },
            { label: 'Engagement Rate', value: `${stats.alumniEngagement}%` },
            { label: 'Mentorship Connections', value: stats.mentorshipConnections },
          ]}
          link="/dashboard/events"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 m-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaChartLine className="mr-2 text-orange-500" />
            Network Growth
          </h3>
          {/* Add a chart component here to show alumni network growth over time */}
          <p className="text-gray-600">Visualize your network's growth here</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Top Industries</h3>
          {/* Add a pie chart or bar chart showing top industries where alumni work */}
          <p className="text-gray-600">Display top industries here</p>
        </Card>
      </div>
      
      <div className="m-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Recent Donations</h3>
          <p className="text-2xl font-bold text-green-600">${stats.donationsThisYear.toLocaleString()}</p>
          <p className="text-gray-600">Total donations this year</p>
          <Link href="/dashboard/donations" className="text-purple-600 hover:underline mt-2 inline-block">
            View all donations
          </Link>
        </Card>
      </div>
    </div>
  )
}

// Update the StatCard component with proper TypeScript typing
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
