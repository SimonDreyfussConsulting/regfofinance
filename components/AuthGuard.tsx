'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't redirect if already on coming-soon page
    if (pathname === '/coming-soon') {
      return;
    }

    // Check authentication
    if (typeof window !== 'undefined') {
      const isAuthenticated = sessionStorage.getItem('rff_authenticated');

      if (isAuthenticated !== 'true') {
        // Redirect to coming soon page
        router.replace('/coming-soon');
      }
    }
  }, [router, pathname]);

  return <>{children}</>;
}
