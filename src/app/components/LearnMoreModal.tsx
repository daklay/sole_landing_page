'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface LearnMoreModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function LearnMoreModal({ isOpen, closeModal }: LearnMoreModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    About Our Student Survey Initiative
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <section>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-600">
                      We believe that student feedback is crucial for creating an exceptional educational environment. 
                      Our survey initiative aims to gather insights directly from students to enhance various aspects 
                      of university life.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Focus Areas</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Academic Resources and Teaching Quality</li>
                      <li>Campus Facilities and Infrastructure</li>
                      <li>Student Services and Support</li>
                      <li>Extra-curricular Activities</li>
                      <li>Campus Life and Community</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Impact</h4>
                    <p className="text-gray-600">
                      Your feedback directly influences university improvements and helps create a better experience 
                      for current and future students. We carefully analyze all responses and implement changes 
                      based on student needs and suggestions.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Confidentiality</h4>
                    <p className="text-gray-600">
                      All survey responses are anonymous and confidential. We use industry-standard security 
                      measures to protect your data and ensure honest, unbiased feedback.
                    </p>
                  </section>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-200"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
