"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

const paths: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blog" },
];

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Show/hide navbar on scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.1) setVisible(true);
      else setVisible(direction < 0);
    }
  });

  return (
    <>
      {/* Top navigation bar */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "fixed top-4 sm:top-6 inset-x-4 sm:inset-x-0 mx-auto z-[5000] flex items-center justify-between rounded-full border border-transparent dark:border-white/[0.2] bg-white/90 dark:bg-black/80 backdrop-blur-lg shadow-lg px-4 sm:px-6 py-2 sm:py-3 max-w-[95%] sm:max-w-fit",
            className
          )}
        >
          {/* Brand / Title */}
          <Link
            href="/"
            className="text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 md:mx-4"
          >
            Dr Akumu Jey
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-5">
            {paths.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-400"
                      : "text-neutral-700 dark:text-neutral-100 hover:text-blue-500 dark:hover:text-blue-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Theme toggle (UI only for now) */}
            <button
              className="ml-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 text-neutral-700 dark:hidden" />
              <Moon className="w-5 h-5 text-neutral-100 hidden dark:block" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-neutral-700 dark:text-neutral-100" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-100" />
            )}
          </button>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile dropdown menu — pops up from bottom */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 inset-x-0 mx-auto rounded-t-2xl bg-white/95 dark:bg-black/90 backdrop-blur-xl border-t border-neutral-200 dark:border-white/[0.1] shadow-[0_-4px_30px_rgba(0,0,0,0.2)] flex flex-col items-center py-6 z-[4999] w-full sm:hidden"
          >
            {paths.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "w-full text-center py-3 text-base font-medium transition-colors",
                    active
                      ? "text-blue-500 dark:text-blue-400 border-b border-blue-400"
                      : "text-neutral-700 dark:text-neutral-100 hover:text-blue-500 dark:hover:text-blue-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Theme toggle for mobile (UI only) */}
            <button
              className="mt-4 p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-6 h-6 text-neutral-700 dark:hidden" />
              <Moon className="w-6 h-6 text-neutral-100 hidden dark:block" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
