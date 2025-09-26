
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote: "Joni Woods takes care. She takes care of those around her, and if you're in that circle, lucky you! Her emotionally intelligent conversation includes both thoughtful questions and the space to respond.",
    author: "Jennifer Martinez",
    role: "Weber's Restaurant"
  },
  {
    quote: "Joni is a relationship coach that helped us build a stronger leadership team through formal training and one-on-one sessions. She is very good at what she does and was very helpful to us.",
    author: "Lisa Ho, PMP CSM",
    role: "Principal Project Manager, Menlo Innovations"
  },
  {
    quote: "Working with Joni has truly transformed how I approach communication and conflict resolution in the workplace. Her insights enabled me to de-escalate tense situations and find mutually beneficial resolutions.",
    author: "Sarah Paspal-Jasinski",
    role: "Shelter Association of Washtenaw County"
  },
  {
    quote: "Joni's approach to emotional intelligence training transformed our team dynamics. Her practical tools and genuine care created lasting change in how we communicate and support each other.",
    author: "Corporate Client",
    role: "Fortune 500 Company"
  },
  {
    quote: "After divorce, I thought I was broken beyond repair. Joni helped me realize that healing isn't about becoming who I was before—it's about becoming who I'm meant to be.",
    author: "Individual Client",
    role: "Divorce Recovery Coaching"
  },
  {
    quote: "Joni's book 'Burned, Blocked, and Better Than Ever' spoke directly to my soul. Her raw honesty about the healing journey gave me permission to stop pretending I was fine.",
    author: "Reader",
    role: "Book Review"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Transformation{" "}
          <span className="gradient-text">
            Stories
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Real stories from individuals, couples, and organizations who chose healing over staying stuck.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[76rem] md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="text-4xl text-jw-burgundy">"</div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="italic leading-relaxed text-base">
                {testimonial.quote}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mx-auto text-center">
        <p className="text-muted-foreground mb-4">Ready to write your own transformation story?</p>
        <Button asChild className="bg-jw-burgundy hover:bg-jw-rust">
          <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
            Begin Your Journey
          </Link>
        </Button>
      </div>
    </section>
  );
}
