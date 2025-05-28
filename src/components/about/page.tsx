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
        className="text-xl font-semibold lg:text-2xl"
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
        className="text-sm leading-6 lg:text-base lg:leading-8"
      >
        I'm Vincent Qi, a CS student at Carnegie Mellon University,
        <br /> and Prev. Founding SWE at EduBeyond.
        <br />
        <br />
        At 16, I started{" "}
        <a
          href="https://edubeyond.ai/"
          target="_blank"
          className="text-white transition-colors hover:text-neutral-400"
        >
          EduBeyond
        </a>
        , an EdTech startup that built LLM powered Learning Management Systems
        and earned UN recognition. I developed a fullstack web app using next,
        and researched a novel education-oriented RAG pipeline with Python,
        PGVector, and the OpenAI SDK.
        <br />
        <br />
        My current software and research interests include computer systems,
        scalable vector databases, retrieval models, and game development.
        <br />
        <br />
        As always, I enjoy drawing, skiing, solving puzzles, and experimenting
        with computer graphics.
        <br />
        <br />
        Welcome to my page, and let's build the future together.
      </motion.p>
    </motion.div>
  );
}
