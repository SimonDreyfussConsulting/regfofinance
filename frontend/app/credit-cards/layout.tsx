import type { Metadata } from "next";

// ===========================================
// DYNAMIC METADATA - Auto-updates year
// ===========================================
export async function generateMetadata(): Promise<Metadata> {
  const currentYear = new Date().getFullYear();
  
  return {
    title: `Best Credit Cards ${currentYear} | Based on 27,400+ Real User Reviews`,
    description: `We analyzed what 27,400+ real cardholders said on Reddit, Credit Karma, and review sites in ${currentYear}. Compare travel, cash back, dining, and no-fee cards based on actual user experiences.`,
    keywords: [
      'best credit cards',
      `best credit cards ${currentYear}`,
      'credit card reviews',
      'travel credit cards',
      'cash back cards',
      'Reddit credit cards',
      'credit card comparison'
    ],
    alternates: {
      canonical: 'https://regularfolkfinance.com/credit-cards',
    },
    openGraph: {
      title: `Best Credit Cards ${currentYear} | Based on 27,400+ Real User Reviews`,
      description: `Compare credit cards based on what real cardholders say in ${currentYear}, not marketing hype.`,
      url: 'https://regularfolkfinance.com/credit-cards',
      siteName: 'RegularFolkFinance',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: 'https://regularfolkfinance.com/images/og-credit-cards.png',
          width: 1200,
          height: 630,
          alt: `Best Credit Cards ${currentYear} - RegularFolkFinance`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best Credit Cards ${currentYear} | 27,400+ Real Reviews`,
      description: `Compare credit cards based on what real people say on Reddit and review sites.`,
      images: ['https://regularfolkfinance.com/images/og-credit-cards.png'],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

// ===========================================
// LAYOUT WITH DYNAMIC SCHEMA
// ===========================================
export default function CreditCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();
  const today = new Date().toISOString().split('T')[0];

  const creditCardsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. COLLECTION PAGE
      {
        "@type": "CollectionPage",
        "@id": "https://regularfolkfinance.com/credit-cards/#webpage",
        "url": "https://regularfolkfinance.com/credit-cards",
        "name": `Best Credit Cards ${currentYear} | Based on 27,400+ Real User Reviews`,
        "description": `Compare credit cards based on what 27,400+ real cardholders said on Reddit and review sites in ${currentYear}.`,
        "isPartOf": { "@id": "https://regularfolkfinance.com/#website" },
        "about": {
          "@type": "FinancialProduct",
          "name": "Credit Cards"
        },
        "inLanguage": "en-US",
        "datePublished": "2025-11-01",
        "dateModified": today,
        "breadcrumb": { "@id": "https://regularfolkfinance.com/credit-cards/#breadcrumb" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".verdict"]
        }
      },

      // 2. BREADCRUMB
      {
        "@type": "BreadcrumbList",
        "@id": "https://regularfolkfinance.com/credit-cards/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://regularfolkfinance.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Credit Cards",
            "item": "https://regularfolkfinance.com/credit-cards"
          }
        ]
      },

      // 3. ITEM LIST - Credit Cards
      {
        "@type": "ItemList",
        "@id": "https://regularfolkfinance.com/credit-cards/#cardlist",
        "name": `Best Credit Cards ${currentYear}`,
        "description": `Credit cards ranked by community reviews from Reddit and review sites in ${currentYear}`,
        "numberOfItems": 10,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Chase Sapphire Preferred®",
              "description": "Popular travel rewards card with flexible points and solid travel insurance",
              "image": "https://regularfolkfinance.com/images/1dlhQc1vlU7p.png",
              "brand": { "@type": "Brand", "name": "Chase" },
              "category": "Travel Credit Card",
              "offers": {
                "@type": "Offer",
                "price": "95",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "95",
                  "priceCurrency": "USD",
                  "unitText": "annual fee"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "10847",
                "reviewCount": "10847"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.2",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Organization",
                  "name": "RegularFolkFinance"
                },
                "reviewBody": "If you travel once or twice a year and like flexibility, people love this card. Great transfer partners and travel insurance."
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "American Express® Gold Card",
              "description": "Top dining rewards card with 4x on restaurants and groceries",
              "image": "https://regularfolkfinance.com/images/5DlVZOWMKLMn.jpg",
              "brand": { "@type": "Brand", "name": "American Express" },
              "category": "Dining Credit Card",
              "offers": { "@type": "Offer", "price": "250", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.1",
                "bestRating": "5",
                "ratingCount": "8932"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Capital One Venture Rewards",
              "description": "Simple travel card with 2x miles on everything",
              "image": "https://regularfolkfinance.com/images/tMQPsQqoNudD.png",
              "brand": { "@type": "Brand", "name": "Capital One" },
              "category": "Travel Credit Card",
              "offers": { "@type": "Offer", "price": "95", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.0",
                "bestRating": "5",
                "ratingCount": "7621"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Chase Freedom Unlimited®",
              "description": "No-fee card with 1.5% cash back on everything",
              "brand": { "@type": "Brand", "name": "Chase" },
              "category": "Cash Back Credit Card",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.3",
                "bestRating": "5",
                "ratingCount": "12500"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Product",
              "name": "Citi® Double Cash Card",
              "description": "Best flat-rate cash back card at 2% on everything",
              "brand": { "@type": "Brand", "name": "Citi" },
              "category": "Cash Back Credit Card",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "bestRating": "5",
                "ratingCount": "15200"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Product",
              "name": "Discover it® Cash Back",
              "description": "Best first-year value with cashback match",
              "brand": { "@type": "Brand", "name": "Discover" },
              "category": "Cash Back Credit Card",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "bestRating": "5",
                "ratingCount": "18300"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Product",
              "name": "Chase Freedom Flex℠",
              "description": "Best no-fee card with rotating 5% categories",
              "brand": { "@type": "Brand", "name": "Chase" },
              "category": "Cash Back Credit Card",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "bestRating": "5",
                "ratingCount": "9800"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Product",
              "name": "Capital One Savor Cash Rewards",
              "description": "4% on dining and entertainment",
              "brand": { "@type": "Brand", "name": "Capital One" },
              "category": "Dining Credit Card",
              "offers": { "@type": "Offer", "price": "95", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.0",
                "bestRating": "5",
                "ratingCount": "6400"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 9,
            "item": {
              "@type": "Product",
              "name": "Chase Ink Business Preferred®",
              "description": "Best business card with 100k point bonus",
              "brand": { "@type": "Brand", "name": "Chase" },
              "category": "Business Credit Card",
              "offers": { "@type": "Offer", "price": "95", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.3",
                "bestRating": "5",
                "ratingCount": "7200"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 10,
            "item": {
              "@type": "Product",
              "name": "American Express® Business Gold Card",
              "description": "Best for high business spend with 4x categories",
              "brand": { "@type": "Brand", "name": "American Express" },
              "category": "Business Credit Card",
              "offers": { "@type": "Offer", "price": "295", "priceCurrency": "USD" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
                "bestRating": "5",
                "ratingCount": "5800"
              }
            }
          }
        ]
      },

      // 4. FAQ SCHEMA
      {
        "@type": "FAQPage",
        "@id": "https://regularfolkfinance.com/credit-cards/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What is the best travel credit card in ${currentYear}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Based on 27,400+ real user reviews, the Chase Sapphire Preferred is the most popular travel card in ${currentYear} with a 4.2/5 rating. Users love the flexible transfer partners and travel insurance, though some wish it had lounge access.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the best no-annual-fee credit card in ${currentYear}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Citi Double Cash Card (2% on everything) and Discover it Cash Back (5% rotating categories with first-year match) are top-rated no-fee options in ${currentYear} based on user reviews.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the best credit card for dining in ${currentYear}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The American Express Gold Card offers 4x on dining and groceries, rated 4.1/5 by 8,932 cardholders in ${currentYear}. Users love the rewards but note the $250 annual fee requires using the credits.`
            }
          },
          {
            "@type": "Question",
            "name": "How does RegularFolkFinance research credit cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We analyze real user discussions from Reddit (r/churning, r/CreditCards, r/personalfinance), Credit Karma reviews, and other review sites. We look for patterns in what people love, hate, and wish they knew before applying."
            }
          }
        ]
      },

      // 5. HOW-TO SCHEMA
      {
        "@type": "HowTo",
        "@id": "https://regularfolkfinance.com/credit-cards/#howto",
        "name": `How to Choose the Right Credit Card in ${currentYear}`,
        "description": "Steps to find the best credit card based on your spending habits",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Identify your spending categories",
            "text": "Look at where you spend the most: dining, travel, groceries, or general purchases."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Decide on annual fee tolerance",
            "text": "Higher annual fees often mean better rewards, but only if you maximize the benefits."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Check your credit score",
            "text": "Most premium cards require good to excellent credit (700+)."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Compare sign-up bonuses",
            "text": "Welcome offers can be worth $500-1,500 in the first year."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Read what real users say",
            "text": "Check Reddit and review sites for honest feedback beyond marketing."
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creditCardsSchema) }}
      />
      {children}
    </>
  );
}