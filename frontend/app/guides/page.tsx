import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Financial Guides | RegularFolkFinance',
  description: 'Comprehensive financial guides based on real user experiences',
  robots: {
    index: false,
    follow: true,
  },
};

export default function GuidesPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Financial Guides</h1>
        <p className="text-xl text-gray-600 mb-4">
          Content coming soon. We're creating comprehensive guides based on thousands
          of real user experiences.
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
