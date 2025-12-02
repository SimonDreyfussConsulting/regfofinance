'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({
  items
}: {
  items: TOCItem[]
}) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  return (
    <div className="w-64">
      <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Table of Contents</h3>
      <nav>
        {items.map((item) => (
          
            key={item.id}
            href={`#${item.id}`}
            className={`block py-2 text-sm hover:text-[#06B6D4] transition-colors ${
              activeId === item.id
                ? 'text-[#06B6D4] font-semibold'
                : 'text-[#6B7280]'
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}