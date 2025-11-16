export default function UserQuote({
  quote,
  author,
  context
}: {
  quote: string;
  author: string;
  context: string;
}) {
  return (
    <div className="border-l-4 border-[#06B6D4] bg-[#F3F4F6] p-6 my-8 rounded-r-lg">
      <p className="text-lg italic text-[#1F2937]">
        "{quote}"
      </p>
      <p className="text-sm text-[#6B7280] mt-2">
        — {author}, {context}
      </p>
    </div>
  );
}
