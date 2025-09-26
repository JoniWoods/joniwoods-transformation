
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { MediaAppearances } from "@/components/sections/media-appearances";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Book } from "@/components/sections/book";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { TransformationForm } from "@/components/sections/transformation-form";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingElements } from "@/components/floating-elements";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TransformationForm />
        <About />
        <Book />
        <Services />
        <MediaAppearances />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
