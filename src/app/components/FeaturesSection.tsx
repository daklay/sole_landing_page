'use client';

import { AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
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
];

export default function FeaturesSection() {
  return (
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
          {features.map((feature, index) => (
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
  );
}
