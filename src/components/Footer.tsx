import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

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
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-4 border-t-2 border-slate-50 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Developer Credit */}
      <div className="order-last md:order-none text-center md:text-left">
        <div>Developed by Dr Jey © {date.getFullYear()}</div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4">
        {paths.map((path) => (
          <Link key={path.href} href={path.href} className="hover:underline">
            {path.name}
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 text-xl">
        <a
          title="Akumu on Github"
          href="https://github.com/AkumuJey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-akumu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600"
        >
          <FaLinkedin />
        </a>
        <a
          title="Akumu on X (Formerly Twitter)"
          href="https://x.com/AkumuJey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600"
        >
          <FaTwitter />
        </a>
        <a
          title="Akumu on WhatsApp"
          href="https://wa.me/+254707590248"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
