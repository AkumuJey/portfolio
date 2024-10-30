import * as motion from "framer-motion/client";
import Link from "next/link";

const CallToAction = () => {
  return (
    <motion.div className="flex justify-center items-end w-full">
      <Link
        href={`/contact`}
        className="bg-orange-500 w-3/4 md:w-1/4 text-center py-2 rounded-md text-black font-semibold dark:text-white"
      >
        Contact Me
      </Link>
    </motion.div>
  );
};

export default CallToAction;
