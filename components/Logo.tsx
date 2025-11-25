'use client';

import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'large';
  className?: string;
}

export default function Logo({ size = 'large', className = '' }: LogoProps) {
  // Small = mobile (h-9), Large = desktop (h-12 to h-14)
  const heightClass = size === 'small' ? 'h-9' : 'h-12 lg:h-14';

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="RegularFolkFinance - Home"
    >
      <svg
        viewBox="0 0 320 55"
        className={`${heightClass} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="RegularFolkFinance Logo"
      >
        {/* Three overlapping circles - Community Guide Venn diagram */}
        <circle cx="24" cy="30" r="18" fill="#3B82F6" fillOpacity={0.75} />
        <circle cx="42" cy="30" r="18" fill="#06B6D4" fillOpacity={0.75} />
        <circle cx="33" cy="14" r="18" fill="#3B82F6" fillOpacity={0.75} />

        {/* Wordmark: RegularFolk (regular) + Finance (bold) */}
        <text
          x="70"
          y="36"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
          fontSize="22"
          fill="#374151"
        >
          <tspan fontWeight="400">RegularFolk</tspan>
          <tspan fontWeight="700">Finance</tspan>
        </text>
      </svg>
    </Link>
  );
}
