'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PageViewTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-FT00EHZ49B', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerContent />
    </Suspense>
  );
}
