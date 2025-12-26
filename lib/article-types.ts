// lib/article-types.ts
// Shared types and constants for articles - can be imported by client components

export interface TocItem {
  id: string;
  title: string;
}

export type ArticleCategory =
  | 'credit-cards'
  | 'personal-loans'
  | 'budgeting'
  | 'banking'
  | 'save-money'
  | 'make-money'
  | 'debt'
  | 'news'
  | 'market-news'
  | 'community-insights'
  | 'money-tips'
  | 'investing'
  | 'savings';

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'credit-cards': 'Credit Cards',
  'personal-loans': 'Personal Loans',
  budgeting: 'Budgeting',
  banking: 'Banking',
  'save-money': 'Save Money',
  'make-money': 'Make Money',
  debt: 'Debt',
  news: 'News',
  'market-news': 'Market News',
  'community-insights': 'Community Insights',
  'money-tips': 'Money Tips',
  investing: 'Investing',
  savings: 'Savings',
};

export const CATEGORY_COLORS: Record<string, string> = {
  budgeting: 'bg-blue-100 text-blue-800',
  'credit-cards': 'bg-purple-100 text-purple-800',
  'personal-loans': 'bg-green-100 text-green-800',
  investing: 'bg-yellow-100 text-yellow-800',
  savings: 'bg-teal-100 text-teal-800',
  news: 'bg-red-100 text-red-800',
  banking: 'bg-indigo-100 text-indigo-800',
  'save-money': 'bg-emerald-100 text-emerald-800',
  'make-money': 'bg-orange-100 text-orange-800',
  debt: 'bg-rose-100 text-rose-800',
  'market-news': 'bg-blue-100 text-blue-800',
  'community-insights': 'bg-purple-100 text-purple-800',
  'money-tips': 'bg-green-100 text-green-800',
};
