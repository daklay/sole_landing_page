'use client';

import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LearnMoreModal from './LearnMoreModal';

export default function CTASection() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
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
          <button 
              onClick={() => setIsModalOpen(true)}
            className="group border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
          >
            Learn More
            <ChevronRightIcon className="w-5 h-5 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <LearnMoreModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </section>
  );
}
