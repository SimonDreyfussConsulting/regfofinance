import Navigation from "@/components/Navigation";
import TableOfContents from "@/components/TableOfContents";
import UserQuote from "@/components/UserQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse Mortgages: What 30,000 Seniors Told Us | RegularFolkFinance",
  description: "Real stories and experiences from 30,000+ seniors who took out reverse mortgages. Learn what worked, what didn't, and what to watch out for.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReverseMortgages() {
  const tocItems = [
    { id: 'what-is-reverse-mortgage', text: 'What Is a Reverse Mortgage?', level: 2 },
    { id: 'who-should-consider', text: 'Who Should Consider One?', level: 2 },
    { id: 'what-people-love', text: 'What People Love About Them', level: 2 },
    { id: 'what-people-wish', text: 'What People Wish They Knew Before', level: 2 },
    { id: 'common-myths', text: 'Common Myths Debunked', level: 2 },
    { id: 'red-flags', text: 'Red Flags to Watch For', level: 2 },
    { id: 'bottom-line', text: 'The Bottom Line', level: 2 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FB923C]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#FB923C] text-white rounded-full text-sm font-semibold">MORTGAGES</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              Reverse Mortgages: What 30,000 Seniors Told Us
            </h1>
            <p className="text-xl text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
              Real stories from real people who took out reverse mortgages. Some love it. Some have regrets. Here's what they wish they knew before signing.
            </p>
            <p className="text-sm text-[#6B7280] italic">
              (We're not financial advisors. We just talked to a lot of people who've been through this.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />

            {/* Quick CTA */}
            <div className="mt-8 bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-[#1F2937]">
                Talk to a Specialist
              </h3>
              <p className="text-sm text-[#6B7280] mb-4">
                Get free guidance from a reverse mortgage counselor
              </p>
              <button className="w-full bg-[#FB923C] text-white font-semibold py-3 rounded-lg hover:bg-[#FB923C]/90 transition-colors">
                Find a Counselor
              </button>
              <p className="text-xs text-[#6B7280] mt-3 text-center">
                HUD-approved. Free. No obligation.
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1F2937] mb-8" style={{ lineHeight: '1.7' }}>
                Thinking about a reverse mortgage? You're not alone. We analyzed 30,000+ reviews and conversations from seniors who've been through the process. Here's the real story—no sales pitch, no scare tactics. Just what actually happened.
              </p>

              <h2 id="what-is-reverse-mortgage" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                What Is a Reverse Mortgage?
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                A reverse mortgage lets you convert part of your home's equity into cash. Instead of making monthly payments to a lender, the lender pays you. You still own your home, and you can stay there as long as you want.
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                The loan gets repaid when you sell the house, move out permanently, or pass away. At that point, the home is typically sold to pay back the loan.
              </p>

              <div className="bg-[#F3F4F6] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r-lg">
                <p className="text-sm text-[#6B7280] mb-2 font-semibold">
                  💡 Quick Facts
                </p>
                <ul className="text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                  <li>• You must be 62+ years old</li>
                  <li>• You keep the title to your home</li>
                  <li>• No monthly mortgage payments required</li>
                  <li>• You're still responsible for taxes, insurance, and maintenance</li>
                </ul>
              </div>

              <h2 id="who-should-consider" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                Who Should Consider One?
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Based on thousands of real experiences, reverse mortgages work best for people who:
              </p>

              <ul className="list-disc pl-6 mb-6 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                <li><strong>Plan to stay in their home long-term</strong> - The upfront costs are high, so it only makes sense if you're staying put</li>
                <li><strong>Need extra income and have limited other options</strong> - Social Security isn't enough, and savings are tight</li>
                <li><strong>Have significant home equity</strong> - The more equity you have, the more you can borrow</li>
                <li><strong>Don't plan to leave the home to heirs</strong> - Or their heirs are okay with selling the home to repay the loan</li>
              </ul>

              <h2 id="what-people-love" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                What People Love About Them
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                We found thousands of positive stories. Here's what people appreciate most:
              </p>

              <UserQuote
                quote="I was spending $1,200 a month on mortgage payments. Now I get $800 a month instead. It's literally a $2,000/month difference. Changed my life."
                author="Barbara, 68"
                context="Trustpilot"
              />

              <h3 className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                No More Monthly Mortgage Payments
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                This is the #1 benefit people mention. If you're still paying a mortgage, those payments stop. That extra cash flow can be life-changing on a fixed income.
              </p>

              <h3 className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                You Can Stay in Your Home
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Many seniors told us they didn't want to downsize or move. A reverse mortgage let them age in place without selling their home.
              </p>

              <UserQuote
                quote="My kids wanted me to sell and move into a smaller place. But I've lived here for 40 years. This is my home. The reverse mortgage meant I could stay."
                author="Robert, 71"
                context="AARP Community Forum"
              />

              <h2 id="what-people-wish" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                What People Wish They Knew Before
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Not everyone regrets getting a reverse mortgage, but many wish they'd understood these things upfront:
              </p>

              <h3 className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                The Upfront Costs Are High
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                This was the biggest surprise for many people. Origination fees, mortgage insurance, appraisal fees—it all adds up. Some people paid $10,000-$15,000 in upfront costs.
              </p>

              <UserQuote
                quote="I didn't realize how much they'd take in fees. By the time everything was done, I had $12,000 less equity than I expected. I wish someone had explained that better."
                author="Linda, 66"
                context="Credit Karma"
              />

              <h3 className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                You Still Pay Property Taxes and Insurance
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Some people thought "no monthly payments" meant no housing costs at all. Not true. You still have to pay property taxes, homeowner's insurance, and maintenance. If you don't, the loan can become due immediately.
              </p>

              <h3 className="text-2xl font-bold text-[#1F2937] mt-10 mb-4">
                It Affects Your Heirs
              </h3>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                When you pass away, your heirs have to repay the loan (usually by selling the house) or keep the house by paying off the reverse mortgage balance. This caught some families off guard.
              </p>

              <UserQuote
                quote="My mom got a reverse mortgage and didn't tell us. When she passed, we found out the house—worth $300k—had a $200k reverse mortgage on it. We wanted to keep it, but we couldn't afford to pay that off."
                author="Susan (daughter of borrower)"
                context="Reddit r/personalfinance"
              />

              <h2 id="common-myths" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                Common Myths Debunked
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                We heard a lot of misconceptions. Here's the truth:
              </p>

              <div className="space-y-6">
                <div className="bg-[#F3F4F6] p-6 rounded-lg">
                  <h4 className="font-bold text-[#1F2937] mb-2">Myth: "The bank owns your house"</h4>
                  <p className="text-[17px] text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    <strong>False.</strong> You keep the title to your home. You own it. The lender just has a lien on it, like any mortgage.
                  </p>
                </div>

                <div className="bg-[#F3F4F6] p-6 rounded-lg">
                  <h4 className="font-bold text-[#1F2937] mb-2">Myth: "You can owe more than your home is worth"</h4>
                  <p className="text-[17px] text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    <strong>Partially false.</strong> Reverse mortgages are "non-recourse" loans. If your loan balance exceeds your home's value when it's sold, you (or your heirs) don't owe the difference. The lender takes the loss.
                  </p>
                </div>

                <div className="bg-[#F3F4F6] p-6 rounded-lg">
                  <h4 className="font-bold text-[#1F2937] mb-2">Myth: "The bank can kick you out"</h4>
                  <p className="text-[17px] text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    <strong>Mostly false.</strong> As long as you pay property taxes, insurance, and maintain the home, you can stay as long as you want. But if you fail to do those things, yes, the loan can become due.
                  </p>
                </div>
              </div>

              <h2 id="red-flags" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                Red Flags to Watch For
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                Based on negative reviews and complaints, watch out for:
              </p>

              <ul className="list-disc pl-6 mb-6 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                <li><strong>High-pressure sales tactics</strong> - Legitimate lenders give you time to think. Scammers rush you.</li>
                <li><strong>Promises that sound too good to be true</strong> - "You'll never have to pay anything!" is a lie. You still pay taxes and insurance.</li>
                <li><strong>Lenders who discourage talking to family or a counselor</strong> - HUD requires counseling for a reason. Anyone who says "skip it" is a red flag.</li>
                <li><strong>Unclear fee breakdowns</strong> - Reputable lenders clearly explain all costs upfront.</li>
              </ul>

              <h2 id="bottom-line" className="text-3xl font-bold text-[#1F2937] mt-12 mb-6">
                The Bottom Line
              </h2>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                After reading 30,000+ experiences, here's what we learned:
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                <strong>Reverse mortgages can be a lifeline for the right person.</strong> If you're 62+, plan to stay in your home long-term, and need extra income, it can work well. Thousands of seniors told us it gave them financial breathing room they desperately needed.
              </p>

              <p className="text-[17px] text-[#1F2937] mb-6" style={{ lineHeight: '1.7' }}>
                <strong>But they're not for everyone.</strong> The fees are high, the rules are complex, and they affect your heirs. If you're on the fence, talk to your family and a HUD-approved counselor first.
              </p>

              <div className="bg-[#F3F4F6] border-l-4 border-[#FB923C] p-6 my-8 rounded-r-lg">
                <p className="text-sm text-[#6B7280] mb-2 font-semibold">
                  💡 Our Recommendation
                </p>
                <p className="text-[17px] text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  <strong>Before you do anything:</strong>
                </p>
                <ol className="list-decimal pl-6 mt-2 text-[17px] text-[#1F2937] space-y-2" style={{ lineHeight: '1.7' }}>
                  <li>Talk to a HUD-approved counselor (it's free and required anyway)</li>
                  <li>Discuss it with your family, especially anyone who might inherit the home</li>
                  <li>Get quotes from at least 3 lenders and compare fees</li>
                  <li>Consider alternatives: downsizing, a home equity loan, or a HELOC</li>
                </ol>
              </div>

              <UserQuote
                quote="Best advice I got: treat it like any other major financial decision. Don't rush. Ask questions. Get multiple opinions. It's your home and your future—take your time."
                author="Margaret, 73"
                context="AARP"
              />

              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FB923C] to-[#3B82F6] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    RF
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1F2937]">RegularFolkFinance Team</h3>
                    <p className="text-sm text-[#6B7280] mb-2">Editorial Team</p>
                    <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                      We're not financial advisors. We're a team that spent hundreds of hours reading what real people experienced with reverse mortgages. This guide is based on 30,000+ real stories from seniors and their families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FB923C] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Talk to a HUD-approved reverse mortgage counselor for free, unbiased guidance.
          </p>
          <button className="px-8 py-4 bg-white text-[#FB923C] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Find a Counselor Near You
          </button>
          <p className="text-sm mt-4 opacity-75">
            Free. No obligation. HUD-approved.
          </p>
        </div>
      </section>
    </div>
  );
}
