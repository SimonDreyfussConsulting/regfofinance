import Link from 'next/link';
import SocialFollow from './SocialFollow';

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { name: 'Credit Cards', href: '/credit-cards' },
      { name: 'Personal Loans', href: '/personal-loans' },
      { name: 'Banking', href: '/banking' },
      { name: 'Investing', href: '/investing' },
      { name: 'Savings', href: '/savings' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'All Articles', href: '/articles' },
      { name: 'Budgeting Tips', href: '/budgeting' },
      { name: 'News & Updates', href: '/news' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Methodology', href: '/methodology' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#D1D5DB] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#D1D5DB] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#D1D5DB] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              Connect
            </h3>
            <p className="text-[#D1D5DB] text-sm mb-4">
              Follow us for the latest personal finance insights and community discussions.
            </p>
            <SocialFollow />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#374151]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#06B6D4]">RFF</span>
              <span className="text-[#D1D5DB] text-sm">RegularFolkFinance</span>
            </div>
            <p className="text-[#9CA3AF] text-sm text-center md:text-right">
              &copy; {currentYear} RegularFolkFinance. All rights reserved.
            </p>
          </div>
          <p className="mt-4 text-[#6B7280] text-xs text-center">
            The content on this site is for informational purposes only. Always consult with a qualified financial advisor before making financial decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
