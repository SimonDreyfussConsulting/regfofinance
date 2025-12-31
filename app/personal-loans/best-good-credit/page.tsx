import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

export const metadata: Metadata = {
  title: "Best Personal Loans for Good Credit (680-740) | 2026",
  description: "Compare the best personal loans for good credit scores (680-740). Marcus, SoFi, and LightStream offer competitive rates with no fees. See what real borrowers experienced.",
  keywords: "personal loans good credit, 680 credit score loans, 700 credit score loans, best rates good credit",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Best Personal Loans for Good Credit (680-740) | 2026",
    description: "Compare top lenders for good credit scores. Marcus, SoFi, and LightStream offer competitive rates with no fees.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/best-good-credit",
    images: [{
      url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person working on computer with credit score chart - Photo by Campaign Creators on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BestGoodCredit() {
  const topLenders = [
    {
      name: lenderData.marcus.name,
      data: lenderData.marcus,
      slug: "marcus-review",
      why: "Lowest fees, payment flexibility",
      typicalAPR: "10%-16%"
    },
    {
      name: lenderData.sofi.name,
      data: lenderData.sofi,
      slug: "sofi-review",
      why: "Fast funding, large loan amounts",
      typicalAPR: "10%-16%"
    },
    {
      name: lenderData.lightstream.name,
      data: lenderData.lightstream,
      slug: "lightstream-review",
      why: "Best rates, Rate Beat program",
      typicalAPR: "10%-15%"
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for Good Credit (680-740)
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              You have good credit. You deserve good rates and zero fees. Here are the lenders that actually deliver on that promise.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (Based on 250+ real borrower experiences with good credit scores.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-12 rounded-r">
          <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
          <p className="text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
            With a credit score between 680-740, you'll qualify for most lenders but won't get the absolute rock-bottom rates. <strong>Marcus</strong> offers the most borrower-friendly features with zero fees and payment flexibility. <strong>SoFi</strong> is best if you need fast funding or large amounts. <strong>LightStream</strong> has the lowest rates if you're closer to 740.
          </p>
        </div>

        {/* What to Expect Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">What to Expect with Good Credit</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-[#06B6D4] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#06B6D4] mb-2">10%-16%</h3>
              <p className="text-sm text-[#6B7280]">Typical APR Range</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Most borrowers with 680-740 scores get APRs in this range. Closer to 740 = closer to 10%.
              </p>
            </div>

            <div className="bg-white border-2 border-[#3B82F6] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">$5K-$40K</h3>
              <p className="text-sm text-[#6B7280]">Common Loan Amounts</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                You'll qualify for mid-sized loans. $100K+ loans usually require 740+ scores.
              </p>
            </div>

            <div className="bg-white border-2 border-[#FB923C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FB923C] mb-2">$0</h3>
              <p className="text-sm text-[#6B7280]">Fees (if you choose right)</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                With good credit, you should NEVER pay origination fees. Stick with zero-fee lenders.
              </p>
            </div>
          </div>
        </section>

        {/* Top Lenders Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Top 3 Lenders for Good Credit</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
              <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                <tr>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">APR for Good Credit</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Loan Amounts</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Fees</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Why Choose</th>
                </tr>
              </thead>
              <tbody>
                {topLenders.map((lender, idx) => (
                  <tr key={lender.name} className={idx % 2 === 0 ? "bg-white hover:bg-[#F3F4F6]" : "bg-[#F3F4F6] hover:bg-[#E5E7EB]"}>
                    <td className="border border-[#6B7280]/30 px-4 py-3">
                      <Link href={`/personal-loans/${lender.slug}`} className="font-semibold text-[#06B6D4] hover:underline">
                        {lender.name}
                      </Link>
                    </td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">{lender.typicalAPR}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3">{lender.data.amounts}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">{lender.data.fees}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 text-sm">{lender.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed Reviews */}
          <div className="space-y-8">
            {topLenders.map((lender, idx) => (
              <div key={lender.name} className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#1F2937]">{lender.name}</h3>
                      {idx === 0 && <span className="px-3 py-1 bg-[#FB923C] text-white rounded-full text-xs font-semibold">BEST OVERALL</span>}
                    </div>
                    <p className="text-sm text-[#6B7280]">Typical APR for 680-740: <span className="font-bold text-[#1F2937]">{lender.typicalAPR}</span></p>
                  </div>
                  <Link
                    href={`/personal-loans/${lender.slug}`}
                    className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                  >
                    Full Review →
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-bold text-[#1F2937] mb-2">✅ Pros:</h4>
                    <ul className="space-y-1 text-sm">
                      {lender.data.pros.map((pro, i) => (
                        <li key={i} className="flex items-start text-[#1F2937]">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2937] mb-2">⚠️ Cons:</h4>
                    <ul className="space-y-1 text-sm">
                      {lender.data.cons.map((con, i) => (
                        <li key={i} className="flex items-start text-[#1F2937]">
                          <span className="text-[#FB923C] mr-2">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] p-4 rounded-lg">
                  <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    <strong>Best for:</strong> {lender.data.keyAdvantage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How to Get the Best Rate with Good Credit</h2>

          <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 rounded-r space-y-4">
            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">1. Shop Around (Seriously)</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Rates can vary by 5-10% between lenders for the same credit score. One borrower was offered 14% by SoFi and 8% by Marcus. Don't leave money on the table.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">2. Lower Your Debt-to-Income Ratio</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If you can pay off a credit card before applying, do it. A lower DTI (under 35%) can qualify you for better rates even with the same credit score.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">3. Consider a Co-Applicant</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If your spouse or partner has better credit, applying together can unlock better rates. Just make sure you both trust each other completely.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">4. Time Your Application Right</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If you're close to 740, wait a month or two to cross that threshold. The jump from "good" to "very good" credit can save you 2-4% APR.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Explore More Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/personal-loans/best-fair-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Fair Credit (600-679) →</h3>
              <p className="text-sm text-[#6B7280]">If your score is slightly lower</p>
            </Link>
            <Link href="/personal-loans/best-debt-consolidation" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Debt Consolidation →</h3>
              <p className="text-sm text-[#6B7280]">Best lenders for consolidating debt</p>
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
            Ready to Compare Rates?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Check your rate with multiple lenders in minutes. Soft credit check only.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates Now
          </button>
        </div>
      </section>
    </>
  );
}
