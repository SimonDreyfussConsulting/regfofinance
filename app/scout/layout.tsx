import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Scout — The AI Behind RegularFolkFinance',
  description: 'How we use a 7-brain AI system to analyze 100+ financial news sources and create data-driven personal finance content at scale.',
  openGraph: {
    title: 'Meet Scout — The AI Behind RegularFolkFinance',
    description: 'How we use a 7-brain AI system to analyze 100+ financial news sources and create data-driven personal finance content at scale.',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ScoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
