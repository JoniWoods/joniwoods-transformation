
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto grid justify-center gap-6 grid-cols-1 md:grid-cols-2 md:max-w-[64rem]">
        
        {/* Text content - Left side on desktop, below image on mobile */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 order-2 md:order-1">
          <div className="flex flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet <span className="gradient-text">Joni Woods</span>
              </h2>
              <h3 className="text-xl font-semibold mb-4 italic text-muted-foreground/80">
                Certified life coach and culture strategist with over 15 years 
                helping individuals, couples, and organizations strengthen 
                communication and lead with emotional intelligence.
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground/80">
              <br />
              <p>
                As the founder of Journey Coaching, I specialize in guiding 
                clients through personal growth, relational healing, and 
                values-based leadership.
              </p>
              <p>
                After navigating my own journey through divorce and rebuilding, 
                I discovered that healing isn't linear—but it is possible. My 
                mission is to help you develop self-awareness, establish healthy 
                boundaries, and build emotionally safe connections.
              </p>
              <p>
                Based in Ann Arbor, Michigan, I'm also an active community leader, 
                serving with the Women's Exchange of Washtenaw, United Way, and 
                Washtenaw Business Association.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button 
                className="bg-jw-blue text-white border-2 border-jw-blue hover:bg-jw-blue/60 hover:text-white w-full sm:w-auto" 
                asChild
              >
                <Link href="http://joniwoods.com" target="_blank">
                  Learn More
                </Link>
              </Button>
              <Button 
                className="bg-jw-burgundy text-white border-2 border-jw-burgundy/80 hover:bg-transparent hover:text-jw-burgundy hover:border-jw-burgundy w-full sm:w-auto" 
                asChild
              >
                <Link href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" target="_blank">
                  Subscribe
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image - Right side on desktop, above text on mobile */}
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <div className="rounded-lg overflow-hidden max-w-sm mx-auto h-auto md:h-[60vh]">
            <img
              src="/images/Joni_Woods_Author_Portrait_Optimized.jpg"
              alt="Joni Woods - Author and Life Coach"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Professional Highlights - Under author photo */}
          <div className="max-w-sm mx-auto">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-3 text-center">Professional Highlights</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      15+ years in communication & emotional intelligence
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      Fortune 500 consultant & keynote speaker
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      Author of "Burned, Blocked, and Better Than Ever"
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      Certified Life Coach (CLC) & Culture Strategist
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      Community leader in Ann Arbor, Michigan
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                    <p className="text-sm text-muted-foreground/80">
                      Specializes in relational healing & boundary setting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
