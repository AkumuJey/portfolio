"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
          {/* Left side: Logo */}
          <Link
            href="/"
            className="text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 md:mx-4"
          >
            Dr Akumu Jey
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-5">
            {paths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Dropdown Menu (Slide-Up Effect, No Login Button) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dimmed backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[4998] sm:hidden"
            />
            {/* Sliding panel */}
            <motion.div
              key="mobile-menu"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              className="fixed bottom-0 inset-x-0 z-[4999] flex flex-col items-center justify-center 
                         bg-white/95 dark:bg-black/90 backdrop-blur-2xl
                         border-t border-neutral-200 dark:border-white/[0.1]
                         rounded-t-3xl py-10 space-y-8 sm:hidden"
            >
              {/* Close handle */}
              <div className="w-10 h-1.5 bg-neutral-400/60 dark:bg-white/30 rounded-full mb-4" />

              {/* Nav Links */}
              {paths.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
