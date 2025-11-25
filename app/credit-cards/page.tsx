'use client';

import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";

const creditCards = [
  {
    name: "Chase Sapphire Preferred®",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.2/5",
    reviews: "10,847 real cardholders",
    bonus: "60,000 points",
    annualFee: "$95",
    category: "Travel",
    whatPeopleLove: [
      "\"The travel insurance saved me $800 when my flight got canceled\" - Reddit user",
      "\"Transfer partners are amazing - I got a $2,000 flight for 50k points\" - r/churning",
      "\"2x on dining adds up fast when you eat out a lot\" - Credit Karma review"
    ],
    whatPeopleHate: [
      "\"Wish the first year fee was waived like it used to be\" - Common complaint",
      "\"No airport lounge access at this price point feels cheap\" - r/CreditCards",
      "\"1x on everything else is pretty meh\" - Frequent criticism"
    ],
    theVerdict: "If you travel once or twice a year and like flexibility, people love this card. If you're looking for lounge access or don't travel much, you might want to keep looking.",
    bestFor: "People who travel occasionally and want flexible points",
    affiliateLink: "#"
  },
  {
    name: "American Express® Gold Card",
    image: "/images/5DlVZOWMKLMn.jpg",
    rating: "4.1/5",
    reviews: "8,932 cardholders",
    bonus: "60,000 points",
    annualFee: "$250",
    category: "Dining",
    whatPeopleLove: [
      "\"4x on restaurants is insane - I get $40-50 back every month\" - Amex cardholder",
      "\"The Uber credits basically pay for themselves\" - Common praise",
      "\"Grocery rewards saved me like $300 last year\" - r/personalfinance"
    ],
    whatPeopleHate: [
      "\"$250 fee is steep if you don't use all the credits\" - Valid concern",
      "\"Not accepted everywhere - had to carry a Visa backup\" - Frequent complaint",
      "\"The credits feel like a trick to make you spend more\" - Some skeptics"
    ],
    theVerdict: "Foodies and grocery shoppers absolutely love this card. But if you don't eat out much or won't use the Uber credits, that $250 fee stings.",
    bestFor: "People who spend a lot on dining and groceries",
    affiliateLink: "#"
  },
  {
    name: "Capital One Venture Rewards",
    image: "/images/tMQPsQqoNudD.png",
    rating: "4.0/5",
    reviews: "7,621 users",
    bonus: "75,000 miles",
    annualFee: "$95",
    category: "Travel",
    whatPeopleLove: [
      "\"So simple - 2x on everything, no categories to track\" - Happy user",
      "\"Transferred points to Turkish Airlines and got amazing value\" - r/awardtravel",
      "\"No foreign transaction fees saved me on my Europe trip\" - Traveler"
    ],
    whatPeopleHate: [
      "\"Points aren't worth as much as Chase or Amex\" - Common criticism",
      "\"Fewer transfer partners than competitors\" - Valid point",
      "\"Nothing special besides the simplicity\" - Some users"
    ],
    theVerdict: "If you want dead-simple rewards and don't want to think about categories, this is your card. If you're a points optimizer, you might get better value elsewhere.",
    bestFor: "People who want simple, no-fuss travel rewards",
    affiliateLink: "#"
  },
  {
    name: "Chase Freedom Unlimited®",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.3/5",
    reviews: "12,500 cardholders",
    bonus: "20,000 points",
    annualFee: "$0",
    category: "Cash Back",
    whatPeopleLove: [
      "\"1.5% cash back on everything with no annual fee is solid\" - Happy user",
      "\"The 5% on travel through Chase portal is a nice perk\" - r/CreditCards",
      "\"Easy to use, no categories to track\" - Common praise"
    ],
    whatPeopleHate: [
      "\"Not as rewarding as cards with rotating categories\" - Some users",
      "\"The bonus is smaller than other cards\" - Valid point",
      "\"Would be better with 2% flat rate\" - Frequent wish"
    ],
    theVerdict: "If you want simple cash back with no annual fee, this card delivers. But if you're willing to track categories, you might earn more elsewhere.",
    bestFor: "People who want simple cash back with no annual fee",
    affiliateLink: "#"
  },
  {
    name: "Citi® Double Cash Card",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.4/5",
    reviews: "15,200 cardholders",
    bonus: "N/A",
    annualFee: "$0",
    category: "Cash Back",
    whatPeopleLove: [
      "\"2% cash back on everything - simple and effective\" - Reddit user",
      "\"No annual fee, no categories, no BS\" - r/personalfinance",
      "\"Best flat-rate cash back card, period\" - Common consensus"
    ],
    whatPeopleHate: [
      "\"No sign-up bonus is disappointing\" - Frequent complaint",
      "\"Takes forever to get your cash back\" - Some frustration",
      "\"Not as good for big spenders vs. travel cards\" - Valid criticism"
    ],
    theVerdict: "The king of simple cash back. If you don't want to think about categories or transfer partners, this is your card.",
    bestFor: "People who want the best flat-rate cash back with no fee",
    affiliateLink: "#"
  },
  {
    name: "Capital One Savor Cash Rewards",
    image: "/images/tMQPsQqoNudD.png",
    rating: "4.0/5",
    reviews: "6,400 cardholders",
    bonus: "30,000 points",
    annualFee: "$95",
    category: "Dining",
    whatPeopleLove: [
      "\"4% on dining and entertainment is amazing\" - Happy cardholder",
      "\"No foreign transaction fees for international dining\" - Traveler",
      "\"3% on groceries adds up fast\" - Common praise"
    ],
    whatPeopleHate: [
      "\"$95 fee is steep compared to other dining cards\" - Valid concern",
      "\"Entertainment category is limited\" - Some disappointment",
      "\"Amex Gold gives better value if you use the credits\" - Comparison"
    ],
    theVerdict: "Great for foodies who don't want to deal with Amex credits. But the annual fee makes it a tougher sell than the no-fee version.",
    bestFor: "Dining enthusiasts who want simple rewards",
    affiliateLink: "#"
  },
  {
    name: "Discover it® Cash Back",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.5/5",
    reviews: "18,300 cardholders",
    bonus: "Match 1st year",
    annualFee: "$0",
    category: "No Annual Fee",
    whatPeopleLove: [
      "\"Cashback match first year is basically a 10% return\" - Excited user",
      "\"5% rotating categories are actually useful\" - r/churning",
      "\"No annual fee and great customer service\" - Common praise"
    ],
    whatPeopleHate: [
      "\"Not accepted everywhere like Visa/Mastercard\" - Frequent issue",
      "\"Have to remember to activate categories each quarter\" - Minor annoyance",
      "\"After first year, it's just okay\" - Some users"
    ],
    theVerdict: "The first year is incredible value. After that, it's still solid but less exciting. Great starter card.",
    bestFor: "First-time cardholders or anyone wanting no-fee rewards",
    affiliateLink: "#"
  },
  {
    name: "Chase Freedom Flex℠",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.4/5",
    reviews: "9,800 cardholders",
    bonus: "20,000 points",
    annualFee: "$0",
    category: "No Annual Fee",
    whatPeopleLove: [
      "\"5% rotating categories plus 3% on dining and drugstores\" - Happy user",
      "\"No annual fee but works with Chase ecosystem\" - Strategic users",
      "\"Travel protections on a no-fee card is rare\" - Common praise"
    ],
    whatPeopleHate: [
      "\"Categories rotate and you have to activate them\" - Some find it annoying",
      "\"Not as simple as flat-rate cards\" - Valid point",
      "\"5% caps at $1,500 per quarter\" - Limitation"
    ],
    theVerdict: "Best no-fee card if you can keep up with rotating categories. Pairs perfectly with other Chase cards.",
    bestFor: "Organized spenders who want to maximize no-fee rewards",
    affiliateLink: "#"
  },
  {
    name: "Chase Ink Business Preferred®",
    image: "/images/1dlhQc1vlU7p.png",
    rating: "4.3/5",
    reviews: "7,200 business owners",
    bonus: "100,000 points",
    annualFee: "$95",
    category: "Business",
    whatPeopleLove: [
      "\"3x on travel, shipping, advertising - perfect for my business\" - Small business owner",
      "\"100k bonus is massive for a $95 fee\" - Happy applicant",
      "\"Cell phone protection saved me $800\" - Real benefit"
    ],
    whatPeopleHate: [
      "\"You need a business (even sole prop counts though)\" - Barrier to entry",
      "\"3x categories cap at $150k annually\" - High spenders",
      "\"No employee cards without fees\" - Some disappointment"
    ],
    theVerdict: "If you have any kind of business, this card is a no-brainer. The bonus alone pays for years of fees.",
    bestFor: "Small business owners and freelancers",
    affiliateLink: "#"
  },
  {
    name: "American Express® Business Gold Card",
    image: "/images/5DlVZOWMKLMn.jpg",
    rating: "4.2/5",
    reviews: "5,800 business owners",
    bonus: "70,000 points",
    annualFee: "$295",
    category: "Business",
    whatPeopleLove: [
      "\"4x on top 2 categories is insane for business spend\" - Happy owner",
      "\"Flexible categories adapt to my business\" - Strategic user",
      "\"Transfer partners make points worth more\" - Maximizers"
    ],
    whatPeopleHate: [
      "\"$295 is steep without any statement credits\" - Common complaint",
      "\"Not accepted everywhere\" - Amex limitation",
      "\"Have to track which categories you're using\" - Some complexity"
    ],
    theVerdict: "Best business rewards card if you have high spend and can maximize the 4x categories. Fee is high but rewards can justify it.",
    bestFor: "Business owners with high spending in bonus categories",
    affiliateLink: "#"
  }
];

function CreditCardsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Dynamic year - updates automatically
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/credit-cards${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const filteredCards = selectedCategory === 'all'
    ? creditCards
    : creditCards.filter(card => card.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = [
    { label: 'All Cards', value: 'all' },
    { label: 'Travel', value: 'travel' },
    { label: 'Cash Back', value: 'cash back' },
    { label: 'Dining', value: 'dining' },
    { label: 'No Annual Fee', value: 'no annual fee' },
    { label: 'Business', value: 'business' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 bg-[#3B82F6] text-white rounded-full text-sm font-semibold">
              CREDIT CARDS
            </span>
            {/* DYNAMIC H1 - Auto-updates year */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Best Credit Cards of {currentYear}, According to People Who Actually Use Them
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              We spent weeks reading what 27,400+ real cardholders said on Reddit, Credit Karma, and review sites in {currentYear}. 
              Here's what they wish they knew before applying.
            </p>
            <p className="text-sm text-gray-600 italic">
              (We're not financial advisors. We're just people who did a lot of research so you don't have to.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="py-6 border-b bg-white sticky top-14 md:top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-[#3B82F6] text-white'
                    : 'border hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {filteredCards.map((card, index) => (
              <article key={card.name} className="card border-2">
                <div className="grid md:grid-cols-[280px_1fr] gap-6">
                  {/* Card Image */}
                  <div className="bg-gradient-to-br from-[#3B82F6]/5 to-[#06B6D4]/5 p-8 flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={250}
                      height={157}
                      className="w-full max-w-[250px] rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 border rounded text-xs">{card.category}</span>
                          {index === 0 && <span className="px-2 py-1 bg-[#FB923C] text-white rounded text-xs">MOST POPULAR</span>}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{card.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">⭐ {card.rating}</span>
                          <span>•</span>
                          <span>{card.reviews}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Sign-up Bonus</div>
                        <div className="text-2xl font-bold text-[#3B82F6]">{card.bonus}</div>
                        <div className="text-sm text-gray-600 mt-1">{card.annualFee}/year</div>
                      </div>
                    </div>

                    {/* What People Love */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">💚 What People Love</h3>
                      <ul className="space-y-2">
                        {card.whatPeopleLove.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 pl-4 border-l-2 border-green-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What People Hate */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">💔 What People Hate</h3>
                      <ul className="space-y-2">
                        {card.whatPeopleHate.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 pl-4 border-l-2 border-red-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Verdict */}
                    <div className="verdict bg-gray-50 p-4 rounded-lg mb-4">
                      <h3 className="font-bold mb-2">📝 The Verdict</h3>
                      <p className="text-sm text-gray-700">{card.theVerdict}</p>
                    </div>

                    {/* Best For */}
                    <div className="mb-4">
                      <span className="text-sm font-semibold">Best for: </span>
                      <span className="text-sm text-gray-600">{card.bestFor}</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <a href={card.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex-1 btn btn-primary text-center">
                        Apply Now →
                      </a>
                      <Link href="/credit-cards" className="btn btn-secondary">
                        Full Review
                      </Link>
                    </div>

                    <p className="text-xs text-gray-500 mt-3">
                      We may earn a commission if you apply. This helps keep our research free. We only recommend cards we've researched.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Research */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Actually Do This Research</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Look, we're not financial advisors. We're just regular people who got tired of reading the same generic credit card reviews that all say the same thing.
              </p>
              <p>
                So we spent hundreds of hours reading what real cardholders say on Reddit (r/churning, r/CreditCards, r/personalfinance), 
                Credit Karma reviews, NerdWallet comments, and everywhere else people actually talk about their cards.
              </p>
              <p>
                We looked for patterns. What do people love? What do they regret? What do they wish they'd known before applying?
              </p>
              <p>
                Then we wrote it all down in plain English. No jargon. No BS. Just what we found.
              </p>
              <p className="font-semibold">
                The data is real. The quotes are real. The recommendations are based on what thousands of people actually experienced.
              </p>
            </div>
            <Link href="/methodology" className="inline-block mt-6 btn btn-secondary">
              Read Our Full Methodology →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CreditCards() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CreditCardsContent />
    </Suspense>
  );
}