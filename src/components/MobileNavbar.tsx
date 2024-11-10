import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";
interface Paths {
  name: string;
  href: string;
}
export const MobileNavbar = ({ paths }: { paths: Paths[] }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious();
    if (!previousValue) return;
    if (latestValue > previousValue && latestValue > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
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
    <motion.nav
      className="flex flex-col justify-between sm:hidden shadow shadow-zinc-100 dark:shadow-zinc-500 sticky top-0 bg-inherit z-50 min-w-full"
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      ref={navBar}
    >
      {/* {!open && ( */}
      <div className="flex justify-between items-center py-4 px-4">
        <ThemeToggle />
        <div className="flex flex-col gap-1 pr-2" onClick={handleAnimation}>
          <div className="bg-black dark:bg-white h-2 w-[3rem]" id="ham1" />
          <div className="bg-black dark:bg-white h-2 w-[3rem]" id="ham2" />
        </div>
      </div>
      {/* )} */}

      {open && (
        <div
          className="bg-transparent min-h-screen fixed top-0 right-0 bottom-0 left-0 z-[1000]"
          onClick={close}
        >
          <motion.div
            initial={{ x: "-100%" }} // Starts off-screen to the left
            animate={{ x: open ? 0 : "-100%" }} // Animates into view
            transition={{ duration: 0.5 }}
            className={`flex flex-col justify-start gap-4 py-4 px-3 overflow-hidden h-full w-4/5 bg-slate-50 dark:bg-black`}
            id="links"
          >
            <div className="flex flex-col justify-center gap-4 mt-10 w-full">
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
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default MobileNavbar;
