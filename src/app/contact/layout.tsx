import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Akumu Jey",
  description: "Medical Doctor | Software Developer",
  keywords: [
    "Akumu Jey CV",
    "Akumu Jey Linkedin",
    "Akumu Jey Facebook",
    "Akumu Jey Instagram",
  ],
  creator: "Joseph Akumu",
  category: "Portfolio website | Software Development | Medicine",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
