import Link from "next/link";

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

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between gap-4 py-4 px-3 border-t-2 border-slate-50 dark:border-black">
      <div className="order-last md:order-none text-center md:text-left">
        <div>Developed by Dr Jey © {date.getFullYear()}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {paths.map((path) => (
          <Link key={path.href} href={path.href}>
            {path.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
