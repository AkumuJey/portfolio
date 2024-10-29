"use client";
import { useAnimate } from "framer-motion";
import * as motion from "framer-motion/client";
import { ReactNode, useState } from "react";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const handleClick = async () => {
    setOpen(true);
    await animate("languages", { height: 0 });
    await animate("languages", { height: "100%" }, { duration: 1 });
  };
  return (
    <motion.div ref={scope}>
      <motion.h2 className="text-3xl font-bold">My Skills</motion.h2>

      <SkillSection title="Languages">
        HTML, CSS, JavaScript, TypeScript, Python, Dart, SQL
      </SkillSection>

      <SkillSection title="Web Frameworks">
        React, Vue, Next.js, Nuxt.js, Angular, Svelte
      </SkillSection>

      <SkillSection title="Mobile Development">
        React Native, Flutter
      </SkillSection>

      <SkillSection title="Backend">
        Django, Express, Relational & NoSQL Databases
      </SkillSection>

      <SkillSection title="Data Science & ML">
        Python libraries (Pandas, Numpy, TensorFlow, PyTorch, Scikit-learn), SQL
      </SkillSection>
    </motion.div>
  );
};

// Helper component for each section
const SkillSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <motion.div className="mb-4">
    <motion.h3 className="text-xl font-semibold">{title}</motion.h3>
    <motion.p>{children}</motion.p>
  </motion.div>
);

export default Skills;
