import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RegularFolkFinance - Real Data. Real People. Real Financial Guidance.",
  description: "We've analyzed 100,000+ real user experiences to help you make better money decisions. Credit cards, personal loans, mortgages, and more.",
  keywords: "personal finance, credit cards, personal loans, reverse mortgages, financial advice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
