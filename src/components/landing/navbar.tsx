import { motion } from "motion/react";
import { fadeUp } from "../../animations/fade";
import { Page, usePageStore } from "../../stores/page.store";

const NavbarButton = ({ text, page }: { text: string; page: Page }) => {
  return (
    <motion.div
      whileHover={{
        borderBottom: "1px solid #FFFFFF",
      }}
      transition={{
        duration: 0.2,
      }}
      style={{ borderBottom: "1px solid transparent" }}
      onClick={() => {
        usePageStore.setState({ page });
      }}
      className="text-lg cursor-pointer"
    >
      {text}
    </motion.div>
  );
};

export default function Navbar() {
  const { initial, animate } = fadeUp(10);

  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        duration: 1,
        delay: 1,
      }}
      className="flex flex-row justify-between gap-4 items-center w-fit"
    >
      <NavbarButton text="who am i" page={Page.ABOUT} />
      <NavbarButton text="my work" page={Page.PROJECTS} />
      <NavbarButton text="cv" page={Page.CV} />
      <NavbarButton text="reach me" page={Page.CONTACT} />
    </motion.div>
  );
}
