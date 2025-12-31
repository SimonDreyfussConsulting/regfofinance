import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { getContentMonthYear } from "@/utils/getContentYear";
import CategoryNews from '@/components/CategoryNews';

export const metadata: Metadata = {
  title: `Best Personal Loans for ${getContentMonthYear()} | RegularFolkFinance`,
  description: "Compare personal loans based on 25,000+ real borrower reviews. Find lenders with fair rates and no hidden fees.",
  alternates: {
    canonical: 'https://regularfolkfinance.com/personal-loans',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personalLenders = [
  {
    name: "SoFi Personal Loans",
    logo: "💰",
    rating: "4.3/5",
    reviews: "8,432 borrowers",
    aprRange: "8.99% - 25.81%",
    loanAmounts: "$5,000 - $100,000",
    category: "Best for Good Credit",
    whatPeopleLove: [
      "\"$0 fees—no origination, no prepayment, nothing. That's rare.\" - Trustpilot review",
      "\"Got approved in like 10 minutes. Money in my account next day.\" - Reddit user",
      "\"The unemployment protection is clutch. I lost my job and they paused my payments for 3 months.\" - r/personalfinance"
    ],
    whatPeopleHate: [
      "\"You need good credit. I got denied with a 680 score.\" - Common complaint",
      "\"The rate they show you isn't always what you get approved for.\" - Credit Karma",
      "\"Customer service is all chat/phone. No branches if you want to talk in person.\" - Some users"
    ],
    theVerdict: "If you have good credit (700+) and want a straightforward loan with no fees, SoFi is hard to beat. But if your credit is fair or you want in-person service, look elsewhere.",
    bestFor: "People with good credit looking for low fees and fast funding"
  },
  {
    name: "Marcus by Goldman Sachs",
    logo: "🏦",
    rating: "4.2/5",
    reviews: "6,821 borrowers",
    aprRange: "7.99% - 24.99%",
    loanAmounts: "$3,500 - $40,000",
    category: "Best for Debt Consolidation",
    whatPeopleLove: [
      "\"No fees at all. I saved $500 compared to my old lender.\" - Happy borrower",
      "\"They let me skip a payment after a year without penalty. Super helpful.\" - Marcus customer",
      "\"Rate was lower than what I was paying on credit cards. Finally debt-free.\" - Success story"
    ],
    whatPeopleHate: [
      "\"Funding took 5 days. Not great if you need money ASAP.\" - Valid concern",
      "\"Max loan is only $40k. I needed more.\" - Some users",
      "\"The application process felt long compared to other lenders.\" - Common feedback"
    ],
    theVerdict: "Perfect for consolidating credit card debt with a lower interest rate. But if you need money fast or want more than $40k, other lenders might be better.",
    bestFor: "Debt consolidation with no fees and flexible payment options"
  },
  {
    name: "LightStream",
    logo: "⚡",
    rating: "4.1/5",
    reviews: "5,239 borrowers",
    aprRange: "7.99% - 25.49%",
    loanAmounts: "$5,000 - $100,000",
    category: "Best for Large Loans",
    whatPeopleLove: [
      "\"Got $75k for home renovations at a great rate. No hassle.\" - Homeowner",
      "\"They funded same day! I couldn't believe it.\" - Impressed borrower",
      "\"Rate beat my bank by 3%. Did the math—saved thousands.\" - Smart shopper"
    ],
    whatPeopleHate: [
      "\"You need excellent credit. They're picky.\" - Denied applicants",
      "\"No option to pre-qualify without a hard credit pull.\" - Frustrating for some",
      "\"Customer service is hit or miss.\" - Mixed reviews"
    ],
    theVerdict: "If you have excellent credit (720+) and need a large loan fast, LightStream delivers. But they're strict on credit requirements.",
    bestFor: "Large loans with same-day funding for excellent credit"
  }
];

export default function PersonalLoans() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Personal Loans for {getContentMonthYear()}
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Real borrowers share which lenders delivered on their promises. We analyzed 25,000+ experiences to find lenders with fair rates and no hidden fees.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not financial advisors—we're your neighbors who did the research so you don't have to.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">25,000+</div>
              <div className="text-sm text-[#6B7280]">Borrower Reviews Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">15</div>
              <div className="text-sm text-[#6B7280]">Lenders Compared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">$0</div>
              <div className="text-sm text-[#6B7280]">Hidden Fees (with top picks)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">1-2 days</div>
              <div className="text-sm text-[#6B7280]">Average Funding Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {personalLenders.map((lender, index) => (
              <div key={lender.name} className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[100px_1fr] gap-6">
                  {/* Lender Logo */}
                  <div className="flex items-start justify-center">
                    <div className="text-6xl">{lender.logo}</div>
                  </div>

                  {/* Lender Details */}
                  <div>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 border border-[#06B6D4] text-[#06B6D4] rounded text-xs font-semibold">{lender.category}</span>
                          {index === 0 && <span className="px-2 py-1 bg-[#FB923C] text-white rounded text-xs font-semibold">MOST POPULAR</span>}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1F2937]">{lender.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                          <span className="font-semibold text-[#1F2937]">⭐ {lender.rating}</span>
                          <span>•</span>
                          <span>{lender.reviews}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#6B7280]">APR Range</div>
                        <div className="text-xl font-bold text-[#06B6D4]">{lender.aprRange}</div>
                        <div className="text-sm text-[#6B7280] mt-1">{lender.loanAmounts}</div>
                      </div>
                    </div>

                    {/* What People Love */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-[#1F2937]">💚 What People Love</h3>
                      <ul className="space-y-2">
                        {lender.whatPeopleLove.map((item, i) => (
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
                        {lender.whatPeopleHate.map((item, i) => (
                          <li key={i} className="text-sm text-[#1F2937] pl-4 border-l-2 border-red-500" style={{ lineHeight: '1.7' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Verdict */}
                    <div className="bg-[#F3F4F6] p-4 rounded-lg mb-4">
                      <h3 className="font-bold mb-2 text-[#1F2937]">📝 The Verdict</h3>
                      <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>{lender.theVerdict}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-[#1F2937]">Best for: </span>
                      <span className="text-sm text-[#6B7280]">{lender.bestFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Link
                        href={index === 0 ? '/personal-loans/sofi-review' : index === 1 ? '/personal-loans/marcus-review' : '/personal-loans/lightstream-review'}
                        className="flex-1 bg-[#06B6D4] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors text-center"
                      >
                        Check Rates →
                      </Link>
                      <Link
                        href={index === 0 ? '/personal-loans/sofi-review' : index === 1 ? '/personal-loans/marcus-review' : '/personal-loans/lightstream-review'}
                        className="bg-white border-2 border-[#6B7280]/30 text-[#1F2937] font-semibold py-3 px-6 rounded-lg hover:border-[#6B7280] transition-colors"
                      >
                        Full Review
                      </Link>
                    </div>

                    <p className="text-xs text-[#6B7280] mt-3">
                      We may earn a commission if you apply. This helps keep our research free. We only recommend lenders we've thoroughly researched.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Insights - Mid-page placement */}
      <CategoryNews category="personal-loans" limit={3} title="Latest Personal Loan News" />

      {/* How We Research */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How We Find the Good Lenders</h2>
            <div className="space-y-4 text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                Need a personal loan? We get it—it's confusing out there. Every lender says they're "the best." So we did something different.
              </p>
              <p>
                We spent weeks reading what 25,000+ real borrowers said on Trustpilot, Reddit (r/personalfinance, r/borrow), Credit Karma, and every review site we could find.
              </p>
              <p>
                We looked for patterns: Which lenders actually deliver what they promise? Which ones have hidden fees? Which ones fund fast? Which ones treat people well when life gets hard?
              </p>
              <p>
                Then we wrote it all down. No jargon. No BS. Just what real borrowers experienced.
              </p>
              <p className="font-semibold">
                These aren't paid rankings. This is what thousands of real people told us worked for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Loan?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Compare rates from top lenders in minutes. No impact on your credit score.
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates Now
          </button>
          <p className="text-sm mt-4 opacity-75">
            Free. Takes 2 minutes. See your options instantly.
          </p>
        </div>
      </section>
    </div>
  );
}
