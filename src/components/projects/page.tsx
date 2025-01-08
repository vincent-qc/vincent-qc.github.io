import { motion } from "motion/react";

export default function ProjectPage() {
  return (
    <motion.div
      layout
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
      <p>
        Today, I primarily work with Python, C, and TypeScript on fullstack
        projects.
        <br />
        <br />
        I am an Ex-Founding SWE at EduBeyond, an AI EdTech statup I helped
        launch. There, I used React for the frontend, Node for the backend, and
        Python + OpenAI SDK to research and develop a Retrival Augmented
        Generation (RAG) pipeline.
        <br />
        <br />
        Some of my older public projects include
        <ul className="list-disc pl-5">
          <li>Py0</li>
          <li>BTDExp</li>
          <li>Blockout</li>
          <li>Neobot</li>
          <li>vsHacks</li>
        </ul>
        A full list can be found on my Github.
      </p>
    </motion.div>
  );
}
