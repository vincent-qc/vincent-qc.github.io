import { motion } from "motion/react";
import { fadeUp } from "../../animations/fade";

export default function Namecard() {
  const { initial, animate } = fadeUp(20);
  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      transition={{
        default: {
          type: "spring",
          duration: 2,
          delay: 0.5,
        },
        layout: {
          type: "spring",
          duration: 1.6,
        },
      }}
    >
      <h1 className="text-[400%] font-semibold">Vincent Qi</h1>
    </motion.div>
  );
}
