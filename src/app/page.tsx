import * as motion from "framer-motion/client";
import Image from "next/image";
import akumuImage from "./akumu.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-8 w-full sm:w-4/5 md:w-2/3 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <motion.div className="flex gap-4 flex-col md:flex-row bg-red-200 p-5">
          <Image
            src={akumuImage}
            height={300}
            width={300}
            alt="Akumu"
            className="rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="bg-teal-200 p-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti
            provident voluptatum est ipsam sed quod, facilis natus cupiditate
            explicabo non, placeat amet accusantium veritatis numquam nulla
            alias repellendus nisi error praesentium quisquam quis, eos minima!
            Fuga doloremque quam temporibus, possimus mollitia sint ea minus.
            Iure sequi facilis ab natus illo veritatis minima, unde nesciunt
            voluptate quidem obcaecati aspernatur cupiditate ad, labore, dolorum
            rem? Dicta, et eum. Esse praesentium minus neque, dignissimos quis
            nemo repellat similique? Eligendi esse fugit molestias?
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center items-center">
          <Link href={`/contact`}>Contact us</Link>
        </motion.div>
        <motion.div>
          <motion.h2>My Skills</motion.h2>
          <motion.ul>
            <motion.li>Web development</motion.li>
            <motion.li>HTML</motion.li>
            <motion.li>CSS</motion.li>
            <motion.li>JavaScript</motion.li>
            <motion.li>TypeScript</motion.li>
            <motion.li>React</motion.li>
            <motion.li>Vue</motion.li>
            <motion.li>Next js</motion.li>
            <motion.li>Nuxt js</motion.li>
            <motion.li>Python</motion.li>
            <motion.li>Web development with Django</motion.li>
            <motion.li>Data Science</motion.li>
            <motion.li>Machine Learning</motion.li>
            <motion.li>React Native</motion.li>
            <motion.li>Dart and Flutter</motion.li>
          </motion.ul>
        </motion.div>
      </main>
      <footer className="row-start-3 flex gap-6 bg-red-400 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
