import { motion } from "motion/react";

const NavbarButton = ({ text }: { text: string }) => {
  return (
    <motion.div
      whileHover={{
        borderBottom: "1px solid #FFFFFF",
      }}
      transition={{
        duration: 0.2,
      }}
      className="text-white border-b-1 border-transparent cursor-pointer"
    >
      {text}
    </motion.div>
  );
};

export default function Navbar() {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 2,
        delay: 1,
      }}
      className="flex flex-row justify-between gap-2"
    >
      <NavbarButton text="about" />
      <NavbarButton text="projects" />
      <NavbarButton text="research" />
      <NavbarButton text="cv" />
      <NavbarButton text="contact" />
    </motion.div>
  );
}
