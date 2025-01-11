import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import Scene from "../../scenes/scene";

import { PageStore, usePageStore } from "../../stores/page.store";
import Namecard from "./namecard";
import Navbar from "./navbar";
import { pages } from "./navpages";

export default function LandingPage() {
  const [showPages, setShowPages] = useState(false);
  const { page } = usePageStore(
    useShallow((state: PageStore) => ({
      page: state.page,
    })),
  );

  useEffect(() => {
    setTimeout(() => {
      setShowPages(true);
    }, 1800);
  });

  return (
    <div className="flex h-screen w-screen flex-row font-poppins text-white">
      <div className="w-[50%]">
        <Scene />
      </div>
      <motion.div className="flex w-[50%] flex-col gap-4 py-20 pl-10 pr-20">
        <div className="flex flex-col items-end justify-center">
          <Namecard />
          <Navbar />
        </div>
        {showPages && pages.find((item) => item.page === page)?.component}
      </motion.div>
    </div>
  );
}
