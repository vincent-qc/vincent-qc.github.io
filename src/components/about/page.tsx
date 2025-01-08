import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <motion.div className="flex flex-col gap-2 h-full p-4 w-full items-start">
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
      >
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
        As for fun, I enjoy drawing, building games, and experimenting with 3D
        computer graphics (see left). I may also be slightly picky about
        frontend design and animations.
        <br />
        <br />
        Welcome to my page, where you can find my projects, artwork, and more :)
        <br />
        Enjoy your stay!
      </motion.p>
    </motion.div>
  );
}
