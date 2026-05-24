import Link from 'next/link';

interface TagPillProps {
  tag: string;
  href?: string;
  isClickable?: boolean;
  size?: 'sm' | 'md';
}

// Map tags to display labels and colors
const TAG_CONFIG: Record<string, { label: string; color: string }> = {
  'personal-loans': {
    label: 'Personal Loans',
    color: 'bg-orange-100 text-orange-800 hover:bg-orange-200'
  },
  'credit-cards': {
    label: 'Credit Cards',
    color: 'bg-teal-100 text-teal-800 hover:bg-teal-200'
  },
  'budgeting': {
    label: 'Budgeting',
    color: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200'
  },
  'market-news': {
    label: 'Market News',
    color: 'bg-blue-100 text-blue-800 hover:bg-blue-200'
  },
  'interest-rates': {
    label: 'Interest Rates',
    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200'
  },
  'community-insights': {
    label: 'Community Insights',
    color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
  },
  'money-tips': {
    label: 'Money Tips',
    color: 'bg-green-100 text-green-800 hover:bg-green-200'
  },
  'debt': {
    label: 'Debt',
    color: 'bg-red-100 text-red-800 hover:bg-red-200'
  },
  'savings': {
    label: 'Savings',
    color: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
  },
};

export default function TagPill({ tag, href, isClickable = true, size = 'sm' }: TagPillProps) {
  const config = TAG_CONFIG[tag] || {
    label: tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    color: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  const sizeClasses = size === 'sm'
    ? 'px-2.5 py-0.5 text-xs'
    : 'px-3 py-1 text-sm';

  const baseClasses = `${config.color} ${sizeClasses} rounded-full font-medium transition-colors`;

  if (isClickable && href) {
    return (
      <Link href={href} className={baseClasses}>
        {config.label}
      </Link>
    );
  }

  if (isClickable) {
    return (
      <Link href={`/articles?tag=${tag}`} className={baseClasses}>
        {config.label}
      </Link>
    );
  }

  return (
    <span className={baseClasses.replace('hover:bg-', 'bg-').split(' hover:')[0]}>
      {config.label}
    </span>
  );
}
