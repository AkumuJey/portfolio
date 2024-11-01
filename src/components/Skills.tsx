"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      className="w-full px-6"
      style={{ scale }}
      transition={{ ease: "easeInOut" }}
      ref={ref}
    >
      <h2 className="text-3xl font-bold">My Skills</h2>
      <div className="mb-4" id="languages">
        <h3 className="text-xl font-semibold">Programming languages:</h3>
        <p>HTML, CSS, JavaScript, TypeScript, Python, Dart, SQL</p>
      </div>
      <div className="mb-4" id="frameworks">
        <h3 className="text-xl font-semibold">Mobile and Web Frameworks: </h3>
        <p>
          React, Vue, Next.js, Nuxt.js, Angular, Svelte, React Native, Flutter
        </p>
      </div>
      <div className="mb-4" id="backend">
        <h3 className="text-xl font-semibold">
          Backend development and databases
        </h3>
        <p>Django, Express, Relational & NoSQL Databases</p>
      </div>
      <div className="mb-4" id="python">
        <h3 className="text-xl font-semibold">Data Science & ML</h3>
        <p>
          Python libraries (Pandas, Numpy, TensorFlow, PyTorch, Scikit-learn),
          SQL
        </p>
      </div>
    </motion.div>
  );
};

export default Skills;
