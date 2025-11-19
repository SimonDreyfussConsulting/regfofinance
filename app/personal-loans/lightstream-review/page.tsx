import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import UserQuote from '@/components/UserQuote';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

const lightstream = lenderData.lightstream;

export const metadata: Metadata = {
  title: "LightStream Personal Loans Review: Excellent Credit Required (2025)",
  description: `LightStream offers ${lightstream.apr} APR with ${lightstream.fees.toLowerCase()} and same-day funding. Excellent credit (700+) required. See real borrower experiences.`,
  keywords: "LightStream personal loan, LightStream review, same-day funding, excellent credit loans, Rate Beat program",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "LightStream Personal Loans Review: Excellent Credit Required (2025)",
    description: "LightStream offers same-day funding and a Rate Beat program for borrowers with excellent credit. See what 75+ real borrowers experienced.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/lightstream-review",
    images: [{
      url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person celebrating financial success - Photo by Brooke Cagle on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function LightStreamReview() {
  const tocItems = [
    { id: 'overview', text: 'Overview: LightStream for Excellent Credit', level: 2 },
    { id: 'rate-beat', text: 'The Rate Beat Program', level: 2 },
    { id: 'apr-rates', text: 'What APR Can You Expect?', level: 2 },
    { id: 'same-day-funding', text: 'Same-Day Funding Process', level: 2 },
    { id: 'credit-requirements', text: 'Strict Credit Requirements', level: 2 },
    { id: 'comparison', text: 'LightStream vs Competitors', level: 2 },
    { id: 'bottom-line', text: 'The Bottom Line', level: 2 },
  ];

  return (
    <>
      <Navigation />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LightStream Personal Loans Review: Excellent Credit Required (2025)",
            "description": `${lightstream.name} offers ${lightstream.apr} APR with ${lightstream.fees.toLowerCase()}.`,
            "author": {
              "@type": "Organization",
              "name": "RegularFolkFinance"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RegularFolkFinance",
              "logo": {
                "@type": "ImageObject",
                "url": "https://regularfolkfinance.com/logo.png"
              }
            },
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-19"
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              LightStream: Rock-Bottom Rates for Excellent Credit
            </h1>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed 75+ real experiences from borrowers with excellent credit scores.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />

            {/* Quick Stats */}
            <div className="mt-8 bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Quick Stats</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-[#6B7280]">APR Range</div>
                  <div className="font-bold text-[#1F2937]">{lightstream.apr}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Loan Amounts</div>
                  <div className="font-bold text-[#1F2937]">{lightstream.amounts}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Fees</div>
                  <div className="font-bold text-green-600">{lightstream.fees}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Funding Time</div>
                  <div className="font-bold text-green-600">{lightstream.timeToFund}</div>
                </div>
              </div>
              <button className="w-full mt-4 bg-[#06B6D4] text-white font-semibold py-3 rounded-lg hover:bg-[#06B6D4]/90 transition-colors">
                Check Rates
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1F2937] mb-8" style={{ lineHeight: '1.7' }}>
                LightStream, a division of Truist Bank, targets one audience: borrowers with excellent credit who deserve the best rates. If you qualify, their rates and same-day funding are hard to beat. But if your credit isn't stellar, don't waste your time. We analyzed 75+ experiences to see who benefits most.
              </p>

              {/* Quick Answer Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  LightStream offers some of the lowest APRs in the market (as low as 6.99%) with zero fees and potential same-day funding. Their Rate Beat program guarantees they'll beat any competitor's rate by 0.10%. But you need excellent credit (720+) and there's no soft credit check—every application is a hard pull.
                </p>
              </div>

              <h2 id="overview" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Overview: LightStream for Excellent Credit
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                LightStream is backed by Truist Bank (formerly SunTrust), one of the largest banks in the U.S. They've originated over $14 billion in loans since 2013, focusing exclusively on creditworthy borrowers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✅ Major Advantages:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {lightstream.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">⚠️ Significant Drawbacks:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {lightstream.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 id="rate-beat" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Rate Beat Program
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                LightStream's Rate Beat Program is their signature feature. If you get a lower rate from another lender, LightStream will beat it by 0.10 percentage points.
              </p>

              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#1E40AF] mb-2">How it works:</p>
                <ol className="space-y-2 text-[#1F2937] list-decimal pl-5">
                  <li>Get approved by LightStream</li>
                  <li>Find a competing offer with a lower rate (must be same loan amount and term)</li>
                  <li>Submit proof to LightStream within 30 days</li>
                  <li>LightStream beats the rate by 0.10%</li>
                </ol>
              </div>

              <UserQuote
                quote="Got 8.5% from my bank. Showed it to LightStream and they gave me 8.4%. Saved me over $200 across the life of the loan."
                author="Reddit User"
                context="r/personalfinance"
              />

              <h2 id="apr-rates" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What APR Can You Expect?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                LightStream advertises rates from {lightstream.apr}. Real borrowers with excellent credit report:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Score</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Typical APR</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Approval Odds</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">780+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">6.99%-9.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">Excellent</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">720-779</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">10%-15%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Good</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">Below 720</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">Often denied</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="same-day-funding" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Same-Day Funding Process
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                LightStream can fund your loan {lightstream.timeToFund} if you:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-[#1F2937]">
                <li>Apply early in the day (before noon EST)</li>
                <li>Provide all required documentation immediately</li>
                <li>Have excellent credit and low debt-to-income ratio</li>
                <li>Choose electronic fund transfer</li>
              </ul>

              <UserQuote
                quote="Applied at 9am for a $50k home improvement loan. Approved by 11am. Money in my account at 2pm. Couldn't believe how fast it was."
                author="Trustpilot Reviewer"
                context="LightStream customer"
              />

              <h2 id="credit-requirements" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Strict Credit Requirements
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                LightStream doesn't publish exact requirements, but based on real applicant experiences, you need:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 rounded-r">
                  <p className="font-semibold text-[#C2410C] mb-2">⚠️ No Pre-Qualification</p>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Unlike most lenders, LightStream doesn't offer a soft credit check to see if you pre-qualify. Every application is a hard inquiry that impacts your credit score.
                  </p>
                </div>
              </div>

              <h2 id="comparison" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                LightStream vs Competitors
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Min APR</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Pre-Qual?</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Special Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#EFF6FF]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">LightStream</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">6.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">No</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Rate Beat Program</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/sofi-review" className="text-[#06B6D4] hover:underline">SoFi</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">7.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">Yes</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Unemployment protection</td>
                    </tr>
                    <tr className="bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/marcus-review" className="text-[#06B6D4] hover:underline">Marcus</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">6.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">Yes</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Skip-a-payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="bottom-line" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                If you have excellent credit (720+), stable income, and low debt, LightStream offers unbeatable rates and lightning-fast funding. The Rate Beat Program ensures you're getting the best deal available.
              </p>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">Our Recommendation:</p>
                <p className="text-[#1F2937] mb-3" style={{ lineHeight: '1.7' }}>
                  Only apply to LightStream if:
                </p>
                <ul className="space-y-2 text-[#1F2937]">
                  <li>• You have excellent credit (720+ FICO)</li>
                  <li>• You're confident you'll be approved (to avoid hard credit pull)</li>
                  <li>• You need large loan amounts ($25k+) where rate savings matter most</li>
                  <li>• You value same-day funding</li>
                </ul>
                <p className="text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                  If unsure, start with <Link href="/personal-loans/sofi-review" className="text-[#06B6D4] hover:underline">SoFi</Link> or <Link href="/personal-loans/marcus-review" className="text-[#06B6D4] hover:underline">Marcus</Link> which offer soft credit checks first.
                </p>
              </div>

              {/* Related Guides */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-xl font-bold mb-4 text-[#1F2937]">Related Guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/personal-loans/best-good-credit" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Best for Excellent Credit →</h4>
                    <p className="text-sm text-[#6B7280]">All options for 720+ scores</p>
                  </Link>
                  <Link href="/personal-loans/best-quick-approval" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Fastest Funding Options →</h4>
                    <p className="text-sm text-[#6B7280]">Same-day and next-day funding</p>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Rock-Bottom Rates?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            If you have excellent credit, see what LightStream can offer.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Check Rates with LightStream
          </button>
        </div>
      </section>
    </>
  );
}
