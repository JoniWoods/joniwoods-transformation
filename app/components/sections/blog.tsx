
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const resources = [
  {
    title: "The Messy Truth About Healing",
    category: "Personal Growth",
    excerpt: "Why healing isn't linear and why that's actually good news for your transformation journey. Learn to embrace the process instead of rushing the outcome.",
    topics: ["Healing", "Self-awareness", "Personal Growth"]
  },
  {
    title: "Breaking Generational Patterns",
    category: "Relationships",
    excerpt: "How to identify and interrupt the cycles that keep your family stuck in the same patterns. Create a new legacy for future generations.",
    topics: ["Family Healing", "Generational Trauma", "Patterns"]
  },
  {
    title: "From Conflict to Connection",
    category: "Communication",
    excerpt: "Transform workplace tensions into opportunities for deeper understanding and stronger relationships using emotional intelligence.",
    topics: ["Conflict Resolution", "Communication", "Leadership"]
  },
  {
    title: "Rebuilding After Divorce",
    category: "Life Transitions",
    excerpt: "Navigate the complex emotions of divorce while maintaining your identity and building a foundation for healthy future relationships.",
    topics: ["Divorce Recovery", "Identity", "Rebuilding"]
  },
  {
    title: "Emotional Intelligence in Leadership",
    category: "Professional Development",
    excerpt: "Why the most effective leaders aren't just technically skilled—they're emotionally intelligent. Learn to lead with both competence and compassion.",
    topics: ["Leadership", "EQ", "Team Building"]
  },
  {
    title: "Setting Healthy Boundaries",
    category: "Self-Care",
    excerpt: "Stop people-pleasing and start protecting your peace. Learn how to communicate your needs without guilt or manipulation.",
    topics: ["Boundaries", "Self-Care", "Communication"]
  }
];

export function Blog() {
  return (
    <section id="resources" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Latest{" "}
          <span className="gradient-text">
            Resources
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Practical wisdom for your transformation journey, fresh perspectives on healing, 
          and insights for building emotionally intelligent relationships.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[76rem] md:grid-cols-3">
        {resources.map((resource, index) => (
          <Card key={index} className="group cursor-pointer transition-all hover:scale-105 h-full flex flex-col">
            <CardHeader className="flex-none">
              <Badge variant="outline" className="w-fit mb-2">
                {resource.category}
              </Badge>
              <CardTitle className="group-hover:text-jw-burgundy transition-colors text-lg">
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="mb-4">
                {resource.excerpt}
              </CardDescription>
              <div className="flex flex-wrap gap-1">
                {resource.topics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-jw-burgundy font-semibold group-hover:text-jw-rust transition-colors w-full">
                <span>Coming Soon</span>
                <svg className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          Want these insights delivered directly to you?
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button variant="outline" asChild>
            <Link href="http://journeylifecoaching.life" target="_blank">
              Visit Blog
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" target="_blank">
              YouTube Channel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
