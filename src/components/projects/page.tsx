import { motion } from "motion/react";
import ProjectCard from "./card";
import { projects } from "./projects";

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
      style={{
        scrollbarWidth: "none",
      }}
      className="flex h-full w-full flex-col items-start gap-4 overflow-auto p-4"
    >
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </motion.div>
  );
}
