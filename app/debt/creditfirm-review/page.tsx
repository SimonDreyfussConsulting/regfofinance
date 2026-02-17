import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import ArticleByline from '@/components/ArticleByLine';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "CreditFirm.net Review 2026: Credit Repair That's Helped 80,000+ People",
  description: "Is CreditFirm.net legit? We researched their 27-year track record, BBB A+ rating, and how they compare to Lexington Law and other credit repair services.",
  keywords: "CreditFirm.net review, credit repair service, credit report repair, CreditFirm vs Lexington Law, BBB A+ credit repair, fix credit report, credit repair 2026",
  authors: [{ name: "RegularFolkFinance Research Team" }],
  openGraph: {
    title: "CreditFirm.net Review 2026: Credit Repair That's Helped 80,000+ People",
    description: "Is CreditFirm.net legit? We researched their 27-year track record and BBB A+ rating.",
    type: "article",
    url: "https://regularfolkfinance.com/debt/creditfirm-review",
    publishedTime: "2026-02-17T00:00:00Z",
    modifiedTime: "2026-02-17T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreditFirm.net Review 2026: Credit Repair That's Helped 80,000+ People",
    description: "Is CreditFirm.net legit? We researched their 27-year track record.",
  },
  alternates: {
    canonical: "https://regularfolkfinance.com/debt/creditfirm-review",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function CreditFirmReview() {
  const affiliateLink = 'https://www.awin1.com/awclick.php?gid=531789&mid=88625&awinaffid=2683750&linkid=4056354&clickref=creditfirm-review-page';

  const tocItems = [
    { id: 'what-is-creditfirm', text: 'What Is CreditFirm.net?', level: 2 },
    { id: 'how-it-works', text: 'How Credit Repair Works', level: 2 },
    { id: 'what-users-love', text: 'What Users Appreciate', level: 2 },
    { id: 'common-concerns', text: 'Common Concerns', level: 2 },
    { id: 'pricing', text: 'Pricing Comparison', level: 2 },
    { id: 'creditfirm-vs-lexington', text: 'CreditFirm vs Lexington Law', level: 2 },
    { id: 'who-should-use', text: 'Who Should Consider CreditFirm', level: 2 },
    { id: 'verdict', text: 'The Bottom Line', level: 2 },
    { id: 'faq', text: 'FAQ', level: 2 },
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
                "@id": "https://regularfolkfinance.com/debt/creditfirm-review#article",
                "headline": "CreditFirm.net Review 2026: Credit Repair That's Helped 80,000+ People",
                "description": "We researched CreditFirm.net's 27-year track record, BBB A+ rating, and how they compare to credit repair alternatives.",
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
                "datePublished": "2026-02-17T00:00:00Z",
                "dateModified": "2026-02-17T00:00:00Z",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://regularfolkfinance.com/debt/creditfirm-review"
                },
                "wordCount": 2400,
                "inLanguage": "en-US"
              },
              {
                "@type": "FinancialService",
                "@id": "https://regularfolkfinance.com/debt/creditfirm-review#service",
                "name": "CreditFirm.net",
                "description": "Licensed credit repair service that has helped over 80,000 consumers since 1997. BBB A+ rated.",
                "provider": {
                  "@type": "Organization",
                  "name": "CreditFirm.net",
                  "url": "https://creditfirm.net",
                  "foundingDate": "1997"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 8.0,
                  "bestRating": 10,
                  "worstRating": 1,
                  "ratingCount": 50
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://regularfolkfinance.com/debt/creditfirm-review#breadcrumb",
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
                    "name": "Debt",
                    "item": "https://regularfolkfinance.com/debt"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "CreditFirm.net Review",
                    "item": "https://regularfolkfinance.com/debt/creditfirm-review"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Affiliate Disclosure - Sticky */}
      <div className="sticky top-14 md:top-16 z-40 bg-gray-50 border-b border-gray-200 py-2 px-4">
        <p className="text-xs text-center text-gray-600 max-w-4xl mx-auto">
          We may earn a commission when you click links on this page. Our research is always independent.
        </p>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EF4444]/10 to-[#F97316]/10 pt-4 pb-12 md:pb-16">
        <Breadcrumbs customLabels={{ 'creditfirm-review': 'CreditFirm.net Review' }} />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#EF4444] text-white rounded-full text-sm font-semibold">DEBT</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
              CreditFirm.net Review 2026: Credit Repair That&apos;s Helped 80,000+ People
            </h1>
            <p className="text-sm text-[#6B7280] italic mb-4">
              (We researched their 27-year track record so you can decide if professional credit repair is right for you.)
            </p>
            <ArticleByline
              wordCount={2400}
              publishDate="Feb 17, 2026"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 pb-24 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />

              {/* Quick Stats Box */}
              <div className="mt-8 bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-[#1F2937]">
                  CreditFirm.net at a Glance
                </h3>
                <div className="space-y-3 text-sm text-[#1F2937]">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Our Rating:</span>
                    <span className="font-semibold text-green-600">8.0/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Monthly Cost:</span>
                    <span className="font-semibold">Varies by plan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Best For:</span>
                    <span className="font-semibold">Credit report repair</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">BBB Rating:</span>
                    <span className="font-semibold text-green-600">A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Consumers Helped:</span>
                    <span className="font-semibold">80,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Since:</span>
                    <span className="font-semibold">1997</span>
                  </div>
                </div>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full bg-[#EF4444] text-white font-semibold py-3 rounded-lg hover:bg-[#EF4444]/90 transition-colors mt-6 text-center"
                >
                  Check Your Options
                </a>
                <p className="text-xs text-[#6B7280] mt-3 text-center">
                  Licensed credit services organization
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            <div className="prose prose-lg max-w-none">

              {/* Lead Paragraph */}
              <p className="text-xl text-[#1F2937] mb-8" style={{ lineHeight: '1.7' }}>
                If your credit report has errors, outdated information, or negative items that are dragging down your score, professional credit repair might be worth considering. CreditFirm.net is one of the longest-running credit repair services in the country — operating since 1997 with a BBB A+ rating and over 80,000 consumers helped across all 50 states. We researched their approach, track record, and how they compare to alternatives.
              </p>

              {/* HERO CTA - Mobile visible */}
              <div className="my-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 text-center">
                <p className="text-gray-700 mb-3 font-medium">Want to explore credit repair options?</p>
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Learn About Credit Repair
                </a>
              </div>

              {/* Quick Answer Box */}
              <div className="bg-[#EFF6FF] border-l-4 border-[#3B82F6] p-6 mb-8 rounded-r">
                <p className="text-lg font-semibold text-[#1E40AF] mb-2">Quick Answer:</p>
                <p className="text-[#1F2937] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  CreditFirm.net is a licensed credit services organization that has been helping consumers dispute inaccurate, unverifiable, and outdated items on their credit reports since 1997. With a BBB A+ rating and over 80,000 consumers served, they have one of the longest track records in the industry. <strong className="text-[#EF4444]">Important: Credit repair takes time, and results vary. No company can guarantee specific score improvements.</strong>
                </p>
              </div>

              {/* SECTION: What Is CreditFirm */}
              <h2 id="what-is-creditfirm" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What Is CreditFirm.net?
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                CreditFirm.net is a licensed credit services organization that specializes in credit report repair. They work on your behalf to dispute inaccurate, unverifiable, and outdated negative items with the three major credit bureaus (Equifax, Experian, and TransUnion).
              </p>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                Founded in 1997, they&apos;re one of the oldest credit repair companies still operating. Their longevity in an industry known for fly-by-night operators is notable. They hold a BBB A+ rating and have served consumers in all 50 states.
              </p>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                It&apos;s important to understand what credit repair is and isn&apos;t: legitimate credit repair involves disputing items on your credit report that are inaccurate, unverifiable, or past the reporting period. It does NOT involve removing accurate negative information or creating a &quot;new&quot; credit identity.
              </p>

              {/* SECTION: How It Works */}
              <h2 id="how-it-works" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                How Credit Repair Works
              </h2>

              <p className="text-[17px] text-[#1F2937] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                CreditFirm.net follows a structured process to address negative items on your credit report:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-[#F3F4F6] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#EF4444] mb-2">1</p>
                  <p className="font-semibold text-[#1F2937] mb-2">Credit Analysis</p>
                  <p className="text-sm text-[#6B7280]">They review your credit reports from all three bureaus to identify disputable negative items</p>
                </div>
                <div className="bg-[#F3F4F6] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#F97316] mb-2">2</p>
                  <p className="font-semibold text-[#1F2937] mb-2">Dispute Process</p>
                  <p className="text-sm text-[#6B7280]">They file disputes with credit bureaus on your behalf, challenging inaccurate or unverifiable items</p>
                </div>
                <div className="bg-[#F3F4F6] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">3</p>
                  <p className="font-semibold text-[#1F2937] mb-2">Ongoing Monitoring</p>
                  <p className="text-sm text-[#6B7280]">They track results, follow up on disputes, and continue working until the process is complete</p>
                </div>
              </div>

              <div className="bg-[#DBEAFE] border-l-4 border-[#3B82F6] p-6 my-8 rounded-r">
                <p className="font-bold text-[#1E40AF] text-lg mb-2">Important Disclosure:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  Under the Fair Credit Reporting Act (FCRA), you have the right to dispute inaccurate items on your credit report yourself at no cost. Credit repair companies like CreditFirm.net handle this process for you, which can save time and effort — but you should know that DIY credit repair is always an option.
                </p>
              </div>

              {/* SECTION: What Users Love */}
              <h2 id="what-users-love" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                What Users Appreciate About CreditFirm.net
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#EFF6FF] border border-[#3B82F6] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#1E40AF] mb-3">27-Year Track Record</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Operating since 1997, CreditFirm.net has one of the longest track records in the credit repair industry. Longevity matters in a space with many short-lived operators.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-3">BBB A+ Rating</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    An A+ rating from the Better Business Bureau suggests a strong business practices record and responsiveness to consumer concerns.
                  </p>
                </div>

                <div className="bg-[#CCFBF1] border border-[#06B6D4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#0E7490] mb-3">80,000+ Consumers</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Over 80,000 consumers have used their services, providing a substantial base of experience across diverse credit situations.
                  </p>
                </div>

                <div className="bg-[#FFF7ED] border border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#C2410C] mb-3">All 50 States</h3>
                  <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Licensed to operate in all 50 states, so availability isn&apos;t an issue regardless of your location.
                  </p>
                </div>
              </div>

              {/* MID-ARTICLE CTA */}
              <div className="my-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 text-center">
                <p className="text-gray-700 mb-3 font-medium">Wondering if credit repair could help your situation?</p>
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Check Your Options
                </a>
              </div>

              {/* SECTION: Common Concerns */}
              <h2 id="common-concerns" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Common Concerns About Credit Repair
              </h2>

              <div className="bg-[#FFF7ED] border-l-4 border-[#FB923C] p-6 my-6 rounded-r">
                <p className="font-semibold text-[#C2410C] mb-3">Things to Consider:</p>

                <p className="font-semibold text-[#C2410C] mb-2">No Guaranteed Outcomes:</p>
                <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                  No credit repair company can guarantee specific score improvements. Results depend on your individual credit situation and what the bureaus determine during the dispute process.
                </p>

                <p className="font-semibold text-[#C2410C] mb-2">It Takes Time:</p>
                <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                  Credit repair is not an overnight fix. The dispute process with credit bureaus takes time — typically 30-45 days per dispute round, and multiple rounds may be needed.
                </p>

                <p className="font-semibold text-[#C2410C] mb-2">DIY Is Always an Option:</p>
                <p className="text-[#1F2937] mb-4" style={{ lineHeight: '1.7' }}>
                  You can dispute credit report errors yourself for free through the credit bureaus&apos; websites. Credit repair companies save you time and effort but aren&apos;t strictly necessary.
                </p>

                <p className="font-semibold text-[#C2410C] mb-2">Only Disputable Items:</p>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  Credit repair can only address items that are inaccurate, unverifiable, or past the legal reporting period. Accurate negative information generally cannot be removed.
                </p>
              </div>

              {/* SECTION: Pricing */}
              <h2 id="pricing" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Pricing: How CreditFirm.net Compares
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Service</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Est.</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">BBB Rating</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Track Record</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#EFF6FF] hover:bg-[#DBEAFE]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">CreditFirm.net</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">1997</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">A+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">80,000+ consumers</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">Lexington Law</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">2004</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">A+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Millions served</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">CreditRepair.com</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">2012</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">B</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Widely used</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold text-[#1F2937]">Sky Blue Credit</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">1989</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600">A+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Long-running</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SECTION: CreditFirm vs Lexington Law */}
              <h2 id="creditfirm-vs-lexington" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                CreditFirm.net vs Lexington Law: Head-to-Head
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-[#6B7280]/30 rounded-lg">
                  <thead className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1]">
                    <tr>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Category</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">CreditFirm.net</th>
                      <th className="border border-[#6B7280]/30 px-4 py-3 text-left font-semibold text-[#1F2937]">Lexington Law</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Established</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">1997 (27 years)</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">2004 (22 years)</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">BBB Rating</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">A+</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">A+</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Scale</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">80,000+ consumers</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">Millions served</td>
                    </tr>
                    <tr className="bg-[#F3F4F6] hover:bg-[#E5E7EB]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Coverage</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">All 50 states</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3 text-green-600 font-semibold">All 50 states</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F3F4F6]">
                      <td className="border border-[#6B7280]/30 px-4 py-3 font-semibold">Approach</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Credit repair focus</td>
                      <td className="border border-[#6B7280]/30 px-4 py-3">Legal-based approach</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SECTION: Who Should Use CreditFirm */}
              <h2 id="who-should-use" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Who Should Consider CreditFirm.net?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Consider If:</h3>
                  <ul className="space-y-3 text-[#1F2937]">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">+</span>
                      <span>Your credit report has errors or outdated negative items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">+</span>
                      <span>You don&apos;t have time to manage disputes with all three bureaus yourself</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">+</span>
                      <span>You want professional guidance navigating the dispute process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">+</span>
                      <span>You value a long track record and BBB accreditation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FFF7ED] border-2 border-[#FB923C] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#C2410C] mb-4">Skip If:</h3>
                  <ul className="space-y-3 text-[#1F2937]">
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">-</span>
                      <span>Your credit issues are from accurate, recent negative items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">-</span>
                      <span>You&apos;re comfortable disputing errors with the bureaus yourself</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">-</span>
                      <span>You&apos;re looking for a quick fix (credit repair takes time)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FB923C] mr-2 font-bold">-</span>
                      <span>Your credit is already in good shape</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SECTION: Verdict */}
              <h2 id="verdict" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                The Bottom Line
              </h2>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#CCFBF1] p-6 rounded-xl border border-[#3B82F6] mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1F2937]">Our Rating</h3>
                  <span className="text-3xl font-bold text-green-600">8.0/10</span>
                </div>
                <p className="text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                  CreditFirm.net&apos;s 27-year track record, BBB A+ rating, and 80,000+ consumers served make them one of the more established options in the credit repair space. If you have disputable items on your credit report and want professional help navigating the process, they&apos;re a legitimate option worth considering. Just remember: results vary, and no company can guarantee specific credit score improvements.
                </p>
              </div>

              {/* SECTION: FAQ */}
              <h2 id="faq" className="text-3xl font-bold mt-12 mb-6 text-[#1F2937]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 my-8">
                <details className="bg-[#F3F4F6] rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-[#1F2937] flex justify-between items-center">
                    Is CreditFirm.net a legitimate company?
                    <span className="text-[#6B7280] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-4 text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Yes. CreditFirm.net is a licensed credit services organization that has been operating since 1997. They hold a BBB A+ rating and have helped over 80,000 consumers across all 50 states.
                  </p>
                </details>

                <details className="bg-[#F3F4F6] rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-[#1F2937] flex justify-between items-center">
                    Can credit repair really improve my score?
                    <span className="text-[#6B7280] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-4 text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    If your credit report contains inaccurate, unverifiable, or outdated items, having those items removed or corrected can improve your score. However, results vary depending on your individual situation, and no company can guarantee specific score improvements.
                  </p>
                </details>

                <details className="bg-[#F3F4F6] rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-[#1F2937] flex justify-between items-center">
                    Can I do credit repair myself?
                    <span className="text-[#6B7280] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-4 text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Yes, absolutely. Under the FCRA, you have the right to dispute inaccurate items yourself for free through the credit bureaus&apos; websites. Credit repair companies save you time by handling the process, but DIY is always an option.
                  </p>
                </details>

                <details className="bg-[#F3F4F6] rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-[#1F2937] flex justify-between items-center">
                    How long does credit repair take?
                    <span className="text-[#6B7280] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-4 text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Credit repair is not instant. Each dispute round with the credit bureaus takes approximately 30-45 days, and multiple rounds may be needed. Most credit repair processes take several months to complete.
                  </p>
                </details>

                <details className="bg-[#F3F4F6] rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-[#1F2937] flex justify-between items-center">
                    What&apos;s the difference between credit repair and debt relief?
                    <span className="text-[#6B7280] group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <p className="mt-4 text-[#1F2937]" style={{ lineHeight: '1.7' }}>
                    Credit repair focuses on your credit report — disputing inaccurate or outdated items. Debt relief focuses on reducing the amount you owe. They address different problems and are sometimes used together.
                  </p>
                </details>
              </div>

              {/* Explore More Section */}
              <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
                <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Explore More Debt Guides</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#1F2937]">
                      <span className="text-2xl mr-2">Debt Solutions</span>
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/debt" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">-</span>
                          Best Debt Relief &amp; Payoff Strategies
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#1F2937]">
                      <span className="text-2xl mr-2">Related Articles</span>
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/articles/rent-reporting-can-boost-credit-score-navigat-2025" className="text-[#06B6D4] hover:underline flex items-center">
                          <span className="mr-2">-</span>
                          Rent Reporting Can Boost Your Credit Score
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

      {/* BOTTOM CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Credit Repair?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            CreditFirm.net has helped over 80,000 consumers since 1997. BBB A+ rated.
          </p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block px-8 py-4 bg-white text-[#EF4444] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Learn About Credit Repair
          </a>
          <p className="text-sm mt-4 opacity-75">
            Licensed credit services organization, all 50 states
          </p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg lg:hidden z-50">
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors">
          Check Your Credit Repair Options
        </a>
      </div>
    </>
  );
}
