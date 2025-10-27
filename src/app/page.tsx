"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Scroll animation for Skills section
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <div className="flex flex-col w-full min-h-screen scroll-smooth font-[family-name:var(--font-geist-sans)] overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* 🩺 HERO SECTION */}
      <section
        id="hero"
        className="w-screen min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400 text-white"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left mt-10 md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-2">
            🩺 Dr. Joseph Akumu
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
            👨‍💻 Medicine Meets Technology
          </h2>
          <p className="text-gray-100 mb-8 leading-relaxed">
            I’m a medical doctor and software developer passionate about
            building intelligent health solutions that merge care, code, and
            compassion.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#skills"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all"
            >
              💡 My Skills
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-white text-white font-medium rounded-xl hover:bg-white hover:text-blue-700 transition-all"
            >
              🚀 My Projects
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30">
            <Image
              src="/akumu.png"
              alt="Dr. Joseph Akumu"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* 💡 SKILLS SECTION */}
      <section
        id="skills"
        className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-cyan-100 dark:from-gray-900 dark:to-gray-950 py-20"
      >
        <motion.div
          ref={skillsRef}
          className="w-full max-w-5xl px-6 py-10"
          style={{ scale }}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center flex justify-center items-center gap-2">
            💡 My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-800 dark:text-gray-200">
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                💻 Programming Languages
              </h3>
              <p>HTML, CSS, JavaScript, TypeScript, Python, Dart, SQL</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                ⚙️ Frameworks & Libraries
              </h3>
              <p>
                React, Next.js, Vue, Angular, Svelte, React Native, Flutter,
                Nuxt.js
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                🗄️ Backend & Databases
              </h3>
              <p>Django, Express, Node.js, Relational & NoSQL Databases</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                🤖 Data Science & Machine Learning
              </h3>
              <p>Pandas, NumPy, TensorFlow, PyTorch, Scikit-learn, SQL</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🚀 PROJECTS SECTION */}
      <section
        id="projects"
        className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-50 to-blue-100 dark:from-gray-950 dark:to-gray-900 py-20"
      >
        <motion.div
          className="flex flex-col gap-8 w-full p-8 mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-center mb-8 flex justify-center items-center gap-2 text-gray-800 dark:text-white">
            🚀 Featured Projects
          </h3>

          <ul className="flex flex-col sm:flex-row gap-6 w-full justify-between">
            {/* Project 1 */}
            <motion.li
              className="flex flex-col gap-4 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl w-full sm:w-1/2"
              whileHover={{
                y: -5,
                boxShadow: "0px 8px 30px rgba(129, 230, 217, 0.4)",
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <a
                href="https://jeystelemed.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-white flex items-center gap-2">
                    💻 Jey&#39;s Telemed
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    A telemedicine platform for remote consultations connecting
                    patients and doctors seamlessly.
                  </p>
                </div>
              </a>
            </motion.li>

            {/* Project 2 */}
            <motion.li
              className="flex flex-col gap-4 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl w-full sm:w-1/2"
              whileHover={{
                y: -5,
                boxShadow: "0px 8px 30px rgba(56, 178, 172, 0.4)",
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <a
                href="https://afyalocum.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-white flex items-center gap-2">
                    🧬 AfyaLocum
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    A web platform helping healthcare professionals find locum
                    job opportunities across Kenya.
                  </p>
                </div>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
