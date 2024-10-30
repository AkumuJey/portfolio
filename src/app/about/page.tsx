"use client";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">About</h1>
        <div>
          <div className="flex flex-col gap-4">
            <p>
              I am Dr. Akumu J. Owino. I am a Software Developer & a Medical
              Doctor. I believe in teamwork, hardwork, planning, creativity,
              entrapreneurship, and good time management. I am a selft-taught
              software developer who keeps exploring the internet for the latest
              technology I can learn.
            </p>
            <p>
              I have learnt web development, mobile development, data science,
              and machine learning. I love software development because it
              enables me to bring great ideas to life.
            </p>

            <p>
              Data is the new oil they say! I enjoy applying data science and
              machine learning in medicine. I also use the concepts in
              understanding health economics and other spheres of business.
            </p>
            <p>My dream is to make life better through robotic surgery.</p>
          </div>
        </div>
        <motion.div className="flex flex-col gap-4 w-full">
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
      </main>
    </div>
  );
};

export default About;
