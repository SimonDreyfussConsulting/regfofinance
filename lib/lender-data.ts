export const lenderData = {
  sofi: {
    name: "SoFi",
    apr: "7.99%-23.43%",
    amounts: "$5,000-$100,000",
    terms: "2-7 years",
    minCredit: 680,
    fees: "None",
    timeToFund: "Few days",
    pros: ["No fees", "Member benefits", "Unemployment protection"],
    cons: ["Higher credit requirements", "No co-signers"],
    keyAdvantage: "Fast funding, large loans, unemployment protection"
  },
  upstart: {
    name: "Upstart",
    apr: "6.5%-35.99%",
    amounts: "$1,000-$50,000",
    terms: "3 or 5 years",
    minCredit: 600,
    fees: "0%-10% origination",
    timeToFund: "1 business day",
    pros: ["AI-based approval", "Lower credit accepted", "Fast funding"],
    cons: ["Origination fees", "Higher rates possible"],
    keyAdvantage: "Good for fair credit"
  },
  marcus: {
    name: "Marcus by Goldman Sachs",
    apr: "6.99%-24.99%",
    amounts: "$3,500-$40,000",
    terms: "3-6 years",
    minCredit: 660,
    fees: "None",
    timeToFund: "1-4 business days",
    pros: ["No fees", "Payment flexibility", "Goldman Sachs backing"],
    cons: ["Higher credit needed", "Lower max amount"],
    keyAdvantage: "Highly competitive rates"
  },
  avant: {
    name: "Avant",
    apr: "9.95%-35.99%",
    amounts: "$2,000-$35,000",
    terms: "2-5 years",
    minCredit: 580,
    fees: "Up to 4.75% admin fee",
    timeToFund: "1-2 business days",
    pros: ["Bad credit accepted", "Fast funding", "Mobile app"],
    cons: ["Admin fees", "Higher rates"],
    keyAdvantage: "Bad credit accepted"
  },
  lightstream: {
    name: "LightStream",
    apr: "6.99%-25.49%",
    amounts: "$5,000-$100,000",
    terms: "2-7 years",
    minCredit: 700,
    fees: "None",
    timeToFund: "Same day possible",
    pros: ["Rate Beat program", "Same-day funding", "No fees"],
    cons: ["Excellent credit required", "No pre-qualification"],
    keyAdvantage: "Low rates for good credit"
  },
  creditUnions: {
    name: "Credit Unions",
    apr: "Varies",
    amounts: "Varies",
    terms: "Varies",
    minCredit: 'Varies',
    fees: "Varies",
    timeToFund: "Varies",
    pros: ["Often better rates", "Easier approval", "Personal service"],
    cons: ["Membership required", "Varies by location"],
    keyAdvantage: "Often better rates and easier approval"
  }
} as const;

export type LenderKey = keyof typeof lenderData;
