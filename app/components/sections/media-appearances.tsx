
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const appearances = [
  {
    title: "Imagine Better Podcast",
    description: "The Power of Self-Awareness",
    image: "/images/media-appearances/The Power of Self-Awareness.webp",
    category: "Podcast"
  },
  {
    title: "Women's Money Wisdom",
    description: "Healthy Communication About Money with Relationships",
    image: "/images/media-appearances/Healthy Communication about Money with Relationship.png",
    category: "Podcast"
  },
  {
    title: "Financial Success Show",
    description: "Creating The Future You Want",
    image: "/images/media-appearances/How Successful People Create The Future They Want.png",
    category: "Podcast"
  }
];

export function MediaAppearances() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Recent{" "}
          <span className="gradient-text">
            Media Appearances
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Sharing insights on transformation, relationships, and personal growth across various media platforms.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-[76rem] md:grid-cols-3">
        {appearances.map((appearance, index) => (
          <Card key={index} className="group cursor-pointer transition-all hover:scale-105 h-full flex flex-col">
            <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
              <Image
                src={appearance.image}
                alt={`${appearance.title} - ${appearance.description}`}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <CardHeader className="flex-none">
              <Badge variant="outline" className="w-fit mb-2">
                {appearance.category}
              </Badge>
              <CardTitle className="group-hover:text-jw-burgundy transition-colors text-lg">
                {appearance.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>
                {appearance.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
