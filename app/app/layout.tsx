
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joni Woods - Burned, Blocked, and Better Than Ever",
  description: "A raw, faith-rooted memoir of divorce, self-discovery, and the healing that begins when you stop pretending you're fine.",
  keywords: "Joni Woods, healing, divorce recovery, self-discovery, relationship coach, emotional intelligence",
  authors: [{ name: "Joni Woods" }],
  openGraph: {
    title: "Joni Woods - Burned, Blocked, and Better Than Ever",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    url: "https://joniwoods.com",
    siteName: "Joni Woods",
    images: [
      {
        url: "/images/JoniWoods_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Ensure page loads at the top
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  window.scrollTo(0, 0);
                });
                // Also scroll to top on page navigation
                document.addEventListener('DOMContentLoaded', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
