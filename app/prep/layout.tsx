import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Notes',
  robots: {
    index: false,
    follow: false,
  },
  other: {
    robots: 'noindex, nofollow',
  },
};

export default function PrepLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
