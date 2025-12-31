import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

export const metadata: Metadata = {
  title: "Best Personal Loans for Bad Credit (Below 600) | 2026",
  description: "Compare personal loans for bad credit scores below 600. Avant, Upstart, and credit unions accept lower scores. See real borrower experiences and avoid predatory lenders.",
  keywords: "bad credit loans, 580 credit score loans, loans for poor credit, personal loans bad credit",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Best Personal Loans for Bad Credit (Below 600) | 2026",
    description: "Compare lenders that accept bad credit. Avant and Upstart approve scores as low as 580-600.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/best-bad-credit",
    images: [{
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person reviewing financial documents - Photo by Helloquence on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BestBadCredit() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for Bad Credit (Below 600)
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Bad credit doesn't mean no options. But it does mean you need to be smart about which lenders you choose. Here's what actually works.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (Based on 150+ real experiences from borrowers with credit scores below 600.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Warning Box */}
        <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 mb-12 rounded-r">
          <p className="text-lg font-semibold text-[#C2410C] mb-2">⚠️ Important Warning:</p>
          <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
            With bad credit, you're vulnerable to predatory lenders. <strong>Avoid payday loans</strong> (400%+ APRs), <strong>avoid upfront fee scams</strong>, and <strong>never pay before getting approved</strong>. The lenders below are legitimate but rates will be high (25%-36% APR). Only borrow what you absolutely need and have a solid plan to repay.
          </p>
        </div>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">What to Expect with Bad Credit</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-red-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-2">25%-36%</h3>
              <p className="text-sm text-[#6B7280]">Typical APR Range</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Yes, it's high. But it's better than payday loans at 400%+ or maxed-out credit cards.
              </p>
            </div>

            <div className="bg-white border-2 border-[#FB923C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FB923C] mb-2">$1K-$15K</h3>
              <p className="text-sm text-[#6B7280]">Typical Loan Amounts</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Lenders limit amounts for bad credit. Start small, build history, refinance later.
              </p>
            </div>

            <div className="bg-white border-2 border-[#3B82F6] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">1-2 Days</h3>
              <p className="text-sm text-[#6B7280]">Funding Speed</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Good news: bad credit lenders fund fast. Most within 1-2 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Top Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Your Best Options</h2>

          <div className="space-y-8">
            {/* Avant */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.avant.name}</h3>
                    <span className="px-3 py-1 bg-[#FB923C] text-white rounded-full text-xs font-semibold">BEST FOR BAD CREDIT</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.avant.minCredit}</span> | APR: <span className="font-bold text-[#1F2937]">{lenderData.avant.apr}</span></p>
                </div>
                <Link
                  href="/personal-loans/avant-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Avant accepts credit scores as low as 580 and actually approves people when others say no. Expect high APRs (25%-36%) and admin fees up to 4.75%, but funding is fast (1-2 business days). Best if you need money quickly and have limited options.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">✅ Why Choose:</h4>
                  <ul className="text-sm space-y-1">
                    {lenderData.avant.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FFF7ED] p-4 rounded-lg">
                  <h4 className="font-bold text-[#C2410C] mb-2">⚠️ Watch Out:</h4>
                  <ul className="text-sm space-y-1">
                    {lenderData.avant.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Upstart */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.upstart.name}</h3>
                  <p className="text-sm text-[#6B7280]">Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.upstart.minCredit}</span> | APR: <span className="font-bold text-[#1F2937]">{lenderData.upstart.apr}</span></p>
                </div>
                <Link
                  href="/personal-loans/upstart-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                If your credit is low but you have education or a stable job, Upstart's AI might approve you when traditional lenders won't. They consider factors beyond credit score. Watch for origination fees (0%-10%) which increase your effective APR.
              </p>

              <div className="bg-[#F3F4F6] p-4 rounded-lg">
                <p className="text-sm text-[#1F2937]"><strong>Best for:</strong> {lenderData.upstart.keyAdvantage}</p>
              </div>
            </div>

            {/* Credit Unions */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">Local Credit Unions</h3>
                  <p className="text-sm text-[#6B7280]">APR: Often 12%-18% (much better than online lenders)</p>
                </div>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Don't overlook your local credit union. They often have "bad credit" programs with APRs of 12%-18%—dramatically better than Avant or Upstart. You'll need to become a member (usually free or $5-25), but it's worth it for the savings.
              </p>

              <div className="bg-[#EFF6FF] p-4 rounded-lg">
                <p className="text-sm text-[#1F2937]"><strong>How to find one:</strong> Search "credit union near me" or visit <a href="https://www.mycreditunion.gov" target="_blank" rel="noopener" className="text-[#06B6D4] hover:underline">MyCreditUnion.gov</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Improvement Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How to Improve Your Options</h2>

          <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r space-y-4">
            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">1. Fix Credit Report Errors</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                25% of credit reports have errors. Pull your free report from AnnualCreditReport.com and dispute any mistakes. This alone can boost your score 20-50 points.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">2. Become an Authorized User</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Ask a family member with good credit to add you as an authorized user on their oldest credit card. Their good history can improve your score within 30-60 days.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">3. Wait 3-6 Months If Possible</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If it's not an emergency, spend 3-6 months making on-time payments and paying down balances. Getting your score from 580 to 620 opens up much better loan options.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Explore More Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/personal-loans/best-fair-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Fair Credit (600-679) →</h3>
              <p className="text-sm text-[#6B7280]">Better options if you're at 600+</p>
            </Link>
            <Link href="/personal-loans/avant-review" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Read Avant Review →</h3>
              <p className="text-sm text-[#6B7280]">Full details on top bad credit lender</p>
            </Link>
            <Link href="/personal-loans" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">All Personal Loans →</h3>
              <p className="text-sm text-[#6B7280]">See all our loan reviews</p>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See If You Pre-Qualify
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Soft credit check only. See your options without impacting your score.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Check Pre-Qualification
          </button>
        </div>
      </section>
    </>
  );
}
