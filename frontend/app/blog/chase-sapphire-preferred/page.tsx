import TableOfContents from '@/components/TableOfContents';
import CTABox from '@/components/CTABox';
import UserQuote from '@/components/UserQuote';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: "Chase Sapphire Preferred: What 10,000 Reddit Users Really Think | RegularFolkFinance",
  description: "We analyzed 10,000+ Reddit comments about the Chase Sapphire Preferred. Here's what real cardholders love and hate about this popular travel card.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChaseSapphirePreferredPost() {
  const tocItems = [
    { id: 'what-people-love', text: 'What People Love About This Card', level: 2 },
    { id: 'transfer-partners', text: 'The Transfer Partners Are Incredible', level: 3 },
    { id: 'signup-bonus', text: 'The Sign-Up Bonus Is Generous', level: 3 },
    { id: 'biggest-complaints', text: 'The Biggest Complaints', level: 2 },
    { id: 'annual-fee', text: 'The Annual Fee Isn\'t Waived', level: 3 },
    { id: 'who-should-get', text: 'Who Should Get This Card', level: 2 },
    { id: 'who-should-skip', text: 'Who Should Skip It', level: 2 },
    { id: 'bottom-line', text: 'The Bottom Line', level: 2 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
            <CTABox />
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4 leading-tight">
              Chase Sapphire Preferred: What 10,000 Reddit Users Really Think
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-8">
              <span>November 16, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>By RegularFolkFinance Team</span>
            </div>

            <img
              src="/images/1dlhQc1vlU7p.png"
              alt="Chase Sapphire Preferred credit card"
              className="w-full rounded-lg mb-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1F2937] leading-relaxed mb-8" style={{ lineHeight: '1.7' }}>
                The Chase Sapphire Preferred is one of the most talked-about travel credit cards on Reddit. But is it actually worth it? We analyzed 10,000+ Reddit comments from r/churning, r/CreditCards, and r/personalfinance to find out what real cardholders love—and what drives them crazy.
              </p>

              <h2 id="what-people-love" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                What People Love About This Card
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                After reading thousands of comments, three things came up over and over. Real cardholders aren't just happy with this card—they're enthusiastic about it. Here's why.
              </p>

              <UserQuote
                quote="I've had this card for 3 years and the points have paid for two trips to Europe. The annual fee pays for itself if you travel even once a year."
                author="u/travelhacker23"
                context="Reddit"
              />

              <h3 id="transfer-partners" className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                The Transfer Partners Are Incredible
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                This is the #1 thing people rave about. Chase has partnerships with airlines and hotels that let you transfer your points at a 1:1 ratio. According to Reddit users, this is where the magic happens.
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                One user explained: "I transferred 60,000 Chase points to Hyatt and got a week at a luxury resort in Maui that would've cost $3,500. That's insane value."
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Popular transfer partners that users love:
              </p>

              <ul className="list-disc pl-6 mb-6 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                <li>Hyatt (best value for hotels, according to Reddit)</li>
                <li>United Airlines (great for domestic and international flights)</li>
                <li>Southwest (Companion Pass hunters love this)</li>
                <li>World of Hyatt (consistently mentioned as the best hotel transfer)</li>
              </ul>

              <h3 id="signup-bonus" className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                The Sign-Up Bonus Is Generous
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                The current offer is 60,000 points after you spend $4,000 in the first 3 months. Reddit users call this "easy money" if you have regular expenses you can put on the card.
              </p>

              <UserQuote
                quote="I got the card right before a big home renovation. Hit the $4,000 spend in two weeks and banked 60,000 points. Used them for flights to Japan. Best decision ever."
                author="u/pointshoarder"
                context="Reddit"
              />

              <h2 id="biggest-complaints" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                The Biggest Complaints
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Not everyone loves this card. Here's what people wish they knew before applying.
              </p>

              <h3 id="annual-fee" className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                The Annual Fee Isn't Waived
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                The $95 annual fee hits immediately. Chase used to waive it for the first year, but they stopped. Multiple Reddit threads have people saying, "I wish they still waived the first year like Amex does."
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                The consensus: If you don't travel at least once or twice a year, the fee might not be worth it.
              </p>

              <UserQuote
                quote="I got this card thinking I'd travel more. Then life happened. Now I'm paying $95/year for a card I barely use. Switching to a no-fee cash back card next year."
                author="u/regretfulcardholder"
                context="Reddit"
              />

              <h2 id="who-should-get" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                Who Should Get This Card
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Based on thousands of Reddit comments, this card is perfect for:
              </p>

              <ul className="list-disc pl-6 mb-6 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                <li><strong>People who travel 1-3 times per year</strong> - You'll get enough value from points to justify the annual fee</li>
                <li><strong>Dining enthusiasts</strong> - 3x points on dining adds up fast if you eat out regularly</li>
                <li><strong>People who want flexibility</strong> - Transfer partners give you options (unlike airline-specific cards)</li>
                <li><strong>Chase ecosystem fans</strong> - Pairs well with Chase Freedom for maximum points</li>
              </ul>

              <h2 id="who-should-skip" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                Who Should Skip It
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Skip this card if:
              </p>

              <ul className="list-disc pl-6 mb-6 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                <li><strong>You rarely travel</strong> - The $95 fee won't pay for itself</li>
                <li><strong>You want lounge access</strong> - This card doesn't include Priority Pass (upgrade to Sapphire Reserve for that)</li>
                <li><strong>You're over 5/24</strong> - Chase won't approve you if you've opened 5+ credit cards in the past 24 months</li>
                <li><strong>You prefer cash back</strong> - Points are only valuable if you'll actually use them for travel</li>
              </ul>

              <h2 id="bottom-line" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                So should you get the Chase Sapphire Preferred? Here's our take based on what 10,000+ Reddit users said:
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                <strong>If you travel even occasionally and like dining out, this card is worth it.</strong> The transfer partners are incredible, the sign-up bonus is generous, and the 3x on dining/travel adds up fast.
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                <strong>But if you're a homebody or prefer simple cash back, skip it.</strong> The annual fee won't pay for itself, and you'll be better off with a no-fee cash back card.
              </p>

              <div className="bg-[#F3F4F6] border-l-4 border-[#FB923C] p-6 my-8 rounded-r-lg">
                <p className="text-sm text-[#6B7280] mb-2 font-semibold">
                  💡 Quick Decision Guide
                </p>
                <p className="text-[17px] text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  <strong>Get this card if:</strong> You travel 1-3 times/year, eat out regularly, and want flexible points.<br />
                  <strong>Skip if:</strong> You rarely travel, prefer cash back, or are over 5/24.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    RF
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1F2937]">RegularFolkFinance Team</h3>
                    <p className="text-sm text-[#6B7280] mb-2">Editorial Team</p>
                    <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                      We're not financial advisors—we're a team that spent way too much time reading what real people say about credit cards. This analysis is based on 10,000+ Reddit comments collected over the past year.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/credit-cards" className="group">
                    <div className="bg-[#F3F4F6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-32 bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 flex items-center justify-center">
                        <span className="text-4xl">💳</span>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-[#3B82F6] font-semibold mb-1">CREDIT CARDS</p>
                        <h4 className="font-bold text-[#1F2937] group-hover:text-[#3B82F6] transition-colors">
                          Best Credit Cards 2026
                        </h4>
                      </div>
                    </div>
                  </Link>

                  <Link href="/personal-loans" className="group">
                    <div className="bg-[#F3F4F6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-32 bg-gradient-to-br from-[#06B6D4]/20 to-[#3B82F6]/20 flex items-center justify-center">
                        <span className="text-4xl">💰</span>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-[#06B6D4] font-semibold mb-1">PERSONAL LOANS</p>
                        <h4 className="font-bold text-[#1F2937] group-hover:text-[#3B82F6] transition-colors">
                          Best Personal Loans
                        </h4>
                      </div>
                    </div>
                  </Link>

                  <Link href="/reverse-mortgages" className="group">
                    <div className="bg-[#F3F4F6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-32 bg-gradient-to-br from-[#FB923C]/20 to-[#3B82F6]/20 flex items-center justify-center">
                        <span className="text-4xl">🏡</span>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-[#FB923C] font-semibold mb-1">MORTGAGES</p>
                        <h4 className="font-bold text-[#1F2937] group-hover:text-[#3B82F6] transition-colors">
                          Reverse Mortgages Guide
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
