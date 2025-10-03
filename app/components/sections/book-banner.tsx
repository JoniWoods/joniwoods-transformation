
import Link from "next/link";
import Image from "next/image";

export function BookBanner() {
  return (
    <section className="w-full bg-white pt-[2px]">
      <Link 
        href="https://books2read.com/u/mq2K7v" 
        target="_blank"
        className="block w-full hover:opacity-90 transition-opacity"
      >
        <div className="relative w-full aspect-[1440/192] max-h-[150px] md:max-h-[200px] py-[8px] md:py-[12px]">
          <Image
            src="/images/book-banner.png"
            alt="Burned, Blocked, and Better Than Ever - A Raw Journey of Healing"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>
    </section>
  );
}
