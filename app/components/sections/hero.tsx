
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container space-y-6 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-40">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center space-y-4 text-center">
        <Badge variant="secondary" className="rounded-full px-4 py-1.5 bg-jw-yellow text-jw-charcoal">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-jw-burgundy animate-pulse" />
          New Book Available Now
        </Badge>
        
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Burned, Blocked &
          <br />
          <span className="gradient-text">
            Better Than Ever
          </span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A raw, faith-rooted memoir of divorce, self-discovery, and the healing 
          that begins when you stop pretending you're fine.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild className="bg-jw-burgundy hover:bg-jw-rust">
            <Link href="https://a.co/d/67tuSAW" target="_blank">
              Get the Book
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
              Book Discovery Call
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center space-y-4 pt-8">
          <p className="text-sm text-muted-foreground">
            Certified Life Coach • Culture Strategist • Speaker
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">15+ Years Experience</Badge>
            <Badge variant="outline">Fortune 500 Consultant</Badge>
            <Badge variant="outline">Podcast Guest</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
