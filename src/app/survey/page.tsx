'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SurveyPage() {
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ rating, feedback });
    // Redirect to thank you page or home
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-8" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-primary/5 to-white rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Opinion Matters</h1>
              <p className="text-lg text-gray-600">
                Help us improve by sharing your feedback
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Rating Section */}
              <div className="space-y-6">
                <label className="block text-xl font-semibold text-gray-900 text-center">
                  How would you rate your experience?
                </label>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-semibold transition-all duration-200 hover:-translate-y-0.5
                        ${rating === value 
                          ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                          : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:bg-gray-50'
                        }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Section */}
              <div className="space-y-4">
                <label htmlFor="feedback" className="block text-xl font-semibold text-gray-900">
                  Additional Comments <span className="text-gray-500 text-base">(Optional)</span>
                </label>
                <textarea
                  id="feedback"
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent resize-none shadow-sm"
                  placeholder="Share your thoughts with us..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={rating === 0}
                  className={`group px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 
                    ${rating === 0 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
