import Link from 'next/link';

interface CTAConfig {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  borderColor: string;
  buttonColor: string;
}

const getCTAConfig = (tags: string[]): CTAConfig => {
  if (tags.includes('personal-loans')) {
    return {
      title: "Need a Personal Loan?",
      description: "Compare rates from top lenders based on real user experiences.",
      buttonText: "Compare Personal Loans",
      buttonLink: "/personal-loans",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    };
  }
  if (tags.includes('credit-cards')) {
    return {
      title: "Find Your Next Card",
      description: "See which credit cards real people recommend.",
      buttonText: "Explore Credit Cards",
      buttonLink: "/credit-cards",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
    };
  }
  if (tags.includes('budgeting')) {
    return {
      title: "Take Control of Your Budget",
      description: "Tools real people use to manage their money.",
      buttonText: "See Budgeting Tools",
      buttonLink: "/budgeting",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700"
    };
  }
  // Default - newsletter signup
  return {
    title: "Stay Informed",
    description: "Get weekly insights from the RegularFolkFinance community.",
    buttonText: "Join Our Newsletter",
    buttonLink: "/newsletter",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    buttonColor: "bg-gray-800 hover:bg-gray-900"
  };
};

interface ArticleCTAProps {
  tags: string[];
}

export default function ArticleCTA({ tags }: ArticleCTAProps) {
  const config = getCTAConfig(tags);

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-xl p-6 sm:p-8 my-8`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {config.title}
          </h3>
          <p className="text-gray-600">
            {config.description}
          </p>
        </div>
        <Link
          href={config.buttonLink}
          className={`${config.buttonColor} text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center whitespace-nowrap`}
        >
          {config.buttonText}
        </Link>
      </div>
    </div>
  );
}
