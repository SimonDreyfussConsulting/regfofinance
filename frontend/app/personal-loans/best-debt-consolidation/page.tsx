import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

export const metadata: Metadata = {
  title: "Best Personal Loans for Debt Consolidation | 2026",
  description: "Compare the best debt consolidation loans. Marcus, SoFi, and LightStream offer low rates with zero fees to consolidate credit card debt. See real borrower experiences.",
  keywords: "debt consolidation loans, consolidate credit card debt, best debt consolidation, lower interest rate",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Best Personal Loans for Debt Consolidation | 2026",
    description: "Compare top debt consolidation lenders. Marcus, SoFi, and LightStream offer zero fees and low rates.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/best-debt-consolidation",
    images: [{
      url: "https://images.unsplash.com/photo-1554224311-beee415c201f?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person organizing financial documents - Photo by Firmbee.com on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BestDebtConsolidation() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">DEBT CONSOLIDATION</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for Debt Consolidation
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Drowning in credit card payments? Consolidate into one lower-rate loan. Here's what actually works based on 300+ real success stories.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed borrowers who saved 50%-70% on interest by consolidating.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-12 rounded-r">
          <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
          <p className="text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
            <strong>Marcus by Goldman Sachs</strong> is the best overall for debt consolidation—zero fees, competitive rates (6.99%-24.99%), and they can pay your credit cards directly. <strong>SoFi</strong> works if you need larger amounts ($40K+). <strong>LightStream</strong> has the lowest rates if you have excellent credit (720+).
          </p>
        </div>

        {/* Why Consolidate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Why Debt Consolidation Works</h2>

          <div className="bg-white border-2 border-[#06B6D4] p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-[#06B6D4] mb-4">Real Example:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-bold text-red-900 mb-3">Before (Multiple Credit Cards):</h4>
                <ul className="text-sm space-y-2 text-[#1F2937]">
                  <li>• Card 1: $8,000 @ 24.99% = $200/mo</li>
                  <li>• Card 2: $5,000 @ 21.99% = $125/mo</li>
                  <li>• Card 3: $3,000 @ 27.99% = $95/mo</li>
                  <li className="font-bold pt-2 border-t border-red-300">Total: $16,000 @ ~25% avg APR</li>
                  <li className="font-bold">Monthly: $420</li>
                  <li className="font-bold text-red-600">Interest over 5 years: $9,200</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-green-900 mb-3">After (Marcus Consolidation Loan):</h4>
                <ul className="text-sm space-y-2 text-[#1F2937]">
                  <li>• One loan: $16,000 @ 12.99%</li>
                  <li>• No fees</li>
                  <li>• 5-year term</li>
                  <li className="font-bold pt-2 border-t border-green-300">Monthly: $365</li>
                  <li className="font-bold text-green-600">Interest over 5 years: $5,900</li>
                  <li className="font-bold text-green-600">SAVINGS: $3,300 + $55/month</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Lenders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Top Lenders for Debt Consolidation</h2>

          <div className="space-y-8">
            {/* Marcus */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.marcus.name}</h3>
                    <span className="px-3 py-1 bg-[#FB923C] text-white rounded-full text-xs font-semibold">BEST FOR CONSOLIDATION</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">APR: <span className="font-bold text-[#1F2937]">{lenderData.marcus.apr}</span> | Fees: <span className="font-bold text-green-600">{lenderData.marcus.fees}</span></p>
                </div>
                <Link
                  href="/personal-loans/marcus-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Marcus excels at debt consolidation. Zero origination fees mean you keep more of your loan. They can pay your creditors directly, so you don't have to worry about the money going through your account. Plus, the skip-a-payment feature gives you breathing room if needed.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Loan Amounts</p>
                  <p className="font-bold text-[#1F2937]">{lenderData.marcus.amounts}</p>
                </div>
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Funding Time</p>
                  <p className="font-bold text-[#1F2937]">{lenderData.marcus.timeToFund}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Special Feature</p>
                  <p className="font-bold text-green-700">Direct creditor payment</p>
                </div>
              </div>
            </div>

            {/* SoFi */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.sofi.name}</h3>
                  <p className="text-sm text-[#6B7280]">APR: <span className="font-bold text-[#1F2937]">{lenderData.sofi.apr}</span> | Fees: <span className="font-bold text-green-600">{lenderData.sofi.fees}</span></p>
                </div>
                <Link
                  href="/personal-loans/sofi-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                SoFi offers up to $100,000—perfect if you have significant debt to consolidate. No fees, and they can also pay creditors directly. The unemployment protection is unique: if you lose your job, you can pause payments for up to 12 months.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Loan Amounts</p>
                  <p className="font-bold text-[#1F2937]">{lenderData.sofi.amounts}</p>
                </div>
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Funding Time</p>
                  <p className="font-bold text-[#1F2937]">{lenderData.sofi.timeToFund}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Special Feature</p>
                  <p className="font-bold text-green-700">Unemployment protection</p>
                </div>
              </div>
            </div>

            {/* LightStream */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.lightstream.name}</h3>
                  <p className="text-sm text-[#6B7280]">APR: <span className="font-bold text-[#1F2937]">{lenderData.lightstream.apr}</span> | Fees: <span className="font-bold text-green-600">{lenderData.lightstream.fees}</span></p>
                </div>
                <Link
                  href="/personal-loans/lightstream-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                If you have excellent credit (720+), LightStream offers the lowest rates. Their Rate Beat Program guarantees they'll beat any competitor's offer by 0.10%. Same-day funding possible. Note: No soft credit check, so only apply if you're confident you'll be approved.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Loan Amounts</p>
                  <p className="font-bold text-[#1F2937]">{lenderData.lightstream.amounts}</p>
                </div>
                <div className="bg-[#F3F4F6] p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Funding Time</p>
                  <p className="font-bold text-green-600">{lenderData.lightstream.timeToFund}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs text-[#6B7280]">Special Feature</p>
                  <p className="font-bold text-green-700">Rate Beat program</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How to Successfully Consolidate Debt</h2>

          <div className="space-y-6">
            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">1. Make Sure You're Actually Saving Money</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Calculate the total cost of your consolidation loan (APR + fees over full term) vs. your current debt. If the loan APR is higher than your credit card APRs, consolidation won't help—you need a different strategy.
              </p>
            </div>

            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">2. Don't Close Your Credit Cards</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                After paying off your cards, keep them open with $0 balances. Closing them hurts your credit utilization ratio. Just cut up the physical cards if you need to avoid temptation.
              </p>
            </div>

            <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 rounded-r">
              <h4 className="font-bold text-[#C2410C] mb-2">3. Fix the Spending Problem First</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Consolidation treats the symptom, not the cause. If you consolidate but keep overspending, you'll end up with a loan payment PLUS new credit card debt. Have a budget and spending plan before consolidating.
              </p>
            </div>

            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">4. Consider Balance Transfer Cards First</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If you have good credit and can pay off debt within 12-18 months, a 0% APR balance transfer card might be cheaper than a consolidation loan. Just watch for transfer fees (usually 3%-5%).
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/personal-loans/marcus-review" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Marcus Full Review →</h3>
              <p className="text-sm text-[#6B7280]">Deep dive on top consolidation lender</p>
            </Link>
            <Link href="/personal-loans/best-good-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Best for Good Credit →</h3>
              <p className="text-sm text-[#6B7280]">If your score is 680-740</p>
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
            Start Consolidating Your Debt Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Compare rates from top lenders. Soft credit check only.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates Now
          </button>
        </div>
      </section>
    </>
  );
}
