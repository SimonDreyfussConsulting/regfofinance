import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Make Money | RegularFolkFinance',
  description: 'Real strategies to make money based on thousands of real user experiences',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MakeMoneyPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Make Money</h1>
        <p className="text-xl text-gray-600 mb-4">
          Content coming soon. We're analyzing thousands of Reddit discussions
          to bring you real strategies that actually work.
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
