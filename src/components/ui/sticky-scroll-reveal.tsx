"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  id,
  content,
  contentClassName,
}: {
  id?: string;
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce((acc, bp, i) => {
      const d = Math.abs(latest - bp);
      if (d < Math.abs(latest - breakpoints[acc])) return i;
      return acc;
    }, 0);
    setActiveCard(closest);
  });

  const bgColors = ["#0f172a", "#000000", "#171717"];
  const gradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [gradient, setGradient] = useState(gradients[0]);
  useEffect(() => {
    setGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* animated gradient background */}
      <motion.div
        animate={{
          backgroundColor: bgColors[activeCard % bgColors.length],
          transition: { duration: 1.2, ease: "easeInOut" },
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: gradient,
          backgroundSize: "200% 200%",
          backgroundAttachment: "fixed",
          opacity: 0.9,
        }}
      />

      {/* content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-20 w-full max-w-7xl mx-auto">
        {/* text column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl md:text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* image/preview box */}
        <motion.div
          style={{ background: gradient }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "hidden lg:flex h-80 w-96 items-center justify-center overflow-hidden rounded-2xl shadow-xl ring-4 ring-white/10",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.section>
  );
};
