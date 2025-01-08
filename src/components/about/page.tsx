import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div
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
      className="flex flex-col gap-2 h-full p-4 w-full items-start"
    >
      <p className="text-2xl font-semibold">Hi there,</p>
      <p>
        I'm Vincent Qi, a CS student at Carnegie Mellon University,
        <br /> and Ex-Founding SWE at EduBeyond.
        <br />
        <br />
        Over the past years, I've worked fullstack on my startup, EduBeyond,
        with React, TypeScript, Node, and Python. I've developed a Retrieval
        Augmented Generation (RAG) pipeline using Python, PGVector, and the
        OpenAI SDK.
        <br />
        <br />
        My current software and research interests include fundamental AI
        systems, such as scalable vector databases, vectorization methods,
        retrieval models, and more.
        <br />
        <br />
        As for fun, I enjoy to draw, paint, and experiment with computer
        graphics and three.js (see left). And I may be a bit too picky about
        frontend design and animations.
        <br />
        <br />
        Welcome to my page, where you can find my projects, artwork, and more :)
        <br />
        Enjoy your stay!
      </p>
    </motion.div>
  );
}
