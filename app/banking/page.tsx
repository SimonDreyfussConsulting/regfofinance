import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Banking | RegularFolkFinance',
  description: 'Real banking experiences and recommendations from thousands of customers',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BankingPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Banking</h1>
        <p className="text-xl text-gray-600 mb-4">
          Content coming soon. We're analyzing thousands of real banking experiences
          to help you choose the right bank.
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
