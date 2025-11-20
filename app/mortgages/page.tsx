import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Mortgages | RegularFolkFinance',
  description: 'Real mortgage experiences and advice from thousands of homebuyers',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MortgagesPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Mortgages</h1>
        <p className="text-xl text-gray-600 mb-4">
          Content coming soon. We're analyzing thousands of real homebuyer experiences
          to help you navigate the mortgage process.
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
