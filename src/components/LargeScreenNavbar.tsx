"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
interface Paths {
  name: string;
  href: string;
}
const LargeScreenNavbar = ({ paths }: { paths: Paths[] }) => {
  const pathname = usePathname();
  return (
    <nav className="w-full shadow shadow-zinc-100 dark:shadow-black hidden sm:flex justify-between">
      <div className="flex justify-center items-center font-bold px-4">
        <Link href="/">Dr Jey</Link>
      </div>
      <div className="flex justify-between items-center gap-4 py-4 px-3">
        <div className="flex justify-between gap-4">
          {paths.map((path) => (
            <Link
              href={path.href}
              key={path.href}
              className={`${
                pathname === path.href
                  ? "text-purple-700 dark:text-yellow-500"
                  : ""
              } font-semibold`}
            >
              <motion.span
                whileHover={{
                  borderBottomWidth: 2,
                  borderBottomColor: "purple",
                }}
              >
                {path.name}
              </motion.span>
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default LargeScreenNavbar;
