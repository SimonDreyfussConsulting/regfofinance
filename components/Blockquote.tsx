interface BlockquoteProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
}

export default function Blockquote({
  children,
  type = 'info',
  title,
}: BlockquoteProps) {
  const styles = {
    info: {
      border: 'border-[#3B82F6]',
      bg: 'bg-[#EFF6FF]',
      title: 'text-[#1E40AF]',
      icon: 'info',
    },
    warning: {
      border: 'border-[#FB923C]',
      bg: 'bg-[#FFF7ED]',
      title: 'text-[#C2410C]',
      icon: 'warning',
    },
    success: {
      border: 'border-[#22C55E]',
      bg: 'bg-[#F0FDF4]',
      title: 'text-[#166534]',
      icon: 'success',
    },
    tip: {
      border: 'border-[#06B6D4]',
      bg: 'bg-[#ECFEFF]',
      title: 'text-[#0E7490]',
      icon: 'tip',
    },
  };

  const style = styles[type];

  const defaultTitles = {
    info: 'Key Takeaway',
    warning: 'Watch Out',
    success: 'Pro Tip',
    tip: 'Quick Tip',
  };

  return (
    <div
      className={`border-l-4 ${style.border} ${style.bg} p-6 my-8 rounded-r-lg`}
    >
      {(title || defaultTitles[type]) && (
        <p className={`font-bold text-lg mb-2 ${style.title}`}>
          {title || defaultTitles[type]}:
        </p>
      )}
      <div className="text-[#1F2937] leading-relaxed">{children}</div>
    </div>
  );
}
