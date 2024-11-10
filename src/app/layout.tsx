import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr Akumu Jey",
  description: "Medical Doctor | Software Developer",
  keywords: ["Akumu Jey", "Medical Doctor", "Software Developer"],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
  openGraph: {
    title: "Dr Akumu Jey",
    description: "Medical Doctor | Software Developer",
    images: [
      {
        url: "https://yt3.ggpht.com/yti/ANjgQV-3nJFJp748WFWOGDBScoGGeyAXzaVJx4tleo_VZ2kBGWI=s88-c-k-c0x00ffffff-no-rj",
        width: 1200,
        height: 630,
        alt: "Dr Akumu Jey Profile",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://yt3.ggpht.com/yti/ANjgQV-3nJFJp748WFWOGDBScoGGeyAXzaVJx4tleo_VZ2kBGWI=s88-c-k-c0x00ffffff-no-rj",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Akumu Jey",
    description: "Medical Doctor | Software Developer",
    images: [
      "https://yt3.ggpht.com/yti/ANjgQV-3nJFJp748WFWOGDBScoGGeyAXzaVJx4tleo_VZ2kBGWI=s88-c-k-c0x00ffffff-no-rj",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-800 text-black dark:text-slate-100 w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
