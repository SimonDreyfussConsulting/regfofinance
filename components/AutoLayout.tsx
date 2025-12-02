'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';
import Author from './Author';
import { ReactNode } from 'react';

interface AutoLayoutProps {
  children: ReactNode;
}

export default function AutoLayout({ children }: AutoLayoutProps) {
  const pathname = usePathname();
  
  const isHomepage = pathname === '/';
  
  const isReviewOrArticle = 
    pathname.includes('-review') || 
    pathname.includes('review-') || 
    pathname.includes('/articles/');

  // Estimate read time - roughly 2800 words for reviews
  const estimatedWords = isReviewOrArticle ? 2800 : 0;
  const readTime = Math.ceil(estimatedWords / 200);

  return (
    <>
      {!isHomepage && <Breadcrumbs />}
      {children}
      {isReviewOrArticle && (
        <div className="max-w-3xl mx-auto px-4 pb-12">
          <div className="pt-8 border-t border-[#6B7280]/20">
            <Author />
          </div>
        </div>
      )}
    </>
  );
}