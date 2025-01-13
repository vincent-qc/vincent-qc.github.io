import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-start gap-2 overflow-auto p-4"
      style={{
        scrollbarWidth: "none",
      }}
    >
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-2xl font-semibold"
      >
        Hi there,
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="leading-8"
      >
        I'm Vincent Qi, a CS student at Carnegie Mellon University,
        <br /> and Ex-Founding SWE at EduBeyond.
        <br />
        <br />
        At 16, I started EduBeyond, an EdTech startup that built LLM powered
        Learning Management Systems and earned UN recognition. I developed a
        fullstack web app using next, and researched a novel education-oriented
        RAG pipeline with Python, PGVector, and the OpenAI SDK.
        <br />
        <br />
        My current software and research interests include educational AI
        systems, scalable vector databases, vectorization methods, and retrieval
        models.
        <br />
        <br />
        As always, I enjoy drawing, skiing, solving puzzles, and experimenting
        with computer graphics.
        <br />
        <br />
        Welcome to my page, enjoy your stay, and feel free to reach out!
      </motion.p>
    </motion.div>
  );
}
