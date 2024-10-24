import * as motion from "framer-motion/client";
import Link from "next/link";

const CallToAction = () => {
  return (
    <motion.div className="flex justify-center items-center">
      <Link href={`/contact`}>Contact us</Link>
    </motion.div>
  );
};

export default CallToAction;
