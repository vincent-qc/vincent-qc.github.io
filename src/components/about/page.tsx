import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div
      layout
      className="flex flex-col gap-2 h-full p-4 w-full items-start"
    >
      <p className="text-2xl font-semibold">Hi there,</p>
      <p>I'm</p>
    </motion.div>
  );
}
