"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Paths {
  name: string;
  href: string;
}
const paths: Paths[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blog" },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-slate-200 shadow-sm flex justify-end gap-4 py-4 px-3">
      {paths.map((path) => (
        <Link
          href={path.href}
          key={path.href}
          className={`${
            pathname === path.href ? "text-purple-700" : ""
          } font-semibold`}
        >
          {path.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
