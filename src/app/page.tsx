"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <main
      ref={ref}
      className="w-full overflow-x-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth font-[family-name:var(--font-geist-sans)]"
    >
      {/* HERO SECTION */}
      <section className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center justify-center space-y-6"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/40">
            <Image
              src="/akumu.png"
              alt="Dr. Joseph Akumu"
              fill
              priority
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Dr. Joseph Akumu
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Bridging Medicine and Technology to build a healthier, smarter
            world.
          </p>
        </motion.div>

        <motion.div
          style={{ scale }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)]"
        />
      </section>

      {/* MISSION SECTION */}
      <section className="relative w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌍 One Mission, Two Paths
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            As a doctor, I care for people. As a developer, I build tools that
            help them thrive. My mission is to merge human compassion with
            technological precision.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-cyan-100 via-emerald-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-center px-8 py-24">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-100"
        >
          Choose your path to explore:
        </motion.h3>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/doctor"
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:scale-105 transition-transform shadow-lg"
          >
            🩺 Explore Medicine
          </Link>
          <Link
            href="/tech"
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 transition-transform shadow-lg"
          >
            💻 Explore Technology
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
