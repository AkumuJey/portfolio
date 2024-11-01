"use client";
import { motion, useScroll, useTransform } from "framer-motion";
const Projects = () => {
  const { scrollYProgress } = useScroll({});
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div className="flex flex-col gap-4 w-full p-5" style={{ scale }}>
      <h3 className="text-2xl font-bold">Projects</h3>
      <ul className="flex flex-col sm:flex-row gap-4 w-full justify-evenly">
        <motion.li
          className="flex-col gap-2 p-6 bg-teal-50 dark:bg-zinc-950 rounded-md w-4/5 md:w-2/5"
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <a href="https://jeystelemed.netlify.app/" target="_blank">
            <div>
              <h4 className="font-semibold text-xl">Jey&#39;s Telemed</h4>
              <p>Telemedicine platform for remote consultations</p>
            </div>
          </a>
        </motion.li>
        <motion.li
          className="flex-col gap-2 p-6 bg-teal-50 dark:bg-zinc-950 rounded-md w-4/5 md:w-2/5"
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
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
