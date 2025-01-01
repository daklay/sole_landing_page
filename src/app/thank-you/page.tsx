'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CheckCircleIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-7" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircleIcon className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Feedback!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your responses help us improve and create a better experience for everyone at UM6P.
          </p>

          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Return Home
          </button>
        </div>
      </div>
    </main>
  );
}
