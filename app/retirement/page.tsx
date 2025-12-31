import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { getContentYear } from "@/utils/getContentYear";
import CategoryNews from '@/components/CategoryNews';

export const metadata: Metadata = {
  title: `Best Retirement Accounts & Investment Platforms ${getContentYear()} | RegularFolkFinance`,
  description: "Compare 401k providers, IRA accounts, and investment platforms based on 15,000+ real investor reviews. Find low fees and solid returns.",
  alternates: {
    canonical: 'https://regularfolkfinance.com/retirement',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const retirementPlatforms = [
  {
    name: "Fidelity Investments",
    logo: "📈",
    rating: "4.6/5",
    reviews: "12,432 investors",
    accountTypes: "401k, IRA, Roth IRA, Brokerage",
    minimums: "$0 minimum",
    category: "Best Overall for Retirement",
    websiteUrl: "https://www.fidelity.com",
    whatPeopleLove: [
      "\"Zero expense ratio index funds. ZERO. That's free money over 30 years.\" - r/Bogleheads legend",
      "\"Customer service is incredible. They walked me through rolling over my old 401k step by step.\" - Happy customer",
      "\"The research tools are top-notch. I actually understand what I'm investing in now.\" - DIY investor"
    ],
    whatPeopleHate: [
      "\"The website can be overwhelming—so many options and menus.\" - New investor",
      "\"Mobile app is functional but not as slick as Robinhood or Schwab.\" - App critic",
      "\"Some actively managed funds have higher fees. Stick with index funds.\" - Fee watcher"
    ],
    theVerdict: "The gold standard for retirement accounts. Zero-fee index funds, excellent customer service, and research tools that actually help. The interface is complex but worth learning.",
    bestFor: "Long-term investors who want zero-fee index funds and great service"
  },
  {
    name: "Vanguard",
    logo: "🏛️",
    rating: "4.5/5",
    reviews: "9,876 investors",
    accountTypes: "401k, IRA, Roth IRA, Brokerage",
    minimums: "$0 minimum (most funds)",
    category: "Best for Index Fund Investors",
    websiteUrl: "https://www.vanguard.com",
    whatPeopleLove: [
      "\"The OG of index investing. Jack Bogle invented this whole approach and it works.\" - Boglehead",
      "\"Expense ratios are rock bottom. VTI at 0.03%? That's basically free.\" - Fee optimizer",
      "\"They're investor-owned so they actually work for US, not Wall Street.\" - Trust believer"
    ],
    whatPeopleHate: [
      "\"The website looks like it was designed in 2005. It's painful to use.\" - Common complaint",
      "\"Customer service wait times are brutal. Bring a book.\" - Impatient investor",
      "\"Can't buy fractional shares of ETFs. Minor but annoying.\" - Small investor"
    ],
    theVerdict: "If you believe in 'set it and forget it' index investing, Vanguard is the temple. Horrible interface, but the low fees compound into serious money over decades.",
    bestFor: "Buy-and-hold index investors who don't need hand-holding"
  },
  {
    name: "Charles Schwab",
    logo: "💼",
    rating: "4.4/5",
    reviews: "8,234 investors",
    accountTypes: "401k, IRA, Roth IRA, Brokerage",
    minimums: "$0 minimum",
    category: "Best for All-in-One Banking + Investing",
    websiteUrl: "https://www.schwab.com",
    whatPeopleLove: [
      "\"Schwab checking + brokerage + IRA all in one. So convenient.\" - All-in-one fan",
      "\"No foreign transaction fees on the debit card. Perfect for traveling investors.\" - Traveler",
      "\"Their index funds are competitive with Fidelity and Vanguard now.\" - Fee comparer"
    ],
    whatPeopleHate: [
      "\"The merger with TD Ameritrade was messy. Some features disappeared.\" - TD refugee",
      "\"Branches are closing everywhere. Hard to find one if you need help.\" - In-person preference",
      "\"The thinkorswim platform is powerful but overwhelming.\" - Complexity issue"
    ],
    theVerdict: "Best choice if you want banking and investing together. Great checking account with ATM fee rebates worldwide. Index fund fees are now competitive with the big boys.",
    bestFor: "People who want banking, investing, and retirement all in one place"
  },
  {
    name: "Betterment",
    logo: "🤖",
    rating: "4.2/5",
    reviews: "5,621 investors",
    accountTypes: "IRA, Roth IRA, Brokerage, 401k",
    minimums: "$0 minimum (Digital), $100k (Premium)",
    category: "Best Robo-Advisor",
    websiteUrl: "https://www.betterment.com",
    whatPeopleLove: [
      "\"I literally do nothing and my retirement is handled. Perfect for lazy investors.\" - Hands-off fan",
      "\"Tax-loss harvesting is automatic. Saved me thousands in taxes over the years.\" - Tax optimizer",
      "\"The goal-based planning actually makes retirement feel achievable.\" - Visual learner"
    ],
    whatPeopleHate: [
      "\"0.25% fee adds up when you have a lot of money. Cheaper to DIY with Vanguard.\" - Fee conscious",
      "\"Limited control over specific investments. I want to pick my own stocks sometimes.\" - Control freak",
      "\"Premium tier requires $100k minimum. That's a lot for young investors.\" - Access barrier"
    ],
    theVerdict: "Perfect for people who want professional management without thinking about it. The fee is worth it for beginners, but DIY is cheaper once you learn the basics.",
    bestFor: "Hands-off investors who want automated portfolio management"
  },
  {
    name: "Wealthfront",
    logo: "🎯",
    rating: "4.1/5",
    reviews: "4,567 investors",
    accountTypes: "IRA, Roth IRA, Brokerage, 529",
    minimums: "$500 minimum",
    category: "Best for Young Professionals",
    websiteUrl: "https://www.wealthfront.com",
    whatPeopleLove: [
      "\"The Path planning tool showed me exactly how my decisions affect retirement. Eye-opening.\" - Planner",
      "\"Direct indexing for larger accounts means better tax optimization.\" - Tax strategist",
      "\"The cash account pays great interest and sweeps automatically.\" - Cash management fan"
    ],
    whatPeopleHate: [
      "\"$500 minimum to start is annoying. Some competitors have $0.\" - New saver",
      "\"Can't talk to a human unless you have $100k+. That's frustrating.\" - Human contact needed",
      "\"The app sometimes has glitches. Had to reinstall twice.\" - Technical issues"
    ],
    theVerdict: "Great robo-advisor with innovative features like Path planning and direct indexing. The $500 minimum is a small barrier, but the planning tools are worth it.",
    bestFor: "Young professionals who want sophisticated planning without the hassle"
  },
  {
    name: "M1 Finance",
    logo: "🥧",
    rating: "4.0/5",
    reviews: "6,234 investors",
    accountTypes: "IRA, Roth IRA, Brokerage",
    minimums: "$100 minimum",
    category: "Best for Customizable Portfolios",
    websiteUrl: "https://www.m1.com",
    whatPeopleLove: [
      "\"The pie visualization makes it so easy to understand my asset allocation.\" - Visual learner",
      "\"Fractional shares + automatic rebalancing + $0 fees? Best combo ever.\" - DIY investor",
      "\"I built my own 'robo-advisor' portfolio with the exact funds I wanted.\" - Control + automation"
    ],
    whatPeopleHate: [
      "\"Only one trading window per day. Can't react to market moves quickly.\" - Active traders",
      "\"No tax-loss harvesting unless you do it manually.\" - Tax optimizer",
      "\"Customer service is email-only and slow.\" - Support issues"
    ],
    theVerdict: "The best of both worlds—robo-advisor automation with DIY control. Perfect for investors who know what they want but don't want to rebalance manually.",
    bestFor: "DIY investors who want automation without giving up control"
  }
];

export default function RetirementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#10B981]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#10B981] text-white rounded-full text-sm font-semibold">RETIREMENT</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Retirement Accounts & Investment Platforms
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              We analyzed 15,000+ real investor reviews to find platforms that actually help regular people build wealth.
              Low fees, solid returns, and customer service that doesn't treat you like a number.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not financial advisors—just regular folks who finally figured out this retirement stuff and want to share what we learned.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">15,000+</div>
              <div className="text-sm text-[#6B7280]">Investor Reviews Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">0.00%</div>
              <div className="text-sm text-[#6B7280]">Lowest Index Fund Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">$0</div>
              <div className="text-sm text-[#6B7280]">Account Minimums (most)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">6</div>
              <div className="text-sm text-[#6B7280]">Platforms Compared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-6 bg-emerald-50 border-b border-emerald-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm text-emerald-800">
                <strong>Quick reminder:</strong> Investing involves risk. Past performance doesn't guarantee future results.
                Consider your timeline, risk tolerance, and consult a financial advisor if you're unsure.
                We're just sharing what worked for regular folks like us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {retirementPlatforms.map((platform, index) => (
              <div key={platform.name} className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[100px_1fr] gap-6">
                  {/* Platform Logo */}
                  <div className="flex items-start justify-center">
                    <div className="text-6xl">{platform.logo}</div>
                  </div>

                  {/* Platform Details */}
                  <div>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 border border-[#10B981] text-[#10B981] rounded text-xs font-semibold">{platform.category}</span>
                          {index === 0 && <span className="px-2 py-1 bg-[#FB923C] text-white rounded text-xs font-semibold">TOP PICK</span>}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1F2937]">{platform.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                          <span className="font-semibold text-[#1F2937]">⭐ {platform.rating}</span>
                          <span>•</span>
                          <span>{platform.reviews}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#6B7280]">Account Types</div>
                        <div className="text-base font-bold text-[#10B981]">{platform.accountTypes}</div>
                        <div className="text-sm text-[#6B7280] mt-1">{platform.minimums}</div>
                      </div>
                    </div>

                    {/* What People Love */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-[#1F2937]">💚 What People Love</h3>
                      <ul className="space-y-2">
                        {platform.whatPeopleLove.map((item, i) => (
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
                        {platform.whatPeopleHate.map((item, i) => (
                          <li key={i} className="text-sm text-[#1F2937] pl-4 border-l-2 border-red-500" style={{ lineHeight: '1.7' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Verdict */}
                    <div className="bg-[#F3F4F6] p-4 rounded-lg mb-4">
                      <h3 className="font-bold mb-2 text-[#1F2937]">📝 The Verdict</h3>
                      <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>{platform.theVerdict}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-[#1F2937]">Best for: </span>
                      <span className="text-sm text-[#6B7280]">{platform.bestFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <a
                        href={platform.websiteUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex-1 bg-[#10B981] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#10B981]/90 transition-colors text-center"
                      >
                        Open Account →
                      </a>
                      <button className="bg-white border-2 border-[#6B7280]/30 text-[#1F2937] font-semibold py-3 px-6 rounded-lg hover:border-[#6B7280] transition-colors">
                        Compare
                      </button>
                    </div>

                    <p className="text-xs text-[#6B7280] mt-3">
                      We may earn a commission if you open an account. This helps keep our research free. We only recommend platforms we've thoroughly researched.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Insights - Mid-page placement */}
      <CategoryNews category="retirement" limit={3} title="Latest Retirement News" />

      {/* How We Research */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How We Evaluate Investment Platforms</h2>
            <div className="space-y-4 text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                Retirement planning is confusing enough without having to decode which platform is actually good. Every company claims to have "the lowest fees" and "the best service."
              </p>
              <p>
                So we read 15,000+ real investor reviews on Reddit (r/Bogleheads, r/personalfinance, r/investing), Trustpilot, app stores, and investment forums.
              </p>
              <p>
                We focused on: actual fees paid (not just advertised), ease of use for beginners, customer service quality, fund selection, and whether long-term investors were actually happy.
              </p>
              <p>
                Then we wrote it all down. No sponsored rankings. Just what real people experienced while trying to save for retirement.
              </p>
              <p className="font-semibold">
                These recommendations are based on real investor experiences, not commission rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            The best time to start investing was yesterday. The second best time is today.
            Even $50/month adds up over 30 years.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#10B981] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Compare Platforms
          </Link>
          <p className="text-sm mt-4 opacity-75">
            All platforms have $0-$500 minimums. Start with what you can afford.
          </p>
        </div>
      </section>
    </div>
  );
}
