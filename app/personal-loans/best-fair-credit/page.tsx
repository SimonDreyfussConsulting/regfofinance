import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

export const metadata: Metadata = {
  title: "Best Personal Loans for Fair Credit (600-679) | 2025",
  description: "Compare the best personal loans for fair credit scores (600-679). Upstart, Marcus, and SoFi offer reasonable rates. See what real borrowers with fair credit experienced.",
  keywords: "fair credit loans, 620 credit score loans, 650 credit score loans, personal loans fair credit",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Best Personal Loans for Fair Credit (600-679) | 2025",
    description: "Compare top lenders for fair credit. Upstart, Marcus, and SoFi offer reasonable rates for 600-679 scores.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/best-fair-credit",
    images: [{
      url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person working on laptop reviewing finances - Photo by Firmbee.com on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BestFairCredit() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for Fair Credit (600-679)
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Fair credit sits in the middle—not great, not terrible. You have real options, but you need to choose wisely to avoid high fees and rates.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (Based on 200+ real borrower experiences with fair credit scores.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-12 rounded-r">
          <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
          <p className="text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
            With fair credit (600-679), <strong>Upstart</strong> is your best bet—their AI looks beyond credit scores and approves people that traditional lenders reject. <strong>Marcus</strong> works if you're closer to 680. Avoid lenders charging origination fees over 5% or APRs over 25% unless you have no other choice.
          </p>
        </div>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">What to Expect with Fair Credit</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-[#FB923C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FB923C] mb-2">14%-25%</h3>
              <p className="text-sm text-[#6B7280]">Typical APR Range</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Lower 600s = higher rates. Upper 600s = closer to 14-18%.
              </p>
            </div>

            <div className="bg-white border-2 border-[#3B82F6] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">$3K-$25K</h3>
              <p className="text-sm text-[#6B7280]">Common Loan Amounts</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Mid-range loans are accessible. $40K+ usually requires 680+.
              </p>
            </div>

            <div className="bg-white border-2 border-[#06B6D4] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#06B6D4] mb-2">0%-10%</h3>
              <p className="text-sm text-[#6B7280]">Origination Fees</p>
              <p className="text-sm text-[#1F2937] mt-3" style={{ lineHeight: '1.7' }}>
                Most fair credit lenders charge fees. Factor this into your decision.
              </p>
            </div>
          </div>
        </section>

        {/* Top Lenders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Top Lenders for Fair Credit</h2>

          <div className="space-y-8">
            {/* Upstart */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.upstart.name}</h3>
                    <span className="px-3 py-1 bg-[#FB923C] text-white rounded-full text-xs font-semibold">BEST FOR FAIR CREDIT</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.upstart.minCredit}</span> | Typical APR: <span className="font-bold">14%-22%</span></p>
                </div>
                <Link
                  href="/personal-loans/upstart-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Upstart uses AI to evaluate education, job history, and earning potential—not just credit scores. This is huge for fair credit borrowers. Many report getting approved with 620-660 scores when other lenders said no. Watch for origination fees (0%-10%) and make sure to factor that into your total cost.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">✅ Why Choose:</h4>
                  <ul className="text-sm space-y-1">
                    {lenderData.upstart.pros.map((pro, i) => (
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
                    {lenderData.upstart.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Marcus */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.marcus.name}</h3>
                  <p className="text-sm text-[#6B7280]">Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.marcus.minCredit}</span> | Typical APR: <span className="font-bold">17%-25%</span></p>
                </div>
                <Link
                  href="/personal-loans/marcus-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Marcus works best if you're on the higher end of fair credit (670-679). They have zero fees and unique flexibility features like skip-a-payment. If you're in the low 600s, you might get denied—but if you're approved, the no-fee structure saves you hundreds.
              </p>

              <div className="bg-[#F3F4F6] p-4 rounded-lg">
                <p className="text-sm text-[#1F2937]"><strong>Best for:</strong> {lenderData.marcus.keyAdvantage}</p>
              </div>
            </div>

            {/* SoFi */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.sofi.name}</h3>
                  <p className="text-sm text-[#6B7280]">Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.sofi.minCredit}</span> | Typical APR: <span className="font-bold">15%-20%</span></p>
                </div>
                <Link
                  href="/personal-loans/sofi-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                SoFi officially wants 680+ but some fair credit borrowers in the 660-679 range get approved. They look at income and employment stability, not just credit score. If approved, you get no fees and unemployment protection—but many fair credit applicants get denied.
              </p>

              <div className="bg-[#F3F4F6] p-4 rounded-lg">
                <p className="text-sm text-[#1F2937]"><strong>Best for:</strong> {lenderData.sofi.keyAdvantage}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Qualify */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How to Maximize Your Chances</h2>

          <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r space-y-4">
            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">1. Highlight Your Education & Income</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Lenders like Upstart care about your earning potential. If you have a degree or stable job, make sure that's front and center in your application.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">2. Apply to Multiple Lenders</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Rates can vary wildly. One person was offered 22% by one lender and 14% by another—same credit score. Use soft credit checks (pre-qualification) to shop around.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E40AF] mb-2">3. Consider Waiting to Improve Your Score</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If it's not urgent, 3-6 months of on-time payments can push you from 660 to 680+. That jump unlocks significantly better rates (often 5-7% lower APR).
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Explore More Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/personal-loans/best-good-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Good Credit (680-740) →</h3>
              <p className="text-sm text-[#6B7280]">If you're close to 680</p>
            </Link>
            <Link href="/personal-loans/best-bad-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Bad Credit (Below 600) →</h3>
              <p className="text-sm text-[#6B7280]">If your score is lower</p>
            </Link>
            <Link href="/personal-loans/upstart-review" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Read Upstart Review →</h3>
              <p className="text-sm text-[#6B7280]">Full details on top fair credit lender</p>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare Rates from Top Lenders
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            See your options in 2 minutes. Soft credit check only.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates
          </button>
        </div>
      </section>
    </>
  );
}
