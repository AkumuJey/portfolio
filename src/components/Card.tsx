// components/Card.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-lg cursor-pointer"
      whileHover={{
        y: -3,
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      }}
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Card;
