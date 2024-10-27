import * as motion from "framer-motion/client";
import Image from "next/image";
import akumuImage from "../public/akumu.png";

const Hero = () => {
  return (
    <motion.div className="flex gap-4 flex-col md:flex-row bg-red-200 p-5">
      <Image
        src={akumuImage}
        height={150}
        width={150}
        alt="Akumu"
        className="rounded-full"
      />
    </motion.div>
  );
};

export default Hero;
