import Image from 'next/image';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ArticleImage({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
  priority = false,
}: ArticleImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-lg overflow-hidden border border-[#E5E7EB]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-[#6B7280] mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
