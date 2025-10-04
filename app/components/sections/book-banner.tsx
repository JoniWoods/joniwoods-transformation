
import Link from "next/link";
import Image from "next/image";

export function BookBanner() {
  return (
    <section className="w-full pt-[2px]" style={{ backgroundColor: '#D85A50' }}>
      <Link 
        href="https://books2read.com/u/mq2K7v" 
        target="_blank"
        className="block w-full hover:opacity-90 transition-opacity"
      >
        <div className="relative w-full py-[12px] md:py-[16px]">
          <div className="relative w-full aspect-[1440/192]">
            <Image
              src="/images/book-banner.png"
              alt="Burned, Blocked, and Better Than Ever - A Raw Journey of Healing"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
