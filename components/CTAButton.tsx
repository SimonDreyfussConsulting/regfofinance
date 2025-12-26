import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'teal';
  subtext?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  subtext,
  external = false,
}: CTAButtonProps) {
  const variants = {
    primary: 'bg-[#3B82F6] hover:bg-[#2563EB] text-white',
    secondary: 'bg-[#1F2937] hover:bg-[#374151] text-white',
    teal: 'bg-[#06B6D4] hover:bg-[#0891B2] text-white',
  };

  const buttonClasses = `
    inline-block px-6 py-3 rounded-lg font-semibold
    transition-colors text-center
    ${variants[variant]}
  `;

  const content = (
    <div className="my-6 text-center">
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      )}
      {subtext && (
        <p className="text-xs text-[#6B7280] mt-2">{subtext}</p>
      )}
    </div>
  );

  return content;
}
