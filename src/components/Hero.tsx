"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import akumuImage from "../public/akumu.png";

const Hero = () => {
  return (
    <motion.div className="flex gap-6 flex-col md:flex-row p-5 w-full justify-start">
      <Image
        src={akumuImage}
        width={600}
        height={600}
        alt="Akumu J Owino"
        className="rounded-full w-1/3"
        id="image"
      />
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-5xl font-bold w-full flex flex-col gap-2 p-2"
          id="name"
        >
          <span>Hi,</span>
          <span>I am</span>
          <span>Dr. Akumu J. Owino</span>
        </h1>
        <h2 className="text-xl w-full p-2" id="profession">
          Medical Doctor & Software Developer
        </h2>
      </div>
    </motion.div>
  );
};

export default Hero;
