import Link from 'next/link';

const LogoIcon = () => (
  <Link href="/" aria-label="RegularFolk Finance Homepage">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <circle cx="20" cy="15" r="12" fill="#3B82F6" opacity="0.8"/>
      <circle cx="13" cy="27" r="12" fill="#3B82F6" opacity="0.8"/>
      <circle cx="27" cy="27" r="12" fill="#06B6D4" opacity="0.8"/>
    </svg>
  </Link>
);

export default LogoIcon;
