
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "DisruptHR",
    logo: "/images/featured-in/disrupthr.jpg",
    url: "https://www.linkedin.com/company/disrupthr-llc/",
    width: 120,
    height: 60
  },
  {
    name: "Love Means Business",
    logo: "/images/featured-in/love-means-business.jpg",
    url: "https://www.linkedin.com/company/love-means-business/",
    width: 140,
    height: 60
  },
  {
    name: "Walsh College",
    logo: "/images/featured-in/walsh-college.png",
    url: "https://walshcollege.edu",
    width: 130,
    height: 60
  },
  {
    name: "Washtenaw Business Association",
    logo: "/images/featured-in/wba.png",
    url: "https://www.washtenawbusinessassociation.com",
    width: 100,
    height: 60
  },
  {
    name: "SHRM",
    logo: "/images/featured-in/shrm.png",
    url: "https://www.shrm.org",
    width: 90,
    height: 60
  },
  {
    name: "The Sun Times News",
    logo: "/images/featured-in/sun-times-news.png",
    url: "https://thesuntimesnews.com",
    width: 140,
    height: 60
  }
];

export function FeaturedIn() {
  return (
    <section className="w-full bg-jw-charcoal py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-white mb-10 md:mb-14">
          As Featured In
        </h2>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full h-[60px] opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
              aria-label={`Visit ${feature.name}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={feature.logo}
                  alt={`${feature.name} logo`}
                  width={feature.width}
                  height={feature.height}
                  className="object-contain max-w-full max-h-full"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
