'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { StarIcon, PlusIcon, XMarkIcon, ArrowRightIcon, UserIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

const categories = [
  { id: 'academic', name: 'Academic Resources', description: 'Library, online materials, research tools' },
  { id: 'teaching', name: 'Teaching Quality', description: 'Instruction quality, engagement, support' },
  { id: 'facilities', name: 'Campus Facilities', description: 'Classrooms, labs, study spaces' },
  { id: 'services', name: 'Student Services', description: 'Administrative support, counseling, career services' },
  { id: 'activities', name: 'Extra-curricular', description: 'Clubs, events, sports activities' },
];

interface FeedbackItem {
  rating: number;
  comment: string;
}

interface PersonalInfo {
  fullName: string;
  email: string;
}

export default function SurveyPage() {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{[key: string]: FeedbackItem}>({});
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ fullName: '', email: '' });
  const [includePersonalInfo, setIncludePersonalInfo] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    if (!selectedCategories.includes(categoryId)) {
      setSelectedCategories(prev => [...prev, categoryId]);
      setFeedback(prev => ({
        ...prev,
        [categoryId]: { rating: 0, comment: '' }
      }));
    }
    setShowCategorySelect(false);
  };

  const handleRemoveCategory = (categoryId: string) => {
    setSelectedCategories(prev => prev.filter(id => id !== categoryId));
    setFeedback(prev => {
      const newFeedback = { ...prev };
      delete newFeedback[categoryId];
      return newFeedback;
    });
  };

  const handleSubmit = () => {
    console.log('Survey feedback:', {
      personalInfo: includePersonalInfo ? personalInfo : null,
      feedback
    });
    router.push('/thank-you');
  };

  const isSubmitDisabled = selectedCategories.length === 0 || 
    selectedCategories.some(cat => feedback[cat]?.rating === 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowCategorySelect(false);
      }
    }

    if (showCategorySelect) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategorySelect]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg shadow-gray-200/50 p-2 flex justify-between items-center">
            <div className="flex-shrink-0 ml-4 cursor-pointer" onClick={() => router.push('/')}>
              <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-7" />
            </div>
            <button
              onClick={() => router.push('/')}
              className="bg-gray-50/80 text-gray-600 hover:text-primary px-6 py-1.5 rounded-full transition-colors duration-200 mr-4"
            >
              Exit
            </button>
          </nav>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-28">
        {/* Survey Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Share Your <span className="text-primary">Feedback</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your insights help us improve and create a better experience for everyone
            </p>
          </div>

          {/* Personal Information Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                  <UserIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                  <p className="text-gray-500 text-sm">Add your contact details to the survey</p>
                </div>
              </div>
              <button
                onClick={() => setIncludePersonalInfo(!includePersonalInfo)}
                className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center ${
                  includePersonalInfo 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {includePersonalInfo ? (
                  <>
                    <XMarkIcon className="w-5 h-5 mr-2" />
                    <span>Remove</span>
                  </>
                ) : (
                  <>
                    <PlusIcon className="w-5 h-5 mr-2" />
                    <span>Add</span>
                  </>
                )}
              </button>
            </div>

            {/* Personal Information Form */}
            {includePersonalInfo && (
              <div className="mt-4 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-primary/20 transition-colors space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Selected Categories */}
          <div className="space-y-8">
            {selectedCategories.map(categoryId => {
              const category = categories.find(c => c.id === categoryId)!;
              return (
                <div key={categoryId} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
                      <p className="text-gray-500 mt-1">{category.description}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveCategory(categoryId)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How would you rate your experience?
                    </label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          onClick={() => setFeedback(prev => ({
                            ...prev,
                            [categoryId]: { ...prev[categoryId], rating: value }
                          }))}
                          className="p-1.5 hover:scale-110 transition-transform"
                        >
                          {value <= (feedback[categoryId]?.rating || 0) ? (
                            <StarIconSolid className="w-8 h-8 text-yellow-400" />
                          ) : (
                            <StarIcon className="w-8 h-8 text-gray-300 hover:text-yellow-400/50" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Share your thoughts 
                    </label>
                    <textarea
                      rows={4}
                      value={feedback[categoryId]?.comment || ''}
                      onChange={(e) => setFeedback(prev => ({
                        ...prev,
                        [categoryId]: { ...prev[categoryId], comment: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="What specific aspects would you like to highlight?"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Category Button */}
          <div className="relative mt-8">
            <div className="relative">
              <button
                onClick={() => setShowCategorySelect(true)}
                className="w-full p-6 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 text-gray-700 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-center">
                  <PlusIcon className="w-8 h-8 text-primary/70 group-hover:text-primary mr-3" />
                  <span className="text-lg font-medium">Add Category</span>
                </div>
                <p className="text-gray-500 mt-2">Select categories you'd like to provide feedback on</p>
              </button>

              {/* Category Selection Dropdown */}
              {showCategorySelect && (
                <div 
                  ref={modalRef} 
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-10"
                >
                  <div>
                    {categories
                      .filter(cat => !selectedCategories.includes(cat.id))
                      .map(category => (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.id)}
                          className="w-full text-left p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-primary">{category.name}</div>
                          <div className="text-sm text-gray-500">{category.description}</div>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
            {/* Dynamic spacer div that appears when dropdown is open */}
            {showCategorySelect && (
              <div 
                className="transition-all duration-200" 
                style={{ 
                  height: `${(categories.filter(cat => !selectedCategories.includes(cat.id)).length * 88) + 24}px`
                }} 
                aria-hidden="true" 
              />
            )}
          </div>

          {/* Submit Button */}
          {selectedCategories.length > 0 && (
            <div className="mt-12 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
                className={`
                  flex items-center px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200
                  ${isSubmitDisabled
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-lg shadow-primary/20'
                  }
                `}
              >
                Submit Feedback
                <ArrowRightIcon className="w-5 h-5 ml-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
