'use client';

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the purpose of this survey?",
    answer: "This survey aims to gather valuable feedback from students to improve various aspects of university life, including academic resources, campus facilities, and student services."
  },
  {
    question: "How long does it take to complete the survey?",
    answer: "The survey typically takes 10-15 minutes to complete. You can save your progress and return later if needed."
  },
  {
    question: "Is my feedback anonymous?",
    answer: "Yes, all responses are completely anonymous. We value your honest feedback and ensure your privacy is protected."
  },
  {
    question: "How will my feedback be used?",
    answer: "Your feedback will be used to identify areas for improvement across campus services and facilities, helping us enhance the overall student experience at UM6P."
  },
  {
    question: "Can I edit my responses after submission?",
    answer: "Once submitted, survey responses cannot be edited. Please review your answers carefully before submission."
  }
]

export default function FAQSection() {
  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary font-medium mb-4">FAQs</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} className="mt-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white/80 px-4 py-4 text-left text-base font-medium text-gray-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-primary/50 focus-visible:ring-opacity-75 transition-all duration-200">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-primary transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
