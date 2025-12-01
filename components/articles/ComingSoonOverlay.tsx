interface ComingSoonOverlayProps {
  className?: string;
}

export default function ComingSoonOverlay({ className = '' }: ComingSoonOverlayProps) {
  return (
    <div className={`absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center rounded-lg transition-opacity ${className}`}>
      <div className="bg-white px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-semibold text-gray-700">Coming Soon</span>
      </div>
    </div>
  );
}
