'use client';

import {
  SparklesIcon,
  HomeIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  UserIcon,
  AcademicCapIcon,
  MusicalNoteIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const categories = [
  { name: 'Food Quality', icon: SparklesIcon, count: '15 questions' },
  { name: 'Housing', icon: HomeIcon, count: '12 questions' },
  { name: 'Education', icon: BookOpenIcon, count: '20 questions' },
  { name: 'Campus Facilities', icon: BuildingOfficeIcon, count: '10 questions' },
  { name: 'Student Services', icon: UserIcon, count: '18 questions' },
  { name: 'Academic Resources', icon: AcademicCapIcon, count: '14 questions' },
  { name: 'Extra-curricular', icon: MusicalNoteIcon, count: '8 questions' },
  { name: 'Safety & Security', icon: ShieldCheckIcon, count: '16 questions' }
];

export default function CategoriesSection() {
  return (
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
          {categories.map((category, index) => (
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
  );
}
