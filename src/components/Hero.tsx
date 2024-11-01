"use client";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import akumuImage from "../public/akumu.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "#image",
      { scale: 0.8 },
      { duration: 0.8, ease: "easeInOut" }
    ).then(() => {
      animate("#image", { scale: 1.1 }, { duration: 0.8, ease: "easeInOut" });
    });
  });

  return (
    <motion.div
      ref={scope}
      className="flex gap-6 flex-col md:flex-row p-5 w-full justify-start"
      style={{ scale: scale }}
    >
      <Image
        src={akumuImage}
        width={600}
        height={600}
        alt="Akumu J Owino"
        className="rounded-full w-1/3"
        id="image"
        priority={true}
      />
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="text-5xl font-bold w-full flex flex-col gap-2 p-2"
          id="name"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Hi,
          </motion.span>
          <motion.span
            initial={{ x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            I am
          </motion.span>
          <motion.span
            initial={{ x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          >
            Dr. Akumu J. Owino
          </motion.span>
        </motion.h1>
        <motion.h2
          className="text-xl w-full p-2 overflow-hidden text-nowrap"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          id="profession"
        >
          Medical Doctor & Software Developer
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Hero;
