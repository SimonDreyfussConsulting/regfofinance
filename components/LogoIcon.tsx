import Link from 'next/link';

const LogoIcon = () => (
  <Link href="/" aria-label="RegularFolk Finance Homepage" className="flex items-center">
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9"
    >
      <circle cx="25" cy="18" r="14" fill="#3B82F6" opacity="0.8"/>
      <circle cx="16" cy="32" r="14" fill="#3B82F6" opacity="0.8"/>
      <circle cx="34" cy="32" r="14" fill="#06B6D4" opacity="0.8"/>
    </svg>
  </Link>
);

export default LogoIcon;
