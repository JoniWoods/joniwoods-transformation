
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joni Woods - Healing is messy. But so is becoming whole.",
  description: "Transform your pain into power. Break generational patterns. Create the future you deserve. Trusted by 10,000+ individuals on their transformation journey.",
  keywords: "transformation coach, healing, human connection, culture specialist, coaching, workshops, conflict resolution",
  authors: [{ name: "Joni Woods" }],
  openGraph: {
    title: "Joni Woods - Healing is messy. But so is becoming whole.",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
