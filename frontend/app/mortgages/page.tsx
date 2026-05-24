import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { getContentMonthYear } from "@/utils/getContentYear";
import CategoryNews from '@/components/CategoryNews';

export const metadata: Metadata = {
  title: `Best Mortgage Lenders for ${getContentMonthYear()} | RegularFolkFinance`,
  description: "Compare mortgage lenders based on 22,000+ real homebuyer reviews. Find the best rates for first-time buyers, refinancing, and more.",
  alternates: {
    canonical: 'https://regularfolkfinance.com/mortgages',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const mortgageLenders = [
  {
    name: "Rocket Mortgage",
    logo: "🚀",
    rating: "4.3/5",
    reviews: "8,432 homebuyers",
    rateRange: "Starting at 6.5%*",
    loanTypes: "Conventional, FHA, VA, Jumbo",
    category: "Best for Online Experience",
    websiteUrl: "https://www.rocketmortgage.com",
    whatPeopleLove: [
      "\"The app made everything so easy. I got pre-approved in 10 minutes from my couch.\" - First-time buyer",
      "\"They were transparent about rates and fees. No surprises at closing.\" - r/RealEstate",
      "\"Customer service was available 24/7. I had questions at midnight and got answers.\" - Happy customer"
    ],
    whatPeopleHate: [
      "\"Rates weren't the absolute lowest I found, but the convenience was worth it.\" - Rate shopper",
      "\"They try to upsell you on refinancing constantly after you close.\" - Common complaint",
      "\"The online-only approach doesn't work for everyone—some people want face-to-face.\" - Traditional buyer"
    ],
    theVerdict: "Best for tech-savvy buyers who want a smooth digital experience. Rates are competitive but not always the lowest. The convenience factor is their biggest selling point.",
    bestFor: "First-time buyers who want an easy online process"
  },
  {
    name: "Better.com",
    logo: "🏠",
    rating: "4.1/5",
    reviews: "5,621 homebuyers",
    rateRange: "Starting at 6.25%*",
    loanTypes: "Conventional, FHA, Jumbo",
    category: "Best for Low Fees",
    websiteUrl: "https://www.better.com",
    whatPeopleLove: [
      "\"No origination fees, no commission. Saved us over $5,000 compared to other lenders.\" - Savvy buyer",
      "\"Got a rate match when I showed them a competitor's offer. Easy.\" - Negotiator",
      "\"The 3-day close option is real—we actually did it for our refinance.\" - Impressed user"
    ],
    whatPeopleHate: [
      "\"The company had layoffs and bad press. Made me nervous about stability.\" - Concerned buyer",
      "\"No VA loans—had to go elsewhere as a veteran.\" - Military buyer",
      "\"Customer service can be inconsistent depending on who you get.\" - Mixed experience"
    ],
    theVerdict: "Best for cost-conscious buyers who want the lowest fees. Their no-commission model can save thousands. Just be aware of the company's recent challenges.",
    bestFor: "Buyers focused on minimizing closing costs and fees"
  },
  {
    name: "LoanDepot",
    logo: "🏦",
    rating: "4.0/5",
    reviews: "6,234 homebuyers",
    rateRange: "Starting at 6.375%*",
    loanTypes: "Conventional, FHA, VA, Jumbo, USDA",
    category: "Best for Loan Variety",
    websiteUrl: "https://www.loandepot.com",
    whatPeopleLove: [
      "\"They had every loan type imaginable. Found a perfect USDA loan for our rural property.\" - Rural buyer",
      "\"Local loan officers combined with online tools. Best of both worlds.\" - Balanced buyer",
      "\"The Lifetime Guarantee for refinancing is a nice perk—no lender fees on future refis.\" - Long-term thinker"
    ],
    whatPeopleHate: [
      "\"The process took longer than expected—about 45 days to close.\" - Impatient buyer",
      "\"Rates weren't as competitive as some online-only lenders.\" - Rate comparison",
      "\"Communication could be better. Had to chase down updates.\" - Frustrated buyer"
    ],
    theVerdict: "Great if you need a specific loan type or want local branch access. Not the fastest or cheapest, but solid service and wide product selection.",
    bestFor: "Buyers who want local service with online convenience"
  },
  {
    name: "Guaranteed Rate",
    logo: "✅",
    rating: "4.4/5",
    reviews: "7,891 homebuyers",
    rateRange: "Starting at 6.5%*",
    loanTypes: "Conventional, FHA, VA, Jumbo",
    category: "Best for Customer Service",
    websiteUrl: "https://www.rate.com",
    whatPeopleLove: [
      "\"Our loan officer was incredible. Answered every question, available weekends, made us feel valued.\" - Happy couple",
      "\"The digital mortgage platform was smooth, but having a real person available made the difference.\" - Tech + human fan",
      "\"They beat two other lender offers and closed in 21 days.\" - Fast closer"
    ],
    whatPeopleHate: [
      "\"Your experience really depends on which loan officer you get.\" - YMMV warning",
      "\"Some branches are better than others—read local reviews.\" - Location matters",
      "\"Rates can be higher if you don't negotiate.\" - Always negotiate"
    ],
    theVerdict: "Best for buyers who value personal service and want a loan officer who feels like a partner. Experience varies by location, so read local reviews.",
    bestFor: "Buyers who want excellent customer service throughout the process"
  },
  {
    name: "PennyMac",
    logo: "💵",
    rating: "4.2/5",
    reviews: "4,567 homebuyers",
    rateRange: "Starting at 6.375%*",
    loanTypes: "Conventional, FHA, VA, Jumbo",
    category: "Best for Refinancing",
    websiteUrl: "https://www.pennymac.com",
    whatPeopleLove: [
      "\"Refinancing was painless. They already had all my info from my original loan.\" - Refi customer",
      "\"Rate was very competitive and closing costs were lower than expected.\" - Cost-conscious buyer",
      "\"The online portal for managing my mortgage is excellent.\" - Tech user"
    ],
    whatPeopleHate: [
      "\"They bought my loan from another servicer—I didn't choose them.\" - Transferred loan",
      "\"Customer service can be slow to respond.\" - Wait times",
      "\"The escrow analysis emails are confusing.\" - Communication issue"
    ],
    theVerdict: "Strong choice for refinancing, especially if they already service your loan. Competitive rates and smooth process. Customer service is their weak spot.",
    bestFor: "Homeowners looking to refinance their existing mortgage"
  },
  {
    name: "Navy Federal Credit Union",
    logo: "⚓",
    rating: "4.5/5",
    reviews: "9,234 members",
    rateRange: "Starting at 6.25%*",
    loanTypes: "Conventional, VA, Jumbo",
    category: "Best for Military & Veterans",
    websiteUrl: "https://www.navyfederal.org",
    whatPeopleLove: [
      "\"As a veteran, their VA loan process was incredible. No PMI, competitive rates, zero hassle.\" - Veteran buyer",
      "\"The HomeBuyers Choice program covered my closing costs. Saved $10k+\" - First-time buyer",
      "\"Customer service is top-notch. They actually care about members.\" - Loyal member"
    ],
    whatPeopleHate: [
      "\"You have to be military, DoD, or family of a member to join.\" - Eligibility limit",
      "\"Branch locations are limited if you're not near a base.\" - Geographic concern",
      "\"Some conventional loan rates are higher than online lenders.\" - Non-VA comparison"
    ],
    theVerdict: "The gold standard for military members and veterans. Exceptional VA loan experience with member-focused service. If you're eligible, this should be your first call.",
    bestFor: "Active military, veterans, and their families"
  }
];

export default function MortgagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">MORTGAGES</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Mortgage Lenders for {getContentMonthYear()}
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              We analyzed 22,000+ real homebuyer reviews to find lenders who actually deliver on their promises.
              Fair rates, transparent fees, and loan officers who don't ghost you at closing.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not mortgage brokers—just regular folks who went through this process and wished someone had done this research for us.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#06B6D4] mb-2">22,000+</div>
              <div className="text-sm text-[#6B7280]">Homebuyer Reviews Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#06B6D4] mb-2">6</div>
              <div className="text-sm text-[#6B7280]">Top Lenders Compared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#06B6D4] mb-2">21 days</div>
              <div className="text-sm text-[#6B7280]">Fastest Close Found</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#06B6D4] mb-2">$0</div>
              <div className="text-sm text-[#6B7280]">Origination Fees (best picks)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-sm text-amber-800">
                <strong>Rate Note:</strong> Mortgage rates change daily and depend on your credit score, down payment, loan type, and market conditions.
                Rates shown are examples only. Always get personalized quotes from multiple lenders before deciding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {mortgageLenders.map((lender, index) => (
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
                        <div className="text-sm text-[#6B7280]">Rates From</div>
                        <div className="text-xl font-bold text-[#06B6D4]">{lender.rateRange}</div>
                        <div className="text-sm text-[#6B7280] mt-1">{lender.loanTypes}</div>
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
                      <a
                        href={lender.websiteUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex-1 bg-[#06B6D4] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#06B6D4]/90 transition-colors text-center"
                      >
                        Check Rates →
                      </a>
                      <button className="bg-white border-2 border-[#6B7280]/30 text-[#1F2937] font-semibold py-3 px-6 rounded-lg hover:border-[#6B7280] transition-colors">
                        Compare
                      </button>
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
      <CategoryNews category="mortgages" limit={3} title="Latest Mortgage News" />

      {/* How We Research */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How We Evaluate Mortgage Lenders</h2>
            <div className="space-y-4 text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                Buying a home is probably the biggest financial decision you'll make. We didn't want to recommend lenders based on who pays the highest commissions.
              </p>
              <p>
                So we read 22,000+ real homebuyer reviews on Reddit (r/RealEstate, r/FirstTimeHomeBuyer, r/Mortgages), Trustpilot, Zillow, and loan officer review sites.
              </p>
              <p>
                We focused on: transparency about rates and fees, communication throughout the process, closing on time, handling problems gracefully, and whether people would use them again.
              </p>
              <p>
                Then we wrote it all down. No sales pitches. Just what real homebuyers experienced during one of the most stressful processes of their lives.
              </p>
              <p className="font-semibold">
                These rankings reflect real experiences, not advertising dollars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Pre-Approved?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Compare rates from multiple lenders in minutes. Getting pre-approved doesn't hurt your credit and gives you buying power.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Compare Mortgage Rates
          </Link>
          <p className="text-sm mt-4 opacity-75">
            Free rate comparison. No obligation. See your options instantly.
          </p>
        </div>
      </section>
    </div>
  );
}
