import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div
      layout
      className="flex flex-col gap-2 h-full p-4 w-full items-start"
    >
      <p className="text-2xl font-semibold">hi there,</p>
    </motion.div>
  );
}
