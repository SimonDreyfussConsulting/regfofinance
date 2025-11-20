import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Data Sources | RegularFolkFinance',
  description: 'Where we collect our data and how we verify it',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataSourcesPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Data Sources</h1>
        <p className="text-xl text-gray-600 mb-8">
          Where we collect our data and how we verify it
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>Primary Data Sources</h2>
          <p>We collect user experiences and data from:</p>
          <ul>
            <li><strong>Reddit Communities:</strong> r/personalfinance, r/CreditCards, r/churning, r/StudentLoans, and others</li>
            <li><strong>Consumer Review Sites:</strong> Trustpilot, Credit Karma, NerdWallet comments</li>
            <li><strong>Financial Forums:</strong> MyFICO Forums, Bogleheads, FatFIRE</li>
            <li><strong>Social Media:</strong> Twitter financial discussions and threads</li>
            <li><strong>Official Documentation:</strong> Terms and conditions, rate sheets, product specifications</li>
          </ul>

          <h2>Data Verification</h2>
          <p>Before including user experiences in our analysis, we:</p>
          <ul>
            <li>Cross-reference claims across multiple sources</li>
            <li>Verify details against official product terms</li>
            <li>Exclude obvious promotional content or spam</li>
            <li>Look for consistency in reported experiences</li>
            <li>Note the timeframe of experiences (recent vs. historical)</li>
          </ul>

          <h2>Sample Sizes</h2>
          <p>
            We aim to analyze at least 1,000 user data points for each major review.
            For popular products like credit cards, we often review 10,000+ mentions
            and experiences.
          </p>

          <h2>Limitations</h2>
          <p>
            User-reported data has limitations. People are more likely to post about
            extreme experiences (very good or very bad) than average ones. We account
            for this bias in our analysis and explicitly note when we lack sufficient data.
          </p>
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
