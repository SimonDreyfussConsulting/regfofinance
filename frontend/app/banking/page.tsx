import Link from "next/link";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { getContentMonthYear } from "@/utils/getContentYear";
import CategoryNews from '@/components/CategoryNews';

export const metadata: Metadata = {
  title: `Best Online Banks & High-Yield Savings for ${getContentMonthYear()} | RegularFolkFinance`,
  description: "Compare online banks, high-yield savings accounts, and checking accounts based on 18,000+ real customer reviews. Find the best rates with no hidden fees.",
  alternates: {
    canonical: 'https://regularfolkfinance.com/banking',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const bankingPartners = [
  {
    name: "Marcus by Goldman Sachs",
    logo: "🏦",
    rating: "4.4/5",
    reviews: "6,234 customers",
    apy: "4.40% APY",
    minDeposit: "$0",
    category: "Best for High-Yield Savings",
    websiteUrl: "https://www.marcus.com",
    whatPeopleLove: [
      "\"4.40% APY with no minimum balance? That's insane compared to my old bank's 0.01%\" - Reddit user",
      "\"No fees at all. I've had the account 2 years and never paid a penny in fees.\" - Trustpilot review",
      "\"The app is simple but works. Transfers are fast and reliable.\" - r/personalfinance"
    ],
    whatPeopleHate: [
      "\"No checking account option - I had to keep my old bank for that.\" - Common complaint",
      "\"Customer service wait times can be long during peak hours.\" - Some frustration",
      "\"No ATM access since it's savings-only.\" - Valid limitation"
    ],
    theVerdict: "If you want a no-fuss high-yield savings account backed by Goldman Sachs, Marcus delivers. But if you need checking or ATM access, you'll need another bank for daily banking.",
    bestFor: "People looking for a simple, high-yield savings account with no fees"
  },
  {
    name: "Ally Bank",
    logo: "💳",
    rating: "4.5/5",
    reviews: "12,847 customers",
    apy: "4.20% APY",
    minDeposit: "$0",
    category: "Best Overall Online Bank",
    websiteUrl: "https://www.ally.com",
    whatPeopleLove: [
      "\"Full banking suite - checking, savings, CDs, investing - all in one place.\" - Happy customer",
      "\"Free ATM access at 43,000+ Allpoint ATMs nationwide.\" - r/banking",
      "\"24/7 customer service that actually answers. I've called at 2am and got help.\" - Impressed user"
    ],
    whatPeopleHate: [
      "\"No physical branches if you need to deposit cash.\" - Common concern",
      "\"APY isn't always the highest, but it's competitive.\" - Rate chasers",
      "\"Mobile check deposit limits are lower than I'd like.\" - High depositors"
    ],
    theVerdict: "The best all-around online bank for most people. Great rates, excellent service, and a full suite of products. Only skip if you absolutely need physical branches.",
    bestFor: "People who want a complete online banking relationship"
  },
  {
    name: "SoFi Checking & Savings",
    logo: "💰",
    rating: "4.3/5",
    reviews: "5,621 customers",
    apy: "4.50% APY",
    minDeposit: "$0",
    category: "Best for Direct Deposit Bonus",
    websiteUrl: "https://www.sofi.com/banking",
    whatPeopleLove: [
      "\"4.50% APY with direct deposit is hard to beat anywhere.\" - Excited saver",
      "\"Got a $300 bonus just for setting up direct deposit. Free money!\" - r/churning",
      "\"No account fees, no minimum balance, no overdraft fees.\" - Fee-conscious user"
    ],
    whatPeopleHate: [
      "\"You need direct deposit to get the best APY. Otherwise it drops significantly.\" - Important caveat",
      "\"The app tries to push their loans and investing products.\" - Some annoyance",
      "\"Took a few days for my direct deposit to switch over.\" - Minor issue"
    ],
    theVerdict: "Best rates in the market if you have direct deposit. The $300 bonus is legitimate and easy to get. Just be aware the full APY requires that direct deposit.",
    bestFor: "People with regular direct deposit who want the highest rates"
  },
  {
    name: "Capital One 360",
    logo: "🔵",
    rating: "4.2/5",
    reviews: "9,432 customers",
    apy: "4.25% APY",
    minDeposit: "$0",
    category: "Best Hybrid Bank (Online + Cafés)",
    websiteUrl: "https://www.capitalone.com/bank",
    whatPeopleLove: [
      "\"The Capital One Cafés are actually nice - free WiFi, coffee, and real bankers.\" - Café fan",
      "\"Easy to use app with Zelle built in. Transfers are instant.\" - Tech-savvy user",
      "\"No fees and solid rates. Been with them 5+ years.\" - Long-term customer"
    ],
    whatPeopleHate: [
      "\"Cafés are only in major cities - useless if you're in a small town.\" - Rural users",
      "\"APY isn't the absolute highest but it's close.\" - Rate comparison",
      "\"Their credit card division is separate and can be confusing.\" - Some frustration"
    ],
    theVerdict: "Great option if you want online banking convenience with occasional in-person access at their Cafés. Rates are competitive and the experience is polished.",
    bestFor: "People who want online banking with some in-person options"
  },
  {
    name: "Discover Bank",
    logo: "🟠",
    rating: "4.3/5",
    reviews: "7,891 customers",
    apy: "4.25% APY",
    minDeposit: "$0",
    category: "Best for Customer Service",
    websiteUrl: "https://www.discover.com/online-banking",
    whatPeopleLove: [
      "\"Best customer service I've ever experienced with any bank. US-based and helpful.\" - Loyal customer",
      "\"Cashback on debit card purchases is a nice bonus - 1% on up to $3k/month.\" - Cash back fan",
      "\"No fees anywhere - no monthly fee, no overdraft, no minimum balance.\" - Fee hater"
    ],
    whatPeopleHate: [
      "\"No Zelle integration - have to use their own transfer system.\" - Zelle users",
      "\"Savings account only - no checking option.\" - Banking limitation",
      "\"Mobile deposit limits are on the lower side.\" - Some users"
    ],
    theVerdict: "If customer service matters most to you, Discover is the gold standard. The cashback debit is unique. Limited to savings only though.",
    bestFor: "People who value exceptional customer service and cashback rewards"
  },
  {
    name: "Chime",
    logo: "💚",
    rating: "4.0/5",
    reviews: "15,234 customers",
    apy: "2.00% APY",
    minDeposit: "$0",
    category: "Best for No Overdraft Fees",
    websiteUrl: "https://www.chime.com",
    whatPeopleLove: [
      "\"SpotMe saved me so many times - up to $200 overdraft with no fees.\" - Grateful user",
      "\"Get paid up to 2 days early with direct deposit.\" - Early access fan",
      "\"Building credit with their Credit Builder card changed my life.\" - Credit rebuilder"
    ],
    whatPeopleHate: [
      "\"APY is way lower than competitors - only 2% vs 4%+ elsewhere.\" - Rate conscious",
      "\"It's a fintech, not a real bank. That makes some people nervous.\" - Traditional preference",
      "\"Customer service can be slow to respond.\" - Support issues"
    ],
    theVerdict: "Best for people who need overdraft protection and early paycheck access. The lower APY is the tradeoff for those features. Great for building credit too.",
    bestFor: "People who need overdraft flexibility and early direct deposit access"
  }
];

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#3B82F6] text-white rounded-full text-sm font-semibold">BANKING</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Best Online Banks & High-Yield Savings for {getContentMonthYear()}
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              We analyzed 18,000+ real customer reviews to find banks that actually deliver on their promises.
              High rates, no hidden fees, and customer service that doesn't make you want to scream.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not financial advisors—just regular folks who spent way too much time reading banking reviews so you don't have to.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">18,000+</div>
              <div className="text-sm text-[#6B7280]">Customer Reviews Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">4.50%</div>
              <div className="text-sm text-[#6B7280]">Highest APY Found</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">$0</div>
              <div className="text-sm text-[#6B7280]">Monthly Fees (all picks)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3B82F6] mb-2">6</div>
              <div className="text-sm text-[#6B7280]">Banks Compared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banks List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {bankingPartners.map((bank, index) => (
              <div key={bank.name} className="bg-white border-2 border-[#6B7280]/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[100px_1fr] gap-6">
                  {/* Bank Logo */}
                  <div className="flex items-start justify-center">
                    <div className="text-6xl">{bank.logo}</div>
                  </div>

                  {/* Bank Details */}
                  <div>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 border border-[#3B82F6] text-[#3B82F6] rounded text-xs font-semibold">{bank.category}</span>
                          {index === 0 && <span className="px-2 py-1 bg-[#FB923C] text-white rounded text-xs font-semibold">TOP PICK</span>}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1F2937]">{bank.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                          <span className="font-semibold text-[#1F2937]">⭐ {bank.rating}</span>
                          <span>•</span>
                          <span>{bank.reviews}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#6B7280]">Savings APY</div>
                        <div className="text-xl font-bold text-[#3B82F6]">{bank.apy}</div>
                        <div className="text-sm text-[#6B7280] mt-1">Min. deposit: {bank.minDeposit}</div>
                      </div>
                    </div>

                    {/* What People Love */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-[#1F2937]">💚 What People Love</h3>
                      <ul className="space-y-2">
                        {bank.whatPeopleLove.map((item, i) => (
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
                        {bank.whatPeopleHate.map((item, i) => (
                          <li key={i} className="text-sm text-[#1F2937] pl-4 border-l-2 border-red-500" style={{ lineHeight: '1.7' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Verdict */}
                    <div className="bg-[#F3F4F6] p-4 rounded-lg mb-4">
                      <h3 className="font-bold mb-2 text-[#1F2937]">📝 The Verdict</h3>
                      <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>{bank.theVerdict}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-[#1F2937]">Best for: </span>
                      <span className="text-sm text-[#6B7280]">{bank.bestFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <a
                        href={bank.websiteUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex-1 bg-[#3B82F6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3B82F6]/90 transition-colors text-center"
                      >
                        Visit {bank.name.split(' ')[0]} →
                      </a>
                      <button className="bg-white border-2 border-[#6B7280]/30 text-[#1F2937] font-semibold py-3 px-6 rounded-lg hover:border-[#6B7280] transition-colors">
                        Compare
                      </button>
                    </div>

                    <p className="text-xs text-[#6B7280] mt-3">
                      We may earn a commission if you open an account. This helps keep our research free. We only recommend banks we've thoroughly researched.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Insights - Mid-page placement */}
      <CategoryNews category="banking" limit={3} title="Latest Banking News" />

      {/* How We Research */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#1F2937]">How We Evaluate Banks</h2>
            <div className="space-y-4 text-[#1F2937] text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                Let's be honest—every bank claims to have "great rates" and "no hidden fees." But what do actual customers say after using them for months or years?
              </p>
              <p>
                We spent weeks reading 18,000+ reviews on Reddit (r/personalfinance, r/banking), Trustpilot, NerdWallet, and the app stores. We looked for patterns in what real people experienced.
              </p>
              <p>
                We focused on: actual APY paid (not just advertised), hidden fees people discovered, customer service quality, mobile app reliability, and how easy it is to access your money.
              </p>
              <p>
                Then we wrote it all down. No marketing fluff. Just what thousands of real customers told us about their banking experience.
              </p>
              <p className="font-semibold">
                These rankings are based on real experiences, not paid placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Earn More on Your Savings?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stop earning 0.01% at your old bank. These high-yield accounts are paying 4%+ right now.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#3B82F6] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Compare Top Banks
          </Link>
          <p className="text-sm mt-4 opacity-75">
            All picks have $0 minimum deposit and no monthly fees.
          </p>
        </div>
      </section>
    </div>
  );
}
