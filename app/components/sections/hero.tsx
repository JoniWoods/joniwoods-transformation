
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white pt-20 md:pt-24">
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <Badge variant="secondary" className="rounded-full px-3 py-1 bg-jw-yellow text-jw-charcoal text-xs">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-jw-burgundy animate-pulse" />
              New Book Available Now
            </Badge>
            
            <h1 className="font-heading text-2xl leading-tight text-jw-charcoal">
              Burned, Blocked &
              <br />
              <span className="text-jw-charcoal">
                Better Than Ever
              </span>
            </h1>
            
            <p className="text-sm leading-relaxed text-jw-charcoal/80 max-w-md">
              A raw, faith-rooted memoir of self-discovery, and the healing 
              that begins when you stop pretending you're fine.
            </p>
            
            <div className="flex flex-col gap-2 w-full max-w-xs pt-2">
              <Button size="sm" asChild className="bg-jw-blue hover:bg-jw-blue/80 text-sm">
                <Link href="https://a.co/d/67tuSAW" target="_blank">
                  Get the Book
                  <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="text-sm border-jw-charcoal text-jw-charcoal hover:bg-jw-charcoal/5">
                <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                  Book Discovery Call
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center space-y-2 pt-3">
              <p className="text-xs text-jw-charcoal/70 font-medium">
                Certified Life Coach • Culture Strategist • Keynote Speaker • Author
              </p>
              <div className="flex flex-wrap justify-center items-center gap-1.5">
                <Badge variant="outline" className="text-xs text-jw-blue border-jw-blue bg-jw-blue/10">15+ Years Experience</Badge>
                <Badge variant="outline" className="text-xs text-jw-blue border-jw-blue bg-jw-blue/10">Fortune 500 Consultant</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Hero Image */}
        <div className="w-full">
          <Image
            src="/images/hero/JoniWoodsMobileHero.png"
            alt="Joni Woods"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col space-y-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 bg-jw-yellow text-jw-charcoal w-fit">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-jw-burgundy animate-pulse" />
                New Book Available Now
              </Badge>
              
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl leading-tight text-jw-charcoal">
                Burned, Blocked &
                <br />
                <span className="text-jw-charcoal">
                  Better Than Ever
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl leading-relaxed text-jw-charcoal/80 max-w-xl">
                A raw, faith-rooted memoir of self-discovery, and the healing 
                that begins when you stop pretending you're fine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="bg-jw-blue hover:bg-jw-blue/80">
                  <Link href="https://a.co/d/67tuSAW" target="_blank">
                    Get the Book
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-jw-charcoal text-jw-charcoal hover:bg-jw-charcoal/5">
                  <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                    Book Discovery Call
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-col space-y-4 pt-6">
                <p className="text-sm text-jw-charcoal/70 font-semibold">
                  Certified Life Coach • Culture Strategist • Keynote Speaker • Author
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="text-jw-blue border-jw-blue bg-jw-blue/10">15+ Years Experience</Badge>
                  <Badge variant="outline" className="text-jw-blue border-jw-blue bg-jw-blue/10">Fortune 500 Consultant</Badge>
                </div>
              </div>
            </div>

            {/* Right Column - Desktop Hero Image */}
            <div className="relative w-full">
              <Image
                src="/images/hero/JoniWoodsDesktopHero.png"
                alt="Joni Woods"
                width={800}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
