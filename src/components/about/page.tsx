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
        <br /> and SWE at Mercor.
        <br />
        <br />
        At 16, I started{" "}
        <a
          href="https://futurity.work/"
          target="_blank"
          className="text-white transition-colors hover:text-neutral-400"
        >
          EduBeyond (now Futurity)
        </a>
        , an EdTech startup that built LLM powered Learning Management Systems.
        I scaled the company, and eventually exited at 18. Afterwards, I worked
        at{" "}
        <a
          href="https://context.ai/"
          target="_blank"
          className="text-white transition-colors hover:text-neutral-400"
        >
          Context
        </a>
        , where I developed an agentic office suite.
        <br />
        <br />
        As always, I enjoy drawing, skiing, competition programming, and
        experimenting with computer graphics.
        <br />
        <br />
        Welcome to my page, and feel free to reach out :)
      </motion.p>
    </motion.div>
  );
}
