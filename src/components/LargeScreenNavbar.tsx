"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
interface Paths {
  name: string;
  href: string;
}
const LargeScreenNavbar = ({ paths }: { paths: Paths[] }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious();
    if (!previousValue) return;
    if (latestValue > previousValue) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const pathname = usePathname();
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full shadow shadow-zinc-100 dark:shadow-black hidden sm:flex justify-between sticky top-0 z-50 bg-inherit"
    >
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
    </motion.nav>
  );
};

export default LargeScreenNavbar;
