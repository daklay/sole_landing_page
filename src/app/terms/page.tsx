'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="group flex items-center text-primary mb-8 hover:text-primary-dark transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to the UM6P Student Survey platform. By accessing and using this service, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Service</h2>
            <p className="text-gray-600 mb-4">
              This survey platform is intended for use by UM6P students, faculty, and staff. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your responses</li>
              <li>Not misuse or attempt to manipulate the survey system</li>
              <li>Respect the privacy and rights of other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Privacy and Data Protection</h2>
            <p className="text-gray-600">
              We are committed to protecting your privacy. All survey responses are anonymous and handled in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600">
              All content and materials available on this platform are the property of UM6P and are protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at{' '}
              <a 
                href="mailto:contact@um6p.ma"
                className="text-primary hover:text-primary-dark transition-colors duration-200"
              >
                contact@um6p.ma
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
