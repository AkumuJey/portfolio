import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 flex flex-col md:flex-row justify-between gap-4 py-4 px-3">
      <div>
        <div>Developed by Dr Jey</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Link href={`/`}>Home</Link>
        <Link href={`/contact`}>Contact</Link>
        <Link href={`/blog`}>Blogs</Link>
        <Link href={`/about`}>About Me</Link>
      </div>
    </footer>
  );
};

export default Footer;
