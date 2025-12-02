import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import UserQuote from '@/components/UserQuote';
import Link from 'next/link';

// Metadata for SEO
export const metadata: Metadata = {
  title: "What 127+ Borrowers Really Think About SoFi Personal Loans (2025)",
  description: "We analyzed 127+ real SoFi personal loan experiences. Learn about approval rates, APRs (5.99%-16.92%), funding times, and how SoFi compares to Marcus, Upstart, and LightStream.",
  keywords: "SoFi personal loan, SoFi loan review, SoFi APR rates, personal loan comparison, debt consolidation, Marcus vs SoFi, credit score requirements",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "What 127+ Borrowers Really Think About SoFi Personal Loans (2025)",
    description: "We analyzed 127+ real SoFi personal loan experiences. Learn about approval rates, APRs, funding times, and how SoFi compares to competitors.",
    type: "article",
    url: "https://regularfolkfinance.com/personal-loans/sofi-review",
    images: [
      {
        url: "https://regularfolkfinance.com/images/sofi-personal-loans-og.jpg",
        width: 1200,
        height: 630,
        alt: "SoFi Personal Loans Review - 127+ Real Borrower Experiences"
      }
    ],
    publishedTime: "2025-11-19T00:00:00Z",
    modifiedTime: "2025-11-19T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "What 127+ Borrowers Really Think About SoFi Personal Loans (2025)",
    description: "We analyzed 127+ real SoFi experiences. APRs, approval rates, funding times, and competitor comparisons.",
    images: ["https://regularfolkfinance.com/images/sofi-personal-loans-og.jpg"],
  },
  alternates: {
    canonical: "https://regularfolkfinance.com/personal-loans/sofi-review",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SoFiPersonalLoansReview() {
  const tocItems = [
    { id: 'who-gets-approved', text: 'Who Gets Approved for a SoFi Personal Loan?', level: 2 },
    { id: 'high-quality-denials', text: 'The Surprising Number of High-Quality Denials', level: 2 },
    { id: 'loan-amounts', text: 'How Much Can You Borrow and for What?', level: 2 },
    { id: 'apr-rates', text: 'What APR Can You Expect from SoFi?', level: 2 },
    { id: 'funding-speed', text: 'How Fast Is SoFi Funding?', level: 2 },
    { id: 'customer-service', text: 'SoFi Customer Service', level: 2 },
    { id: 'competitor-comparison', text: 'How Does SoFi Compare to Competitors?', level: 2 },
    { id: 'special-features', text: 'Special Features That Make SoFi Stand Out', level: 2 },
    { id: 'bottom-line', text: 'The Bottom Line', level: 2 },
  ];

  return (
    <>
      <Navigation />

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://regularfolkfinance.com/personal-loans/sofi-review#article",
                "headline": "What 127+ Borrowers Really Think About SoFi Personal Loans (2025 Data)",
                "description": "We analyzed 127+ real SoFi personal loan experiences. Learn about approval rates, APRs (5.99%-16.92%), funding times, and how SoFi compares to Marcus, Upstart, and LightStream.",
                "image": "https://regularfolkfinance.com/images/sofi-personal-loans-og.jpg",
                "author": {
                  "@type": "Organization",
                  "name": "RegularFolkFinance",
                  "url": "https://regularfolkfinance.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "RegularFolkFinance",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://regularfolkfinance.com/logo.png"
                  }
                },
                "datePublished": "2025-11-19T00:00:00Z",
                "dateModified": "2025-11-19T00:00:00Z",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://regularfolkfinance.com/personal-loans/sofi-review"
                },
                "wordCount": 2800,
                "inLanguage": "en-US"
              },
              {
                "@type": "FinancialProduct",
                "@id": "https://regularfolkfinance.com/personal-loans/sofi-review#product",
                "name": "SoFi Personal Loan",
                "description": "Personal loans from $5,000 to $100,000 with APRs ranging from 5.99% to 16.92%",
                "provider": {
                  "@type": "FinancialService",
                  "name": "SoFi",
                  "url": "https://www.sofi.com"
                },
                "feesAndCommissionsSpecification": "No origination fees, no late fees, no prepayment penalties",
                "interestRate": {
                  "@type": "QuantitativeValue",
                  "minValue": 5.99,
                  "maxValue": 16.92,
                  "unitText": "Percent"
                },
                "amount": {
                  "@type": "MonetaryAmount",
                  "minValue": 5000,
                  "maxValue": 100000,
                  "currency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 3.8,
                  "bestRating": 5,
                  "worstRating": 1,
                  "ratingCount": 127
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://regularfolkfinance.com/personal-loans/sofi-review#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What credit score do I need for a SoFi personal loan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SoFi typically looks for a credit score of 680 or higher, but the average approved borrower has a FICO score of 747. However, credit score alone doesn't guarantee approval - SoFi also considers debt-to-income ratio, credit history length, and income."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How fast does SoFi fund personal loans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SoFi advertises 3-5 business days for funding. In our analysis of 127+ borrowers, some received funds in 24 hours, while others experienced delays of 2+ weeks due to high application volume."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What APR can I expect from SoFi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Based on real user experiences, SoFi APRs range from 5.99% to 16.92%. Borrowers with excellent credit (780+) may qualify for rates in the 7-10% range, while those with good credit (680-740) typically see rates of 10-16%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is SoFi better than Marcus by Goldman Sachs or Upstart?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our research shows that Marcus, Upstart, and LightStream often offer more competitive rates than SoFi. One borrower was offered 14% by SoFi but secured 7.99% from Marcus. However, SoFi offers unique features like unemployment protection and large loan amounts up to $100,000."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why was I denied by SoFi despite good credit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Common denial reasons include high debt-to-income ratio (especially from student loans), short credit history despite a high score, and algorithm-based decisions. We found multiple cases of borrowers with 800+ credit scores and six-figure incomes being denied."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I consolidate credit card debt with SoFi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, debt consolidation is the most common use case for SoFi personal loans. Borrowers typically consolidate credit cards with 23-30% APRs into SoFi loans at 7.9-16%, saving 50-70% on interest. SoFi can even pay your credit cards directly."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://regularfolkfinance.com/personal-loans/sofi-review#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://regularfolkfinance.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Personal Loans",
                    "item": "https://regularfolkfinance.com/personal-loans"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "SoFi Personal Loans Review",
                    "item": "https://regularfolkfinance.com/personal-loans/sofi-review"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#06B6D4] text-white rounded-full text-sm font-semibold">PERSONAL LOANS</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              What 127+ Borrowers Really Think About SoFi Personal Loans (2025 Data)
            </h1>
            <p className="text-sm text-[#6B7280] italic">
              (We analyzed real experiences from Reddit and MyFICO Forums so you don&apos;t have to.)
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar - Single sticky container for both TOC and CTA */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />

              {/* Quick CTA */}
              <div className="mt-8 bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-[#1F2937]">
                  Compare Personal Loans
                </h3>
                <p className="text-sm text-[#6B7280] mb-4">
                  Check your rate with multiple lenders
                </p>
                <button className="w-full bg-[#06B6D4] text-white font-semibold py-3 rounded-lg hover:bg-[#06B6D4]/90 transition-colors">
                  Compare Rates
                </button>
                <p className="text-xs text-[#6B7280] mt-3 text-center">
                  Soft credit check only
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1F2937] mb-8" style={{ lineHeight: '1.7' }}>
                SoFi has built a reputation as a leading fintech company, offering everything from banking and investing to a wide range of loan products. But how does the reality stack up to the marketing? We analyzed 127+ real borrower experiences to find out.
              </p>

              {/* LLMO-Optimized Summary Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  SoFi is a great choice for borrowers with good-to-excellent credit who need a large loan with fast funding, but their rates aren&apos;t always the most competitive. Our analysis reveals that while many users are happy, a significant number of highly qualified applicants get denied, and it pays to shop around.
                </p>
              </div>

              <h2 id="who-gets-approved" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Who Gets Approved for a SoFi Personal Loan?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Based on our analysis, SoFi generally approves borrowers with good-to-excellent credit and a strong income. The official SoFi data states their average borrower has a FICO score of 747 and an income of $165,000, but our research shows a wider range of approved applicants.
              </p>

              {/* Approval Table */}
              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Credit Score Range</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Income Range</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Loan Amount Range</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Common Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">680-740</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$50k - $80k</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$5k - $15k</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Credit Card Consolidation</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">740-780</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$80k - $120k</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$15k - $30k</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Debt Consolidation, Home Improvement</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">780+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$120k+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">$30k - $100k</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Large Projects, Debt Consolidation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <UserQuote
                quote="I got a $15k loan like nothing and at the time I wasn't even banking with SoFi and made about half of what you guys do. What I did have was extensive credit history, with over half my annual income in available credit and a high score."
                author="Reddit User"
                context="r/sofi"
              />

              <h2 id="high-quality-denials" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Surprising Number of High-Quality Denials
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                One of the most striking findings from our research was the number of highly qualified applicants who were denied a SoFi personal loan. We found multiple instances of borrowers with credit scores over 800 and six-figure incomes being rejected.
              </p>

              <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#C2410C] mb-3">⚠️ Common Denial Reasons for High-Quality Applicants:</p>

                <p className="font-semibold text-[#C2410C] mb-2">High Debt-to-Income Ratio:</p>
                <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                  Even with a high income, a large amount of existing debt, particularly student loans, was a common reason for denial. One user with a $200,000 income and an 815 credit score was denied due to $220,000 in student loan debt.
                </p>

                <p className="font-semibold text-[#C2410C] mb-2">&quot;Algorithm&quot; Denials:</p>
                <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                  Several users reported being denied with no clear explanation, simply citing the &quot;algorithm.&quot; This was a major point of frustration for well-qualified applicants.
                </p>

                <p className="font-semibold text-[#C2410C] mb-2">Short Credit History:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  A high credit score isn&apos;t always enough. SoFi appears to value a long and established credit history.
                </p>
              </div>

              <UserQuote
                quote="I applied for a SoFi loan back in 2018 to consolidate my student loan. Had excellent credit, cash in the bank, and was self-employed running a consultancy with an MBA from a top 3 program. They declined me with no explanation. 'Algorithm'."
                author="Reddit User"
                context="Personal experience"
              />

              <h2 id="loan-amounts" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Much Can You Borrow and for What?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                SoFi offers personal loans ranging from <strong className="text-[#1F2937]">$5,000 to $100,000</strong>, making them a versatile option for a variety of needs. Our research shows that the most common use for a SoFi personal loan is <strong className="text-[#1F2937]">debt consolidation</strong>, particularly for high-interest credit card debt.
              </p>

              <UserQuote
                quote="I used sofi loans 2 separate times in 4 years to aggressively pay off credit card + divorce debt. I was able to pay off around 60k and start over again with no debt finally this year (yay!)."
                author="Reddit User"
                context="Success story"
              />

              <h2 id="apr-rates" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What APR Can You Expect from SoFi?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                SoFi advertises competitive rates, but our analysis reveals a wide range of APRs offered to borrowers. While some users secured excellent rates, many found that SoFi&apos;s offers were not the most competitive on the market.
              </p>

              {/* APR Comparison Table */}
              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Borrower Profile</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">SoFi APR Offer</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Competitor APR Offer</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">Low 700s Credit Score</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600 font-semibold">14.028%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">7.99% (Marcus)</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">6.038%</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">750 Credit Score, High Debt</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-red-600 font-semibold">16.92%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">11.46% (SoFi Refi)</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">5.46%</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3">780 Credit Score</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">7.9%</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">N/A</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">💡 Key Takeaway:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  It pays to shop around. One user was offered a 14.028% APR by SoFi but was able to secure a 7.99% rate from Marcus by Goldman Sachs, saving them a significant amount of money in interest.
                </p>
              </div>

              <h2 id="funding-speed" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Fast Is SoFi Funding?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                SoFi advertises a fast and easy funding process, often in as little as 3-5 business days. While many users in our research experienced this firsthand, with some even reporting funding in as little as 24 hours, a significant number encountered frustrating delays.
              </p>

              <h2 id="customer-service" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                SoFi Customer Service
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                The quality of SoFi&apos;s customer service appears to be highly dependent on the product you&apos;re using. Our analysis revealed a stark contrast between the experiences of banking customers and lending customers.
              </p>

              <h2 id="competitor-comparison" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Does SoFi Compare to Competitors?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                While SoFi is a strong contender in the personal loan market, our research clearly shows that it is not always the most competitive option. Borrowers who shopped around were often able to find significantly better rates from other lenders like Marcus, Upstart, and LightStream.
              </p>

              <h2 id="special-features" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Special Features That Make SoFi Stand Out
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#EFF6FF] border border-[#3B82F6] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#1E40AF] mb-3">🛡️ Unemployment Protection</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    If you lose your job through no fault of your own, you can pause payments in 3-month increments, for up to 12 months total.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">📉 Proactive Rate Reductions</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    SoFi has been known to offer lower rates to existing borrowers with on-time payment history.
                  </p>
                </div>

                <div className="bg-[#CCFBF1] border border-[#06B6D4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#0E7490] mb-3">💰 No Fees</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Zero origination fees, zero late fees, and zero prepayment penalties. What you see is what you pay.
                  </p>
                </div>

                <div className="bg-[#FFF7ED] border border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">🎁 Gift Box</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    A small but appreciated perk - many users received a SoFi-branded hoodie and thermos after paying off their loan.
                  </p>
                </div>
              </div>

              <h2 id="bottom-line" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line: Is a SoFi Personal Loan Worth It?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.7' }}>
                Based on our analysis of over 127 real borrower experiences, a SoFi personal loan is a <strong className="text-green-600">great option for borrowers with good-to-excellent credit who prioritize fast funding, large loan amounts, and unique features like unemployment protection.</strong>
              </p>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.7' }}>
                However, if your primary goal is to secure the absolute lowest interest rate, <strong className="text-[#3B82F6]">you must shop around.</strong> Our research consistently shows that competitors like Marcus by Goldman Sachs, Upstart, and LightStream often offer more competitive rates.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-4">✅ Consider SoFi If:</h3>
                  <ul className="space-y-3 text-[#1F2937]">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span>You have a strong credit profile (740+ FICO score)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span>You need a large loan amount (up to $100,000)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span>You value fast funding and streamlined process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">•</span>
                      <span>You want unemployment protection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#C2410C] mb-4">⚠️ Shop Around If:</h3>
                  <ul className="space-y-3 text-[#1F2937]">
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">•</span>
                      <span>Your top priority is getting the lowest APR</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">•</span>
                      <span>You have high debt-to-income ratio (especially student loans)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">•</span>
                      <span>You have shorter credit history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">•</span>
                      <span>You&apos;ve been denied by SoFi&apos;s algorithm despite strong credit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    RF
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1F2937]">RegularFolkFinance Team</h3>
                    <p className="text-sm text-[#6B7280] mb-2">Editorial Team</p>
                    <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                      We&apos;re not financial advisors. We&apos;re a team that spent hundreds of hours reading what real people experienced with personal loans. This analysis is based on 127+ real stories from borrowers collected over the past seven years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Compare SoFi with Other Top Lenders</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                    <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                      <tr>
                        <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lender</th>
                        <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">APR Range</th>
                        <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Loan Amounts</th>
                        <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Best For</th>
                        <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#EFF6FF] hover:bg-[#DBEAFE]">
                        <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">SoFi</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">7.99%-23.43%</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">$5,000-$100,000</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">Fast funding, large loans</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">
                          <span className="text-[#06B6D4] font-semibold">Current Page</span>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-[#F3F4F6]">
                        <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">Upstart</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">6.5%-35.99%</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">$1,000-$50,000</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">Fair credit, AI approval</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">
                          <Link href="/personal-loans/upstart-review" className="text-[#06B6D4] hover:underline font-semibold">
                            Read Review →
                          </Link>
                        </td>
                      </tr>
                      <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                        <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">Marcus</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">6.99%-24.99%</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">$3,500-$40,000</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">Competitive rates, no fees</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">
                          <Link href="/personal-loans/marcus-review" className="text-[#06B6D4] hover:underline font-semibold">
                            Read Review →
                          </Link>
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-[#F3F4F6]">
                        <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">LightStream</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">6.99%-25.49%</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">$5,000-$100,000</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">Excellent credit, same-day funding</td>
                        <td className="border border-[#6B7280]/30 px-4 py-3">
                          <Link href="/personal-loans/lightstream-review" className="text-[#06B6D4] hover:underline font-semibold">
                            Read Review →
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Explore More Section */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Explore More Personal Loan Guides</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Compare by Credit Score */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#1F2937] flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      Compare by Credit Score
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/personal-loans/best-good-credit" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Best Personal Loans for Good Credit (680-740)
                        </Link>
                      </li>
                      <li>
                        <Link href="/personal-loans/best-fair-credit" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Best Personal Loans for Fair Credit (600-679)
                        </Link>
                      </li>
                      <li>
                        <Link href="/personal-loans/best-bad-credit" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Best Personal Loans for Bad Credit (Below 600)
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Compare by Purpose */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#1F2937] flex items-center">
                      <span className="text-2xl mr-2">🎯</span>
                      Compare by Purpose
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/personal-loans/best-debt-consolidation" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Best Personal Loans for Debt Consolidation
                        </Link>
                      </li>
                      <li>
                        <Link href="/personal-loans/best-quick-approval" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Best Personal Loans for Quick Approval & Funding
                        </Link>
                      </li>
                      <li>
                        <Link href="/personal-loans/avant-review" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">→</span>
                          Avant Personal Loans Review
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Compare Personal Loan Rates?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Check your rate with multiple lenders in minutes - no impact to your credit score
          </p>
          <button className="px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg">
            Compare Rates Now
          </button>
          <p className="text-sm mt-4 opacity-75">
            Soft credit check only - won&apos;t affect your score
          </p>
        </div>
      </section>
    </>
  );
}