"use client";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const [navBar, animate] = useAnimate();

  const handleAnimation = async () => {
    animate("#ham1", { rotate: open ? 0 : 45 }, { duration: 0.5 });
    animate("#ham2", { rotate: open ? 0 : -45 }, { duration: 0.5 });
    setOpen(!open);
  };
  const close = async () => {
    animate("#ham1", { rotate: open ? 0 : 45 }, { duration: 0.5 });
    animate("#ham2", { rotate: open ? 0 : -45 }, { duration: 0.5 });
    await animate(
      "#links",
      { transform: "translateX(-100%)" },
      { duration: 0.5 }
    );
    setOpen(false);
  };
  return (
    <div className="flex flex-col justify-between sm:hidden" ref={navBar}>
      {/* {!open && ( */}
      <div className="flex justify-end py-4">
        <div className="flex flex-col gap-1 pr-2" onClick={handleAnimation}>
          <div className="bg-black h-2 w-[3rem]" id="ham1" />
          <div className="bg-black h-2 w-[3rem]" id="ham2" />
        </div>
      </div>
      {/* )} */}

      {open && (
        <div
          className="bg-transparent fixed top-0 right-0 bottom-0 left-0 z-10"
          onClick={close}
        >
          <motion.div
            initial={{ x: "-100%" }} // Starts off-screen to the left
            animate={{ x: open ? 0 : "-100%" }} // Animates into view
            transition={{ duration: 0.5 }}
            className={`flex flex-col justify-start gap-4 py-4 px-3 overflow-hidden h-full w-3/4 bg-slate-300`}
            id="links"
          >
            <div className="flex flex-col justify-center gap-4 mt-10 w-full">
              {paths.map((path) => (
                <Link
                  href={path.href}
                  key={path.href}
                  className={`${
                    pathname === path.href ? "text-purple-700" : ""
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-slate-200 shadow-sm hidden sm:flex justify-between">
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
