"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Apply this offset to trigger scroll-based animations at the right moments
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      className="w-full px-6 py-10"
      style={{ scale }}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="mb-6" id="languages">
        <h3 className="text-2xl font-semibold">Programming Languages</h3>
        <p className="mt-2">
          HTML, CSS, JavaScript, TypeScript, Python, Dart, SQL
        </p>
      </div>
      <div className="mb-6" id="frameworks">
        <h3 className="text-2xl font-semibold">Mobile & Web Frameworks</h3>
        <p className="mt-2">
          React, Vue, Next.js, Nuxt.js, Angular, Svelte, React Native, Flutter
        </p>
      </div>
      <div className="mb-6" id="backend">
        <h3 className="text-2xl font-semibold">
          Backend Development & Databases
        </h3>
        <p className="mt-2">Django, Express, Relational & NoSQL Databases</p>
      </div>
      <div className="mb-6" id="python">
        <h3 className="text-2xl font-semibold">
          Data Science & Machine Learning
        </h3>
        <p className="mt-2">
          Python Libraries (Pandas, Numpy, TensorFlow, PyTorch, Scikit-learn),
          SQL
        </p>
      </div>
    </motion.div>
  );
};

export default Skills;
