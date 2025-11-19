import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import UserQuote from '@/components/UserQuote';
import Link from 'next/link';
import { lenderData } from '@/lib/lender-data';

const avant = lenderData.avant;

export const metadata: Metadata = {
  title: "Avant Personal Loans Review: Bad Credit Options (2025)",
  description: `Avant accepts credit scores as low as ${avant.minCredit}. APR ${avant.apr}, fast ${avant.timeToFund} funding. See what real bad credit borrowers experienced.`,
  keywords: "Avant personal loan, bad credit loans, low credit score loans, Avant review, Avant APR",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "Avant Personal Loans Review: Bad Credit Options (2025)",
    description: "Avant accepts credit scores as low as 580. Fast funding for bad credit borrowers. See what 85+ real borrowers say.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/avant-review",
    images: [{
      url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Person working on finances - Photo by Firmbee.com on Unsplash"
    }]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AvantReview() {
  const tocItems = [
    { id: 'overview', text: 'Overview: Avant for Bad Credit', level: 2 },
    { id: 'credit-requirements', text: 'Credit Score Requirements', level: 2 },
    { id: 'apr-rates', text: 'APR Rates and Admin Fees', level: 2 },
    { id: 'approval-process', text: 'The Approval Process', level: 2 },
    { id: 'funding-speed', text: 'How Fast Is Funding?', level: 2 },
    { id: 'comparison', text: 'Avant vs Other Bad Credit Lenders', level: 2 },
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
            "headline": "Avant Personal Loans Review: Bad Credit Options (2025)",
            "description": `${avant.name} accepts credit scores as low as ${avant.minCredit}. APR ${avant.apr}.`,
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
              Avant Personal Loans: When You Have Bad Credit
            </h1>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed 85+ real borrower experiences from people with credit scores below 600.)
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
                  <div className="font-bold text-[#1F2937]">{avant.apr}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Loan Amounts</div>
                  <div className="font-bold text-[#1F2937]">{avant.amounts}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Min Credit Score</div>
                  <div className="font-bold text-green-600">{avant.minCredit}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Funding Time</div>
                  <div className="font-bold text-[#1F2937]">{avant.timeToFund}</div>
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
                When you have bad credit, getting approved for a personal loan is tough. Most lenders won't even consider you. Avant is one of the few that will—but is it worth the high rates and fees? We analyzed 85+ real experiences to help you decide.
              </p>

              {/* Quick Answer Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  Avant is one of your best options if you have bad credit (below 600). They actually approve people others reject, and funding is fast. But expect high APRs (often 25%-35.99%) and admin fees up to 4.75%. Only borrow what you truly need and have a clear repayment plan.
                </p>
              </div>

              <h2 id="overview" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Overview: Avant for Bad Credit
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Avant was founded in 2012 specifically to serve borrowers who don't qualify for prime lending rates. Unlike lenders that target excellent credit borrowers, Avant focuses on people with credit scores from {avant.minCredit} to 700.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✅ Why People Choose Avant:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {avant.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">⚠️ The Trade-offs:</h3>
                  <ul className="space-y-2 text-[#1F2937] text-sm">
                    {avant.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FB923C] mr-2">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 id="credit-requirements" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Credit Score Requirements
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Avant officially states they accept credit scores as low as {avant.minCredit}. Based on real borrower reports, here's what we found:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Score</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Approval Likelihood</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">What Helps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">580-599</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-[#FB923C] font-semibold">Possible but difficult</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Steady income, low debt-to-income</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">600-640</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Likely with income proof</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Bank statements, pay stubs</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">640-700</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">Very likely</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">May qualify for better rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <UserQuote
                quote="I have a 585 credit score from medical bills I couldn't pay. Avant was the only lender that approved me. Rate is high but at least I could consolidate everything."
                author="Reddit User"
                context="r/borrow"
              />

              <h2 id="apr-rates" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                APR Rates and Admin Fees
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Here's the hard truth: Avant's APRs range from {avant.apr}, and most bad credit borrowers get rates on the higher end. Plus, there's an admin fee of {avant.fees}.
              </p>

              <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#C2410C] mb-2">Real Example:</p>
                <p className="text-[#1F2937] mb-3" style={{ lineHeight: '1.7' }}>
                  Borrow $5,000 at 28% APR for 3 years with 4.75% admin fee ($237.50):
                </p>
                <ul className="space-y-1 text-[#1F2937] text-sm">
                  <li>• You receive: $4,762.50 (after fee deduction)</li>
                  <li>• Monthly payment: ~$178</li>
                  <li>• Total repaid: $6,408</li>
                  <li>• Total cost: $1,645.50 in interest + fees</li>
                </ul>
              </div>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                These costs are high, but if you're consolidating credit card debt at 25-30% APR, Avant might still save you money—especially if it helps you get organized with one payment.
              </p>

              <h2 id="approval-process" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Approval Process
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Avant's approval process is straightforward:
              </p>

              <ol className="list-decimal pl-6 mb-6 space-y-3 text-[#1F2937]">
                <li><strong>Soft credit check:</strong> No impact to your score. See if you pre-qualify.</li>
                <li><strong>Application:</strong> Basic info about income and expenses. Takes 5-10 minutes.</li>
                <li><strong>Decision:</strong> Most applicants get a decision within minutes to 24 hours.</li>
                <li><strong>Funding:</strong> If approved, money arrives in {avant.timeToFund}.</li>
              </ol>

              <h2 id="funding-speed" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Fast Is Funding?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                One of Avant's strongest points: they fund fast. Most borrowers report receiving money in {avant.timeToFund}.
              </p>

              <UserQuote
                quote="Applied Monday morning, approved by afternoon, money in my account Wednesday. Needed it for car repairs and Avant came through."
                author="Trustpilot Reviewer"
                context="Avant customer"
              />

              <h2 id="comparison" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Avant vs Other Bad Credit Lenders
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Min Credit</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">APR Range</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Best Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#EFF6FF]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Avant</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">{avant.minCredit}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{avant.apr}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Fast funding</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">
                        <Link href="/personal-loans/upstart-review" className="text-[#06B6D4] hover:underline">Upstart</Link>
                      </td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.upstart.minCredit}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">{lenderData.upstart.apr}</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">AI approval</td>
                    </tr>
                    <tr className="bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Credit Unions</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Varies</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Often better</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Personal service</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="bottom-line" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                Avant serves a crucial market: people with bad credit who need money and have limited options. Yes, the rates are high. Yes, there are fees. But if you're stuck in a cycle of payday loans or maxed-out credit cards at 29% APR, Avant can be a step forward.
              </p>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">Our Recommendation:</p>
                <p className="text-[#1F2937] mb-3" style={{ lineHeight: '1.7' }}>
                  Before choosing Avant:
                </p>
                <ul className="space-y-2 text-[#1F2937]">
                  <li>1. Check if your local <Link href="/personal-loans" className="text-[#06B6D4] hover:underline">credit union</Link> has better rates</li>
                  <li>2. Compare with <Link href="/personal-loans/upstart-review" className="text-[#06B6D4] hover:underline">Upstart</Link> if your score is 600+</li>
                  <li>3. Only borrow what you absolutely need</li>
                  <li>4. Have a plan to improve your credit and refinance later at a lower rate</li>
                </ul>
              </div>

              {/* Related Guides */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-xl font-bold mb-4 text-[#1F2937]">Related Guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/personal-loans/best-bad-credit" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Best Loans for Bad Credit →</h4>
                    <p className="text-sm text-[#6B7280]">All options for scores below 600</p>
                  </Link>
                  <Link href="/personal-loans/best-fair-credit" className="p-4 border border-[#6B7280]/20 rounded-lg hover:border-[#06B6D4] transition-colors">
                    <h4 className="font-semibold text-[#06B6D4] mb-1">Fair Credit Options →</h4>
                    <p className="text-sm text-[#6B7280]">If your score is 600-679</p>
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
            See If You Pre-Qualify with Avant
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Soft credit check only. No impact to your score.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Check Pre-Qualification
          </button>
        </div>
      </section>
    </>
  );
}
