import { motion } from "motion/react";
import { useShallow } from "zustand/react/shallow";
import { fadeUp } from "../../animations/fade";
import { Page, usePageStore } from "../../stores/page.store";

const NavbarButton = ({ text, page }: { text: string; page: Page }) => {
  const { current } = usePageStore(
    useShallow((state) => ({ current: state.page })),
  );

  return (
    <motion.div
      whileHover={{
        borderBottomColor: "#FFFFFFFF",
      }}
      transition={{
        type: "spring",
        duration: 0.05,
      }}
      onClick={() => {
        usePageStore.setState({ page });
      }}
      style={{
        borderBottomColor: page === current ? "#FFFFFFFF" : "#00000000",
      }}
      className="cursor-pointer border-b-2 text-lg transition-all"
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
      className="flex w-fit flex-row items-center justify-between gap-4"
    >
      <NavbarButton text="who am i" page={Page.ABOUT} />
      <NavbarButton text="my work" page={Page.PROJECTS} />
      {/* <NavbarButton text="reading" page={Page.READING} /> */}
      <NavbarButton text="cv" page={Page.CV} />
      <NavbarButton text="reach me" page={Page.CONTACT} />
    </motion.div>
  );
}
