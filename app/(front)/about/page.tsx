 
import PagesHero from '@/components/front/PagesHero'
import { Briefcase, Globe, Globe2, GraduationCap, Users } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='pt-[140px]'>
      <PagesHero title='About'/>
     
    <div className="bg-gradient-to-b from-primary-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Our Alumni Network</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our vibrant alumni community! We're dedicated to fostering lasting connections between graduates, current students, and our beloved institution. Our platform serves as a bridge, linking past experiences with future opportunities.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to reconnect with old classmates, mentor the next generation, or advance your career, our alumni network is here to support you every step of the way.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To create a thriving, supportive community that empowers alumni to connect, grow, and give back, ensuring the continued success of our institution and its graduates.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <GraduationCap className="w-12 h-12 text-primary mb-4" />,
              title: "Lifelong Learning",
              description: "Access exclusive webinars, courses, and resources to continue your education journey."
            },
            {
              icon: <Users className="w-12 h-12 text-primary mb-4" />,
              title: "Networking Events",
              description: "Participate in both virtual and in-person events to expand your professional circle."
            },
            {
              icon: <Briefcase className="w-12 h-12 text-primary mb-4" />,
              title: "Career Opportunities",
              description: "Explore job postings and career services tailored for our alumni community."
            },
            {
              icon: <Globe2 className="w-12 h-12 text-primary mb-4" />,
              title: "Global Community",
              description: "Connect with fellow alumni from around the world and build international relationships."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#join-now" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors duration-300">
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  )
       </div>
  )
}
