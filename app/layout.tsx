import type { Metadata } from "next";
import "./globals.css";
import GoogleTagManager from '@/app/components/GoogleTagManager';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import GTMNoscript from '@/app/components/GTMNoscript';
import PageViewTracker from '@/app/components/PageViewTracker';
import WebVitalsReporter from '@/app/components/WebVitalsReporter';

export const metadata: Metadata = {
  title: "RegularFolkFinance - Real Data. Real People. Real Financial Guidance.",
  description: "We've analyzed 100,000+ real user experiences to help you make better money decisions. Credit cards, personal loans, mortgages, and more.",
  keywords: "personal finance, credit cards, personal loans, reverse mortgages, financial advice",
  verification: {
    google: 'WeRHCaKSu1_4FSLCCkjf8DgqvanuNAAlW3QZcTFPt5w',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body>
        <GTMNoscript />
        <PageViewTracker />
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}