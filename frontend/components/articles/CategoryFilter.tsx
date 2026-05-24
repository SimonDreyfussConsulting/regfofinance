'use client';

import { ArticleCategory, CATEGORY_LABELS } from '@/lib/article-types';

interface CategoryFilterProps {
  activeCategory?: ArticleCategory;
  onCategoryChange: (category?: ArticleCategory) => void;
}

const categories: (ArticleCategory | 'all')[] = [
  'all',
  'market-news',
  'credit-cards',
  'personal-loans',
  'community-insights',
  'money-tips',
];

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const isActive = category === 'all' ? !activeCategory : activeCategory === category;
        const label = category === 'all' ? 'All' : CATEGORY_LABELS[category];

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category === 'all' ? undefined : category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
