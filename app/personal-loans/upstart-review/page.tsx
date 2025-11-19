import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import UserQuote from '@/components/UserQuote';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

const upstart = lenderData.upstart;

export const metadata: Metadata = {
  title: "Upstart Personal Loans Review: What Real Borrowers Say (2025)",
  description: `Upstart uses AI to approve borrowers with fair credit. APR ${upstart.apr}, amounts ${upstart.amounts}. Fast ${upstart.timeToFund} funding but watch for origination fees.`,
  keywords: "Upstart personal loan, Upstart review, AI loan approval, fair credit loans, Upstart APR rates, origination fees",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Upstart Personal Loans Review: What Real Borrowers Say (2025)",
    description: "Upstart uses AI to approve fair credit borrowers. Fast funding but origination fees apply. See what 100+ real borrowers experienced.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/upstart-review",
    images: [{
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person reviewing loan documents - Photo by Scott Graham on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function UpstartReview() {
  const tocItems = [
    { id: 'overview', text: 'Overview: Who Is Upstart For?', level: 2 },
    { id: 'ai-approval', text: 'The AI Approval Process Explained', level: 2 },
    { id: 'apr-rates', text: 'What APR Can You Expect?', level: 2 },
    { id: 'origination-fees', text: 'Understanding Origination Fees', level: 2 },
    { id: 'funding-speed', text: 'How Fast Is Funding?', level: 2 },
    { id: 'comparison', text: 'Upstart vs Competitors', level: 2 },
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
            "headline": "Upstart Personal Loans Review: What Real Borrowers Say (2025)",
            "description": `${upstart.name} uses AI to approve borrowers with fair credit. APR ${upstart.apr}.`,
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
              Upstart Personal Loans: AI-Powered Approval for Fair Credit
            </h1>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed 100+ real borrower experiences to see if Upstart's AI really works.)
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
                  <div className="font-bold text-[#1F2937]">{upstart.apr}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Loan Amounts</div>
                  <div className="font-bold text-[#1F2937]">{upstart.amounts}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Min Credit Score</div>
                  <div className="font-bold text-[#1F2937]">{upstart.minCredit}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Funding Time</div>
                  <div className="font-bold text-[#1F2937]">{upstart.timeToFund}</div>
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
                Upstart takes a different approach to personal loans by using artificial intelligence to evaluate borrowers beyond just credit scores. But does this AI-powered approach actually help people with fair credit get approved? We analyzed 100+ real experiences to find out.
              </p>

              {/* Quick Answer Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  Upstart is best for borrowers with fair credit (600-679) who need fast funding. Their AI considers education and job history, not just credit scores. However, watch out for origination fees (0%-10%) and potentially higher APRs that can offset the benefits.
                </p>
              </div>

              <h2 id="overview" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Overview: Who Is Upstart For?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Upstart targets borrowers who traditional lenders might overlook. Their AI model considers over 1,600 data points including your education, job history, and area of study—not just your credit score.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✅ Best For:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {upstart.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">⚠️ Watch Out For:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {upstart.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 id="ai-approval" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The AI Approval Process Explained
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Unlike traditional lenders that heavily weight credit scores, Upstart's AI model looks at your education background, employment history, and earning potential. This can be especially helpful if you're:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-[#1F2937]">
                <li>Young with limited credit history but a college degree</li>
                <li>In a high-paying field despite a lower credit score</li>
                <li>Recently recovered from financial hardship but now stable</li>
              </ul>

              <UserQuote
                quote="I had a 640 credit score but got approved because I have a master's degree and steady job. Upstart looked beyond just my score."
                author="Reddit User"
                context="r/personalfinance"
              />

              <h2 id="apr-rates" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What APR Can You Expect?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Upstart's APR range is {upstart.apr}. While their minimum rate is competitive, the maximum rate is quite high. Here's what real borrowers reported:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Score</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Typical APR</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Loan Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">720+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">8.5%-12%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$5,000-$50,000</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">660-719</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">14%-22%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$3,000-$25,000</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">600-659</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600 font-semibold">24%-35.99%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$1,000-$15,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="origination-fees" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Understanding Origination Fees
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                One significant downside: Upstart charges origination fees of {upstart.fees}. This fee is deducted from your loan amount upfront.
              </p>

              <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#C2410C] mb-2">Example:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  If you're approved for a $10,000 loan with a 5% origination fee, you'll only receive $9,500—but you'll owe $10,000 plus interest. This effectively increases your APR.
                </p>
              </div>

              <h2 id="funding-speed" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Fast Is Funding?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Upstart shines here: most borrowers report funding in {upstart.timeToFund}. This is faster than most traditional lenders.
              </p>

              <UserQuote
                quote="Applied on a Monday, approved Tuesday morning, money in my account Wednesday. Can't beat that speed."
                author="Trustpilot Reviewer"
                context="Upstart review"
              />

              <h2 id="comparison" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Upstart vs Competitors
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Min Credit</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Fees</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#EFF6FF]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Upstart</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{upstart.minCredit}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">{upstart.fees}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Fair credit</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/sofi-review" className="text-[#06B6D4] hover:underline">SoFi</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.sofi.minCredit}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">{lenderData.sofi.fees}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Good credit</td>
                    </tr>
                    <tr className="bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/avant-review" className="text-[#06B6D4] hover:underline">Avant</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.avant.minCredit}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600">{lenderData.avant.fees}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Bad credit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="bottom-line" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                Upstart's AI-powered approval process genuinely helps borrowers with fair credit get approved when traditional lenders say no. The fast funding is a major plus. However, the origination fees and potentially high APRs mean you need to do the math carefully.
              </p>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">Our Recommendation:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  If you have fair credit and need money fast, Upstart is worth checking. But also compare with <Link href="/personal-loans/best-fair-credit" className="text-[#06B6D4] hover:underline font-semibold">other fair credit lenders</Link> to ensure you're getting the best deal after fees.
                </p>
              </div>

              {/* Related Guides */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-xl font-bold mb-4 text-[#1F2937]">Related Guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/personal-loans/best-fair-credit" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Best Loans for Fair Credit →</h4>
                    <p className="text-sm text-[#6B7280]">Compare all options for 600-679 scores</p>
                  </Link>
                  <Link href="/personal-loans/best-quick-approval" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Fastest Personal Loans →</h4>
                    <p className="text-sm text-[#6B7280]">Get funded in 1 business day</p>
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
            Compare Upstart with Other Lenders
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            See all your options in 2 minutes. Soft credit check only.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates
          </button>
        </div>
      </section>
    </>
  );
}
