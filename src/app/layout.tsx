import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "next-themes";

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
  title: "Dr Akumu J. Owino aka Dr Jey",
  description: "Medical Doctor | Software Developer",
  keywords: ["Akumu Jey", "Medical Doctor", "Software Developer"],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
  openGraph: {
    title: "Dr Akumu Jey",
    description: "Medical Doctor | Software Developer",
    images: [
      {
        url: "/akumu.png",
        width: 1200,
        height: 630,
        alt: "Dr Akumu Jey Profile",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "/akumu.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Akumu Jey",
    description: "Medical Doctor | Software Developer",
    images: ["/akumu.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="i6V4ylstlMaEA7mozHCO6tuTpG3R8qUXJNWTt_Ja9aA"
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-800 text-black dark:text-slate-100 w-full`}
        >
          <Navbar />
          {/* <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Projects", link: "/projects" },
            { name: "Contact", link: "/contact" },
          ]}
        /> */}
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
