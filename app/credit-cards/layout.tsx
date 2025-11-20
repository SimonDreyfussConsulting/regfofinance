import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://regularfolkfinance.com/credit-cards',
  },
};

export default function CreditCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
