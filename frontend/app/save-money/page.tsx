import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Save Money | RegularFolkFinance',
  description: 'Real strategies to save money based on thousands of real user experiences',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SaveMoneyPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Save Money</h1>
        <p className="text-xl text-gray-600 mb-4">
          Content coming soon. We're analyzing thousands of Reddit discussions
          to bring you real savings strategies that actually work.
        </p>
        <p className="text-sm text-gray-500">
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
