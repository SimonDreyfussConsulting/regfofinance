'use client';

import { useEffect, useState } from 'react';
import ShareButton from './ShareButton';

interface SocialShareProps {
  title: string;
  slug: string;
}

export default function SocialShare({ title, slug }: SocialShareProps) {
  const [url, setUrl] = useState('');
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    // Set the full URL on client side
    setUrl(`https://regularfolkfinance.com/articles/${slug}`);

    // Show floating bar after scrolling past the hero section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloating(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!url) return null;

  return (
    <>
      {/* Floating Share Bar - Desktop Only */}
      <div
        className={`fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 p-3 bg-white rounded-2xl shadow-lg border border-[#E5E7EB] transition-all duration-300 ${
          showFloating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}
        aria-label="Share this article"
      >
        <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider text-center mb-1">
          Share
        </span>
        <ShareButton platform="twitter" url={url} title={title} variant="floating" />
        <ShareButton platform="linkedin" url={url} title={title} variant="floating" />
        <ShareButton platform="facebook" url={url} title={title} variant="floating" />
        <ShareButton platform="copy" url={url} title={title} variant="floating" />
      </div>

      {/* Inline Share Buttons - Mobile & Tablet (shown within article content) */}
      <div className="lg:hidden mt-10 pt-8 border-t border-[#E5E7EB]">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-[#6B7280] mb-4">Share this article</h3>
          <div className="flex items-center justify-center gap-3">
            <ShareButton platform="twitter" url={url} title={title} variant="inline" />
            <ShareButton platform="linkedin" url={url} title={title} variant="inline" />
            <ShareButton platform="facebook" url={url} title={title} variant="inline" />
            <ShareButton platform="copy" url={url} title={title} variant="inline" />
          </div>
        </div>
      </div>
    </>
  );
}

// Export a version for use at the bottom of articles on all viewports
export function SocialShareInline({ title, slug }: SocialShareProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`https://regularfolkfinance.com/articles/${slug}`);
  }, [slug]);

  if (!url) return null;

  return (
    <div className="hidden lg:block mt-10 pt-8 border-t border-[#E5E7EB]">
      <div className="text-center">
        <h3 className="text-sm font-semibold text-[#6B7280] mb-4">Share this article</h3>
        <div className="flex items-center justify-center gap-3">
          <ShareButton platform="twitter" url={url} title={title} variant="inline" />
          <ShareButton platform="linkedin" url={url} title={title} variant="inline" />
          <ShareButton platform="facebook" url={url} title={title} variant="inline" />
          <ShareButton platform="copy" url={url} title={title} variant="inline" />
        </div>
      </div>
    </div>
  );
}
