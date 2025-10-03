
import Link from "next/link";
import Image from "next/image";

export function BookBanner() {
  return (
    <section className="w-full bg-white pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          href="https://books2read.com/u/mq2K7v" 
          target="_blank"
          className="block w-full hover:opacity-90 transition-opacity"
        >
          <div className="relative w-full aspect-[1440/192] max-h-[150px] md:max-h-[200px]">
            <Image
              src="/images/book-banner.png"
              alt="Burned, Blocked, and Better Than Ever - A Raw Journey of Healing"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </Link>
      </div>
      {/* Spacing between banner and hero */}
      <div className="h-[5px] md:h-[10px] lg:h-[15px]" />
    </section>
  );
}
