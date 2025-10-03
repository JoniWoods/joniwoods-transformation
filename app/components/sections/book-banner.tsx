
import Link from "next/link";
import Image from "next/image";

export function BookBanner() {
  return (
    <section className="w-full bg-white pt-[2px]">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          href="https://books2read.com/u/mq2K7v" 
          target="_blank"
          className="block w-full hover:opacity-90 transition-opacity"
        >
          <div className="relative w-full aspect-[1440/192] max-h-[150px] md:max-h-[200px] py-[5px]">
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
      {/* 10px spacing below banner */}
      <div className="h-[10px]" />
    </section>
  );
}
