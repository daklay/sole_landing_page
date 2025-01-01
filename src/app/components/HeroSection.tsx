'use client';

import { SparklesIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LearnMoreModal from './LearnMoreModal';

export default function HeroSection() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="relative bg-gradient-to-b from-primary/5 via-primary/2 to-white px-4 pt-[8.5rem] pb-20 sm:px-6 lg:px-8">
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group border-2 border-primary/20 hover:border-primary/30 text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
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
