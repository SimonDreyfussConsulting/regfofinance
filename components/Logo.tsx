import Link from 'next/link';

const Logo = () => (
  <Link href="/" aria-label="RegularFolk Finance - Community-Powered Financial Guidance">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 80"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto md:h-12 lg:h-14"
      preserveAspectRatio="xMinYMid meet"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
      `}</style>

      {/* Icon - Three Overlapping Circles */}
      <g id="icon" transform="translate(10, 20)">
        {/* Circle 1 - Top */}
        <circle cx="20" cy="15" r="18" fill="#3B82F6" opacity="0.8"/>

        {/* Circle 2 - Bottom Left */}
        <circle cx="10" cy="30" r="18" fill="#3B82F6" opacity="0.8"/>

        {/* Circle 3 - Bottom Right */}
        <circle cx="30" cy="30" r="18" fill="#06B6D4" opacity="0.8"/>
      </g>

      {/* Wordmark - RegularFolk Finance */}
      <g id="wordmark" transform="translate(70, 50)">
        {/* RegularFolk - Regular weight */}
        <text
          x="0"
          y="0"
          fontFamily="'Source Sans Pro', sans-serif"
          fontSize="32"
          fontWeight="400"
          fill="#3B82F6"
          letterSpacing="-0.02em"
        >
          RegularFolk
        </text>

        {/* Finance - Bold weight */}
        <text
          x="155"
          y="0"
          fontFamily="'Source Sans Pro', sans-serif"
          fontSize="32"
          fontWeight="700"
          fill="#3B82F6"
          letterSpacing="-0.02em"
        >
          Finance
        </text>
      </g>
    </svg>
  </Link>
);

export default Logo;
