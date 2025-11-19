import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Lifestyle Photography */}
      <section className="relative bg-gradient-to-br from-[#3B82F6]/5 to-[#06B6D4]/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Real People. Real Money Moves. Real Results.
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We're not financial advisors—we're your neighbors who spent hundreds of hours reading what real people say about credit cards, loans, and money decisions. Here's what we found.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/credit-cards" className="btn btn-primary">
                  Find Your Next Credit Card
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/jA6C50tKAiJ9.jpg" 
                alt="People managing their finances" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now - Magazine Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Link href="/articles" className="text-gray-600 hover:text-gray-900">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Article 1 */}
            <Link href="/credit-cards/chase-sapphire" className="card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src="/images/1dlhQc1vlU7p.png" 
                  alt="Chase Sapphire Preferred" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3B82F6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CREDIT CARDS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                  Chase Sapphire Preferred: What 10,000 Reddit Users Really Think
                </h3>
                <p className="text-gray-600 mb-4">
                  We read every mention on Reddit in 2024. Here's the good, the bad, and the "wish I'd known that before applying."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>•</span>
                  <span>4.2★ Community Rating</span>
                </div>
              </div>
            </Link>

            {/* Featured Article 2 */}
            <Link href="/personal-loans/sofi-review" className="card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl font-bold text-[#06B6D4] mb-2">127+</div>
                  <div className="text-xl font-semibold">real borrowers</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#06B6D4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    PERSONAL LOANS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#06B6D4] transition-colors">
                  What 127+ Borrowers Really Think About SoFi Personal Loans
                </h3>
                <p className="text-gray-600 mb-4">
                  We analyzed real experiences from Reddit and MyFICO. Here's what you need to know about approval rates, APRs, and funding times.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>8 min read</span>
                  <span>•</span>
                  <span>3.8★ Based on Real Data</span>
                </div>
              </div>
            </Link>

            {/* Featured Article 3 */}
            <Link href="/reverse-mortgages" className="card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src="/images/5DlVZOWMKLMn.jpg" 
                  alt="Reverse Mortgages" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FB923C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    MORTGAGES
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                  30,000 Seniors Told Us About Reverse Mortgages. Here's What They Said.
                </h3>
                <p className="text-gray-600 mb-4">
                  The good, the bad, and the "I wish I'd sold my house instead." Real stories from real people.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>2.8★ Mixed Reviews</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Picks - Card Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Quick Picks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/credit-cards" className="card h-full group">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                Best Credit Cards
              </h3>
              <p className="text-gray-600 text-sm">
                Compare rewards, cash back, and travel cards based on 25,000+ user reviews
              </p>
            </Link>

            <Link href="/personal-loans" className="card h-full group">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                Personal Loans
              </h3>
              <p className="text-gray-600 text-sm">
                Find lenders that real borrowers actually recommend
              </p>
            </Link>

            <Link href="/calculators" className="card h-full group">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                Calculators
              </h3>
              <p className="text-gray-600 text-sm">
                Figure out payments, interest, and total costs before you apply
              </p>
            </Link>

            <Link href="/guides" className="card h-full group">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                Money Guides
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from what worked (and didn't) for thousands of people
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles - Blog Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Research</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Article 1 */}
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <img 
                  src="/images/tMQPsQqoNudD.png" 
                  alt="Capital One Venture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wide">Credit Cards</span>
                <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-[#3B82F6] transition-colors">
                  Capital One Venture vs. Chase Sapphire: Which One's Actually Better?
                </h3>
                <p className="text-sm text-gray-600">
                  We compared what 15,000 cardholders said about both. The winner might surprise you.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#FB923C]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3B82F6]">18%</div>
                  <div className="text-xs">avg APR</div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wide">Debt</span>
                <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-[#3B82F6] transition-colors">
                  How Real People Paid Off $50k+ in Credit Card Debt
                </h3>
                <p className="text-sm text-gray-600">
                  12 strategies that actually worked, according to 3,400 success stories we analyzed.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/articles" className="btn btn-secondary">
              Load More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 50,000+ People Making Smarter Money Decisions
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get our weekly newsletter with the latest research, comparison updates, and real user stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-[#3B82F6] hover:bg-gray-100 font-semibold rounded-lg transition">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/credit-cards">Credit Cards</Link>
                <Link href="/personal-loans">Personal Loans</Link>
                <Link href="/banking">Banking</Link>
                <Link href="/mortgages">Mortgages</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/calculators">Calculators</Link>
                <Link href="/guides">Guides</Link>
                <Link href="/methodology">Methodology</Link>
                <Link href="/data-sources">Data Sources</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <a href="https://twitter.com/regularfolkfin" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://reddit.com/r/regularfolkfinance" target="_blank" rel="noopener noreferrer">Reddit</a>
                <a href="https://linkedin.com/company/regularfolkfinance" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <Link href="/newsletter">Newsletter</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p className="mb-2">
              © 2025 RegularFolkFinance. We're not financial advisors. All recommendations are based on aggregated user data and research.
            </p>
            <p>
              <strong>Affiliate Disclosure:</strong> We may earn a commission when you click on links to products. This helps keep our research free. 
              We only link to products we've researched.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
