import { motion } from "motion/react";
import { fadeUp } from "../../animations/fade";

const NavbarButton = ({
  text,
  setPage,
}: {
  text: string;
  setPage: (page: string) => void;
}) => {
  return (
    <motion.div
      whileHover={{
        borderBottom: "1px solid #FFFFFF",
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={() => setPage(text)}
      className="text-white text-lg border-b-[1px] border-transparent cursor-pointer"
    >
      {text}
    </motion.div>
  );
};

export default function Navbar({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const { initial, animate } = fadeUp(20);
  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      transition={{
        default: {
          type: "spring",
          duration: 1,
          delay: 1,
        },
        layout: {
          type: "spring",
          duration: 1,
        },
      }}
      className="flex flex-row justify-between gap-2"
    >
      <NavbarButton setPage={setPage} text="about" />
      <NavbarButton setPage={setPage} text="projects" />
      <NavbarButton setPage={setPage} text="cv" />
      <NavbarButton setPage={setPage} text="contact" />
    </motion.div>
  );
}
