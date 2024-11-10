"use client";
import { motion, useScroll, useTransform } from "framer-motion";
const Projects = () => {
  const { scrollYProgress } = useScroll({});
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);

  return (
    <motion.div
      className="flex flex-col gap-4 w-full p-5 mx-auto"
      style={{ scale }}
    >
      <h3 className="text-2xl font-bold">Projects</h3>
      <ul className="flex flex-col sm:flex-row gap-4 w-full justify-evenly">
        <motion.li
          className="flex-col gap-2 p-6 bg-orange-300 dark:bg-orange-900 rounded-md w-4/5 md:w-2/5"
          whileHover={{
            y: -5,
            boxShadow: "0px 6px 20px rgba(129, 230, 217, 0.4)",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
            ease: "easeInOut",
          }}
        >
          <a href="https://jeystelemed.netlify.app/" target="_blank">
            <div>
              <h4 className="font-semibold text-xl">Jey&#39;s Telemed</h4>
              <p>Telemedicine platform for remote consultations</p>
            </div>
          </a>
        </motion.li>

        <motion.li
          className="text-zinc bg-zinc-300 dark:bg-zinc-700 rounded-lg p-6 shadow-md w-4/5 md:w-2/5"
          whileHover={{
            y: -3,

            boxShadow: "0px 6px 20px rgba(56, 178, 172, 0.4)", // Teal shadow for extra depth
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
            ease: "easeInOut",
          }}
        >
          <a href="https://afyalocum.vercel.app/" target="_blank">
            <div>
              <h4 className="font-semibold text-xl">AfyaLocum</h4>
              <p>
                An online platform for advertising locums jobs for health
                professionals
              </p>
            </div>
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Projects;
