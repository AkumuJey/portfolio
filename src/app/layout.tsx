import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
  title: "Dr Jey",
  description: "Medical Doctor | Software Developer",
  keywords: ["Akumu Jey", "Medical Doctor", "Software Developer"],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
  openGraph: {
    title: "Dr Akumu Jey",
    description: "Medical Doctor | Software Devel",
    images: [
      {
        url: "/akumu.png",
        width: 1260,
        height: 800,
      },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="w-full bg-slate-200 shadow-sm flex justify-end gap-4 py-4 px-3">
          <Link href={`/`}>Home</Link>
          <Link href={`/contact`}>Contact</Link>
          <Link href={`/blog`}>Blogs</Link>
          <Link href={`/about`}>About Me</Link>
        </footer>
      </body>
    </html>
  );
}
