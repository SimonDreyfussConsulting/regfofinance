'use client';

import { usePathname } from 'next/navigation';
import Author from './Author';
import Footer from './Footer';
import { ReactNode } from 'react';

interface AutoLayoutProps {
  children: ReactNode;
}

export default function AutoLayout({ children }: AutoLayoutProps) {
  const pathname = usePathname();

  const isReviewOrArticle =
    pathname.includes('-review') ||
    pathname.includes('review-') ||
    pathname.includes('/articles/');

  return (
    <>
      {children}
      {isReviewOrArticle && (
        <div className="max-w-3xl mx-auto px-4 pb-12">
          <div className="pt-8 border-t border-[#6B7280]/20">
            <Author />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}