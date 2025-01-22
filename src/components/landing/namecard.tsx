import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import { fadeUp } from "../../animations/fade";

export default function Namecard() {
  const isMobile = useMediaQuery("(max-width: 1260px)");
  const { initial, animate } = fadeUp(20);
  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        duration: 2,
        delay: 0.5,
      }}
    >
      <h1 className="text-[250%] font-semibold sm:text-[350%]">
        Vincent{isMobile ? " Qi" : "'s Portfolio"}
      </h1>
    </motion.div>
  );
}
