'use client';

import { trackAffiliateClick } from '@/app/utils/analytics';

interface AffiliateLinkProps {
  href: string;
  lender: string;
  productType: 'personal-loan' | 'credit-card' | 'mortgage';
  position?: string;
  children: React.ReactNode;
  className?: string;
}

export default function AffiliateLink({
  href,
  lender,
  productType,
  position,
  children,
  className = '',
}: AffiliateLinkProps) {
  const handleClick = () => {
    trackAffiliateClick(lender, productType, position);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-lender={lender}
      data-product-type={productType}
      data-position={position}
    >
      {children}
    </a>
  );
}
