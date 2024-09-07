import { CircleDot } from "lucide-react"

export default function Process() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">How does it work?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with your alma mater and fellow alumni through our easy-to-use platform. Here's how to get started:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">Create your profile</h3>
              <p className="text-gray-600 mb-4">Sign up and create your alumni profile. Add your graduation year, major, and current profession to connect with like-minded peers.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">Explore opportunities</h3>
              <p className="text-gray-600 mb-4">Discover job postings, mentorship programs, and networking events tailored to your alma mater's community.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">Engage & grow</h3>
              <p className="text-gray-600 mb-4">Participate in discussions, attend virtual events, and expand your professional network within your alumni community.</p>
            </div>
          </div>
          
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
        </div>
      </div>
    </section>
  )
}