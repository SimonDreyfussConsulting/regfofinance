import type { Metadata } from 'next';
import BudgetingContent from './BudgetingContent';

export const metadata: Metadata = {
  title: 'Best Budgeting Tools & Apps in 2025 | RegularFolkFinance',
  description: 'Compare the best budgeting apps based on real user experiences. Tiller Money, YNAB, Monarch, and more - see what actual users say.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function BudgetingPage() {
  return <BudgetingContent />;
}