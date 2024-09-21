import PagesHero from '@/components/front/PagesHero'
import { Briefcase, Globe, Globe2, GraduationCap, Users } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='pt-[140px]'>
      <PagesHero title='About'/>
     
      <div className="bg-gradient-to-b from-primary-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Kyambogo University</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Kyambogo University was established in 2003 by the Universities and other Tertiary Institutions Act 2001. It was formed by merging three institutions: Uganda Polytechnic Kyambogo (UPK), The Institute of Teacher Education Kyambogo (ITEK), and the Uganda National Institute of Special Education (UNISE).
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As one of the eight degree-awarding public universities in Uganda, Kyambogo University boasts six faculties, six schools, one institute, and a Directorate of Research and Graduate Training, along with two study centers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-700 italic">
                "To be a center of human resource excellence in transforming Kyambogo University into a world class university"
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To contribute to the advancement and promotion of knowledge and development of skills in science and technology and education through attraction and retention of well qualified and motivated human resource.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12 text-primary mb-4" />,
                title: "Motto",
                description: "Knowledge and Skills for Service"
              },
              {
                icon: <Users className="w-12 h-12 text-primary mb-4" />,
                title: "Faculties",
                description: "Six faculties offering diverse programs"
              },
              {
                icon: <Globe2 className="w-12 h-12 text-primary mb-4" />,
                title: "Research",
                description: "Directorate of Research and Graduate Training"
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
            <a href="#learn-more" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors duration-300">
              Learn More About KYU
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
