'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbsProps {
  customLabels?: Record<string, string>;
}

export default function Breadcrumbs({ customLabels = {} }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  if (pathname === '/') return null;
  
  const defaultLabels: Record<string, string> = {
    'personal-loans': 'Personal Loans',
    'credit-cards': 'Credit Cards',
    'banking': 'Banking',
    'mortgages': 'Mortgages',
    'reverse-mortgages': 'Reverse Mortgages',
    'retirement': 'Retirement',
    'debt': 'Debt',
    'reviews': 'Reviews',
    'articles': 'Articles',
    'sofi-review': 'SoFi Review',
    'upstart-review': 'Upstart Review',
    'marcus-review': 'Marcus Review',
    'lightstream-review': 'LightStream Review',
    'avant-review': 'Avant Review',
    'best-good-credit': 'Best for Good Credit',
    'best-fair-credit': 'Best for Fair Credit',
    'best-bad-credit': 'Best for Bad Credit',
    'best-debt-consolidation': 'Best for Debt Consolidation',
    ...customLabels,
  };

  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const label = customLabels[segment] || defaultLabels[segment] || formatSegment(segment);
    const isLast = index === segments.length - 1;
    
    return { path, label, isLast };
  });

  function formatSegment(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex flex-wrap items-center text-sm font-medium" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
        <li>
          <Link href="/" className="text-[#3B82F6] hover:text-[#06B6D4] transition-colors">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <li key={crumb.path} className="flex items-center">
            <span className="mx-2 text-[#6B7280]">&gt;&gt;</span>
            {crumb.isLast ? (
              <span className="text-[#1F2937]">{crumb.label}</span>
            ) : (
              <Link href={crumb.path} className="text-[#3B82F6] hover:text-[#06B6D4] transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}