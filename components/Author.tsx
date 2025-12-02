import Image from 'next/image';

interface AuthorProps {
  name?: string;
  title?: string;
  bio?: string;
  image?: string;
  date?: string;
  updatedDate?: string;
}

const defaultAuthor = {
  name: 'RegularFolkFinance Team',
  title: 'Editorial Team',
  bio: "We're not financial advisors. We're a team that spent hundreds of hours reading what real people experienced with financial products. Our analysis is based on real stories from actual users.",
  image: '', // Empty means use initials
};

export default function Author({
  name = defaultAuthor.name,
  title = defaultAuthor.title,
  bio = defaultAuthor.bio,
  image = defaultAuthor.image,
  date,
  updatedDate,
}: AuthorProps) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-start gap-4">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="rounded-full flex-shrink-0"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
          {initials}
        </div>
      )}
      <div>
        <h3 className="font-bold text-lg text-[#1F2937]">{name}</h3>
        <p className="text-sm text-[#6B7280] mb-1">{title}</p>
        {(date || updatedDate) && (
          <p className="text-xs text-[#6B7280] mb-2">
            {date && <span>Published: {date}</span>}
            {date && updatedDate && <span className="mx-2">•</span>}
            {updatedDate && <span>Updated: {updatedDate}</span>}
          </p>
        )}
        <p className="text-sm text-[#1F2937]" style={{ lineHeight: '1.7' }}>
          {bio}
        </p>
      </div>
    </div>
  );
}