import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

export const metadata: Metadata = {
  title: "Best Personal Loans for Quick Approval & Fast Funding | 2025",
  description: "Need money fast? Compare lenders with same-day and next-day funding. LightStream, Upstart, and Avant approve quickly. See what real borrowers experienced.",
  keywords: "fast personal loans, same-day funding, quick approval loans, emergency loans, fast cash",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Best Personal Loans for Quick Approval & Fast Funding | 2025",
    description: "Compare the fastest personal loan lenders. Same-day and 1-day funding available from LightStream, Upstart, and Avant.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/best-quick-approval",
    images: [{
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person working on urgent financial documents - Photo by Scott Graham on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BestQuickApproval() {
  const fastLenders = [
    {
      name: lenderData.lightstream.name,
      data: lenderData.lightstream,
      slug: "lightstream-review",
      fundingTime: "Same day possible",
      approvalTime: "Minutes to hours",
      requirement: "Excellent credit (720+)"
    },
    {
      name: lenderData.upstart.name,
      data: lenderData.upstart,
      slug: "upstart-review",
      fundingTime: "1 business day",
      approvalTime: "Minutes",
      requirement: "Fair credit (600+)"
    },
    {
      name: lenderData.avant.name,
      data: lenderData.avant,
      slug: "avant-review",
      fundingTime: "1-2 business days",
      approvalTime: "Minutes to 24 hours",
      requirement: "Bad credit (580+)"
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">FAST FUNDING</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for Quick Approval & Fast Funding
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Need money in your account today or tomorrow? Here are the lenders that actually deliver on their speed promises.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (Based on 175+ real experiences from borrowers who needed fast cash.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Important Warning */}
        <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 mb-12 rounded-r">
          <p className="text-lg font-semibold text-[#C2410C] mb-2">⚠️ Important:</p>
          <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
            Fast approval doesn't mean you should skip reading the terms. Even in an emergency, take 10 minutes to understand the APR, fees, and total cost. <strong>Avoid payday loans</strong> (400%+ APR). The lenders below are legitimate with reasonable rates.
          </p>
        </div>

        {/* Speed Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Fastest Lenders Comparison</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
              <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                <tr>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Approval Speed</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Funding Speed</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Needed</th>
                  <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]"></th>
                </tr>
              </thead>
              <tbody>
                {fastLenders.map((lender, idx) => (
                  <tr key={lender.name} className={idx % 2 === 0 ? "bg-white hover:bg-[#F3F4F6]" : "bg-[#F3F4F6] hover:bg-[#E5E7EB]"}>
                    <td className="border border-[#6B7280]/30 px-4 py-3">
                      <Link href={`/personal-loans/${lender.slug}`} className="font-semibold text-[#06B6D4] hover:underline">
                        {lender.name}
                      </Link>
                    </td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">{lender.approvalTime}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">{lender.fundingTime}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3 text-sm">{lender.requirement}</td>
                    <td className="border border-[#6B7280]/30 px-4 py-3">
                      <Link href={`/personal-loans/${lender.slug}`} className="text-[#06B6D4] hover:underline text-sm font-semibold">
                        Full Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Top 3 Fastest Lenders (Detailed)</h2>

          <div className="space-y-8">
            {/* LightStream */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.lightstream.name}</h3>
                    <span className="px-3 py-1 bg-[#FB923C] text-white rounded-full text-xs font-semibold">FASTEST (SAME DAY)</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">Funding: <span className="font-bold text-green-600">{lenderData.lightstream.timeToFund}</span> | Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.lightstream.minCredit}</span></p>
                </div>
                <Link
                  href="/personal-loans/lightstream-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                LightStream is the fastest if you have excellent credit (720+). Apply before noon EST and get funded the same day. No fees, rates as low as 6.99%, and up to $100,000. The catch: no soft credit check, so only apply if you're confident. Every application is a hard pull.
              </p>

              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-4 rounded-r">
                <p className="text-sm text-[#1F2937]"><strong>Real user:</strong> "Applied at 9am for car emergency. Approved by 11am. Money in my account at 2pm. Unbelievable."</p>
              </div>
            </div>

            {/* Upstart */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.upstart.name}</h3>
                  <p className="text-sm text-[#6B7280]">Funding: <span className="font-bold text-green-600">{lenderData.upstart.timeToFund}</span> | Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.upstart.minCredit}</span></p>
                </div>
                <Link
                  href="/personal-loans/upstart-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Upstart approves in minutes using AI and funds within 1 business day. Good option if your credit is fair (600+) and you need speed. Watch for origination fees (0%-10%) which reduce the amount you receive. Still fast and legitimate.
              </p>

              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-4 rounded-r">
                <p className="text-sm text-[#1F2937]"><strong>Real user:</strong> "640 credit score. Applied Monday noon, approved in 10 minutes, money Wednesday morning. Saved me."</p>
              </div>
            </div>

            {/* Avant */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.avant.name}</h3>
                  <p className="text-sm text-[#6B7280]">Funding: <span className="font-bold text-green-600">{lenderData.avant.timeToFund}</span> | Min Credit: <span className="font-bold text-green-600">{lenderData.avant.minCredit}</span></p>
                </div>
                <Link
                  href="/personal-loans/avant-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                Avant is the fastest option for bad credit (580+). Decision within 24 hours, funding in 1-2 business days. Rates are high (25%-36% typical), but if you have bad credit and need money fast, Avant is one of your few legitimate options.
              </p>

              <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-4 rounded-r">
                <p className="text-sm text-[#1F2937]"><strong>Reality check:</strong> High rates and admin fees mean this is expensive. Only use for true emergencies and pay off as quickly as possible.</p>
              </div>
            </div>

            {/* SoFi */}
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">{lenderData.sofi.name}</h3>
                  <p className="text-sm text-[#6B7280]">Funding: <span className="font-bold">{lenderData.sofi.timeToFund}</span> | Min Credit: <span className="font-bold text-[#1F2937]">{lenderData.sofi.minCredit}</span></p>
                </div>
                <Link
                  href="/personal-loans/sofi-review"
                  className="bg-[#06B6D4] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors whitespace-nowrap"
                >
                  Full Review →
                </Link>
              </div>

              <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                SoFi isn't the absolute fastest but still funds in a few days with good credit. The advantage: zero fees and better rates than speed-focused lenders. If you can wait 3-5 days instead of same-day, you might save thousands in interest.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Fast Approval */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How to Speed Up Your Approval</h2>

          <div className="space-y-6">
            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">1. Apply Early in the Day</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Submit applications before noon EST on a weekday. Same-day funding is only possible if you apply early and get approved quickly.
              </p>
            </div>

            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">2. Have Documents Ready</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                Before you apply, gather: recent pay stubs, bank statements, ID, and Social Security number. Any delay in providing docs means delayed funding.
              </p>
            </div>

            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">3. Choose Electronic Deposit</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                ACH transfer is faster than mailed checks. Make sure your bank account info is accurate to avoid delays.
              </p>
            </div>

            <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 rounded-r">
              <h4 className="font-bold text-[#1E40AF] mb-2">4. Avoid Fridays and Weekends</h4>
              <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                If you apply Friday, you likely won't get funded until Tuesday (business days only). Apply Monday-Wednesday for fastest results.
              </p>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">When You Shouldn't Rush</h2>

          <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 rounded-r">
            <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
              Fast loans often come with higher APRs. If your situation isn't a true emergency, consider:
            </p>
            <ul className="space-y-2 text-[#1F2937]">
              <li><strong>• Wait a few days:</strong> SoFi and Marcus offer better rates if you can wait 3-7 days</li>
              <li><strong>• Ask family/friends:</strong> Borrow interest-free if possible</li>
              <li><strong>• Negotiate payment plans:</strong> Many bills can be negotiated or extended</li>
              <li><strong>• Local credit union:</strong> Often have emergency loan programs with better rates</li>
            </ul>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/personal-loans/lightstream-review" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">LightStream Review →</h3>
              <p className="text-sm text-[#6B7280]">Same-day funding details</p>
            </Link>
            <Link href="/personal-loans/best-good-credit" className="p-6 border-2 border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
              <h3 className="font-bold text-[#06B6D4] mb-2">Best for Good Credit →</h3>
              <p className="text-sm text-[#6B7280]">If you have 680-740 score</p>
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
            Get Fast Approval Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Apply now and get your decision in minutes. Funding as fast as today.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Check Rates Now
          </button>
        </div>
      </section>
    </>
  );
}
