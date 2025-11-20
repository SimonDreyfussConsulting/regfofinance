import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Contact Us | RegularFolkFinance',
  description: 'Get in touch with the RegularFolkFinance team',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-8">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="max-w-2xl">
          <div className="bg-white border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            <p className="text-gray-700 mb-4">
              For general inquiries, partnerships, or feedback:
            </p>
            <p className="text-lg font-semibold text-[#3B82F6]">
              hello@regularfolkfinance.com
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We're on a mission to provide honest, data-driven financial guidance
              based on real user experiences. If you have a story to share or data
              that could help others, we want to hear it.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Last Updated: {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </div>
    </>
  );
}
