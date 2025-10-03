
"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "DisruptHR",
    logo: "/images/featured-in/disrupthr.jpg",
    url: "https://www.linkedin.com/company/disrupthr-llc/",
    width: 130,
    height: 50
  },
  {
    name: "Love Means Business",
    logo: "/images/featured-in/love-means-business.jpg",
    url: "https://www.linkedin.com/company/love-means-business/",
    width: 130,
    height: 50
  },
  {
    name: "Walsh College",
    logo: "/images/featured-in/walsh-college.png",
    url: "https://walshcollege.edu",
    width: 130,
    height: 50
  },
  {
    name: "Washtenaw Business Association",
    logo: "/images/featured-in/wba.png",
    url: "https://www.washtenawbusinessassociation.com",
    width: 130,
    height: 50
  },
  {
    name: "SHRM",
    logo: "/images/featured-in/shrm.png",
    url: "https://www.shrm.org",
    width: 130,
    height: 50
  },
  {
    name: "The Sun Times News",
    logo: "/images/featured-in/sun-times-news.png",
    url: "https://thesuntimesnews.com",
    width: 130,
    height: 50
  }
];

export function FeaturedIn() {
  return (
    <section className="w-full bg-white pt-2 pb-12 md:pt-4 md:pb-16 border-b">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-jw-charcoal mb-10 md:mb-14">
          As Featured In
        </h2>
        
        {/* Desktop: Static Grid */}
        <div className="hidden lg:flex items-center justify-center gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              aria-label={`Visit ${feature.name}`}
            >
              <div className="relative flex items-center justify-center h-[50px]">
                <Image
                  src={feature.logo}
                  alt={`${feature.name} logo`}
                  width={feature.width}
                  height={feature.height}
                  className="object-contain max-h-full w-auto"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet: Auto-scrolling carousel */}
        <div className="lg:hidden overflow-hidden relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex animate-scroll" style={{ width: 'max-content' }}>
            {/* First set of logos */}
            {features.map((feature, index) => (
              <Link
                key={`first-${index}`}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                aria-label={`Visit ${feature.name}`}
              >
                <div className="relative flex items-center justify-center h-[50px]">
                  <Image
                    src={feature.logo}
                    alt={`${feature.name} logo`}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              </Link>
            ))}
            {/* Duplicate set for seamless loop */}
            {features.map((feature, index) => (
              <Link
                key={`second-${index}`}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                aria-label={`Visit ${feature.name}`}
              >
                <div className="relative flex items-center justify-center h-[50px]">
                  <Image
                    src={feature.logo}
                    alt={`${feature.name} logo`}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
