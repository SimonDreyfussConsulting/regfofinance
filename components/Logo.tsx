import Link from 'next/link';

const Logo = () => (
  <Link href="/" aria-label="RegularFolk Finance - Community-Powered Financial Guidance" className="inline-block">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 340 80"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-auto sm:h-8 md:h-10 lg:h-12"
      preserveAspectRatio="xMinYMid meet"
      style={{ minWidth: '180px' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
      `}</style>

      {/* Icon - Three Overlapping Circles */}
      <g id="icon" transform="translate(10, 20)">
        <circle cx="20" cy="15" r="18" fill="#3B82F6" opacity="0.8"/>
        <circle cx="10" cy="30" r="18" fill="#3B82F6" opacity="0.8"/>
        <circle cx="30" cy="30" r="18" fill="#06B6D4" opacity="0.8"/>
      </g>

      {/* Wordmark - RegularFolk Finance */}
      <g id="wordmark" transform="translate(65, 50)">
        <text
          x="0"
          y="0"
          fontFamily="'Source Sans Pro', sans-serif"
          fontSize="26"
          fontWeight="400"
          fill="#3B82F6"
          letterSpacing="-0.01em"
        >
          RegularFolk
        </text>
        <text
          x="128"
          y="0"
          fontFamily="'Source Sans Pro', sans-serif"
          fontSize="26"
          fontWeight="700"
          fill="#3B82F6"
          letterSpacing="-0.01em"
        >
          Finance
        </text>
      </g>
    </svg>
  </Link>
);

export default Logo;
