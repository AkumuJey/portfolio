"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import akumuImage from "../public/akumu.png";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        "#image",
        { opacity: 0.4, scale: 0.5, rotate: "360deg" },
        { duration: 0.5 }
      );
      await animate("#image", { opacity: 1, scale: 1 }, { duration: 0.5 });
    };

    const handlertwo = async () => {
      animate("#name", { x: -5, y: -10 }, { duration: 0.5 });
      animate("#profession", { x: -8, y: -15 }, { duration: 0.5 });
    };
    handleAnimation();
    handlertwo();
  }, [scope, animate]);
  return (
    <motion.div className="flex gap-4 flex-col md:flex-row p-5" ref={scope}>
      <Image
        src={akumuImage}
        height={150}
        width={150}
        alt="Akumu"
        className="rounded-full"
        id="image"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold w-full" id="name">
          Dr. Akumu J. Owino
        </h1>
        <h2 className="text-xl w-full" id="profession">
          Medical Doctor & Software Developer
        </h2>
      </div>
    </motion.div>
  );
};

export default Hero;
