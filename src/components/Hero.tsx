"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Scale effect based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 flex-col md:flex-row p-5 w-full justify-start"
      style={{ scale }}
    >
      <motion.div className="relative w-1/3">
        <Image
          src={`/akumu.png`}
          width={600}
          height={600}
          alt="Akumu Image"
          className="rounded-full w-full text-center"
          priority={true}
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        <motion.h1 className="text-5xl font-bold w-full flex flex-col gap-2 p-2">
          <motion.span
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Hi, I&#39;m
          </motion.span>
          <motion.span
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Dr. Akumu J. Owino
          </motion.span>
        </motion.h1>
        <motion.h2
          className="text-xl w-full p-2 overflow-hidden text-nowrap"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          Medical Doctor & Software Developer
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Hero;
