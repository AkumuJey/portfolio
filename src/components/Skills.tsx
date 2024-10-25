import * as motion from "framer-motion/client";

const Skills = () => {
  return (
    <motion.div>
      <motion.h2 className="text-3xl font-bold">My Skills</motion.h2>
      <motion.div>
        <motion.h3 className="text-xl font-semibold">
          Programming languages
        </motion.h3>
        <motion.ul>
          <motion.li>HTML</motion.li>
          <motion.li>CSS</motion.li>
          <motion.li>JavaScript</motion.li>
          <motion.li>TypeScript</motion.li>
          <motion.li>Python</motion.li>
          <motion.li>Dart</motion.li>
          <motion.li>Python</motion.li>
          <motion.li>SQL</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div>
        <motion.h3 className="text-xl font-semibold">
          Web Development Frameworks:
        </motion.h3>
        <motion.ul>
          <motion.li>React</motion.li>
          <motion.li>Vue</motion.li>
          <motion.li>Next.js</motion.li>
          <motion.li>Nuxt.js</motion.li>
          <motion.li>Angular js</motion.li>
          <motion.li>Svelte</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div>
        <motion.h3 className="text-xl font-semibold">
          Mobile Development:
        </motion.h3>
        <motion.ul>
          <motion.li>React Native</motion.li>
          <motion.li>Flutter</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div>
        <motion.h3 className="text-xl font-semibold">
          Backend Development:
        </motion.h3>
        <motion.ul>
          <motion.li>Django</motion.li>
          <motion.li>Express js</motion.li>
          <motion.li>Relational and non-relational databases</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div>
        <motion.h3 className="text-xl font-semibold">
          Data Science & Machine Learning:
        </motion.h3>
        <motion.ul>
          <motion.li>
            <motion.h4 className="text-xl font-semibold">
              Python and its libraries:
            </motion.h4>
            <motion.ul>
              <motion.li>Pandas</motion.li>
              <motion.li>Numpy</motion.li>
              <motion.li>TensorFlow</motion.li>
              <motion.li>PyTorch</motion.li>
              <motion.li>Scikit-learn</motion.li>
            </motion.ul>
          </motion.li>
          <motion.li>Structured query language (SQL)</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
