import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Our Methodology | RegularFolkFinance',
  description: 'How we research, analyze, and rate financial products',
  robots: {
    index: true,
    follow: true,
  },
};

export default function MethodologyPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Our Methodology</h1>
        <p className="text-xl text-gray-600 mb-8">
          How we research and rate financial products
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>Our Approach</h2>
          <p>
            At RegularFolkFinance, we don't rely on press releases or marketing materials.
            Instead, we analyze thousands of real user experiences from forums like Reddit,
            consumer review sites, and social media to understand what people actually experience.
          </p>

          <h2>Data Collection</h2>
          <p>For each product or service we review, we:</p>
          <ul>
            <li>Analyze 1,000+ real user reviews and experiences</li>
            <li>Track discussion threads across multiple platforms</li>
            <li>Identify common patterns in user feedback</li>
            <li>Document both positive and negative experiences</li>
            <li>Verify claims against official product terms</li>
          </ul>

          <h2>Our Promise</h2>
          <p>
            We're not financial advisors. We're researchers who spend hundreds of hours
            reading what real people say about financial products. Our goal is to save you time
            by synthesizing all that information into actionable insights.
          </p>

          <h2>Transparency</h2>
          <p>
            We participate in affiliate programs and may earn commissions from some links.
            However, our research and recommendations are based solely on user data and
            real experiences, not compensation.
          </p>

          <h2>Last Updated</h2>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </>
  );
}
