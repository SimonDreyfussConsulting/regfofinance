import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center flex-shrink-0">
      <Image
        src="/images/rff-logo.svg"
        alt="RegularFolkFinance"
        width={200}
        height={40}
        priority
        className="h-8 w-auto sm:h-10"
        style={{ height: 'auto' }}
      />
    </Link>
  );
}
