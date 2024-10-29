"use client";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Skills = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const preAnimation = async () => {
      animate("#languages", { x: -10, y: -10 }, { duration: 0.3 });
      animate("#frameworks", { x: -10, y: -10 }, { duration: 0.3 });
      animate("#webDev", { x: -10, y: -10 }, { duration: 0.3 });
      animate("#backend", { x: -10, y: -10 }, { duration: 0.3 });
      animate("#python", { x: -10, y: -10 }, { duration: 0.3 });
    };
    const handleAnimation = async () => {
      await preAnimation();
      await animate("#languages", { x: 0, y: 0 }, { duration: 0.3 });
      await animate("#frameworks", { x: 0, y: 0 }, { duration: 0.3 });
      await animate("#webDev", { x: 0, y: 0 }, { duration: 0.3 });
      await animate("#backend", { x: 0, y: 0 }, { duration: 0.3 });
      await animate("#python", { x: 0, y: 0 }, { duration: 0.3 });
    };
    handleAnimation();
  }, [scope, animate]);

  return (
    <div ref={scope} className="md:ml-auto">
      <h2 className="text-3xl font-bold">My Skills</h2>
      <div className="mb-4" id="languages">
        <h3 className="text-xl font-semibold">Languages</h3>
        <p>HTML, CSS, JavaScript, TypeScript, Python, Dart, SQL</p>
      </div>
      <div className="mb-4" id="frameworks">
        <h3 className="text-xl font-semibold">Web Frameworks</h3>
        <p>React, Vue, Next.js, Nuxt.js, Angular, Svelte</p>
      </div>
      <div className="mb-4" id="webDev">
        <h3 className="text-xl font-semibold">Mobile Development</h3>
        <p>React Native, Flutter</p>
      </div>
      <div className="mb-4" id="backend">
        <h3 className="text-xl font-semibold">Backend</h3>
        <p>Django, Express, Relational & NoSQL Databases</p>
      </div>
      <div className="mb-4" id="python">
        <h3 className="text-xl font-semibold">Data Science & ML</h3>
        <p>
          Python libraries (Pandas, Numpy, TensorFlow, PyTorch, Scikit-learn),
          SQL
        </p>
      </div>
    </div>
  );
};

export default Skills;
