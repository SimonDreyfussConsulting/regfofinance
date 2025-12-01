import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Articles | RegularFolkFinance',
    template: '%s | RegularFolkFinance Articles',
  },
  description: 'Personal finance news, credit card updates, and money tips backed by real community data and Reddit analysis.',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
