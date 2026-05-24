import Link from 'next/link';

interface AtAGlanceItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface AtAGlanceProps {
  title?: string;
  items: AtAGlanceItem[];
  ctaText?: string;
  ctaHref?: string;
  ctaSubtext?: string;
}

export default function AtAGlance({
  title = 'At a Glance',
  items,
  ctaText,
  ctaHref,
  ctaSubtext,
}: AtAGlanceProps) {
  return (
    <div className="bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6 my-8">
      <h3 className="font-bold text-lg mb-4 text-[#1F2937]">{title}</h3>
      <div className="space-y-3 text-sm text-[#1F2937]">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-[#6B7280]">{item.label}:</span>
            <span
              className={`font-semibold ${
                item.highlight ? 'text-[#FB923C]' : ''
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
      {ctaText && ctaHref && (
        <>
          <Link
            href={ctaHref}
            className="w-full block bg-[#06B6D4] text-white font-semibold py-3 rounded-lg hover:bg-[#06B6D4]/90 transition-colors mt-6 text-center"
          >
            {ctaText}
          </Link>
          {ctaSubtext && (
            <p className="text-xs text-[#6B7280] mt-3 text-center">
              {ctaSubtext}
            </p>
          )}
        </>
      )}
    </div>
  );
}
