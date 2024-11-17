import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akumu's Blogs",
  description: "Medical Doctor | Software Developer",
  keywords: ["Akumu Jey", "Medical Doctor", "Software Developer"],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
