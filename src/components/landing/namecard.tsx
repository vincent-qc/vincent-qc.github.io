import { motion } from "motion/react";

export default function Namecard() {
  return (
    <motion.div
      layout
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2,
        delay: 0.5,
      }}
    >
      <h1 className="text-[400%] text-white font-semibold">Vincent Qi</h1>
    </motion.div>
  );
}
