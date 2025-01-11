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
      className="flex flex-col gap-4 h-full p-4 w-full items-start"
    >
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </motion.div>
  );
}
