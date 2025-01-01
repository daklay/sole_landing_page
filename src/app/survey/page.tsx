'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { StarIcon, PlusIcon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

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

export default function SurveyPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{[key: string]: FeedbackItem}>({});
  const [showCategorySelect, setShowCategorySelect] = useState(false);

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
    console.log('Survey feedback:', feedback);
    router.push('/thank-you');
  };

  const isSubmitDisabled = selectedCategories.length === 0 || 
    selectedCategories.some(cat => feedback[cat]?.rating === 0);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-7" />
            <button
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Exit Survey
            </button>
          </div>
        </div>
      </div>

      {/* Survey Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Share Your Feedback</h1>
          <p className="text-gray-600">
            Select categories you&apos;d like to give feedback on and rate your experience
          </p>
        </div>

        {/* Add Category Button */}
        <div className="relative mb-8">
          <button
            onClick={() => setShowCategorySelect(true)}
            className="w-full p-4 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-all duration-200"
          >
            <PlusIcon className="w-6 h-6 mx-auto mb-2" />
            Add Category
          </button>

          {/* Category Selection Dropdown */}
          {showCategorySelect && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-10">
              {categories
                .filter(cat => !selectedCategories.includes(cat.id))
                .map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{category.name}</div>
                    <div className="text-sm text-gray-500">{category.description}</div>
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Selected Categories */}
        <div className="space-y-6">
          {selectedCategories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId)!;
            return (
              <div key={categoryId} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveCategory(categoryId)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => setFeedback(prev => ({
                          ...prev,
                          [categoryId]: { ...prev[categoryId], rating: value }
                        }))}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        {value <= (feedback[categoryId]?.rating || 0) ? (
                          <StarIconSolid className="w-8 h-8 text-yellow-400" />
                        ) : (
                          <StarIcon className="w-8 h-8 text-gray-300" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comments <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={feedback[categoryId]?.comment || ''}
                    onChange={(e) => setFeedback(prev => ({
                      ...prev,
                      [categoryId]: { ...prev[categoryId], comment: e.target.value }
                    }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Share your thoughts..."
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {selectedCategories.length > 0 && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className={`
                flex items-center px-6 py-3 rounded-lg transition-all duration-200
                ${isSubmitDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary-dark'
                }
              `}
            >
              Submit Feedback
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
