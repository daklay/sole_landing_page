'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg shadow-gray-200/50 p-2 flex justify-between items-center">
            <div className="flex-shrink-0 ml-4">
              <Image src="/svgs/logos/logo.svg" alt="Logo" width={170} height={40} className="w-auto h-7" />
            </div>
            <div className="hidden md:flex items-center space-x-2 mr-2">
              <div className="bg-gray-50/80 rounded-full p-1.5">
                <a 
                  href="#features" 
                  className="px-4 py-1.5 text-gray-600 hover:text-primary transition-colors duration-200 inline-block"
                >
                  Why It Matters
                </a>
                <a 
                  href="#categories" 
                  className="px-4 py-1.5 text-gray-600 hover:text-primary transition-colors duration-200 inline-block"
                >
                  Categories
                </a>
              </div>
              <button 
                onClick={() => router.push('/survey')}
                className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-1.5 rounded-full transition-all duration-200 ml-2"
              >
                Take Survey
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden mr-4 text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-28 px-6 overflow-hidden
        `}
      >
        <nav className="flex flex-col items-center space-y-6">
          <a 
            href="#features" 
            className="text-xl text-gray-600 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Why It Matters
          </a>
          <a 
            href="#categories" 
            className="text-xl text-gray-600 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </a>
          <button 
            onClick={() => {
              router.push('/survey');
              setIsMenuOpen(false);
            }}
            className="bg-primary/10 text-primary hover:bg-primary/20 px-8 py-2 rounded-full transition-all duration-200 text-lg"
          >
            Take Survey
          </button>
        </nav>
      </div>
    </>
  );
}
