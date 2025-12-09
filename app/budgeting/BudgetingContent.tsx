'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function BudgetingContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const tools = [
    {
      id: 1,
      rank: 1,
      name: 'Tiller Money',
      logo: '/images/budgeting/tiller-logo.png',
      isTopPick: true,
      rating: 9.2,
      tagline: 'Best for spreadsheet lovers who want automation',
      price: '$79/year after 30-day free trial',
      features: [
        'Auto-syncs with 21,000+ banks to Google Sheets & Excel',
        'Powerful transaction auto-categorization',
        'Daily email summary of account activity',
        'Complete customization - it\'s YOUR spreadsheet',
        '30-day free trial, cancel anytime'
      ],
      ctaText: 'Try Tiller Free →',
      ctaLink: 'https://www.awin1.com/cread.php?awinmid=18709&awinaffid=2683750&campaign=Tiller+Money+%28US%29&clickref=budgeting-landing&ued=https%3A%2F%2Ftiller.com%2Fpricing%2F',
      reviewLink: '/budgeting/tiller-money-review',
      isPrimary: true
    },
    {
      id: 2,
      rank: 2,
      name: 'YNAB (You Need A Budget)',
      logo: '/images/budgeting/ynab-logo.png',
      isTopPick: false,
      rating: 8.8,
      tagline: 'Best for zero-based budgeting methodology',
      price: '$99/year or $14.99/month',
      features: [
        'Every dollar gets a job (zero-based budgeting)',
        'Real-time sync across devices',
        'Goal tracking and reports',
        'Active community and free workshops'
      ],
      ctaText: 'Visit YNAB →',
      ctaLink: 'https://www.ynab.com/',
      isPrimary: false
    },
    {
      id: 3,
      rank: 3,
      name: 'Credit Karma',
      logo: '/images/budgeting/creditkarma-logo.png',
      isTopPick: false,
      rating: 7.8,
      tagline: 'Best free option with credit monitoring',
      price: 'Free',
      features: [
        'Free budget tracking and spending insights',
        'Credit score monitoring and reports included',
        'Personalized financial recommendations',
        'Absorbed Mint\'s user base in 2024'
      ],
      ctaText: 'Visit Credit Karma →',
      ctaLink: 'https://www.creditkarma.com/',
      isPrimary: false
    },
    {
      id: 4,
      rank: 4,
      name: 'Monarch Money',
      logo: '/images/budgeting/monarch-logo.png',
      isTopPick: false,
      rating: 8.5,
      tagline: 'Best Mint alternative with modern design',
      price: '$99/year or $14.99/month',
      features: [
        'Clean, modern interface',
        'Collaborative features for couples/families',
        'Investment tracking included',
        'Highly rated by former Mint users'
      ],
      ctaText: 'Visit Monarch →',
      ctaLink: 'https://www.monarchmoney.com/',
      isPrimary: false
    },
    {
      id: 5,
      rank: 5,
      name: 'Personal Capital (Empower)',
      logo: '/images/budgeting/empower-logo.png',
      isTopPick: false,
      rating: 8.0,
      tagline: 'Best for budgeting + investment tracking',
      price: 'Free (wealth management services extra)',
      features: [
        'Free budgeting and net worth tracking',
        'Excellent investment analysis tools',
        'Retirement planner included',
        'Cash flow and spending insights'
      ],
      ctaText: 'Visit Empower →',
      ctaLink: 'https://www.empower.com/',
      isPrimary: false
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What's the best free budgeting app?",
      answer: "Credit Karma is now the leading free option, having absorbed Mint's user base in 2024. It offers budget tracking, spending insights, and comprehensive credit score monitoring at no cost. Personal Capital (now Empower) is another excellent free option, especially if you also want investment tracking. For a more robust experience with better features, paid options like YNAB or Tiller Money are worth considering."
    },
    {
      id: 2,
      question: "Is Tiller Money worth $79/year?",
      answer: "For spreadsheet users, absolutely. Tiller Money gives you the flexibility and power of spreadsheets while automating the tedious parts like bank syncing and transaction imports. If you're comfortable with Google Sheets or Excel and want complete control over your budget, Tiller is hard to beat. The 30-day free trial lets you test it risk-free. Reddit users consistently praise it for customization and data ownership."
    },
    {
      id: 3,
      question: "What happened to Mint?",
      answer: "Intuit discontinued Mint in early 2024, transitioning all users to Credit Karma. While some long-time Mint users were disappointed by the change, Credit Karma has absorbed the user base and continues to offer free budgeting tools with enhanced credit monitoring features. Popular paid alternatives include Monarch Money (for a similar interface), YNAB (for active budgeting), and Tiller Money (for spreadsheet control)."
    },
    {
      id: 4,
      question: "Which budgeting app do Redditors recommend most?",
      answer: "YNAB and Tiller Money consistently get the most praise on Reddit's personal finance communities. YNAB is loved for its methodology and how it changes users' relationships with money. Tiller is praised by spreadsheet enthusiasts who want automation without giving up control. Monarch Money is gaining popularity as a modern Mint replacement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Affiliate Disclosure - Sticky */}
      <div className="sticky top-14 md:top-16 z-40 bg-gray-50 border-b border-gray-200 py-2 px-4">
        <p className="text-xs text-center text-gray-600 max-w-4xl mx-auto">
          We may earn a commission when you click links on this page. Our research is always independent.
        </p>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
            Best Budgeting Tools in 2025
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
            Based on real user experiences from Reddit and finance communities
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 overflow-x-auto pb-4 sm:pb-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm whitespace-nowrap">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Community-Powered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm whitespace-nowrap">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Updated December 2025</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm whitespace-nowrap">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Transparent Methodology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-cyan-50 border-y border-cyan-100 py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold" style={{ color: '#06B6D4' }}>
            Analyzing 500+ Reddit discussions about budgeting apps
          </p>
        </div>
      </section>

      {/* Featured Tools Cards - Horizontal Scroll on Mobile */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
            Top Picks at a Glance
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible">
            {tools.slice(0, 3).map((tool) => (
              <div key={tool.id} className={`flex-shrink-0 w-72 sm:w-auto bg-white rounded-xl p-6 transition-all ${tool.isTopPick ? 'shadow-xl border-2 border-orange-300 hover:shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
                {/* Logo */}
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-bold text-gray-900">{tool.rating}</span>
                    <span className="text-gray-500 text-sm">/10</span>
                  </div>
                  {tool.isTopPick && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                      TOP PICK
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 text-sm">{tool.tagline}</p>
                <a
                  href={tool.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 rounded-lg font-semibold text-white transition-colors"
                  style={{
                    backgroundColor: tool.isPrimary ? '#06B6D4' : '#9CA3AF',
                    borderRadius: '10px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Rankings Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
            Detailed Comparison
          </h2>

          <div className="space-y-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`bg-white rounded-xl overflow-hidden transition-all ${
                  tool.isTopPick
                    ? 'shadow-2xl border-4 border-orange-200 hover:shadow-3xl'
                    : 'shadow-lg border-2 border-gray-200 hover:shadow-xl'
                }`}
              >
                {/* Card Header */}
                <div className={`p-6 sm:p-8 ${tool.isTopPick ? 'bg-gradient-to-br from-orange-50/30 to-white' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Rank Badge */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        #{tool.rank}
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
                          {tool.isTopPick && (
                            <span
                              className="px-3 py-1 text-white text-xs font-bold rounded-full"
                              style={{ backgroundColor: '#FB923C' }}
                            >
                              TOP PICK
                            </span>
                          )}
                        </div>

                        {/* Logo (Mobile) */}
                        <div className="w-28 h-28 bg-gray-50 rounded-lg mb-3 sm:hidden flex items-center justify-center p-3">
                          <div className="relative w-full h-full">
                            <Image
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-gray-600">Community Rating:</span>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 font-bold text-gray-900 text-lg">{tool.rating}</span>
                            <span className="text-gray-500">/10</span>
                          </div>
                        </div>

                        <p className="text-gray-600 italic mb-3">{tool.tagline}</p>
                        <p className="text-lg font-bold" style={{ color: '#3B82F6' }}>{tool.price}</p>
                      </div>
                    </div>

                    {/* Desktop Logo */}
                    <div className="hidden sm:flex flex-shrink-0 w-40 h-40 bg-gray-50 rounded-lg items-center justify-center p-4">
                      <div className="relative w-full h-full">
                        <Image
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`mt-6 ${expandedCard === tool.id || tool.rank === 1 ? 'block' : 'hidden sm:block'}`}>
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#06B6D4' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={tool.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
                        style={{
                          backgroundColor: tool.isPrimary ? '#06B6D4' : '#9CA3AF',
                          borderRadius: '10px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        {tool.ctaText}
                      </a>
                      {tool.reviewLink && (
                        <Link
                          href={tool.reviewLink}
                          className="flex-1 text-center px-6 py-3 rounded-lg font-bold border-2 transition-all hover:shadow-md"
                          style={{
                            borderColor: '#3B82F6',
                            color: '#3B82F6',
                            borderRadius: '10px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EFF6FF'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          Read our full review →
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Mobile Toggle Button */}
                  {tool.rank !== 1 && (
                    <button
                      onClick={() => toggleCard(tool.id)}
                      className="sm:hidden w-full mt-4 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                      style={{
                        color: '#3B82F6',
                        backgroundColor: '#EFF6FF'
                      }}
                    >
                      {expandedCard === tool.id ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Picks Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4" style={{ borderLeftColor: '#06B6D4' }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
              Why Trust Our Picks?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We analyze hundreds of Reddit discussions, forum posts, and real user reviews to understand what people actually experience with these tools—not just what the marketing says.
            </p>
            <p className="text-gray-600">
              Our rankings are based on community sentiment, feature depth, value for money, and long-term user satisfaction. We prioritize tools that real people recommend to their friends and family.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${openFaq === faq.id ? 'transform rotate-180' : ''}`}
                    style={{ color: '#3B82F6' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="text-orange-700 font-bold text-sm">OUR TOP RECOMMENDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
              Ready to Take Control of Your Budget?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Try Tiller Money free for 30 days and see why it's our top pick for 2025
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: '#06B6D4' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">30-Day Free Trial</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: '#06B6D4' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Cancel Anytime</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: '#06B6D4' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">21,000+ Banks</p>
              </div>
            </div>

            <a
              href="https://www.awin1.com/cread.php?awinmid=18709&awinaffid=2683750&campaign=Tiller+Money+%28US%29&clickref=budgeting-landing&ued=https%3A%2F%2Ftiller.com%2Fpricing%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
              style={{
                backgroundColor: '#06B6D4',
                borderRadius: '10px'
              }}
            >
              Start Your Free Trial →
            </a>
            <p className="text-sm text-gray-500 mt-4">No credit card required for trial</p>
          </div>
        </div>
      </section>
    </div>
  );
}
