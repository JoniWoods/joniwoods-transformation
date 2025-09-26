
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Book } from "@/components/sections/book";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { TransformationForm } from "@/components/sections/transformation-form";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Book />
        <Testimonials />
        <Blog />
        <TransformationForm />
        <Contact />
      </main>
    </>
  );
}
