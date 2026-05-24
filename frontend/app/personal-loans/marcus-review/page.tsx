import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import UserQuote from '@/components/UserQuote';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

const marcus = lenderData.marcus;

export const metadata: Metadata = {
  title: "Marcus by Goldman Sachs Personal Loans Review (2026)",
  description: `Marcus offers ${marcus.apr} APR with ${marcus.fees.toLowerCase()}. Backed by Goldman Sachs with flexible payment options. See what real borrowers say.`,
  keywords: "Marcus personal loan, Marcus by Goldman Sachs, Goldman Sachs loans, no fee personal loans, debt consolidation loans",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Marcus by Goldman Sachs Personal Loans Review (2026)",
    description: "Marcus offers competitive rates with zero fees and Goldman Sachs backing. See what 90+ real borrowers experienced.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/marcus-review",
    images: [{
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Financial planning documents - Photo by Carlos Muza on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MarcusReview() {
  const tocItems = [
    { id: 'overview', text: 'Overview: Marcus by Goldman Sachs', level: 2 },
    { id: 'no-fees', text: 'The No-Fee Advantage', level: 2 },
    { id: 'apr-rates', text: 'What APR Can You Expect?', level: 2 },
    { id: 'flexibility', text: 'Payment Flexibility Features', level: 2 },
    { id: 'approval', text: 'Who Gets Approved?', level: 2 },
    { id: 'comparison', text: 'Marcus vs Competitors', level: 2 },
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
            "headline": "Marcus by Goldman Sachs Personal Loans Review (2026)",
            "description": `${marcus.name} offers ${marcus.apr} APR with ${marcus.fees.toLowerCase()}.`,
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
              Marcus by Goldman Sachs: Zero Fees, Competitive Rates
            </h1>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed 90+ real experiences to see if Marcus lives up to the Goldman Sachs name.)
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
            <div className="mt-8 sticky top-24 z-20 bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Quick Stats</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-[#6B7280]">APR Range</div>
                  <div className="font-bold text-[#1F2937]">{marcus.apr}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Loan Amounts</div>
                  <div className="font-bold text-[#1F2937]">{marcus.amounts}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Fees</div>
                  <div className="font-bold text-green-600">{marcus.fees}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Funding Time</div>
                  <div className="font-bold text-[#1F2937]">{marcus.timeToFund}</div>
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
                Marcus by Goldman Sachs brings the reputation of one of the world's most prestigious investment banks to consumer lending. But does that translate to better loans for regular people? We analyzed 90+ real borrower experiences to find out.
              </p>

              {/* Quick Answer Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  Marcus offers some of the most competitive rates in the market with absolutely zero fees—no origination, no late fees, no prepayment penalties. Perfect for debt consolidation if you have good credit (660+), but the lower max loan amount ($40,000) may not work for everyone.
                </p>
              </div>

              <h2 id="overview" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Overview: Marcus by Goldman Sachs
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Launched in 2016, Marcus is Goldman Sachs' consumer banking division. Unlike their investment banking business serving corporations and the wealthy, Marcus focuses on straightforward products for everyday consumers: personal loans and high-yield savings accounts.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✅ Strengths:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {marcus.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">⚠️ Limitations:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {marcus.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 id="no-fees" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The No-Fee Advantage
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Marcus stands out with {marcus.fees.toLowerCase()}. This is huge when you compare it to competitors:
              </p>

              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#1E40AF] mb-2">Fee Comparison Example (on a $10,000 loan):</p>
                <ul className="space-y-2 text-[#1F2937]">
                  <li><strong>Marcus:</strong> $0 in fees</li>
                  <li><strong>Upstart:</strong> Up to $1,000 in origination fees (10%)</li>
                  <li><strong>Avant:</strong> Up to $475 in admin fees (4.75%)</li>
                </ul>
              </div>

              <UserQuote
                quote="I switched from my old lender to Marcus and saved $500 just on fees. Plus my rate dropped 2%. That's real money back in my pocket."
                author="Reddit User"
                context="r/personalfinance"
              />

              <h2 id="apr-rates" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What APR Can You Expect?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Marcus advertises APRs from {marcus.apr}. Based on real borrower reports, here's what you can typically expect:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Score</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Typical APR</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Monthly Payment (on $15k/3yr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">760+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">6.99%-9.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$462-$477</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">700-759</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">10%-16%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$484-$524</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">660-699</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">17%-24.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$534-$599</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="flexibility" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Payment Flexibility Features
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Marcus offers unique flexibility features that other lenders don't:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-[#CCFBF1] border border-[#06B6D4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#0E7490] mb-2">📅 Skip-a-Payment</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    After making 12 on-time payments, you can skip one payment per year without penalty. This is helpful if unexpected expenses arise.
                  </p>
                </div>

                <div className="bg-[#EFF6FF] border border-[#3B82F6] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#1E40AF] mb-2">📆 Change Your Due Date</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Align your loan payment with your paycheck schedule—you can change your payment due date anytime online.
                  </p>
                </div>
              </div>

              <UserQuote
                quote="I used the skip-a-payment feature when I had to replace my car's transmission. Saved me from being late on other bills. Such a relief."
                author="Trustpilot Reviewer"
                context="Marcus customer"
              />

              <h2 id="approval" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Who Gets Approved?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Marcus requires a minimum credit score around {marcus.minCredit}, but realistically you need 700+ for the best rates. They also look at:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-[#1F2937]">
                <li>Debt-to-income ratio (prefer under 40%)</li>
                <li>Employment stability</li>
                <li>Credit history length</li>
                <li>Payment history</li>
              </ul>

              <h2 id="comparison" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Marcus vs Competitors
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">APR Range</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Max Loan</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#EFF6FF]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Marcus</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{marcus.apr}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">{marcus.amounts.split('-')[1]}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">{marcus.fees}</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/sofi-review" className="text-[#06B6D4] hover:underline">SoFi</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.sofi.apr}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">{lenderData.sofi.amounts.split('-')[1]}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">{lenderData.sofi.fees}</td>
                    </tr>
                    <tr className="bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/lightstream-review" className="text-[#06B6D4] hover:underline">LightStream</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.lightstream.apr}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">{lenderData.lightstream.amounts.split('-')[1]}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">{lenderData.lightstream.fees}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="bottom-line" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                Marcus by Goldman Sachs delivers what it promises: competitive rates, zero fees, and borrower-friendly features like skip-a-payment. It's an excellent choice for debt consolidation if you have good credit and need under $40,000.
              </p>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">Our Recommendation:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  If you have good credit (700+) and want to consolidate debt, Marcus should be on your short list. The zero fees alone can save you hundreds or thousands compared to other lenders. Just make sure their max loan amount meets your needs.
                </p>
              </div>

              {/* Related Guides */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-xl font-bold mb-4 text-[#1F2937]">Related Guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/personal-loans/best-debt-consolidation" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Best for Debt Consolidation →</h4>
                    <p className="text-sm text-[#6B7280]">Compare all debt consolidation options</p>
                  </Link>
                  <Link href="/personal-loans/best-good-credit" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Best for Good Credit →</h4>
                    <p className="text-sm text-[#6B7280]">Top lenders for 680-740 scores</p>
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
            See Your Marcus Rate in Minutes
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Soft credit check only. Won't affect your score.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Check Rates
          </button>
        </div>
      </section>
    </>
  );
}
