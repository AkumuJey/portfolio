import * as motion from "framer-motion/client";
import Image from "next/image";
import akumuImage from "../public/akumu.png";

const Hero = () => {
  return (
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
        className="bg-zinc-100 p-3"
      >
        <h1>I am Dr. Akumu J</h1>
        <h2>Medical Doctor & Software Developer</h2>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
