'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    // Redirect to home after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimer);
    };
  }, [router]);

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

      {/* Content */}
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Success Animation */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center animate-[success_0.6s_cubic-bezier(0.65,0,0.35,1)]">
              <CheckIcon className="w-16 h-16" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-6 animate-[fadeIn_1s_ease-in-out]">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600">
                Your feedback has been submitted successfully
              </p>
            </div>

            {/* Countdown */}
            <div className="text-gray-500">
              Redirecting to home page in <span className="font-medium text-primary">{countdown}</span> seconds
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for animations */}
      <style jsx global>{`
        @keyframes success {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
