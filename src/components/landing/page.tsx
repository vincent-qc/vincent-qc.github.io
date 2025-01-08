import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Page, PageStore, usePageStore } from "../../stores/page.store";
import AboutPage from "../about/page";
import ProjectPage from "../projects/page";
import Scene from "../scenes/scene";
import Namecard from "./namecard";
import Navbar from "./navbar";

const pages = [
  {
    page: Page.ABOUT,
    component: <AboutPage />,
  },
  {
    page: Page.PROJECTS,
    component: <ProjectPage />,
  },
];

export default function LandingPage() {
  const [showPages, setShowPages] = useState(false);
  const { page } = usePageStore(
    useShallow((state: PageStore) => ({
      page: state.page,
    }))
  );

  useEffect(() => {
    setTimeout(() => {
      setShowPages(true);
    }, 1800);
  });

  return (
    <div className="flex flex-row w-screen h-screen font-poppins text-white">
      <div className="w-[50%]">
        <Scene />
      </div>
      <motion.div className="w-[50%] flex flex-col py-20 pr-20 pl-10 gap-16">
        <div className="flex flex-col items-end justify-center">
          <Namecard />
          <Navbar />
        </div>
        {showPages && pages.find((item) => item.page === page)?.component}
      </motion.div>
    </div>
  );
}
