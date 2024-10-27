"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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

export const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1 w-1/12">
        <div className="bg-black h-2" />
        <div className="bg-black h-2" />
      </div>
      <div className="flex flex-col justify-between gap-4 py-4 px-3">
        {paths.map((path) => (
          <Link
            href={path.href}
            key={path.href}
            className={`${
              pathname === path.href ? "text-purple-700" : ""
            } font-semibold`}
          >
            <motion.span
              whileHover={{ borderBottomWidth: 2, borderBottomColor: "purple" }}
            >
              {path.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-slate-200 shadow-sm flex justify-between ">
      <div className="flex justify-center items-center font-bold px-4">
        <Link href="/">Dr Jey</Link>
      </div>
      <div className="flex justify-between gap-4 py-4 px-3">
        {paths.map((path) => (
          <Link
            href={path.href}
            key={path.href}
            className={`${
              pathname === path.href ? "text-purple-700" : ""
            } font-semibold`}
          >
            <motion.span
              whileHover={{ borderBottomWidth: 2, borderBottomColor: "purple" }}
            >
              {path.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
