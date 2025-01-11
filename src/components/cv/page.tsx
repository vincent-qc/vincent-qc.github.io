import { motion } from "motion/react";

export default function CvPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full items-center justify-center"
    >
      <a
        href="/cv/cv.pdf"
        download="vincent_qi_cv.pdf"
        className="w-[80%] cursor-pointer transition-all hover:brightness-90"
      >
        <img src="/cv/cv.png" alt="cv" />
      </a>
    </motion.div>
  );
}
