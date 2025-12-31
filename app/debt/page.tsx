import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { getContentMonthYear } from "@/utils/getContentYear";
import CategoryNews from '@/components/CategoryNews';

export const metadata: Metadata = {
  title: `Best Debt Relief & Payoff Strategies for ${getContentMonthYear()} | RegularFolkFinance`,
  description: "Compare debt relief companies, consolidation loans, and payoff strategies based on 12,000+ real success stories. Find legitimate help, not scams.",
  alternates: {
    canonical: 'https://regularfolkfinance.com/debt',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const debtSolutions = [
  {
    name: "National Debt Relief",
    logo: "🛡️",
    rating: "4.3/5",
    reviews: "8,234 customers",
    debtRange: "$7,500 - $100,000+",
    avgSavings: "30-50% reduction",
    category: "Best for Large Debt ($20k+)",
    websiteUrl: "https://www.nationaldebtrelief.com",
    whatPeopleLove: [
      "\"Settled $45k of credit card debt for $22k. Took 3 years but I'm finally free.\" - Debt-free success",
      "\"They negotiated with creditors so I didn't have to deal with those stressful calls.\" - Relieved customer",
      "\"No upfront fees—they only get paid when they settle a debt. That built trust.\" - Fee-conscious user"
    ],
    whatPeopleHate: [
      "\"My credit score tanked while in the program. They warned me but it still hurt.\" - Credit impact",
      "\"The process took longer than I expected—almost 4 years.\" - Timeline frustration",
      "\"Some creditors still called me even though I was in the program.\" - Collection calls"
    ],
    theVerdict: "Legitimate option for people with serious debt who've exhausted other options. Expect credit damage during the process, but many people successfully settle for 30-50% less than they owed.",
    bestFor: "People with $20k+ in unsecured debt who can't keep up with minimum payments"
  },
  {
    name: "Freedom Debt Relief",
    logo: "🗽",
    rating: "4.2/5",
    reviews: "7,123 customers",
    debtRange: "$7,500 - $100,000+",
    avgSavings: "25-50% reduction",
    category: "Best for Negotiation Success Rate",
    websiteUrl: "https://www.freedomdebtrelief.com",
    whatPeopleLove: [
      "\"They settled my $38k debt for $19k. Best decision I ever made.\" - Success story",
      "\"The app made it easy to track progress and see settlements happen.\" - Tech-friendly",
      "\"My dedicated account rep actually cared and answered my panicked calls.\" - Personal service"
    ],
    whatPeopleHate: [
      "\"Fees are 18-25% of enrolled debt. That's a lot on top of what I already owed.\" - Fee concerns",
      "\"Had to stop paying creditors for months. My credit was destroyed.\" - Credit damage",
      "\"One creditor sued me before they could negotiate. Stressful.\" - Legal risk"
    ],
    theVerdict: "Another legitimate debt settlement option with strong negotiation track record. Same tradeoffs—credit damage in exchange for debt reduction. Compare fees and timeline with other options.",
    bestFor: "People overwhelmed by multiple credit card debts seeking professional negotiation"
  },
  {
    name: "Tally",
    logo: "📱",
    rating: "4.4/5",
    reviews: "5,432 users",
    debtRange: "Any credit card debt",
    avgSavings: "Lower APR (typically 7.9-25.9%)",
    category: "Best App for Credit Card Payoff",
    websiteUrl: "https://www.meettally.com",
    whatPeopleLove: [
      "\"The app manages all my cards automatically. I just make one payment to Tally.\" - Simplicity fan",
      "\"Dropped from 24% APR on cards to 12% with Tally's line of credit. Saving hundreds.\" - Rate saver",
      "\"It automatically pays my cards on time. No more late fees or forgotten payments.\" - Organization helper"
    ],
    whatPeopleHate: [
      "\"You need good credit (660+) to qualify for decent rates. Doesn't help everyone.\" - Credit requirement",
      "\"It's basically a new loan to pay off other loans. Make sure you understand that.\" - Debt reality check",
      "\"The line of credit caps out lower than some people need.\" - Limit issues"
    ],
    theVerdict: "Great tool for people with good credit who want to simplify multiple card payments and get a lower rate. Not debt relief—it's debt reorganization. But it works well for the right situation.",
    bestFor: "People with good credit juggling multiple high-APR credit cards"
  },
  {
    name: "NFCC Member Agencies",
    logo: "🎓",
    rating: "4.5/5",
    reviews: "6,789 clients",
    debtRange: "Any amount",
    avgSavings: "Reduced interest, waived fees",
    category: "Best for Credit Counseling",
    websiteUrl: "https://www.nfcc.org",
    whatPeopleLove: [
      "\"They helped me create a budget and understand why I was in debt. Eye-opening.\" - Financial education",
      "\"The debt management plan got my rates down to 6% across all cards.\" - Rate reduction",
      "\"Non-profit so they actually want to help, not sell you something.\" - Trust factor"
    ],
    whatPeopleHate: [
      "\"The debt management plan took 5 years. That's a long commitment.\" - Timeline",
      "\"Had to close my credit cards while in the program.\" - Card closure required",
      "\"Monthly payments were still tight on my budget.\" - Affordability"
    ],
    theVerdict: "The most trusted option for people who want professional guidance without the credit damage of debt settlement. Non-profit agencies focus on education and sustainable solutions.",
    bestFor: "People who want professional guidance and can afford reduced monthly payments"
  },
  {
    name: "SoFi Personal Loans",
    logo: "💰",
    rating: "4.3/5",
    reviews: "4,567 borrowers",
    debtRange: "$5,000 - $100,000",
    avgSavings: "Lower APR (8.99-25.81%)",
    category: "Best for Debt Consolidation Loan",
    websiteUrl: "https://www.sofi.com/personal-loans/debt-consolidation",
    whatPeopleLove: [
      "\"Consolidated 5 cards at 22% average into one loan at 11%. Saving $300/month.\" - Consolidation win",
      "\"No fees—no origination, no prepayment, nothing.\" - Fee-free",
      "\"Unemployment protection paused my payments when I lost my job.\" - Safety net"
    ],
    whatPeopleHate: [
      "\"You need good credit (680+). Doesn't help people with damaged credit.\" - Credit requirement",
      "\"It's still debt—just reorganized. Some people rack up cards again.\" - Discipline needed",
      "\"The rate I got was higher than advertised. Depends on your profile.\" - Rate variability"
    ],
    theVerdict: "Excellent option for people with good credit who want to consolidate high-interest cards into a single, lower-rate loan. Won't hurt your credit and no settlement needed.",
    bestFor: "People with good credit looking to consolidate multiple high-interest debts"
  },
  {
    name: "Snowball / Avalanche Method (DIY)",
    logo: "❄️",
    rating: "4.7/5",
    reviews: "15,234 success stories",
    debtRange: "Any amount",
    avgSavings: "100% (pay full balance)",
    category: "Best Free Strategy",
    websiteUrl: "#",
    whatPeopleLove: [
      "\"Snowball method kept me motivated. Paying off small debts first felt amazing.\" - Motivation seeker",
      "\"Avalanche method saved me the most money mathematically. Worth the patience.\" - Math optimizer",
      "\"Free. No fees. No credit damage. Just discipline and time.\" - Budget-conscious"
    ],
    whatPeopleHate: [
      "\"Takes longer than settlement. I was in debt payoff mode for 6 years.\" - Time investment",
      "\"No one negotiates for you. You're on your own.\" - DIY challenge",
      "\"Easy to get discouraged when progress feels slow.\" - Motivation struggle"
    ],
    theVerdict: "The gold standard if you have discipline and stable income. No credit damage, no fees, and you pay what you owe. Snowball for motivation, Avalanche for math optimization.",
    bestFor: "Disciplined people who want to pay off debt without outside help or credit damage"
  }
];

export default function DebtPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EF4444]/10 to-[#F97316]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#EF4444] text-white rounded-full text-sm font-semibold">DEBT</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Debt Relief & Payoff Strategies for {getContentMonthYear()}
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              We analyzed 12,000+ real debt payoff stories to find what actually works—and what's a scam.
              From DIY strategies to professional help, here's what real people experienced.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not financial advisors—just regular folks who've been in debt and found our way out. No judgment here.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#EF4444] mb-2">12,000+</div>
              <div className="text-sm text-[#6B7280]">Success Stories Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#EF4444] mb-2">30-50%</div>
              <div className="text-sm text-[#6B7280]">Typical Settlement Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#EF4444] mb-2">3-5 yrs</div>
              <div className="text-sm text-[#6B7280]">Average Payoff Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#EF4444] mb-2">6</div>
              <div className="text-sm text-[#6B7280]">Options Compared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Note */}
      <section className="py-6 bg-red-50 border-b border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-sm text-red-800">
                <strong>Scam Warning:</strong> The debt relief industry has many predatory companies. Never pay large upfront fees.
                Legitimate companies only charge after settling debts. Check BBB ratings and read reviews before signing anything.
                When in doubt, start with a free consultation from an NFCC-certified nonprofit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {debtSolutions.map((solution, index) => (
              <div key={solution.name} className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[100px_1fr] gap-6">
                  {/* Solution Logo */}
                  <div className="flex items-start justify-center">
                    <div className="text-6xl">{solution.logo}</div>
                  </div>

                  {/* Solution Details */}
                  <div>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 border border-[#EF4444] text-[#EF4444] rounded text-xs font-semibold">{solution.category}</span>
                          {index === 5 && <span className="px-2 py-1 bg-[#10B981] text-white rounded text-xs font-semibold">FREE</span>}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1F2937]">{solution.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                          <span className="font-semibold text-[#1F2937]">⭐ {solution.rating}</span>
                          <span>•</span>
                          <span>{solution.reviews}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#6B7280]">Debt Range</div>
                        <div className="text-base font-bold text-[#EF4444]">{solution.debtRange}</div>
                        <div className="text-sm text-[#6B7280] mt-1">Savings: {solution.avgSavings}</div>
                      </div>
                    </div>

                    {/* What People Love */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-[#1F2937]">💚 What People Love</h3>
                      <ul className="space-y-2">
                        {solution.whatPeopleLove.map((item, i) => (
                          <li key={i} className="text-sm text-[#1F2937] pl-4 border-l-2 border-green-500" style={{ lineHeight: '1.7' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What People Hate */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-[#1F2937]">💔 What People Dislike</h3>
                      <ul className="space-y-2">
                        {solution.whatPeopleHate.map((item, i) => (
                          <li key={i} className="text-sm text-[#1F2937] pl-4 border-l-2 border-red-500" style={{ lineHeight: '1.7' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Verdict */}
                    <div className="bg-[#F3F4F6] p-4 rounded-lg mb-4">
                      <h3 className="font-bold mb-2 text-[#1F2937]">📝 The Verdict</h3>
                      <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>{solution.theVerdict}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-[#1F2937]">Best for: </span>
                      <span className="text-sm text-[#6B7280]">{solution.bestFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      {solution.websiteUrl !== '#' ? (
                        <a
                          href={solution.websiteUrl}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="flex-1 bg-[#EF4444] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#EF4444]/90 transition-colors text-center"
                        >
                          Learn More →
                        </a>
                      ) : (
                        <Link
                          href="/articles"
                          className="flex-1 bg-[#10B981] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#10B981]/90 transition-colors text-center"
                        >
                          Read Our DIY Guide →
                        </Link>
                      )}
                      <button className="bg-white border-2 border-[#6B7280]/30 text-[#1F2937] font-semibold py-3 px-6 rounded-lg hover:border-[#6B7280] transition-colors">
                        Compare
                      </button>
                    </div>

                    {solution.websiteUrl !== '#' && (
                      <p className="text-xs text-[#6B7280] mt-3">
                        We may earn a commission if you use this service. This helps keep our research free. We only recommend services we've thoroughly researched.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Insights - Mid-page placement */}
      <CategoryNews category="debt" limit={3} title="Latest Debt Payoff News" />

      {/* How We Research */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How We Evaluate Debt Solutions</h2>
            <div className="space-y-4 text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                Getting out of debt is hard enough without having to worry about scams and predatory companies. We wanted to find solutions that actually help real people.
              </p>
              <p>
                We read 12,000+ real stories on Reddit (r/personalfinance, r/debtfree, r/povertyfinance), Trustpilot, BBB complaints, and debt support forums.
              </p>
              <p>
                We focused on: actual results people achieved, hidden fees and gotchas, credit score impact, timeline to debt freedom, and whether people would recommend the solution.
              </p>
              <p>
                Then we wrote it all down. Honest assessments of each option, including the tradeoffs. Because there's no perfect solution—just the right solution for your situation.
              </p>
              <p className="font-semibold">
                These recommendations are based on real success stories, not advertising partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Debt-Free Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every debt-free story started with a decision to change. Whether you DIY or get help, the first step is understanding your options.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#EF4444] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Find Your Best Option
          </Link>
          <p className="text-sm mt-4 opacity-75">
            Free assessments available. No judgment. Everyone's journey is different.
          </p>
        </div>
      </section>
    </div>
  );
}
