'use client';

import Image from 'next/image'
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  UserGroupIcon,
  HomeIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  UserIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MusicalNoteIcon,
  ArrowRightIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-8" />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200">Why It Matters</a>
              <a href="#categories" className="text-gray-600 hover:text-primary transition-colors duration-200">Categories</a>
              <button 
                onClick={() => router.push('/survey')}
                className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-200"
              >
                Take Survey
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 via-primary/2 to-white px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
            <SparklesIcon className="w-5 h-5 mr-2" /> Your opinion matters to us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 tracking-tight">
            Your Voice Shapes<br />Our Future
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Help shape the future of your university experience by sharing your valuable feedback
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => router.push('/survey')}
              className="group bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto hover:-translate-y-0.5"
            >
              Start Survey
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-primary/20 hover:border-primary/30 text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5">
              Learn More
              <ChevronRightIcon className="w-5 h-5 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <span className="text-primary font-medium mb-4">Why Participate?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Why Your Feedback Matters
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                description: 'Help us improve the quality of education and academic resources',
                icon: AcademicCapIcon
              },
              {
                title: 'Campus Life',
                description: 'Share your thoughts on housing, dining, and student activities',
                icon: BuildingLibraryIcon
              },
              {
                title: 'Student Services',
                description: 'Help enhance support services and facilities for all students',
                icon: UserGroupIcon
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="mb-4 text-primary p-3 bg-primary/10 rounded-xl inline-block">
                  <feature.icon className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="bg-gradient-to-b from-white via-primary/5 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <span className="text-primary font-medium mb-4">Survey Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Survey Categories
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Food Quality', icon: SparklesIcon, count: '15 questions' },
              { name: 'Housing', icon: HomeIcon, count: '12 questions' },
              { name: 'Education', icon: BookOpenIcon, count: '20 questions' },
              { name: 'Campus Facilities', icon: BuildingOfficeIcon, count: '10 questions' },
              { name: 'Student Services', icon: UserIcon, count: '18 questions' },
              { name: 'Academic Resources', icon: AcademicCapIcon, count: '14 questions' },
              { name: 'Extra-curricular', icon: MusicalNoteIcon, count: '8 questions' },
              { name: 'Safety & Security', icon: ShieldCheckIcon, count: '16 questions' }
            ].map((category, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8">
            Join the Conversation
          </span>
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your feedback helps us create a better university experience for everyone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => router.push('/survey')}
              className="group bg-white text-primary hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto hover:-translate-y-0.5"
            >
              Take the Survey Now
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5">
              Learn More
              <ChevronRightIcon className="w-5 h-5 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image src="/svgs/logos/logo.svg" alt="Logo" width={140} height={35} className="w-auto h-6 mb-4" />
              <p className="text-gray-500 text-sm">
                Empowering students to shape their educational journey through meaningful feedback.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-500 hover:text-primary transition-colors">Why It Matters</a></li>
                  <li><a href="#categories" className="text-gray-500 hover:text-primary transition-colors">Categories</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Stay Connected</h4>
              <p className="text-gray-500 text-sm mb-4">
                Follow us to stay updated with the latest improvements based on your feedback.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12s4.477 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-200 text-center text-sm text-gray-400">
            &copy; 2024 Student Voice. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
