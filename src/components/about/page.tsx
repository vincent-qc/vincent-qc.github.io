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
        At 16, I helped found EduBeyond, an EdTech startup that built LLM
        powered Learning Management Systems. I researched and developed an
        education-oriented Retrieval Augmented Generation pipeline with Python,
        PGVector, and the OpenAI SDK.
        <br />
        <br />
        My current software and research interests include foundation AI
        systems, such as scalable vector databases, vectorization methods, and
        retrieval models.
        <br />
        <br />
        As for fun, I enjoy drawing, building games, and experimenting with
        computer graphics (see left).
        <br />
        <br />
        Welcome to my page, where you can find my projects, artwork, and more :)
        <br />I genuinely believe in building relationships, so feel free to
        reach out!
      </motion.p>
    </motion.div>
  );
}
