import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy | RegularFolkFinance',
  description: 'How RegularFolkFinance collects, uses, and protects your data',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toISOString();

  return (
    <>
      <Navigation />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">
          Last Updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you:</p>
          <ul>
            <li>Visit our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Click on affiliate links</li>
            <li>Contact us for support</li>
          </ul>

          <p>We also automatically collect certain information about your device when you visit our website, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit and time spent on pages</li>
            <li>Referring website</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Send updates about new content (with your consent)</li>
            <li>Analyze site usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect information about your
            browsing activities. Cookies are small data files stored on your device that help us
            improve user experience and analyze site usage.
          </p>
          <p>You can control cookies through your browser settings. However, disabling cookies may limit your ability to use some features of our website.</p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction. However, no internet
            transmission is ever completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal data</li>
            <li>Request data portability</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@regularfolkfinance.com</p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, advertising, and other purposes.
            These services may collect information about you according to their own privacy policies.
            We encourage you to review the privacy policies of any third-party services.
          </p>

          <h2>7. Affiliate Disclosure</h2>
          <p>
            RegularFolkFinance participates in affiliate marketing programs. We may earn
            commissions from qualifying purchases made through our affiliate links. This helps
            support our research and keep our content free.
          </p>
          <p>
            Our affiliate relationships do not influence our reviews or recommendations, which
            are based solely on our research of real user experiences and data.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children. If you believe we have inadvertently
            collected information from a child, please contact us immediately.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices
            or legal requirements. We will notify you of material changes by posting the updated
            policy on this page with a new "Last Updated" date.
          </p>
          <p>
            We encourage you to review this policy regularly to stay informed about how we
            protect your information.
          </p>

          <h2>10. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have additional rights under the California
            Consumer Privacy Act (CCPA), including the right to:
          </p>
          <ul>
            <li>Know what personal information we collect and how we use it</li>
            <li>Delete your personal information</li>
            <li>Opt-out of the sale of your personal information (we do not sell personal information)</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>

          <h2>11. European Privacy Rights</h2>
          <p>
            If you are in the European Economic Area (EEA), you have rights under the General
            Data Protection Regulation (GDPR), including rights to access, rectify, erase,
            restrict processing, and data portability.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, contact us:</p>
          <ul>
            <li><strong>Email:</strong> privacy@regularfolkfinance.com</li>
            <li><strong>Mail:</strong> RegularFolkFinance, Privacy Department</li>
          </ul>
        </div>
      </article>
    </>
  );
}
