"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-background text-foreground transition-colors duration-300 scroll-smooth">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center md:text-left mt-10 md:mt-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dr. Joseph Akumu
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
          Medicine Meets Technology
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          A doctor with a developer’s mind — building digital tools that enhance
          healthcare, empower clinicians, and make technology more human.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#doctor"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
          >
            Akumu the Doctor
          </a>
          <a
            href="#tech"
            className="px-6 py-3 border border-primary text-primary font-medium rounded-xl hover:bg-muted transition-all"
          >
            Dr Akumu the Tech Guy
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/10">
          <Image
            src={`/akumu.png`}
            alt="Dr. Joseph Akumu"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
