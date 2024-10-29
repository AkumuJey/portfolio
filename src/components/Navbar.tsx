"use client";

import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";

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
  return (
    <>
      <MobileNavbar paths={paths} />
      <LargeScreenNavbar paths={paths} />
    </>
  );
};

export default Navbar;
