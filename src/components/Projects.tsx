"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const { scrollYProgress } = useScroll({});
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);

  return (
    <motion.div
      className="flex flex-col gap-8 w-full p-8 mx-auto max-w-6xl"
      style={{ scale }}
    >
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Featured Projects
      </h3>
      <ul className="flex flex-col sm:flex-row gap-6 w-full justify-between">
        {/* Project 1 */}
        <motion.li
          className="flex flex-col gap-4 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl w-4/5 sm:w-2/5"
          whileHover={{
            y: -5,
            boxShadow: "0px 8px 30px rgba(129, 230, 217, 0.4)",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 25,
            ease: "easeInOut",
          }}
        >
          <a
            href="https://jeystelemed.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4 className="font-semibold text-xl text-gray-800 dark:text-white">
                Jey&#39;s Telemed
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                A telemedicine platform for remote consultations.
              </p>
            </div>
          </a>
        </motion.li>

        {/* Project 2 */}
        <motion.li
          className="flex flex-col gap-4 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl w-4/5 sm:w-2/5"
          whileHover={{
            y: -5,
            boxShadow: "0px 8px 30px rgba(56, 178, 172, 0.4)",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 25,
            ease: "easeInOut",
          }}
        >
          <a
            href="https://afyalocum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h4 className="font-semibold text-xl text-gray-800 dark:text-white">
                AfyaLocum
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                An online platform for advertising locum jobs for healthcare
                professionals.
              </p>
            </div>
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Projects;
