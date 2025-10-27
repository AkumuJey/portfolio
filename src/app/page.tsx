"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y1 = useTransform(scrollY, [0, 300], [0, -60]);
  const y2 = useTransform(scrollY, [100, 600], [40, -40]);

  return (
    <main
      ref={ref}
      className="relative w-full min-h-screen overflow-x-hidden scroll-smooth bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]"
    >
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-screen overflow-hidden pt-24 sm:pt-28">
        {/* soft background glow */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.25)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)]"
        />

        {/* hero content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 flex flex-col items-center justify-center text-center space-y-5 px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-400/30"
          >
            <Image
              src="/akumu.png"
              alt="Dr. Joseph Akumu"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Dr. Akumu J. Owino
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            Doctor. Developer. Dreamer.
            <span className="block text-cyan-500 dark:text-cyan-400 font-medium mt-1">
              Healing with science, building with code.
            </span>
          </motion.p>
        </motion.div>
      </section>

      {/* ================= STORY / MISSION ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] w-screen px-6 py-16 bg-gradient-to-b from-white to-cyan-50 dark:from-gray-900 dark:to-gray-950 text-center overflow-hidden">
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,178,172,0.3),transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-10 max-w-2xl space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            🌍 Two Worlds. One Vision.
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey bridges the art of medicine and the logic of technology.
            Each complements the other — care meets innovation, empathy meets
            precision.
          </p>
        </motion.div>
      </section>

      {/* ================= CTA SPLIT ================= */}
      <section className="relative flex flex-col lg:flex-row items-stretch justify-center min-h-[45vh] w-screen text-center">
        {/* Doctor side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-10"
        >
          <h3 className="text-2xl font-semibold mb-3">🩺 Medicine</h3>
          <p className="text-white/90 mb-6 max-w-sm text-sm md:text-base">
            Where compassion meets precision. Explore how I innovate in
            healthcare and digital medicine.
          </p>
          <Link
            href="/doctor"
            className="px-6 py-2 rounded-lg text-sm md:text-base font-medium bg-white/20 hover:bg-white/30 transition-all shadow-md"
          >
            Explore Medicine →
          </Link>
        </motion.div>

        {/* Tech side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center justify-center bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 text-white p-10"
        >
          <h3 className="text-2xl font-semibold mb-3">💻 Technology</h3>
          <p className="text-white/90 mb-6 max-w-sm text-sm md:text-base">
            Where logic meets creativity. See how I build intelligent, scalable
            health-tech solutions.
          </p>
          <Link
            href="/tech"
            className="px-6 py-2 rounded-lg text-sm md:text-base font-medium bg-white/20 hover:bg-white/30 transition-all shadow-md"
          >
            Explore Technology →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
