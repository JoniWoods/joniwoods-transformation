
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet <span className="gradient-text">Joni Woods</span>
              </h2>
              <h3 className="text-xl font-semibold mb-4 italic text-muted-foreground">
                Certified life coach and culture strategist with over 15 years 
                helping individuals, couples, and organizations strengthen 
                communication and lead with emotional intelligence.
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
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

            <div className="flex gap-2 pt-4">
              <Button 
                className="bg-jw-blue/60 text-white border-2 border-jw-blue hover:bg-jw-blue hover:text-white" 
                asChild
              >
                <Link href="http://joniwoods.com" target="_blank">
                  Learn More
                </Link>
              </Button>
              <Button 
                className="bg-jw-burgundy text-white border-2 border-jw-burgundy/80 hover:bg-transparent hover:text-jw-burgundy hover:border-jw-burgundy" 
                asChild
              >
                <Link href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" target="_blank">
                  YouTube Channel
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/Joni_Woods_Author_Portrait-1.jpg"
              alt="Joni Woods - Author and Life Coach"
              fill
              className="object-cover"
            />
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    15+ years in communication & emotional intelligence
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Fortune 500 consultant & corporate speaker
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Author of "Burned, Blocked, and Better Than Ever"
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Former youth & young adult pastor
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Mother to Ashton and Scarlett
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
