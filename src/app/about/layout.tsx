import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Jey",
  description: "Medical Doctor | Software Developer",
  keywords: ["About Akumu Jey", "Medical Doctor", "Software Developer"],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
